"use client";

import Link from "next/link";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { MessageCircle, Phone, RotateCcw, Send, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Nội dung kịch bản                                                   */
/* ------------------------------------------------------------------ */

const HOTLINE = "0932 685 794";
const HOTLINE_TEL = "tel:0932685794";
const ZALO_URL = "https://zalo.me/0932685794";
const EMAIL = "phatloctech.ltd@gmail.com";
const ADDRESS = "Số 491/1 Trường Chinh, Phường Tân Bình, TP. Hồ Chí Minh";

type Service = {
  id: string;
  label: string;
  scenarioQ?: string;
  scenarios?: string[];
  scaleQ?: string;
  scales?: string[];
};

const SCALE_COMPANY = ["Dưới 10 người", "10–50 người", "Trên 50 người", "Chưa rõ"];

const SERVICES: Service[] = [
  {
    id: "camera",
    label: "Camera giám sát",
    scenarioQ: "Anh/chị định lắp camera ở đâu ạ?",
    scenarios: ["Văn phòng", "Nhà xưởng / kho", "Cửa hàng / quán", "Nhà ở", "Khác"],
    scaleQ: "Dự kiến khoảng bao nhiêu camera?",
    scales: ["1–4 camera", "5–8 camera", "9–16 camera", "Trên 16 camera", "Chưa rõ"],
  },
  {
    id: "pc",
    label: "Máy tính & thiết bị văn phòng",
    scenarioQ: "Anh/chị đang cần hỗ trợ việc gì ạ?",
    scenarios: [
      "Mua máy tính mới",
      "Nâng cấp / sửa chữa",
      "Máy in, máy chiếu",
      "Trang bị cho cả văn phòng",
      "Khác",
    ],
    scaleQ: "Số lượng thiết bị dự kiến?",
    scales: ["1–5 thiết bị", "6–20 thiết bị", "21–50 thiết bị", "Trên 50 thiết bị", "Chưa rõ"],
  },
  {
    id: "network",
    label: "Hạ tầng mạng",
    scenarioQ: "Anh/chị cần làm gì với hệ thống mạng ạ?",
    scenarios: [
      "Thi công mạng mới",
      "Cải tạo mạng hiện có",
      "WiFi cho văn phòng / xưởng",
      "Firewall, bảo mật mạng",
      "Khác",
    ],
    scaleQ: "Quy mô người dùng khoảng bao nhiêu?",
    scales: ["Dưới 10 người", "10–30 người", "30–100 người", "Trên 100 người", "Chưa rõ"],
  },
  {
    id: "itsupport",
    label: "Dịch vụ IT, bảo trì",
    scenarioQ: "Anh/chị muốn được hỗ trợ theo hình thức nào ạ?",
    scenarios: [
      "Hỗ trợ khi có sự cố",
      "Bảo trì định kỳ theo hợp đồng",
      "Thuê ngoài quản trị hệ thống",
      "Khác",
    ],
    scaleQ: "Doanh nghiệp có khoảng bao nhiêu máy tính?",
    scales: ["Dưới 10 máy", "10–30 máy", "Trên 30 máy", "Chưa rõ"],
  },
  {
    id: "software",
    label: "Phần mềm & số hóa",
    scenarioQ: "Anh/chị quan tâm đến mảng nào ạ?",
    scenarios: ["Chữ ký số", "Hóa đơn điện tử", "Phần mềm quản lý", "Số hóa quy trình", "Khác"],
    scaleQ: "Quy mô doanh nghiệp của anh/chị?",
    scales: SCALE_COMPANY,
  },
  {
    id: "ai",
    label: "Giải pháp AI",
    scenarioQ: "Anh/chị muốn ứng dụng AI vào việc gì ạ?",
    scenarios: [
      "Tra cứu quy trình, tài liệu nội bộ",
      "Hỗ trợ IT",
      "Tự động hóa tác nghiệp",
      "Muốn tìm hiểu thêm",
    ],
    scaleQ: "Quy mô doanh nghiệp của anh/chị?",
    scales: SCALE_COMPANY,
  },
  { id: "other", label: "Nhu cầu khác" },
];

const CONTACT_CHIP = "Thông tin liên hệ";
const TIMINGS = ["Gấp, trong tuần này", "Trong tháng này", "Trong 1–3 tháng tới", "Đang tham khảo"];
const SKIP = "Bỏ qua";

type Step =
  | "service"
  | "scenario"
  | "scale"
  | "timing"
  | "detail"
  | "name"
  | "phone"
  | "email"
  | "consent"
  | "sending"
  | "error"
  | "done"
  | "declined";

type Msg = { id: number; from: "bot" | "user"; content: ReactNode };

type Lead = {
  service: string;
  scenario: string;
  scale: string;
  timing: string;
  detail: string;
  name: string;
  phone: string;
  email: string;
};

const EMPTY: Lead = {
  service: "",
  scenario: "",
  scale: "",
  timing: "",
  detail: "",
  name: "",
  phone: "",
  email: "",
};

const TEXT_STEPS: Step[] = ["detail", "name", "phone", "email"];

const INPUT_META: Partial<
  Record<Step, { placeholder: string; type: string; inputMode?: "tel" | "email" | "text"; autoComplete: string }>
> = {
  detail: { placeholder: "Mô tả thêm nhu cầu của anh/chị…", type: "text", autoComplete: "off" },
  name: { placeholder: "Họ và tên", type: "text", autoComplete: "name" },
  phone: { placeholder: "Số điện thoại, ví dụ 0912 345 678", type: "tel", inputMode: "tel", autoComplete: "tel" },
  email: { placeholder: "email@congty.vn", type: "email", inputMode: "email", autoComplete: "email" },
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const normalizePhone = (v: string) => v.replace(/[\s.()-]/g, "");
const isPhone = (v: string) => /^(0|\+84)\d{9}$/.test(normalizePhone(v));
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
const lastName = (full: string) => full.trim().split(/\s+/).slice(-1)[0] ?? full;

/* ------------------------------------------------------------------ */
/* Thành phần                                                          */
/* ------------------------------------------------------------------ */

function Summary({ lead }: { lead: Lead }) {
  const rows: [string, string][] = [
    ["Hạng mục", lead.service],
    ["Nhu cầu", lead.scenario],
    ["Quy mô", lead.scale],
    ["Thời gian", lead.timing],
    ["Mô tả", lead.detail],
    ["Họ tên", lead.name],
    ["Điện thoại", lead.phone],
    ["Email", lead.email],
  ].filter(([, v]) => v) as [string, string][];
  return (
    <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1 text-[13px]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-slate-500">{k}</dt>
          <dd className="font-semibold text-slate-800 break-words">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<Step>("service");
  const [lead, setLead] = useState<Lead>(EMPTY);
  const [draft, setDraft] = useState("");

  const idRef = useRef(0);
  const runRef = useRef(0); // đổi giá trị để hủy các câu bot đang chờ
  const startedRef = useRef(false);
  const sendingRef = useRef(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  const addUser = useCallback((text: string) => {
    setMsgs((m) => [...m, { id: ++idRef.current, from: "user", content: text }]);
  }, []);

  const botSay = useCallback(async (items: ReactNode[]) => {
    const run = runRef.current;
    const delay = reducedMotion() ? 0 : 420;
    for (const content of items) {
      setTyping(true);
      await sleep(delay);
      if (run !== runRef.current) return;
      setMsgs((m) => [...m, { id: ++idRef.current, from: "bot", content }]);
      setTyping(false);
    }
  }, []);

  const svcOf = (label: string) => SERVICES.find((s) => s.label === label);

  /** Chuyển sang bước mới và để bot đặt câu hỏi tương ứng. */
  const go = useCallback(
    (next: Step, l: Lead, lead_in?: ReactNode) => {
      setStep(next);
      const svc = svcOf(l.service);
      const q: ReactNode[] = lead_in ? [lead_in] : [];
      switch (next) {
        case "service":
          q.push("Anh/chị đang quan tâm đến hạng mục nào ạ?");
          break;
        case "scenario":
          q.push(svc?.scenarioQ ?? "Anh/chị cần hỗ trợ việc gì ạ?");
          break;
        case "scale":
          q.push(svc?.scaleQ ?? "Quy mô dự kiến của anh/chị?");
          break;
        case "timing":
          q.push("Anh/chị dự định triển khai khi nào ạ?");
          break;
        case "detail":
          q.push("Anh/chị mô tả thêm nhu cầu để tư vấn viên chuẩn bị trước nhé. Có thể bỏ qua.");
          break;
        case "name":
          q.push("Cho mình xin họ tên của anh/chị ạ?");
          break;
        case "phone":
          q.push(`Cảm ơn anh/chị ${lastName(l.name)}. Số điện thoại để tư vấn viên gọi lại là gì ạ?`);
          break;
        case "email":
          q.push("Anh/chị có email để nhận báo giá chi tiết không? Không bắt buộc.");
          break;
        case "consent":
          q.push(
            <div key="sum" className="space-y-2">
              <p>Mình xác nhận lại thông tin của anh/chị:</p>
              <Summary lead={l} />
            </div>,
            <p key="c">
              Phát Lộc Tech sẽ dùng các thông tin trên để liên hệ tư vấn, báo giá theo{" "}
              <Link
                href="/chinh-sach-bao-mat"
                target="_blank"
                className="font-semibold text-primary underline underline-offset-2"
              >
                Chính sách bảo vệ dữ liệu cá nhân
              </Link>
              . Anh/chị đồng ý gửi chứ ạ?
            </p>
          );
          break;
        default:
          break;
      }
      void botSay(q);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [botSay]
  );

  const begin = useCallback(() => {
    runRef.current += 1;
    sendingRef.current = false;
    setMsgs([]);
    setLead(EMPTY);
    setDraft("");
    setTyping(false);
    setStep("service");
    void botSay([
      "Xin chào! Mình là trợ lý tư vấn của Phát Lộc Tech.",
      "Anh/chị đang quan tâm đến hạng mục nào ạ?",
    ]);
  }, [botSay]);

  /* Mở / đóng ------------------------------------------------------- */
  const openPanel = () => {
    setOpen(true);
    if (!startedRef.current) {
      startedRef.current = true;
      begin();
    }
  };
  const closePanel = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
      launcherRef.current?.focus();
    }, 140);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closePanel]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reducedMotion() ? "auto" : "smooth" });
  }, [msgs, typing, step]);

  useEffect(() => {
    if (open && !typing && TEXT_STEPS.includes(step)) inputRef.current?.focus();
  }, [open, typing, step]);

  /* Gửi thông tin --------------------------------------------------- */
  const submitLead = useCallback(
    async (l: Lead) => {
      if (sendingRef.current) return;
      sendingRef.current = true;
      setStep("sending");
      const note = [
        l.scenario && `Nhu cầu: ${l.scenario}`,
        l.scale && `Quy mô: ${l.scale}`,
        l.timing && `Thời gian dự kiến: ${l.timing}`,
        l.detail && `Mô tả: ${l.detail}`,
      ]
        .filter(Boolean)
        .join("\n");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: l.name,
            phone: l.phone,
            email: l.email,
            service: l.service || "Khác",
            note,
            source: "chatbot",
            consent: true,
            website: "",
          }),
        });
        if (!res.ok) throw new Error(String(res.status));
        setStep("done");
        await botSay([
          <div key="ok" className="space-y-3">
            <p>
              Đã nhận yêu cầu của anh/chị {lastName(l.name)}. Tư vấn viên sẽ gọi lại số{" "}
              <strong>{l.phone}</strong> sớm nhất có thể.
            </p>
            <p>Nếu cần gấp, anh/chị gọi hotline hoặc nhắn Zalo giúp mình nhé.</p>
            <div className="flex flex-wrap gap-2">
              <a
                href={HOTLINE_TEL}
                className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-4 text-sm font-bold text-white transition-transform duration-150 ease-out-strong active:scale-95"
              >
                <Phone className="h-4 w-4" /> {HOTLINE}
              </a>
              <a
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full bg-zalo px-4 text-sm font-bold text-white transition-transform duration-150 ease-out-strong active:scale-95"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>,
        ]);
      } catch {
        setStep("error");
        await botSay([
          `Chưa gửi được yêu cầu, có thể do kết nối. Anh/chị thử gửi lại hoặc gọi hotline ${HOTLINE} giúp mình nhé.`,
        ]);
      } finally {
        sendingRef.current = false;
      }
    },
    [botSay]
  );

  /* Chọn nhanh ------------------------------------------------------ */
  const choose = (label: string) => {
    if (typing) return;
    switch (step) {
      case "service": {
        addUser(label);
        if (label === CONTACT_CHIP) {
          void botSay([
            <ul key="ct" className="space-y-1">
              <li>
                Hotline:{" "}
                <a className="font-bold text-primary" href={HOTLINE_TEL}>
                  {HOTLINE}
                </a>
              </li>
              <li>
                Email:{" "}
                <a className="font-bold text-primary break-all" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>Địa chỉ: {ADDRESS}</li>
            </ul>,
            "Anh/chị đang quan tâm đến hạng mục nào ạ?",
          ]);
          return;
        }
        const svc = SERVICES.find((s) => s.label === label);
        const next = { ...lead, service: label };
        setLead(next);
        go(svc?.scenarios ? "scenario" : "timing", next);
        return;
      }
      case "scenario": {
        addUser(label);
        const next = { ...lead, scenario: label };
        setLead(next);
        go("scale", next);
        return;
      }
      case "scale": {
        addUser(label);
        const next = { ...lead, scale: label };
        setLead(next);
        go("timing", next);
        return;
      }
      case "timing": {
        addUser(label);
        const next = { ...lead, timing: label };
        setLead(next);
        go("detail", next);
        return;
      }
      case "detail": {
        addUser(label);
        go("name", lead);
        return;
      }
      case "email": {
        addUser(label);
        go("consent", lead);
        return;
      }
      case "consent": {
        if (label === "Đồng ý & gửi") {
          addUser(label);
          void submitLead(lead);
        } else if (label === "Sửa thông tin") {
          addUser(label);
          go("name", lead, "Dạ, anh/chị nhập lại thông tin giúp mình nhé.");
        } else {
          addUser(label);
          setStep("declined");
          void botSay([
            `Dạ không sao, mình sẽ không gửi thông tin của anh/chị. Khi cần, anh/chị gọi hotline ${HOTLINE} hoặc nhắn Zalo để được tư vấn trực tiếp.`,
          ]);
        }
        return;
      }
      case "error": {
        addUser(label);
        void submitLead(lead);
        return;
      }
      case "done":
      case "declined":
        begin();
        return;
      default:
        return;
    }
  };

  /* Nhập văn bản ---------------------------------------------------- */
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (typing || !TEXT_STEPS.includes(step)) return;
    const value = draft.trim();
    if (!value) return;

    if (step === "name" && (value.length < 2 || value.length > 80)) {
      addUser(value);
      setDraft("");
      void botSay(["Anh/chị nhập họ tên đầy đủ giúp mình nhé (từ 2 ký tự)."]);
      return;
    }
    if (step === "phone" && !isPhone(value)) {
      addUser(value);
      setDraft("");
      void botSay(["Số điện thoại chưa đúng. Anh/chị nhập lại giúp mình, ví dụ 0912 345 678."]);
      return;
    }
    if (step === "email" && !isEmail(value)) {
      addUser(value);
      setDraft("");
      void botSay(["Email chưa đúng định dạng. Anh/chị nhập lại hoặc chọn Bỏ qua nhé."]);
      return;
    }

    addUser(value);
    setDraft("");
    if (step === "detail") {
      const next = { ...lead, detail: value.slice(0, 600) };
      setLead(next);
      go("name", next);
    } else if (step === "name") {
      const next = { ...lead, name: value };
      setLead(next);
      go("phone", next);
    } else if (step === "phone") {
      const next = { ...lead, phone: value };
      setLead(next);
      go("email", next);
    } else if (step === "email") {
      const next = { ...lead, email: value };
      setLead(next);
      go("consent", next);
    }
  };

  /* Nút nhanh theo bước --------------------------------------------- */
  const svc = SERVICES.find((s) => s.label === lead.service);
  let chips: string[] = [];
  switch (step) {
    case "service":
      chips = [...SERVICES.map((s) => s.label), CONTACT_CHIP];
      break;
    case "scenario":
      chips = svc?.scenarios ?? [];
      break;
    case "scale":
      chips = svc?.scales ?? [];
      break;
    case "timing":
      chips = TIMINGS;
      break;
    case "detail":
    case "email":
      chips = [SKIP];
      break;
    case "consent":
      chips = ["Đồng ý & gửi", "Sửa thông tin", "Không đồng ý"];
      break;
    case "error":
      chips = ["Thử gửi lại"];
      break;
    case "done":
    case "declined":
      chips = ["Bắt đầu lại"];
      break;
    default:
      chips = [];
  }
  const showInput = TEXT_STEPS.includes(step);
  const meta = INPUT_META[step];
  const busy = typing || step === "sending";

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open && !closing ? closePanel() : openPanel())}
        aria-expanded={open}
        aria-controls="plt-chatbot"
        aria-label={open ? "Đóng trợ lý tư vấn" : "Mở trợ lý tư vấn"}
        className="w-14 h-14 bg-gradient-to-br from-secondary to-primary text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,147,227,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200 ease-out-strong group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-150 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-[opacity,transform] duration-150 ease-out-strong whitespace-nowrap shadow-lg pointer-events-none">
          Chat tư vấn nhanh
        </span>
        <MessageCircle
          className={`absolute h-6 w-6 transition-[opacity,transform,filter] duration-200 ease-out-strong ${
            open ? "scale-50 opacity-0 blur-[2px]" : "scale-100 opacity-100 blur-0"
          }`}
        />
        <X
          className={`absolute h-6 w-6 transition-[opacity,transform,filter] duration-200 ease-out-strong ${
            open ? "scale-100 opacity-100 blur-0" : "scale-50 opacity-0 blur-[2px]"
          }`}
        />
      </button>

      {open && (
        <section
          id="plt-chatbot"
          role="dialog"
          aria-label="Trợ lý tư vấn Phát Lộc Tech"
          data-closing={closing}
          className="dialog-motion fixed z-[60] right-3 bottom-[10.5rem] w-[calc(100vw-1.5rem)] sm:right-6 sm:w-[390px] h-[min(34rem,calc(100dvh-11.5rem))] origin-bottom-right flex flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
        >
          <header className="flex items-center gap-3 bg-gradient-to-r from-primary to-navy px-4 py-3 text-white">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight">Trợ lý Phát Lộc Tech</p>
              <p className="text-xs text-blue-100">Tư vấn viên sẽ gọi lại sau khi nhận thông tin</p>
            </div>
            <button
              type="button"
              onClick={begin}
              aria-label="Bắt đầu lại cuộc trò chuyện"
              className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-[background-color,transform] duration-150 ease-out-strong hover:bg-white/10 active:scale-95"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={closePanel}
              aria-label="Đóng"
              className="grid h-10 w-10 place-items-center rounded-full text-white/80 transition-[background-color,transform] duration-150 ease-out-strong hover:bg-white/10 active:scale-95"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div
            ref={listRef}
            role="log"
            aria-live="polite"
            className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4 text-sm"
          >
            {msgs.map((m) => (
              <div
                key={m.id}
                className={`chat-msg flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.from === "user"
                      ? "rounded-br-md bg-primary text-white"
                      : "rounded-bl-md bg-white text-slate-800 shadow-sm ring-1 ring-slate-200"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg flex justify-start" aria-label="Trợ lý đang nhập">
                <div className="flex gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-slate-400" />
                </div>
              </div>
            )}
            {step === "sending" && !typing && (
              <p className="text-center text-xs text-slate-500">Đang gửi yêu cầu…</p>
            )}
          </div>

          <div className="border-t border-slate-200 bg-white px-3 pb-3 pt-2">
            {!busy && chips.length > 0 && (
              <div className="mb-2 flex max-h-60 flex-wrap gap-2 overflow-y-auto sm:max-h-48">
                {chips.map((c) => {
                  const primary = c === "Đồng ý & gửi";
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => choose(c)}
                      className={`min-h-10 rounded-full px-3.5 text-[13px] font-semibold transition-[background-color,transform] duration-150 ease-out-strong active:scale-95 ${
                        primary
                          ? "bg-accent text-white hover:bg-accent-hover"
                          : "border border-secondary/40 bg-white text-primary hover:bg-secondary/10"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            )}

            {showInput && meta && (
              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  disabled={busy}
                  type={meta.type}
                  inputMode={meta.inputMode}
                  autoComplete={meta.autoComplete}
                  placeholder={meta.placeholder}
                  maxLength={step === "detail" ? 600 : 120}
                  aria-label={meta.placeholder}
                  className="h-11 min-w-0 flex-1 rounded-full border border-slate-300 bg-white px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30 disabled:bg-slate-100"
                />
                <button
                  type="submit"
                  disabled={busy || !draft.trim()}
                  aria-label="Gửi"
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white transition-[opacity,transform] duration-150 ease-out-strong active:scale-95 disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}

            <p className="mt-2 text-center text-[11px] text-slate-500">
              Hoặc gọi{" "}
              <a className="font-semibold text-primary" href={HOTLINE_TEL}>
                {HOTLINE}
              </a>{" "}
              ·{" "}
              <a
                className="font-semibold text-primary"
                href={ZALO_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                nhắn Zalo
              </a>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
