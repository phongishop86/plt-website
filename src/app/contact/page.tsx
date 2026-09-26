"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { 
  Phone, 
  MapPin, 
  Mail, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  UserCircle2
} from "lucide-react";

export default function ContactPage() {
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
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#001533]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            src="/hero-bg.png" 
            alt="Futuristic Cityscape" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#001533] to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-wide">
            Liên Hệ <span className="text-[#0693E3]">&</span> Hợp Tác
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và đưa ra giải pháp công nghệ tối ưu nhất cho doanh nghiệp của bạn.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 relative z-20 -mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto">
            
            {/* LEFT: DIRECTOR PROFILE */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden sticky top-32">
                {/* Profile Cover */}
                <div className="h-32 bg-gradient-to-r from-[#003388] to-[#0693E3] relative">
                  <div className="absolute -bottom-16 left-8">
                    <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
                      {/* Avatar Placeholder */}
                      <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-slate-50">
                        {/* We use an icon here, but the user can replace it with a real photo */}
                        <UserCircle2 className="w-20 h-20 text-slate-300" />
                        {/* Example if they have a real photo:
                        <Image src="/director.jpg" alt="Nguyễn Thanh Phong" fill className="object-cover" /> */}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="pt-20 px-8 pb-8">
                  <h2 className="text-2xl font-black text-[#003388] mb-1">Nguyễn Thanh Phong</h2>
                  <p className="text-[#FF6900] font-bold text-sm uppercase tracking-wider mb-6">Giám Đốc / Người Sáng Lập</p>
                  
                  <div className="space-y-4 text-slate-600 text-sm leading-relaxed mb-8">
                    <p>
                      Với hơn 5 năm kinh nghiệm chuyên sâu trong lĩnh vực hạ tầng mạng và tích hợp hệ thống cho doanh nghiệp vừa và nhỏ (SME).
                    </p>
                    <p>
                      Ông Nguyễn Thanh Phong không chỉ là người điều hành mà còn là chuyên gia trực tiếp tham gia khảo sát, thiết kế giải pháp nhằm đảm bảo mọi hệ thống triển khai đều đạt độ ổn định cao nhất với chi phí tối ưu nhất.
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-8 border-y border-slate-100 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0693E3]">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">Chuyên gia Mạng & Hệ thống</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0693E3]">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">Cam kết chất lượng 100%</span>
                    </div>
                  </div>

                  {/* Contact Direct */}
                  <div className="space-y-4">
                    <a href="tel:0932685794" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#FF6900] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Hotline Trực Tiếp</p>
                        <p className="font-bold text-slate-800">0932 685 794</p>
                      </div>
                    </a>
                    
                    <a href="mailto:phatloctech.ltd@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#0693E3] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">Email</p>
                        <p className="font-bold text-slate-800">phatloctech.ltd@gmail.com</p>
                      </div>
                    </a>
                  </div>
                  
                  {/* vCard Download */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <a href="/contact/Mr_Phong.vcf" download="Mr_Phong.vcf" className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors">
                      <UserCircle2 className="w-5 h-5" />
                      Lưu danh bạ (vCard)
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM & INFO */}
            <div className="w-full lg:w-7/12 flex flex-col gap-8">
              
              {/* Form Card */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
                <h3 className="text-2xl font-black text-[#003388] mb-2">Gửi Yêu Cầu Cho Chúng Tôi</h3>
                <p className="text-slate-500 mb-8">Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 30 phút (giờ hành chính).</p>
                
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
                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input id="email" name="email" type="email" placeholder="ban@congty.vn" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]" />
                  </div>
                  <div>
                    <label htmlFor="svc" className="block text-sm font-bold text-slate-700 mb-2">Loại dịch vụ quan tâm</label>
                    <select id="svc" name="svc" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]">
                      <option>Máy tính & Laptop</option>
                      <option>Camera giám sát</option>
                      <option>Thiết bị văn phòng</option>
                      <option>Hạ tầng mạng</option>
                      <option>Dịch vụ IT Helpdesk</option>
                      <option>Phần mềm & Số hóa</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="note" className="block text-sm font-bold text-slate-700 mb-2">Chi tiết nhu cầu</label>
                    <textarea id="note" name="note" rows={4} placeholder="Ví dụ: Cần lắp 8 camera cho nhà xưởng..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0693E3]"></textarea>
                  </div>
                  <Button type="submit" className="w-full py-6 text-lg font-bold bg-gradient-to-r from-[#0693E3] to-[#003388] text-white rounded-xl shadow-lg shadow-blue-500/30 border-0 hover:opacity-90">
                    Gửi Yêu Cầu
                  </Button>
                </form>
              </div>

              {/* Map Card */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="p-8 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div>
                    <h3 className="text-xl font-black text-[#003388]">Văn phòng Phát Lộc Tech</h3>
                    <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 text-[#FF6900]" />
                      <span>Số 491/1 Trường Chinh, P. Tân Bình, TP.HCM</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 text-[#003388] px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap">
                    MST: 0319347662
                  </div>
                </div>
                <div className="h-[300px] w-full">
                  <iframe 
                    src="https://www.google.com/maps?q=491%2F1+Tr%C6%B0%E1%BB%9Dng+Chinh%2C+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+B%C3%ACnh%2C+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
