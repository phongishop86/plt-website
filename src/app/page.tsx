import Link from "next/link";
import {
  Phone, Zap, ShieldCheck, BadgeCheck, Receipt, Search, ClipboardCheck, Wrench, Handshake,
  Bot, Database, Layers, Lock, Building2, Factory, School, Server, Cctv, Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/Section";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICES } from "@/lib/services";
import { RequestTicket } from "./RequestTicket";

const FACTS = [
  { value: "3+ năm", label: "kinh nghiệm triển khai" },
  { value: "30+", label: "doanh nghiệp đã phục vụ" },
  { value: "100+", label: "thiết bị đã lắp đặt" },
  { value: "30 phút", label: "phản hồi giờ hành chính" },
];

const REASONS = [
  { icon: Zap, title: "Phản hồi trong 30 phút", desc: "Yêu cầu tư vấn, báo giá được kỹ thuật viên gọi lại ngay trong giờ hành chính." },
  { icon: ShieldCheck, title: "Hàng chính hãng", desc: "Thiết bị có nguồn gốc rõ ràng, đủ CO/CQ, không hàng trôi nổi." },
  { icon: BadgeCheck, title: "Bảo hành rõ ràng", desc: "Thời hạn, điều kiện bảo hành ghi trên phiếu; lỗi nhà sản xuất được đổi nhanh." },
  { icon: Receipt, title: "Báo giá từng hạng mục", desc: "Liệt kê chi tiết thiết bị và công lắp đặt, không phát sinh chi phí ẩn." },
];

const STEPS = [
  { icon: Search, title: "Tiếp nhận", desc: "Ghi nhận nhu cầu qua điện thoại, Zalo hoặc form." },
  { icon: ClipboardCheck, title: "Khảo sát & báo giá", desc: "Khảo sát thực tế, đề xuất phương án vừa ngân sách." },
  { icon: Wrench, title: "Thi công", desc: "Lắp đặt đúng tiến độ, đi dây gọn, an toàn." },
  { icon: Handshake, title: "Nghiệm thu & hỗ trợ", desc: "Bàn giao, hướng dẫn sử dụng, hỗ trợ lâu dài." },
];

const AI_PHASES = [
  { icon: Bot, title: "Trợ lý AI cho đội IT", desc: "Hướng dẫn xử lý sự cố mạng, máy chủ từng bước; tra cứu quy trình chuẩn; tự tổng hợp báo cáo bảo trì." },
  { icon: Database, title: "Tìm kiếm & tự động hóa", desc: "Tìm nhanh trong tài liệu kỹ thuật nội bộ, tự phân loại và chuyển yêu cầu hỗ trợ, phân quyền chặt chẽ." },
  { icon: Layers, title: "Tích hợp vào hệ thống", desc: "Gắn trợ lý vào website và công cụ quản lý nội bộ của doanh nghiệp." },
];

const PROJECTS = [
  {
    icon: Server,
    tag: "Hạ tầng & máy chủ",
    title: "Bảo trì hệ thống máy chủ cho doanh nghiệp",
    desc: "Kiểm tra an toàn định kỳ, tối ưu hiệu năng và bảo đảm hệ thống máy chủ sẵn sàng phục vụ tác nghiệp.",
  },
  {
    icon: Cctv,
    tag: "Camera an ninh",
    title: "Thi công camera cho Công ty Công nghệ APA",
    desc: "Hệ thống camera IP góc rộng, quan sát rõ ban đêm, lưu trữ tập trung và xem trực tiếp trên điện thoại.",
  },
  {
    icon: Monitor,
    tag: "Phòng máy tính",
    title: "Trang bị phòng máy cho trường học",
    desc: "Cung cấp, cài đặt đồng bộ phòng máy thực hành, cấu hình mạng nội bộ và hỗ trợ kỹ thuật khi phát sinh sự cố.",
  },
];

const SECTORS = [
  { icon: Building2, title: "Doanh nghiệp thương mại – dịch vụ", desc: "Bảo trì máy chủ định kỳ, kiểm tra theo lịch, hỗ trợ ngay khi hệ thống có cảnh báo." },
  { icon: Factory, title: "Nhà xưởng sản xuất", desc: "Camera bao quát góc rộng, rõ ban đêm; thi công dây gọn, hướng dẫn xem trên điện thoại." },
  { icon: School, title: "Trường học", desc: "Phòng máy giao đúng hẹn, cài đặt sẵn đồng bộ; sự cố nhỏ được kỹ thuật xử lý tại chỗ." },
];

export default function Home() {
  return (
    <>
      {/* 1. ĐẦU TRANG: dịch vụ chính + phiếu yêu cầu */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        />
        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 md:px-6 py-12 md:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-[#16a34a]" aria-hidden="true" /> Tân Bình, TP.HCM · nhận khảo sát tận nơi
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] text-navy">
              Thiết bị và dịch vụ CNTT cho văn phòng, nhà xưởng, trường học
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
              Máy tính, camera, mạng, bảo trì và phần mềm — Phát Lộc Tech lo trọn gói từ khảo sát, lắp đặt đến hỗ trợ sau bán hàng, một đầu mối duy nhất.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="cta" size="lg">
                <a href="tel:0932685794">
                  <Phone className="h-5 w-5" aria-hidden="true" /> Gọi 0932 685 794
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#dich-vu">Xem các dịch vụ</Link>
              </Button>
            </div>
          </div>

          <RequestTicket />
        </div>

        {/* 2. Con số uy tín */}
        <div className="relative border-t border-line bg-white">
          <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 px-4 md:px-6 lg:grid-cols-4">
            {FACTS.map((f, i) => (
              <div
                key={f.label}
                className={`py-5 md:py-6 ${i % 2 ? "pl-4 md:pl-6 border-l border-line" : ""} ${i === 2 ? "lg:pl-6 lg:border-l" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
              >
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <span className="block font-display text-2xl md:text-3xl font-bold text-navy">{f.value}</span>
                  <span className="text-sm text-muted">{f.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 3. DỊCH VỤ */}
      <Section id="dich-vu">
        <SectionHeading
          title="Sáu mảng dịch vụ, một đầu mối"
          lead="Từ mua sắm thiết bị đến vận hành hạ tầng — doanh nghiệp chỉ cần làm việc với một bên chịu trách nhiệm."
        />
        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ slug, name, short, examples, icon: Icon }) => (
            <li key={slug} className="flex flex-col bg-white p-6 md:p-7">
              <Icon className="mb-5 h-8 w-8 text-sky" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="text-xl font-bold text-navy">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{short}</p>
              <ul className="mt-4 hidden space-y-1.5 text-sm text-ink md:block">
                {examples.map((e) => (
                  <li key={e} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
              <Link
                href={`/contact?nhu-cau=${encodeURIComponent(`Tư vấn: ${name}`)}#form-lien-he`}
                className="mt-auto pt-5 text-sm font-semibold text-navy underline-offset-4 hover:underline"
              >
                Hỏi giá dịch vụ này
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* 4. VÌ SAO CHỌN */}
      <Section id="gioi-thieu" tone="paper">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            className="mb-0"
            title="Không lớn nhất, nhưng phản hồi nhanh và minh bạch"
            lead="Mỗi khách hàng được một kỹ thuật viên phụ trách trực tiếp, từ lúc khảo sát đến khi bảo hành."
          />
          <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <li key={title}>
                <Icon className="mb-3 h-6 w-6 text-sky" aria-hidden="true" />
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* 5. QUY TRÌNH */}
      <Section>
        <SectionHeading title="Quy trình bốn bước" lead="Rõ tiến độ từng bước, không phát sinh bất ngờ." />
        <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
          {STEPS.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative md:pt-2">
              <div className="flex items-center gap-3 md:block">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-navy bg-white font-display text-lg font-bold text-navy">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span aria-hidden="true" className="absolute left-14 right-0 top-8 hidden h-0.5 bg-line md:block" />
                )}
                <h3 className="text-lg font-bold text-navy md:mt-5 flex items-center gap-2">
                  <Icon className="h-5 w-5 text-sky" aria-hidden="true" /> {title}
                </h3>
              </div>
              <p className="mt-2 pl-15 text-sm leading-relaxed text-muted md:pl-0">{desc}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. DẢI GIẢI PHÁP AI */}
      <Section id="giai-phap-ai" tone="dark">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              className="mb-6"
              title="Giải pháp AI vận hành CNTT"
              lead="Hướng phát triển mới của Phát Lộc Tech: trợ lý AI xây trên nền tảng Claude, giúp đội IT doanh nghiệp xử lý sự cố và tra cứu nhanh hơn."
            />
            <div className="flex gap-3 rounded-xl border border-white/15 bg-white/5 p-4 text-sm leading-relaxed text-slate-300">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
              <p>Dữ liệu nội bộ của doanh nghiệp không dùng để huấn luyện mô hình, truyền tải được mã hóa.</p>
            </div>
            <Button asChild variant="onDark" size="lg" className="mt-6">
              <Link href={`/contact?nhu-cau=${encodeURIComponent("Tư vấn: Giải pháp AI vận hành CNTT")}#form-lien-he`}>
                Tư vấn giải pháp AI
              </Link>
            </Button>
          </div>
          <ol className="space-y-px overflow-hidden rounded-2xl border border-white/10">
            {AI_PHASES.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="flex gap-5 bg-white/[0.04] p-6">
                <Icon className="mt-1 h-7 w-7 shrink-0 text-sky" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <p className="text-sm text-slate-400">Giai đoạn {i + 1}</p>
                  <h3 className="text-lg font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 7. DỰ ÁN */}
      <Section id="du-an">
        <SectionHeading title="Dự án tiêu biểu" lead="Một vài công trình gần đây, từ phòng máy trường học đến hệ thống máy chủ." />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map(({ icon: Icon, tag, title, desc }) => (
            <li key={title} className="flex flex-col overflow-hidden rounded-2xl border border-line">
              {/* Thay khối này bằng <Image> ảnh công trình thật khi có */}
              <div className="relative flex aspect-[16/7] items-end bg-navy p-5 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]">
                <Icon className="absolute right-5 top-5 h-12 w-12 text-sky" strokeWidth={1.5} aria-hidden="true" />
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-semibold text-navy">{tag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* 8. LĨNH VỰC ĐÃ PHỤC VỤ */}
      <Section tone="paper">
        <SectionHeading title="Lĩnh vực đã phục vụ" lead="Mỗi loại khách hàng có yêu cầu khác nhau — và cách làm phù hợp." />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {SECTORS.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="border-l-2 border-sky pl-5">
              <Icon className="mb-3 h-6 w-6 text-navy" aria-hidden="true" />
              <h3 className="text-lg font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 9. FORM BÁO GIÁ */}
      <Section id="bao-gia">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading
              className="mb-6"
              title="Nhận báo giá miễn phí"
              lead="Để lại số điện thoại và nhu cầu. Kỹ thuật viên gọi lại để khảo sát và gửi báo giá chi tiết."
            />
            <p className="text-sm text-muted">Cần gấp? Gọi trực tiếp</p>
            <a href="tel:0932685794" className="font-display text-3xl font-bold text-navy hover:text-sky">0932 685 794</a>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <QuoteForm
              idPrefix="home"
              subject="[Phát Lộc Tech] Yêu cầu báo giá mới từ website"
              next="https://www.phatloctech.vn/#bao-gia"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
