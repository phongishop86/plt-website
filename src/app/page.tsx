"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { ContactButton } from "@/components/ContactButton";
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

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target as HTMLSpanElement);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });

    counterRefs.current.forEach(c => {
      if (c) io.observe(c);
    });

    return () => io.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("svc"),
      note: formData.get("note"),
    };
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        alert("Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ sớm nhất.");
        form.reset();
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại.");
      }
    } catch (err) {
      alert("Không thể kết nối máy chủ.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* HERO SECTION (High-Tech Style) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#001533]">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image 
            src="/hero-bg.png" 
            alt="Futuristic Cityscape" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#001533] via-[#001533]/80 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-[#0693E3]/30 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-[#0693E3] animate-pulse" />
              <span className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest">
                Đổi Mới Sáng Tạo • Ứng Dụng Nền Tảng Claude AI
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
              Giải Pháp AI Vận Hành CNTT<br/>
              <span className="text-[#0693E3] drop-shadow-[0_0_20px_rgba(6,147,227,0.6)] inline-block mt-2">
                Cho Ngân Hàng & Doanh Nghiệp
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl leading-relaxed">
              Phát Lộc Tech phát triển các giải pháp trợ lý AI thông minh tích hợp trên nền tảng Claude, hỗ trợ đội ngũ IT tra cứu tài liệu kỹ thuật, tự động hóa tác nghiệp và chuẩn hóa hạ tầng số doanh nghiệp với tiêu chuẩn bảo mật khắt khe nhất.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="#giai-phap-ai">
                <Button size="lg" className="bg-[#FF6900] hover:bg-[#e65c00] text-white shadow-[0_0_20px_rgba(255,105,0,0.4)] px-8 py-6 text-lg rounded-xl h-full font-bold flex items-center gap-2">
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
      <section className="bg-gradient-to-r from-[#0693E3] to-[#003388] py-8 relative z-20 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/20 text-white">
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md">
                <span className="count" data-target="3" ref={(el) => { if(el) counterRefs.current[0] = el; }}>3</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Năm Kinh Nghiệm</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md">
                <span className="count" data-target="30" ref={(el) => { if(el) counterRefs.current[1] = el; }}>30</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Khách Hàng B2B</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md">
                <span className="count" data-target="100" ref={(el) => { if(el) counterRefs.current[2] = el; }}>100</span>+
              </div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Thiết Bị Lắp Đặt</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl md:text-5xl font-black mb-1 drop-shadow-md text-[#FF6900]">24/7</div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Hỗ Trợ Kỹ Thuật</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI SOLUTIONS SECTION - POWERED BY CLAUDE */}
      <section id="giai-phap-ai" className="py-24 bg-gradient-to-b from-[#001533] via-[#002244] to-[#001533] text-white relative overflow-hidden">
        {/* Decorative Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#0693E3_1px,transparent_1px)] [background-size:32px_32px] opacity-15"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0693E3]/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0693E3]/15 border border-[#0693E3]/30 text-[#0693E3] text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-4 h-4" /> Powered by Claude AI
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-wide">
              Hệ Thống Trợ Lý AI & <span className="text-[#0693E3]">Lộ Trình Phát Triển</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
              Định vị trở thành đối tác tiên phong ứng dụng trí tuệ nhân tạo (Claude AI) vào quản trị hạ tầng, hỗ trợ vận hành tác nghiệp cho các tổ chức tài chính, ngân hàng và doanh nghiệp.
            </p>
          </div>

          {/* 3 Pillars / Phases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Phase 1 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-[#0693E3]/50 transition-all hover:-translate-y-1 group relative flex flex-col justify-between">
              <div className="absolute top-6 right-6 px-3 py-1 bg-[#FF6900] text-white text-xs font-black uppercase rounded-full shadow-lg">
                Ưu tiên cốt lõi
              </div>
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0693E3] to-[#003388] flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-[#0693E3] uppercase tracking-wider mb-2">Giai đoạn 1</div>
                <h3 className="text-2xl font-black mb-4 text-white">AI IT Assistant</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Trợ lý thông minh đồng hành cùng kỹ sư IT ngân hàng & doanh nghiệp tra cứu quy trình, hướng dẫn chẩn đoán sự cố phần cứng/mạng và tự động soạn thảo báo cáo bảo trì định kỳ.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0693E3] shrink-0 mt-0.5" />
                    <span>Hướng dẫn troubleshooting mạng/máy chủ từng bước</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0693E3] shrink-0 mt-0.5" />
                    <span>Tra cứu tài liệu quy trình chuẩn (SOP) theo ngữ cảnh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0693E3] shrink-0 mt-0.5" />
                    <span>Tự động tổng hợp log sự cố & lập báo cáo kỹ thuật</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-blue-200 font-semibold">
                🎯 Mục tiêu: Giảm 60% thời gian phản hồi sự cố (MTTR)
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-[#0693E3]/50 transition-all hover:-translate-y-1 group relative flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Giai đoạn 2</div>
                <h3 className="text-2xl font-black mb-4 text-white">Knowledge Search & Automation</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Hệ thống tìm kiếm ngữ nghĩa thông minh và tự động hóa tác nghiệp lặp lại. Phân loại ticket và điều phối yêu cầu hỗ trợ kỹ thuật tự động.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Tìm kiếm ngữ nghĩa tài liệu kỹ thuật bảo mật nội bộ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Tự động phân loại & định tuyến ticket hỗ trợ IT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Kiểm soát phân quyền chặt chẽ (RBAC) cho ngân hàng</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-indigo-200 font-semibold">
                🎯 Mục tiêu: Tự động hóa 70% các tác vụ tra cứu & báo cáo
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md hover:border-[#0693E3]/50 transition-all hover:-translate-y-1 group relative flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Giai đoạn 3</div>
                <h3 className="text-2xl font-black mb-4 text-white">Digital Solutions & Ecosystem</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Tích hợp trợ lý AI thông minh vào hệ thống website doanh nghiệp và các nền tảng số hóa quản trị tác nghiệp chuyên biệt.
                </p>
                <ul className="space-y-3 text-sm text-slate-300 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Phát triển website thông minh tích hợp trợ lý Claude</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Hệ thống quản lý đăng ký & điều hành hội thao doanh nghiệp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Tự động hóa bốc thăm, xếp lịch và cập nhật kết quả thi đấu</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-white/10 text-xs text-emerald-200 font-semibold">
                🎯 Mục tiêu: Hệ sinh thái chuyển đổi số doanh nghiệp toàn diện
              </div>
            </div>

          </div>

          {/* BANKING DATA SECURITY BANNER */}
          <div className="bg-gradient-to-r from-blue-950 to-slate-900 border border-[#0693E3]/30 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#0693E3]/20 border border-[#0693E3]/40 flex items-center justify-center text-[#0693E3] shrink-0">
                <Lock className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  Cam Kết Bảo Mật Chuẩn Ngân Hàng & Quyền Riêng Tư Dữ Liệu
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                  Các giải pháp AI của Phát Lộc Tech được thiết kế theo nguyên tắc <strong>Privacy-First & Zero Data Retention</strong>: Dữ liệu kỹ thuật và truy vấn nội bộ của ngân hàng tuyệt đối không được dùng để tái huấn luyện mô hình. Mã hóa toàn diện chuẩn TLS 1.3 và AES-256.
                </p>
              </div>
            </div>
            <Link href="#bao-gia" className="shrink-0">
              <Button className="bg-[#0693E3] hover:bg-[#003388] text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-blue-500/30 border-0">
                Tư vấn giải pháp AI
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* ABOUT / WHY CHOOSE US */}
      <section id="gioi-thieu" className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-6 uppercase tracking-wide">
              Đối Tác Tận Tâm,<br className="md:hidden"/> Làm Việc Nghiêm Túc
            </h2>
            <p className="text-lg text-slate-600">
              Chúng tôi không phải doanh nghiệp lớn nhất, nhưng cam kết là đối tác phản hồi nhanh nhất và minh bạch nhất với từng khách hàng B2B của mình.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Phản hồi trong 30 phút", desc: "Yêu cầu tư vấn hoặc báo giá được đội ngũ kỹ thuật phản hồi ngay lập tức." },
              { icon: Shield, title: "Chính hãng 100%", desc: "Toàn bộ thiết bị có nguồn gốc rõ ràng, đầy đủ CO/CQ, không hàng trôi nổi." },
              { icon: CheckCircle, title: "Bảo hành 1 đổi 1", desc: "Chính sách bảo hành rõ ràng, hỗ trợ đổi trả cực nhanh khi có lỗi." },
              { icon: FileText, title: "Giá cả minh bạch", desc: "Báo giá chi tiết từng hạng mục, không phát sinh chi phí ẩn." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all group">
                <div className="w-14 h-14 bg-blue-50 text-[#0693E3] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0693E3] group-hover:text-white transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-[#003388] mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM DIAGRAM */}
      <section id="dich-vu" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-6 uppercase tracking-wide">
              Hệ Sinh Thái<br className="md:hidden"/> Giải Pháp Toàn Diện
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Từ trang bị thiết bị đến vận hành hạ tầng và số hóa quy trình — doanh nghiệp chỉ cần làm việc với một đầu mối liên hệ duy nhất.
            </p>
          </div>

          <div className="max-w-6xl mx-auto relative mb-10">
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(6,147,227,0.3)] bg-white rounded-full p-2 border-4 border-slate-50">
                <img src="/PLT-Logo-VNPT-final.png" alt="PLT Logo Ecosystem" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Left and Right Spokes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-y-16 lg:gap-x-80 relative z-10">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-6 lg:gap-16">
                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-black text-lg text-pink-600 uppercase mb-1">Máy tính & Laptop</h4>
                    <p className="text-sm text-slate-600 hidden md:block">Cung cấp máy tính văn phòng, laptop doanh nghiệp.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-pink-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-black text-lg text-purple-600 uppercase mb-1">Camera Giám Sát</h4>
                    <p className="text-sm text-slate-600 hidden md:block">Thi công camera an ninh văn phòng, nhà xưởng.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent to-purple-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center pr-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-black text-lg text-cyan-600 uppercase mb-1">Thiết bị văn phòng</h4>
                    <p className="text-sm text-slate-600 hidden md:block">Máy in, máy chiếu, thiết bị phòng họp.</p>
                  </div>
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-6 lg:gap-16">
                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <Server className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-black text-lg text-blue-700 uppercase mb-1">Hạ Tầng Mạng</h4>
                    <p className="text-sm text-slate-600 hidden md:block">Thiết kế LAN, WiFi, Firewall, Server an toàn.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-blue-600 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600 shadow-[0_0_10px_#2563eb]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-black text-lg text-emerald-600 uppercase mb-1">Dịch Vụ IT</h4>
                    <p className="text-sm text-slate-600 hidden md:block">IT Helpdesk, bảo trì định kỳ, xử lý sự cố.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-32 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-full shadow-sm border border-slate-200 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-black text-lg text-orange-500 uppercase mb-1">Phần mềm & Số hóa</h4>
                    <p className="text-sm text-slate-600 hidden md:block">Chữ ký số, hóa đơn điện tử, phần mềm quản lý.</p>
                  </div>
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-orange-500 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_#f59e0b]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-100 py-20 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-6 uppercase tracking-wide">
              Quy Trình Triển Khai
            </h2>
            <p className="text-slate-600 text-lg">Bốn bước rõ ràng, minh bạch tiến độ, không phát sinh bất ngờ.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-300 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { title: "Tiếp nhận yêu cầu", desc: "Ghi nhận nhu cầu qua điện thoại hoặc trực tiếp.", icon: Search, color: "text-[#00d084]", border: "border-[#00d084]", shadow: "shadow-[#00d084]/30" },
                { title: "Khảo sát & tư vấn", desc: "Khảo sát thực tế, đề xuất giải pháp phù hợp ngân sách.", icon: FileText, color: "text-[#003388]", border: "border-[#003388]", shadow: "shadow-[#003388]/30" },
                { title: "Triển khai lắp đặt", desc: "Thi công đúng tiến độ cam kết, an toàn, gọn gàng.", icon: Wrench, color: "text-[#ff6900]", border: "border-[#ff6900]", shadow: "shadow-[#ff6900]/30" },
                { title: "Nghiệm thu & hỗ trợ", desc: "Bàn giao, hướng dẫn và hỗ trợ kỹ thuật lâu dài.", icon: Handshake, color: "text-[#0693e3]", border: "border-[#0693e3]", shadow: "shadow-[#0693e3]/30" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative mb-6 group">
                    <div className={`w-24 h-24 bg-white rounded-2xl border-2 border-slate-200 shadow-sm flex items-center justify-center group-hover:${step.border} group-hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all transform group-hover:-translate-y-2`}>
                      <step.icon className={`w-10 h-10 ${step.color}`} />
                    </div>
                    <div className={`absolute -top-3 -right-3 w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center font-bold font-mono shadow-md`}>
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-[#003388]">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="du-an" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-6 uppercase tracking-wide">
              Dự Án Tiêu Biểu
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Mỗi dự án đều được thực hiện với tiêu chuẩn chất lượng cao nhất, dù lớn hay nhỏ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all">
              <div className="h-56 bg-[#001533] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Server className="w-20 h-20 text-[#0693E3] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">HẠ TẦNG MẠNG</span>
              </div>
              <div className="p-8">
                <h3 className="font-black text-xl text-[#003388] mb-3 leading-snug">Hệ thống mạng văn phòng - TNHH TM Sao Việt</h3>
                <p className="text-slate-600 text-sm mb-6">Thiết kế lại sơ đồ mạng, thay thế switch cũ, phủ sóng WiFi ổn định cho 40 nhân sự và lắp đặt tủ mạng gọn gàng.</p>
                <div className="text-[#FF6900] text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all">
              <div className="h-56 bg-[#001533] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Shield className="w-20 h-20 text-[#0693E3] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">CAMERA GIÁM SÁT</span>
              </div>
              <div className="p-8">
                <h3 className="font-black text-xl text-[#003388] mb-3 leading-snug">Hệ thống an ninh - Xưởng may Bình Tân</h3>
                <p className="text-slate-600 text-sm mb-6">Triển khai 24 camera IP độ phân giải cao, hồng ngoại ban đêm bao quát toàn bộ khu vực xưởng sản xuất 1000m2.</p>
                <div className="text-[#FF6900] text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-xl transition-all">
              <div className="h-56 bg-[#001533] relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e3a6a_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <Monitor className="w-20 h-20 text-[#0693E3] group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,147,227,0.5)]" />
                <span className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded text-xs font-bold font-mono border border-white/20">MÁY TÍNH DOANH NGHIỆP</span>
              </div>
              <div className="p-8">
                <h3 className="font-black text-xl text-[#003388] mb-3 leading-snug">Trang bị dàn PC - Đại lý An Phát</h3>
                <p className="text-slate-600 text-sm mb-6">Cung cấp và setup 15 bộ máy tính đồng bộ cấu hình văn phòng cùng máy in mạng dùng chung cho chi nhánh mới.</p>
                <div className="text-[#FF6900] text-sm font-bold flex items-center gap-2 cursor-pointer group-hover:gap-3 transition-all">
                  Xem chi tiết <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#001533] py-24 relative overflow-hidden border-t border-[#1e3a6a]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-wide">
              Khách Hàng Nói Gì
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">"Đội kỹ thuật khảo sát kỹ trước khi báo giá, không đội chi phí lên như một số nơi mình từng làm việc. Rất an tâm."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0693E3] to-[#003388] rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">H</div>
                <div>
                  <h4 className="font-bold text-white">Chị Ngọc Hà</h4>
                  <p className="text-sm text-slate-400">Chủ đại lý bảo hiểm An Phát</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">"Hệ thống camera lắp cho xưởng chạy ổn định, có sự cố là kỹ thuật viên hỗ trợ từ xa xử lý ngay lập tức."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6900] to-red-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">B</div>
                <div>
                  <h4 className="font-bold text-white">Anh Quốc Bảo</h4>
                  <p className="text-sm text-slate-400">Quản lý xưởng may Bình Tân</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-lg">"Là công ty mới nhưng tác phong cực kỳ chuyên nghiệp, hợp đồng rõ ràng, bảo hành nhanh gọn không đôi co."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-700 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">T</div>
                <div>
                  <h4 className="font-bold text-white">Anh Minh Tuấn</h4>
                  <p className="text-sm text-slate-400">Giám đốc TNHH TM Sao Việt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="bao-gia" className="bg-white py-24 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-slate-50 rounded-3xl shadow-xl border border-slate-200 overflow-hidden flex flex-col md:flex-row">
            
            {/* Form Info Side */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#003388] to-[#001533] p-10 lg:p-14 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-black mb-4 leading-tight">Yêu Cầu<br/><span className="text-[#0693E3]">Tư Vấn Báo Giá</span></h2>
                <p className="text-slate-300 mb-10 leading-relaxed">
                  Để lại thông tin liên hệ và nhu cầu của bạn. Kỹ thuật viên của chúng tôi sẽ gọi lại ngay để khảo sát và lên báo giá chi tiết, hoàn toàn miễn phí.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <HeadphonesIcon className="w-5 h-5 text-[#0693E3]" />
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Họ và Tên *</label>
                    <input id="name" name="name" type="text" placeholder="Nhập họ tên" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Số điện thoại *</label>
                    <input id="phone" name="phone" type="tel" placeholder="09xx xxx xxx" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="svc" className="block text-sm font-bold text-slate-700 mb-2">Loại dịch vụ quan tâm</label>
                  <select id="svc" name="svc" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]">
                    <option>Máy tính & Laptop</option>
                    <option>Camera giám sát</option>
                    <option>Thiết bị văn phòng</option>
                    <option>Hạ tầng mạng</option>
                    <option>Dịch vụ IT</option>
                    <option>Phần mềm & Số hóa</option>
                    <option>Khác</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="note" className="block text-sm font-bold text-slate-700 mb-2">Chi tiết nhu cầu</label>
                  <textarea id="note" name="note" rows={4} placeholder="Ví dụ: Cần lắp 8 camera cho nhà xưởng..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]"></textarea>
                </div>
                <Button type="submit" className="w-full py-6 text-lg font-bold bg-[#FF6900] hover:bg-[#e65c00] text-white rounded-xl shadow-lg shadow-orange-500/30">
                  Gửi Yêu Cầu Báo Giá
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
