"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/LeadForm";
import { ContactButton } from "@/components/ContactButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { 
  Monitor, Server, Shield, Cloud, Code, FileDigit, Search, FileText, Wrench, 
  Handshake, CheckCircle, HeadphonesIcon, TrendingUp, Cpu, HardDrive, Printer, 
  MemoryStick, ChevronRight, Laptop, Users, Building, ArrowRight, Quote, Zap,
  Bot, Sparkles, Lock, ShieldCheck, Database, Layers
} from "lucide-react";

export default function Home() {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const animate = (el: HTMLSpanElement) => {
      const target = parseInt(el.dataset.target || "0", 10);
      const duration = 1200;
      const start = performance.now();
      function tick(now: number) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toString();
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toString();
      }
      requestAnimationFrame(tick);
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!reduceMotion) animate(entry.target as HTMLSpanElement);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counterRefs.current.forEach(c => {
      if (c) io.observe(c);
    });

    return () => io.disconnect();
  }, []);



  return (
    <div className="flex flex-col min-h-screen font-sans">
      <RevealOnScroll />
      {/* HERO SECTION (High-Tech Style) */}
      <section className="relative pt-12 pb-14 md:pt-16 md:pb-20 overflow-hidden bg-navy">
        <div className="hero-bg absolute inset-0 z-0 opacity-40">
          <Image 
            src="/hero-bg.png" 
            alt="Futuristic Cityscape" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="hero-in hero-in-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-secondary/30 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest">
                Đổi Mới Sáng Tạo • Ứng Dụng Nền Tảng Claude AI
              </span>
            </div>

            <h1 className="hero-in hero-in-2 text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Giải pháp AI vận hành CNTT<br/>
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(6,147,227,0.6)] inline-block mt-2">
                Cho doanh nghiệp & tổ chức
              </span>
            </h1>
            <p className="hero-in hero-in-3 text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Phát Lộc Tech phát triển các giải pháp trợ lý AI thông minh tích hợp trên nền tảng Claude, hỗ trợ đội ngũ IT tra cứu tài liệu kỹ thuật, tự động hóa tác nghiệp và chuẩn hóa hạ tầng số doanh nghiệp với tiêu chuẩn bảo mật khắt khe nhất.
            </p>
            
            <div className="hero-in hero-in-4 flex flex-wrap gap-4">
              <Link href="#giai-phap-ai">
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_rgba(255,105,0,0.4)] px-8 py-6 text-lg rounded-xl h-full font-bold flex items-center gap-2">
                  <Bot className="w-5 h-5" /> Khám phá Giải pháp AI
                </Button>
              </Link>
              <Link href="#dich-vu">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg rounded-xl h-full font-bold">
                  Hệ sinh thái CNTT
                </Button>
              </Link>
            </div>
        </div>
      </section>

      {/* COUNTERS STRIP (Dynamic High-Tech look) */}
      <section className="bg-gradient-to-r from-secondary to-primary py-8 relative z-20 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md tabular-nums">
                <span className="count" data-target="3" ref={(el) => { if(el) counterRefs.current[0] = el; }}>3</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Năm Kinh Nghiệm</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md tabular-nums">
                <span className="count" data-target="30" ref={(el) => { if(el) counterRefs.current[1] = el; }}>30</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Khách Hàng B2B</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md tabular-nums">
                <span className="count" data-target="100" ref={(el) => { if(el) counterRefs.current[2] = el; }}>100</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Thiết Bị Lắp Đặt</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md tabular-nums">24/7</div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Hỗ Trợ Kỹ Thuật</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SOLUTIONS SECTION - POWERED BY CLAUDE */}
      <section id="giai-phap-ai" className="scroll-mt-20 py-section-tight lg:py-section-tight-lg bg-gradient-to-b from-navy via-navy-2 to-navy text-white relative overflow-hidden">
        {/* Decorative Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#0693E3_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Powered by Claude AI
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-tight">
              Hệ thống trợ lý AI & <span className="text-secondary">lộ trình phát triển</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-3xl mx-auto">
              Định vị trở thành đối tác tiên phong ứng dụng trí tuệ nhân tạo (Claude AI) vào quản trị hạ tầng, hỗ trợ vận hành tác nghiệp cho các doanh nghiệp và tổ chức quy mô vừa và lớn.
            </p>
          </div>

          {/* 3 Pillars / Phases Grid */}
          <div data-reveal className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
            
            {/* Phase 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:border-secondary/50 hover:bg-white/[0.07] transition-[border-color,background-color] duration-200 ease-out-strong group relative flex flex-col justify-between">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary border border-secondary/60 text-white text-xs font-black uppercase rounded-full shadow-lg">
                Ưu tiên cốt lõi
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Giai đoạn 1</div>
                <h3 className="text-lg font-black mb-2 text-white xl:whitespace-nowrap">AI IT Assistant</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Trợ lý thông minh đồng hành cùng đội ngũ kỹ sư IT doanh nghiệp tra cứu quy trình, hướng dẫn chẩn đoán sự cố phần cứng/mạng và tự động soạn thảo báo cáo bảo trì định kỳ.
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300 mb-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Hướng dẫn troubleshooting mạng/máy chủ từng bước</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Tra cứu quy trình chuẩn (SOP) theo ngữ cảnh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Tổng hợp log sự cố & lập báo cáo kỹ thuật</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs xl:whitespace-nowrap text-blue-200 font-semibold">
                🎯 Mục tiêu: Giảm 60% thời gian phản hồi sự cố (MTTR)
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:border-secondary/50 hover:bg-white/[0.07] transition-[border-color,background-color] duration-200 ease-out-strong group relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Giai đoạn 2</div>
                <h3 className="text-lg font-black mb-2 text-white xl:whitespace-nowrap">Knowledge Search & Automation</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Hệ thống tìm kiếm ngữ nghĩa thông minh và tự động hóa tác nghiệp lặp lại. Phân loại ticket và điều phối yêu cầu hỗ trợ kỹ thuật tự động.
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300 mb-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Tìm kiếm ngữ nghĩa tài liệu kỹ thuật nội bộ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Tự động phân loại & định tuyến ticket hỗ trợ IT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Phân quyền chặt chẽ (RBAC) chuẩn doanh nghiệp</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs xl:whitespace-nowrap text-blue-200 font-semibold">
                🎯 Mục tiêu: Tự động hóa 70% các tác vụ tra cứu & báo cáo
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-md hover:border-secondary/50 hover:bg-white/[0.07] transition-[border-color,background-color] duration-200 ease-out-strong group relative flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mb-4 shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Giai đoạn 3</div>
                <h3 className="text-lg font-black mb-2 text-white xl:whitespace-nowrap">Digital Solutions & Ecosystem</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  Tích hợp trợ lý AI thông minh vào hệ thống website doanh nghiệp và các nền tảng số hóa quản trị tác nghiệp chuyên biệt.
                </p>
                <ul className="space-y-1.5 text-[13px] text-slate-300 mb-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Website thông minh tích hợp trợ lý Claude</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Quản lý đăng ký & điều hành hội thao doanh nghiệp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <span className="xl:whitespace-nowrap">Tự động bốc thăm, xếp lịch, cập nhật kết quả</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs xl:whitespace-nowrap text-blue-200 font-semibold">
                🎯 Mục tiêu: Hệ sinh thái chuyển đổi số doanh nghiệp toàn diện
              </div>
            </div>

          </div>

          {/* ENTERPRISE DATA SECURITY BANNER */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 border border-secondary/30 rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 border border-secondary/40 flex items-center justify-center text-secondary shrink-0">
                <Lock className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  Định hướng bảo mật & quyền riêng tư dữ liệu
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                  Các giải pháp AI của Phát Lộc Tech đang trong lộ trình phát triển. Khi triển khai cho khách hàng, phạm vi dữ liệu, nơi lưu trữ và biện pháp bảo mật sẽ được thống nhất bằng văn bản trước khi vận hành.
                </p>
              </div>
            </div>
            <Link href="#bao-gia" className="shrink-0">
              <Button className="bg-secondary hover:bg-primary text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-blue-500/30 border-0">
                Tư vấn giải pháp AI
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="gioi-thieu" className="py-section bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Đối tác tận tâm,<br className="md:hidden"/> làm việc nghiêm túc
            </h2>
            <p className="text-lg text-slate-600">
              Chúng tôi không phải doanh nghiệp lớn nhất, nhưng cam kết là đối tác phản hồi nhanh nhất và minh bạch nhất với từng khách hàng B2B của mình.
            </p>
          </div>
          <div data-reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Phản hồi trong 30 phút", desc: "Yêu cầu tư vấn hoặc báo giá được đội ngũ kỹ thuật phản hồi ngay lập tức." },
              { icon: Shield, title: "Chính hãng 100%", desc: "Toàn bộ thiết bị có nguồn gốc rõ ràng, đầy đủ CO/CQ, không hàng trôi nổi." },
              { icon: CheckCircle, title: "Bảo hành 1 đổi 1", desc: "Chính sách bảo hành rõ ràng, hỗ trợ đổi trả cực nhanh khi có lỗi." },
              { icon: FileText, title: "Giá cả minh bạch", desc: "Báo giá chi tiết từng hạng mục, không phát sinh chi phí ẩn." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-200 ease-out-strong group">
                <div className="w-14 h-14 bg-blue-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM DIAGRAM */}
      <section id="dich-vu" className="scroll-mt-20 py-section-tight lg:py-section-tight-lg bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-3 tracking-tight">
              Hệ sinh thái<br className="md:hidden"/> giải pháp toàn diện
            </h2>
            <p className="text-base text-slate-600 max-w-3xl mx-auto">
              Từ trang bị thiết bị đến vận hành hạ tầng và số hóa quy trình — doanh nghiệp chỉ cần làm việc với một đầu mối liên hệ duy nhất.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-28 h-28 md:w-36 md:h-36 relative flex items-center justify-center hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(6,147,227,0.3)] bg-white rounded-full p-2 border-4 border-slate-50">
                <img src="/PLT-Logo-VNPT-final.png" alt="PLT Logo Ecosystem" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Left and Right Spokes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-4 lg:gap-x-52 relative z-10">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <div className="pl-5 py-2 flex-1">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Giải pháp AI vận hành CNTT</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">Trợ lý AI tra cứu kỹ thuật & tự động hóa tác nghiệp.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-secondary translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="pl-5 py-2 flex-1">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Camera giám sát</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">Thi công camera an ninh văn phòng, nhà xưởng.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent to-secondary translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-7 h-7 text-white" />
                  </div>
                  <div className="pl-5 py-2 flex-1">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Máy tính & TB văn phòng</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">Cung cấp PC, Laptop, máy in, máy chiếu đồng bộ.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-secondary translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <Server className="w-7 h-7 text-white" />
                  </div>
                  <div className="pr-5 py-2 flex-1 text-right">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Hạ tầng mạng</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">Thiết kế LAN, WiFi, Firewall, Server an toàn.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-secondary -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-7 h-7 text-white" />
                  </div>
                  <div className="pr-5 py-2 flex-1 text-right">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Dịch vụ IT</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">IT Helpdesk, bảo trì định kỳ, xử lý sự cố.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-32 h-0.5 bg-gradient-to-l from-transparent to-secondary -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-5 overflow-hidden relative group hover:shadow-lg transition-shadow duration-200 ease-out-strong">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <div className="pr-5 py-2 flex-1 text-right">
                    <h4 className="font-black text-sm xl:whitespace-nowrap text-primary mb-1">Phần mềm & số hóa</h4>
                    <p className="text-xs text-slate-600 hidden md:block xl:whitespace-nowrap">Chữ ký số, hóa đơn điện tử, phần mềm quản lý.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-secondary -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-100 py-section border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 tracking-tight">
              Quy trình triển khai
            </h2>
            <p className="text-slate-600 text-lg">Bốn bước rõ ràng, minh bạch tiến độ, không phát sinh bất ngờ.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-300 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Tiếp nhận yêu cầu", desc: "Ghi nhận nhu cầu qua điện thoại hoặc trực tiếp.", icon: Search, color: "text-secondary", border: "group-hover:border-secondary", shadow: "shadow-secondary/30" },
                { title: "Khảo sát & tư vấn", desc: "Khảo sát thực tế, đề xuất giải pháp phù hợp ngân sách.", icon: FileText, color: "text-secondary", border: "group-hover:border-secondary", shadow: "shadow-secondary/30" },
                { title: "Triển khai lắp đặt", desc: "Thi công đúng tiến độ cam kết, an toàn, gọn gàng.", icon: Wrench, color: "text-secondary", border: "group-hover:border-secondary", shadow: "shadow-secondary/30" },
                { title: "Nghiệm thu & hỗ trợ", desc: "Bàn giao, hướng dẫn và hỗ trợ kỹ thuật lâu dài.", icon: Handshake, color: "text-secondary", border: "group-hover:border-secondary", shadow: "shadow-secondary/30" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    <div className={`w-24 h-24 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center ${step.border} group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-[border-color,box-shadow,transform] duration-200 ease-out-strong group-hover:-translate-y-1`}>
                      <step.icon className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <div className={`absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold font-mono shadow-md`}>
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-primary">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="du-an" className="scroll-mt-20 py-section-tight lg:py-section-tight-lg bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-3 tracking-tight">
              Dự án tiêu biểu
            </h2>
            <p className="text-slate-600 text-base max-w-2xl mx-auto">Mỗi dự án đều được thực hiện với tiêu chuẩn chất lượng cao nhất, dù lớn hay nhỏ.</p>
          </div>
          <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-shadow duration-200 ease-out-strong">
              <div className="h-36 bg-navy relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Server className="w-14 h-14 text-secondary group-hover:scale-110 transition-transform duration-300 ease-out-strong drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">HẠ TẦNG & MÁY CHỦ</span>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg text-primary mb-2 leading-snug">Bảo trì hệ thống máy chủ cho Doanh nghiệp quy mô lớn</h3>
                <p className="text-slate-600 text-sm mb-4">Quản trị, kiểm tra an toàn định kỳ, tối ưu hóa hiệu năng hệ thống server và bảo đảm tính sẵn sàng cao (High Availability) phục vụ tác nghiệp doanh nghiệp 24/7.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-2 cursor-pointer ">
                  Xem chi tiết <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-shadow duration-200 ease-out-strong">
              <div className="h-36 bg-navy relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Shield className="w-14 h-14 text-secondary group-hover:scale-110 transition-transform duration-300 ease-out-strong drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">HỆ THỐNG AN NINH</span>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg text-primary mb-2 leading-snug">Thi công hệ thống an ninh cho Công ty Công nghệ APA</h3>
                <p className="text-slate-600 text-sm mb-4">Triển khai hệ thống camera IP giám sát thông minh, kiểm soát an ninh đa tầng và lưu trữ dữ liệu tập trung phục vụ sản xuất công nghệ cao.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-2 cursor-pointer ">
                  Xem chi tiết <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-shadow duration-200 ease-out-strong">
              <div className="h-36 bg-navy relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Monitor className="w-14 h-14 text-secondary group-hover:scale-110 transition-transform duration-300 ease-out-strong drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">TRANG BỊ MÁY TÍNH</span>
              </div>
              <div className="p-5">
                <h3 className="font-black text-lg text-primary mb-2 leading-snug">Cung cấp, trang bị máy tính cho các trường học trên địa bàn</h3>
                <p className="text-slate-600 text-sm mb-4">Cung cấp và lắp đặt đồng bộ phòng máy tính chuyên dụng, cấu hình mạng nội bộ và hỗ trợ kỹ thuật phục vụ công tác giảng dạy tin học.</p>
                <div className="text-primary text-sm font-bold flex items-center gap-2 cursor-pointer ">
                  Xem chi tiết <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy py-section relative overflow-hidden border-t border-navy-line">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Khách hàng nói gì
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-base">"Hệ thống máy chủ yêu cầu tính ổn định rất cao và quy trình nghiêm ngặt. Đội ngũ kỹ thuật Phát Lộc Tech phối hợp kiểm tra định kỳ đúng lịch, hỗ trợ kỹ thuật kịp thời khi có cảnh báo nên chúng tôi rất yên tâm trong ca trực."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">M</div>
                <div>
                  <h4 className="font-bold text-white">Anh Trần Minh</h4>
                  <p className="text-sm text-slate-400">Trưởng nhóm Kỹ thuật Hệ thống, Doanh nghiệp TM&DV</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-base">"Khu vực xưởng sản xuất công nghệ cao đòi hỏi camera bao quát góc rộng và quan sát rõ cả ban đêm. Các bạn thi công dây gọn gàng, hướng dẫn phần mềm xem trực tiếp trên điện thoại rất chi tiết, nhiệt tình."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">N</div>
                <div>
                  <h4 className="font-bold text-white">Anh Hoàng Nam</h4>
                  <p className="text-sm text-slate-400">Phụ trách Vận hành, Công ty Công nghệ APA</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative flex flex-col justify-between">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-base">"Trường nâng cấp phòng máy tính cho học sinh thực hành, bên Phát Lộc giao máy đúng hẹn, cấu hình cài đặt sẵn đồng bộ. Khi phòng máy có phát sinh sự cố nhỏ là kỹ thuật hỗ trợ kiểm tra xử lý ngay."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-navy rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">H</div>
                <div>
                  <h4 className="font-bold text-white">Thầy Lê Văn Hùng</h4>
                  <p className="text-sm text-slate-400">Phụ trách phòng Tin học trường học</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="bao-gia" className="bg-white py-section border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            
            {/* Form Info Side */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-primary to-navy p-10 lg:p-14 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-4 leading-tight">Yêu cầu<br/><span className="text-secondary">tư vấn báo giá</span></h2>
                <p className="text-slate-300 mb-10 leading-relaxed">
                  Để lại thông tin liên hệ và nhu cầu của bạn. Kỹ thuật viên của chúng tôi sẽ gọi lại ngay để khảo sát và lên báo giá chi tiết, hoàn toàn miễn phí.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <HeadphonesIcon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-bold mb-1 opacity-70">Hotline 24/7</p>
                    <p className="font-black text-lg text-white">0932 685 794</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Fields Side */}
            <div className="w-full md:w-7/12 p-10 lg:p-14 bg-white">
              <LeadForm
                source="trang-chu"
                notePlaceholder="Ví dụ: Cần lắp 8 camera cho nhà xưởng..."
                submitLabel="Gửi Yêu Cầu Báo Giá"
                buttonClassName="w-full py-6 text-lg font-bold bg-accent hover:bg-accent-hover text-white rounded-xl shadow-lg shadow-accent/30"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
