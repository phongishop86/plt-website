import type { Metadata } from "next";
import { pageMeta, SITE } from "@/lib/site";
import { Phone, MapPin, Mail, MessageCircle, UserCircle2, Building2 } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata: Metadata = pageMeta(
  "Liên hệ tư vấn giải pháp CNTT doanh nghiệp",
  "Liên hệ Phát Lộc Tech - Hotline 0932 685 794. Tư vấn miễn phí máy tính, camera, hạ tầng mạng, IT helpdesk tại 491/1 Trường Chinh, Tân Bình, TP.HCM.",
  "/contact",
);

const CHANNELS = [
  { icon: Phone, label: "Hotline", value: "0932 685 794", href: "tel:0932685794" },
  { icon: MessageCircle, label: "Zalo", value: "0932 685 794", href: SITE.zalo, external: true },
  { icon: Mail, label: "Email", value: "info@phatloctech.vn", href: "mailto:info@phatloctech.vn" },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const prefill = typeof params["nhu-cau"] === "string" ? params["nhu-cau"].slice(0, 500) : "";

  return (
    <>
      <PageHeader
        title="Liên hệ"
        lead="Gọi, nhắn Zalo hoặc gửi yêu cầu bên dưới. Kỹ thuật viên phản hồi trong 30 phút giờ hành chính."
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 md:px-6 py-12 md:py-16 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        {/* Thông tin liên hệ */}
        <div className="space-y-8">
          <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
            {CHANNELS.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 p-4 hover:bg-paper"
                >
                  <Icon className="h-5 w-5 shrink-0 text-sky" aria-hidden="true" />
                  <span>
                    <span className="block text-xs text-muted">{label}</span>
                    <span className="font-semibold text-ink">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl border border-line p-6">
            <div className="flex items-center gap-4">
              {/* Thay bằng ảnh chân dung thật: <Image src="/director.jpg" … /> */}
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-paper">
                <UserCircle2 className="h-10 w-10 text-slate-300" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-bold text-navy">Nguyễn Thanh Phong</h2>
                <p className="text-sm text-muted">Giám đốc, kỹ sư mạng & hệ thống</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Hơn 5 năm kinh nghiệm hạ tầng mạng và tích hợp hệ thống cho doanh nghiệp vừa và nhỏ. Trực tiếp tham gia khảo sát, thiết kế giải pháp để hệ thống chạy ổn định với chi phí hợp lý.
            </p>
            <a
              href="/contact/Mr_Phong.vcf"
              download="Mr_Phong.vcf"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline"
            >
              Lưu danh bạ (vCard)
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl border border-line">
            <div className="space-y-2 p-5 text-sm">
              <p className="flex items-start gap-2 text-ink">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                Số 491/1 Trường Chinh, Phường Tân Bình, TP. Hồ Chí Minh
              </p>
              <p className="flex items-center gap-2 text-muted">
                <Building2 className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
                Công ty TNHH Phát Lộc Tech · MST 0319347662
              </p>
            </div>
            <iframe
              title="Bản đồ văn phòng Phát Lộc Tech"
              src="https://www.google.com/maps?q=491%2F1+Tr%C6%B0%E1%BB%9Dng+Chinh%2C+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+B%C3%ACnh%2C+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh&output=embed"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Form */}
        <div id="form-lien-he" className="h-fit rounded-2xl border border-line bg-white p-6 md:p-8 lg:sticky lg:top-28">
          <h2 className="mb-6 text-2xl font-bold text-navy">Gửi yêu cầu tư vấn</h2>
          <QuoteForm
            idPrefix="contact"
            showEmail
            defaultNote={prefill}
            subject="[Phát Lộc Tech - Trang Liên Hệ] Yêu cầu tư vấn mới"
            next="https://www.phatloctech.vn/contact"
            submitLabel="Gửi yêu cầu"
          />
        </div>
      </div>
    </>
  );
}
