import Link from "next/link";
import { Phone, MapPin, Mail, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#001533] text-slate-300 py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg p-1">
                <img src="/PLT-Logo-VNPT-final.png" alt="Phát Lộc Tech" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-2xl text-white tracking-tight">PHÁT LỘC TECH</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Đối tác công nghệ toàn diện cho doanh nghiệp vừa và nhỏ. Chuyên cung cấp giải pháp máy tính, camera, hạ tầng mạng và phần mềm bản quyền chính hãng.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0693E3] shrink-0" />
                <span>Số 491/1 Trường Chinh, Phường Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0693E3] shrink-0" />
                <span className="font-bold text-white">0932 685 794</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0693E3] shrink-0" />
                <span>info@phatloctech.vn</span>
              </div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Dịch Vụ Lõi</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#giai-phap-ai" className="hover:text-[#0693E3] flex items-center gap-2 text-cyan-400 font-semibold"><ChevronRight className="w-4 h-4"/> Giải pháp AI Vận hành CNTT</Link></li>
              <li><Link href="/#dich-vu" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Hạ tầng mạng & Máy chủ</Link></li>
              <li><Link href="/#dich-vu" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Dịch vụ IT Helpdesk</Link></li>
              <li><Link href="/#dich-vu" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Camera an ninh giám sát</Link></li>
              <li><Link href="/#dich-vu" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Máy tính & TB văn phòng</Link></li>
              <li><Link href="/#dich-vu" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Phần mềm & Số hóa</Link></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Chính Sách</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Chính sách bảo hành</Link></li>
              <li><Link href="#" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Điều khoản giao dịch</Link></li>
              <li><Link href="#" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-[#0693E3] flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Vận chuyển & Giao nhận</Link></li>
            </ul>
          </div>

          {/* Map Col */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Bản Đồ</h4>
            <div className="w-full h-40 bg-slate-800 rounded-xl overflow-hidden border border-white/10">
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

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CÔNG TY TNHH PHÁT LỘC TECH. MST: 0319347662.</p>
          <p>Thiết kế với sự tận tâm.</p>
        </div>
      </div>
    </footer>
  );
}
