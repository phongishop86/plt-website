import Link from "next/link";
import { Button } from "./ui/Button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-1">
            <img src="/PLT-Logo-VNPT-final.png" alt="Phát Lộc Tech" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl text-primary tracking-tight leading-none">PHÁT LỘC TECH</span>
            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">Giải pháp AI & Hạ tầng CNTT</span>
          </div>
        </Link>
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="text-sm font-bold text-primary hover:text-secondary transition-colors">Trang chủ</Link>
          <Link href="/#giai-phap-ai" className="text-sm font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1.5 bg-blue-50/80 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Giải pháp AI
          </Link>
          <Link href="/#dich-vu" className="text-sm font-bold text-slate-600 hover:text-secondary transition-colors">Hệ sinh thái CNTT</Link>
          <Link href="/#du-an" className="text-sm font-bold text-slate-600 hover:text-secondary transition-colors">Dự án</Link>
          <Link href="/contact" className="text-sm font-bold text-slate-600 hover:text-secondary transition-colors">Liên hệ</Link>
        </nav>
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hotline 24/7</span>
            <span className="text-lg font-black text-primary leading-none mt-1">0932 685 794</span>
          </div>
          <Link href="/contact" className="hidden sm:block">
            <Button className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 text-white font-bold shadow-lg shadow-blue-500/30 border-0">
              Nhận tư vấn
            </Button>
          </Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
