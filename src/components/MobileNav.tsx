"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/#giai-phap-ai", label: "Giải pháp AI" },
  { href: "/#dich-vu", label: "Hệ sinh thái CNTT" },
  { href: "/#du-an", label: "Dự án" },
  { href: "/contact", label: "Liên hệ" },
];

/** Navigation for screens below `lg`, where the desktop links are hidden. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onResize = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Đóng menu" : "Mở menu"}
        onClick={() => setOpen((v) => !v)}
        className="relative grid h-11 w-11 place-items-center rounded-lg text-[#003388] transition-[background-color,transform] duration-150 ease-out-strong hover:bg-slate-100 active:scale-95"
      >
        <Menu
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

      <nav
        id={panelId}
        aria-label="Menu chính"
        aria-hidden={!open}
        inert={!open}
        className={`absolute inset-x-0 top-full border-b bg-white shadow-lg transition-[clip-path,visibility] ease-drawer ${
          open
            ? "visible [clip-path:inset(0_0_0_0)] duration-300"
            : "invisible [clip-path:inset(0_0_100%_0)] duration-200"
        }`}
      >
        <ul className="container mx-auto flex flex-col px-4 py-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center border-b border-slate-100 text-base font-bold text-[#003388] last:border-b-0 hover:text-[#0693E3]"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="py-3">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex h-12 items-center justify-center rounded-lg bg-[#FF6900] font-bold text-white transition-transform duration-150 ease-out-strong active:scale-[0.97]"
            >
              Nhận tư vấn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
