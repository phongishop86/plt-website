import Link from "next/link";
import { ChevronRight } from "lucide-react";

/** Đầu trang con (Liên hệ, Báo giá, Chính sách): breadcrumb + H1 + mô tả. */
export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="border-b border-line bg-paper">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-10 md:py-14">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-muted">
          <Link href="/" className="hover:text-navy">Trang chủ</Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-ink">{title}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-navy">{title}</h1>
        {lead && <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed text-muted">{lead}</p>}
      </div>
    </div>
  );
}
