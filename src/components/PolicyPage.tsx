import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type PolicySection = { heading: string; items: string[] };

const POLICY_LINKS = [
  { href: "/chinh-sach-bao-hanh", label: "Chính sách bảo hành" },
  { href: "/dieu-khoan-giao-dich", label: "Điều khoản giao dịch" },
  { href: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
  { href: "/chinh-sach-van-chuyen", label: "Vận chuyển & Giao nhận" },
];

export { POLICY_LINKS };

/** Khung trang chính sách dùng chung (bố cục + thông tin doanh nghiệp). */
export function PolicyPage({
  title,
  intro,
  sections,
  updated,
}: {
  title: string;
  intro: string;
  sections: PolicySection[];
  updated: string;
}) {
  return (
    <div className="bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-6 flex items-center gap-1">
          <Link href="/" className="hover:text-[#0693E3]">Trang chủ</Link>
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
          <span className="text-slate-700">{title}</span>
        </nav>

        <article className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-12">
          <h1 className="text-3xl md:text-4xl font-black text-[#003388] mb-4">{title}</h1>
          <p className="text-sm text-slate-400 mb-6">Cập nhật lần cuối: {updated}</p>
          <p className="text-slate-600 leading-relaxed mb-8">{intro}</p>

          {sections.map((sec, i) => (
            <section key={sec.heading} className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-3">
                {i + 1}. {sec.heading}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="mt-10 pt-8 border-t border-slate-100 text-sm text-slate-600 space-y-1">
            <h2 className="text-base font-bold text-slate-800 mb-2">Thông tin liên hệ</h2>
            <p><strong>CÔNG TY TNHH PHÁT LỘC TECH</strong> – MST: 0319347662</p>
            <p>Địa chỉ: Số 491/1 Trường Chinh, Phường Tân Bình, TP. Hồ Chí Minh</p>
            <p>
              Hotline: <a href="tel:0932685794" className="text-[#0693E3] font-semibold">0932 685 794</a> – Email:{" "}
              <a href="mailto:info@phatloctech.vn" className="text-[#0693E3] font-semibold">info@phatloctech.vn</a>
            </p>
          </section>
        </article>

        <nav aria-label="Các chính sách khác" className="mt-8 flex flex-wrap gap-3">
          {POLICY_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#0693E3] hover:border-[#0693E3]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
