import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { POLICY_LINKS } from "@/components/PolicyPage";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 md:px-6 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <span className="rounded-xl bg-white p-1">
              <Image src="/PLT-Logo-VNPT-final.png" alt="" width={44} height={44} className="h-11 w-11" />
            </span>
            <span className="font-display text-2xl font-bold text-white">Phát Lộc Tech</span>
          </Link>
          <p className="mb-6 max-w-sm text-sm leading-relaxed">
            Cung cấp thiết bị và dịch vụ CNTT cho văn phòng, nhà xưởng, trường học tại TP.HCM — một đầu mối từ mua sắm đến vận hành.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              Số 491/1 Trường Chinh, Phường Tân Bình, TP. Hồ Chí Minh
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              <a href="tel:0932685794" className="font-semibold text-white hover:text-sky">0932 685 794</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-sky" aria-hidden="true" />
              <a href="mailto:info@phatloctech.vn" className="hover:text-sky">info@phatloctech.vn</a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h2 className="mb-4 text-sm font-semibold text-white">Dịch vụ</h2>
          <ul className="space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href="/#dich-vu" className="hover:text-sky">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="mb-4 text-sm font-semibold text-white">Chính sách</h2>
          <ul className="space-y-2.5 text-sm">
            {POLICY_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sky">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-6 pb-24 md:pb-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Công ty TNHH Phát Lộc Tech. MST: 0319347662.
        </div>
      </div>
    </footer>
  );
}
