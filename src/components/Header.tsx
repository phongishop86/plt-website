import Link from "next/link";
import { Button } from "./ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.ico" alt="Phát Lộc Tech" className="h-10 w-auto" />
          <span className="font-bold text-xl text-primary">Phát Lộc Tech</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium hover:text-secondary transition-colors">Trang chủ</Link>
          <Link href="/dich-vu/may-tinh" className="text-sm font-medium hover:text-secondary transition-colors">Giải pháp CNTT</Link>
          <Link href="/bao-gia" className="text-sm font-medium hover:text-secondary transition-colors">Tra cứu báo giá</Link>
          <Link href="/du-an" className="text-sm font-medium hover:text-secondary transition-colors">Dự án</Link>
          <Link href="/tin-tuc" className="text-sm font-medium hover:text-secondary transition-colors">Tin tức</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col text-right">
            <span className="text-xs text-muted-foreground">Hotline 24/7</span>
            <span className="text-sm font-bold text-primary">0932 685 794</span>
          </div>
          <Button>Nhận tư vấn</Button>
        </div>
      </div>
    </header>
  );
}
