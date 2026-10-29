import { Phone, MessageCircle, ClipboardList } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * Liên hệ nhanh:
 * - Điện thoại: thanh cố định dưới đáy màn hình (Gọi · Zalo · Báo giá)
 * - Máy tính: 2 nút tròn góc phải dưới
 */
export function FloatingContact() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(10,31,68,0.08)] md:hidden">
        <a href="tel:0932685794" className="flex flex-col items-center justify-center gap-1 py-2.5 text-xs font-semibold text-navy">
          <Phone className="h-5 w-5" aria-hidden="true" /> Gọi ngay
        </a>
        <a
          href={SITE.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 border-x border-line py-2.5 text-xs font-semibold text-[#0068ff]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" /> Chat Zalo
        </a>
        <Link href="/#bao-gia" className="flex flex-col items-center justify-center gap-1 bg-orange py-2.5 text-xs font-semibold text-white">
          <ClipboardList className="h-5 w-5" aria-hidden="true" /> Báo giá
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={SITE.zalo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat Zalo với Phát Lộc Tech"
          title="Chat Zalo"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:0932685794"
          aria-label="Gọi 0932 685 794"
          title="Gọi 0932 685 794"
          className="flex h-13 w-13 items-center justify-center rounded-full bg-orange text-white shadow-lg hover:-translate-y-0.5 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
