import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

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
    <>
      <PageHeader title={title} lead={intro} />
      <div className="mx-auto w-full max-w-3xl px-4 md:px-6 py-12 md:py-16">
        <article>
          <p className="mb-8 text-sm text-muted">Cập nhật lần cuối: {updated}</p>

          {sections.map((sec, i) => (
            <section key={sec.heading} className="mb-8">
              <h2 className="mb-3 text-xl font-bold text-navy">
                {i + 1}. {sec.heading}
              </h2>
              <ul className="list-disc pl-6 space-y-2 leading-relaxed text-ink">
                {sec.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="mt-10 border-t border-line pt-8 text-sm text-muted space-y-1">
            <h2 className="mb-2 text-base font-bold text-navy">Thông tin liên hệ</h2>
            <p><strong>CÔNG TY TNHH PHÁT LỘC TECH</strong> – MST: 0319347662</p>
            <p>Địa chỉ: Số 491/1 Trường Chinh, Phường Tân Bình, TP. Hồ Chí Minh</p>
            <p>
              Hotline: <a href="tel:0932685794" className="font-semibold text-navy hover:underline">0932 685 794</a> – Email:{" "}
              <a href="mailto:info@phatloctech.vn" className="font-semibold text-navy hover:underline">info@phatloctech.vn</a>
            </p>
          </section>
        </article>

        <nav aria-label="Các chính sách khác" className="mt-8 flex flex-wrap gap-3">
          {POLICY_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-line px-4 py-2 text-sm text-ink hover:border-navy hover:text-navy"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
