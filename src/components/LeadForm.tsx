"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

type Props = {
  /** Ghi nhận form được gửi từ đâu (hiện trong Google Sheet / email) */
  source: string;
  showEmail?: boolean;
  notePlaceholder: string;
  submitLabel: string;
  buttonClassName: string;
};

const inputClass =
  "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]";

const SERVICES = [
  "Giải pháp AI Vận hành CNTT",
  "Hạ tầng mạng & Máy chủ",
  "Dịch vụ IT Helpdesk & Bảo trì",
  "Camera an ninh & Giám sát",
  "Máy tính & Thiết bị văn phòng",
  "Phần mềm & Số hóa doanh nghiệp",
  "Khác",
];

export function LeadForm({
  source,
  showEmail = false,
  notePlaceholder,
  submitLabel,
  buttonClassName,
}: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email") ?? "",
          service: data.get("service"),
          note: data.get("note"),
          website: data.get("website"), // ô ẩn chống spam
          source,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setErrorMsg(json.error || "Chưa gửi được yêu cầu.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Không kết nối được tới máy chủ.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Ô ẩn chống spam: người dùng không thấy, không được điền */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${source}-website`}>Website</label>
        <input id={`${source}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor={`${source}-name`} className="block text-sm font-bold text-slate-700 mb-2">Họ và Tên *</label>
          <input id={`${source}-name`} name="name" type="text" placeholder="Nhập họ tên" required className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${source}-phone`} className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
          <input id={`${source}-phone`} name="phone" type="tel" placeholder="09xx xxx xxx" required className={inputClass} />
        </div>
      </div>

      {showEmail && (
        <div>
          <label htmlFor={`${source}-email`} className="block text-sm font-bold text-slate-700 mb-2">Email</label>
          <input id={`${source}-email`} name="email" type="email" placeholder="ban@congty.vn" className={inputClass} />
        </div>
      )}

      <div>
        <label htmlFor={`${source}-svc`} className="block text-sm font-bold text-slate-700 mb-2">Loại dịch vụ quan tâm</label>
        <select id={`${source}-svc`} name="service" className={inputClass}>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${source}-note`} className="block text-sm font-bold text-slate-700 mb-2">Chi tiết nhu cầu</label>
        <textarea id={`${source}-note`} name="note" rows={4} placeholder={notePlaceholder} className={inputClass}></textarea>
      </div>

      <div aria-live="polite">
        {status === "success" && (
          <p className="rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold px-4 py-3">
            Đã gửi thành công. Kỹ thuật viên sẽ liên hệ lại với bạn sớm nhất.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm px-4 py-3">
            {errorMsg} Thông tin bạn nhập vẫn được giữ nguyên, bạn có thể bấm gửi lại hoặc liên hệ ngay qua{" "}
            <a href="tel:0932685794" className="font-bold underline">hotline 0932 685 794</a> /{" "}
            <a href="https://zalo.me/0932685794" target="_blank" rel="noopener noreferrer" className="font-bold underline">Zalo</a>.
          </p>
        )}
      </div>

      <Button type="submit" disabled={status === "sending"} className={buttonClassName}>
        {status === "sending" ? "Đang gửi..." : submitLabel}
      </Button>
    </form>
  );
}
