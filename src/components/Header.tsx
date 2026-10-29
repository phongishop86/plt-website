"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/Button";

const NAV = [
  { href: "/#dich-vu", label: "Dịch vụ" },
  { href: "/#du-an", label: "Dự án" },
  { href: "/#giai-phap-ai", label: "Giải pháp AI" },
  { href: "/bao-gia", label: "Báo giá" },
  { href: "/contact", label: "Liên hệ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Đóng menu khi bấm Esc (bấm link trong menu cũng tự đóng)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 md:h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Phát Lộc Tech - Trang chủ">
          <Image src="/PLT-Logo-VNPT-final.png" alt="" width={44} height={44} priority className="h-10 w-10 md:h-11 md:w-11" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl font-bold text-navy">Phát Lộc Tech</span>
            <span className="mt-1 text-[11px] md:text-xs text-muted">Thiết bị & dịch vụ CNTT</span>
          </span>
        </Link>

        <nav aria-label="Menu chính" className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-semibold text-ink hover:text-navy">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a href="tel:0932685794" className="hidden md:flex flex-col text-right leading-tight">
            <span className="text-xs text-muted">Hotline</span>
            <span className="font-display text-lg font-bold text-navy">0932 685 794</span>
          </a>
          <Button asChild variant="cta" className="hidden sm:inline-flex">
            <Link href="/#bao-gia">Nhận báo giá</Link>
          </Button>
          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-navy"
            aria-expanded={open}
            aria-controls="menu-di-dong"
            aria-label={open ? "Đóng menu" : "Mở menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-di-dong" aria-label="Menu điện thoại" className="lg:hidden border-t border-line bg-white">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base font-semibold text-ink hover:bg-paper"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-line mt-2 pt-3 pb-2">
              <a href="tel:0932685794" className="flex items-center gap-2 px-2 py-2 font-bold text-navy">
                <Phone className="h-4 w-4" /> Hotline 0932 685 794
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
