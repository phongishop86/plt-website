import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Monitor, Server, Shield, Cloud, Code, FileDigit, Search, FileText, Wrench, Handshake, CheckCircle, HeadphonesIcon, TrendingUp, Cpu, HardDrive, Printer, MemoryStick, ChevronRight, Laptop } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION (Hình 2 Style) */}
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
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001533] via-[#001533]/80 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight uppercase">
              Kiến Tạo Hạ Tầng Số, <span className="text-[#0693E3] drop-shadow-[0_0_15px_rgba(6,147,227,0.5)] inline-block">Nâng Tầm Doanh Nghiệp</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
              Hệ sinh thái công nghệ toàn diện: từ máy tính chuyên dụng, hệ thống giám sát an ninh đến quản trị mạng và phần mềm bản quyền, đáp ứng khắt khe mọi quy mô.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Button size="lg" className="bg-[#FF6900] hover:bg-[#e65c00] text-white shadow-[0_0_20px_rgba(255,105,0,0.4)]">
                Nhận tư vấn ngay
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm">
                Tìm hiểu thêm
              </Button>
            </div>

            {/* Commitments Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white">Giải Pháp Toàn Diện</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white">Sản Phẩm Chính Hãng</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <HeadphonesIcon className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white">Hỗ Trợ 24/7</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-sm font-semibold text-white">Tối Ưu Hiệu Quả</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM DIAGRAM (Hình 1 Style) */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* High-tech dot background pattern */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-4 uppercase tracking-wide">
              Hệ Sinh Thái Giải Pháp Công Nghệ Toàn Diện
            </h2>
            <p className="text-lg text-slate-600 max-w-5xl mx-auto md:whitespace-nowrap">
              Đồng hành cùng doanh nghiệp trong mọi nhu cầu về hạ tầng CNTT, bảo mật, giám sát và chuyển đổi số.
            </p>
          </div>

          {/* Hub and Spoke Layout */}
          <div className="max-w-6xl mx-auto relative mt-20 mb-20">
            {/* Center Hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 relative flex items-center justify-center hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_30px_rgba(6,147,227,0.3)] bg-white rounded-full p-2">
                <img src="/PLT-Logo-VNPT-final.png" alt="PLT Logo Ecosystem" className="w-full h-full object-contain" />
              </div>
              <div className="mt-4 text-center bg-white px-6 py-2 rounded-xl shadow-lg border border-slate-100 hidden md:block">
                <h3 className="font-black text-xl text-[#003388]">PHÁT LỘC TECH</h3>
                <p className="text-sm text-slate-500 font-medium">Đối tác công nghệ toàn diện</p>
              </div>
            </div>

            {/* Left and Right Spokes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-16 lg:gap-x-96 relative z-10">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8 lg:gap-16">
                {/* Spoke 1: Máy tính & Laptop */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center pr-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0">
                    <Laptop className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-bold text-lg text-pink-600 mb-1">MÁY TÍNH & LAPTOP</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">Cung cấp máy tính, laptop, workstation và thiết bị chính hãng cho doanh nghiệp.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-pink-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-pink-500"></div>
                  </div>
                </div>

                {/* Spoke 2: Camera Giám Sát */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center pr-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-bold text-lg text-purple-600 mb-1">CAMERA GIÁM SÁT</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">Thi công và lắp đặt hệ thống camera giám sát chất lượng cao cho mọi mô hình.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute right-0 top-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent to-purple-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500"></div>
                  </div>
                </div>

                {/* Spoke 3: Thiết bị văn phòng */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center pr-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-10 h-10 text-white" />
                  </div>
                  <div className="pl-6 py-4 flex-1">
                    <h4 className="font-bold text-lg text-cyan-600 mb-1">THIẾT BỊ VĂN PHÒNG</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">Cung cấp máy in, máy chiếu, UPS và vật tư chính hãng.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute right-0 top-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent to-cyan-500 translate-x-full z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500"></div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-8 lg:gap-16">
                {/* Spoke 4: Hạ Tầng Mạng */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <Server className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-bold text-lg text-blue-700 mb-1">HẠ TẦNG MẠNG</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">Thiết kế và triển khai hệ thống mạng LAN, WiFi, Firewall, Server chuyên nghiệp.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-blue-600 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                </div>

                {/* Spoke 5: Dịch Vụ IT */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-bold text-lg text-emerald-600 mb-1">DỊCH VỤ IT</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">IT Helpdesk, bảo trì hệ thống, quản trị mạng và hỗ trợ kỹ thuật 24/7.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-32 h-0.5 bg-gradient-to-l from-transparent to-emerald-500 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                </div>

                {/* Spoke 6: Phần mềm & Số hóa */}
                <div className="bg-white rounded-full shadow-lg border border-slate-100 flex items-center flex-row-reverse pl-8 overflow-hidden relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                    <Cloud className="w-10 h-10 text-white" />
                  </div>
                  <div className="pr-6 py-4 flex-1 text-right">
                    <h4 className="font-bold text-lg text-orange-500 mb-1">PHẦN MỀM & SỐ HÓA</h4>
                    <p className="text-sm text-slate-500 leading-tight hidden md:block">Hóa đơn điện tử, chữ ký số, phần mềm quản lý và giải pháp chuyển đổi số.</p>
                  </div>
                  {/* Connecting Line (Desktop only) */}
                  <div className="hidden lg:block absolute left-0 top-1/2 w-48 h-0.5 bg-gradient-to-l from-transparent to-orange-500 -translate-x-full z-0">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT GRID (Trang thiết bị - Hình 2 Style) */}
      <section className="bg-[#0f1d3a] py-20 border-y border-[#1e3a6a]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px bg-[#1e3a6a] flex-1 max-w-[200px]"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wide text-center">
              TRANG THIẾT BỊ
            </h2>
            <div className="h-px bg-[#1e3a6a] flex-1 max-w-[200px]"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Equipment 1 */}
            <div className="bg-[#001533] border border-[#1e3a6a] rounded-lg p-4 hover:border-[#0693E3] transition-colors group">
              <h3 className="font-bold text-white mb-1 group-hover:text-[#0693E3] transition-colors">THIẾT BỊ MẠNG</h3>
              <p className="text-xs text-slate-400 mb-6 line-clamp-2">Switch, Router, WiFi, Firewall, Access Point...</p>
              <div className="h-24 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <Server className="w-16 h-16 text-[#0693E3]" />
              </div>
            </div>
            
            {/* Equipment 2 */}
            <div className="bg-[#001533] border border-[#1e3a6a] rounded-lg p-4 hover:border-[#0693E3] transition-colors group">
              <h3 className="font-bold text-white mb-1 group-hover:text-[#0693E3] transition-colors">THIẾT BỊ LƯU TRỮ</h3>
              <p className="text-xs text-slate-400 mb-6 line-clamp-2">NAS, Server, HDD, SSD, Thiết bị backup...</p>
              <div className="h-24 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <HardDrive className="w-16 h-16 text-[#0693E3]" />
              </div>
            </div>

            {/* Equipment 3 */}
            <div className="bg-[#001533] border border-[#1e3a6a] rounded-lg p-4 hover:border-[#0693E3] transition-colors group">
              <h3 className="font-bold text-white mb-1 group-hover:text-[#0693E3] transition-colors">THIẾT BỊ AN NINH</h3>
              <p className="text-xs text-slate-400 mb-6 line-clamp-2">Camera, Đầu ghi, Chuông cửa, Báo động...</p>
              <div className="h-24 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <Shield className="w-16 h-16 text-[#0693E3]" />
              </div>
            </div>

            {/* Equipment 4 */}
            <div className="bg-[#001533] border border-[#1e3a6a] rounded-lg p-4 hover:border-[#0693E3] transition-colors group">
              <h3 className="font-bold text-white mb-1 group-hover:text-[#0693E3] transition-colors">THIẾT BỊ VĂN PHÒNG</h3>
              <p className="text-xs text-slate-400 mb-6 line-clamp-2">Máy in, Máy chiếu, Máy scan, UPS...</p>
              <div className="h-24 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <Printer className="w-16 h-16 text-[#0693E3]" />
              </div>
            </div>

            {/* Equipment 5 */}
            <div className="bg-[#001533] border border-[#1e3a6a] rounded-lg p-4 hover:border-[#0693E3] transition-colors group col-span-2 lg:col-span-1">
              <h3 className="font-bold text-white mb-1 group-hover:text-[#0693E3] transition-colors">LINH KIỆN & PHỤ KIỆN</h3>
              <p className="text-xs text-slate-400 mb-6 line-clamp-2">CPU, RAM, SSD, Mainboard, Nguồn, Case, Phụ kiện...</p>
              <div className="h-24 relative flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                <MemoryStick className="w-16 h-16 text-[#0693E3]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENTS STRIP */}
      <section className="bg-[#001533] py-8 border-b border-[#1e3a6a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 divide-x divide-[#1e3a6a]">
            <div className="flex flex-col md:flex-row items-center gap-4 px-4 text-center md:text-left">
              <Shield className="w-10 h-10 text-[#0693E3] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">ĐA DẠNG THƯƠNG HIỆU</h4>
                <p className="text-xs text-slate-400">Phân phối chính hãng từ các thương hiệu uy tín.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-4 text-center md:text-left">
              <TrendingUp className="w-10 h-10 text-[#0693E3] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">GIÁ CẢ CẠNH TRANH</h4>
                <p className="text-xs text-slate-400">Tối ưu chi phí, hiệu quả đầu tư cao.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-4 text-center md:text-left">
              <Wrench className="w-10 h-10 text-[#0693E3] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">BẢO HÀNH CHUYÊN NGHIỆP</h4>
                <p className="text-xs text-slate-400">Bảo hành tận nơi, hỗ trợ nhanh chóng.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 px-4 text-center md:text-left">
              <Handshake className="w-10 h-10 text-[#0693E3] shrink-0" />
              <div>
                <h4 className="font-bold text-white text-sm">ĐỒNG HÀNH LÂU DÀI</h4>
                <p className="text-xs text-slate-400">Cam kết chất lượng, hợp tác bền vững.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: QUY TRÌNH LÀM VIỆC (Kept from previous) */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#003388] mb-4 uppercase tracking-wide">
              Quy Trình Triển Khai
            </h2>
            <p className="text-muted-foreground text-lg">Quy trình 4 bước bài bản giúp khách hàng dễ dàng theo dõi tiến độ công việc.</p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-slate-200 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#00d084] group-hover:shadow-[0_0_15px_rgba(0,208,132,0.3)] transition-all">
                    <Search className="w-8 h-8 text-slate-400 group-hover:text-[#00d084] transition-colors" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#00d084] text-white rounded-full border-2 border-white flex items-center justify-center font-bold">1</div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#003388]">Khảo Sát & Đánh Giá</h3>
                <p className="text-sm text-slate-500">Ghi nhận yêu cầu, khảo sát hạ tầng thực tế tận nơi.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#003388] group-hover:shadow-[0_0_15px_rgba(0,51,136,0.3)] transition-all">
                    <FileText className="w-8 h-8 text-slate-400 group-hover:text-[#003388] transition-colors" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#003388] text-white rounded-full border-2 border-white flex items-center justify-center font-bold">2</div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#003388]">Tư Vấn & Báo Giá</h3>
                <p className="text-sm text-slate-500">Lên phương án tối ưu kỹ thuật và chi phí, gửi báo giá chi tiết.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#ff6900] group-hover:shadow-[0_0_15px_rgba(255,105,0,0.3)] transition-all">
                    <Wrench className="w-8 h-8 text-slate-400 group-hover:text-[#ff6900] transition-colors" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#ff6900] text-white rounded-full border-2 border-white flex items-center justify-center font-bold">3</div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#003388]">Thi Công & Lắp Đặt</h3>
                <p className="text-sm text-slate-500">Kỹ thuật viên triển khai chuyên nghiệp, gọn gàng, an toàn.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="w-24 h-24 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-[#0693e3] group-hover:shadow-[0_0_15px_rgba(6,147,227,0.3)] transition-all">
                    <Handshake className="w-8 h-8 text-slate-400 group-hover:text-[#0693e3] transition-colors" />
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[#0693e3] text-white rounded-full border-2 border-white flex items-center justify-center font-bold">4</div>
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#003388]">Nghiệm Thu & Hỗ Trợ</h3>
                <p className="text-sm text-slate-500">Bàn giao, hướng dẫn sử dụng và bảo hành 1 đổi 1 tận nơi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
