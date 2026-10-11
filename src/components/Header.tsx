import Link from "next/link";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center p-1">
            <img src="/PLT-Logo-VNPT-final.png" alt="Phát Lộc Tech" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl text-[#003388] tracking-tight leading-none">PHÁT LỘC TECH</span>
            <span className="text-[10px] uppercase font-bold text-slate-500 mt-1 tracking-wider">Giải pháp AI & Hạ tầng CNTT</span>
          </div>
        </Link>
        <nav className="hidden lg:flex gap-8 items-center">
          <Link href="/" className="text-sm font-bold text-[#003388] hover:text-[#0693E3] transition-colors">Trang chủ</Link>
          <Link href="/#giai-phap-ai" className="text-sm font-bold text-[#0693E3] hover:text-[#003388] transition-colors flex items-center gap-1.5 bg-blue-50/80 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-[#0693E3] animate-pulse"></span>
            Giải pháp AI
          </Link>
          <Link href="/#dich-vu" className="text-sm font-bold text-slate-600 hover:text-[#0693E3] transition-colors">Hệ sinh thái CNTT</Link>
          <Link href="/#du-an" className="text-sm font-bold text-slate-600 hover:text-[#0693E3] transition-colors">Dự án</Link>
          <Link href="/contact" className="text-sm font-bold text-[#FF6900] hover:text-[#e65c00] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Hotline 24/7</span>
            <span className="text-lg font-black text-[#FF6900] leading-none mt-1">0932 685 794</span>
          </div>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-[#0693E3] to-[#003388] hover:opacity-90 text-white font-bold shadow-lg shadow-blue-500/30 border-0">
              Nhận tư vấn
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
