import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-12 mt-16 border-t border-slate-800">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <h4 className="text-white font-bold text-xl mb-4">CÔNG TY TNHH PHÁT LỘC TECH</h4>
          <p className="text-sm mb-4">Đối tác công nghệ toàn diện cho doanh nghiệp vừa và nhỏ. Chuyên cung cấp giải pháp máy tính, camera, hạ tầng mạng và phần mềm.</p>
          <div className="text-sm space-y-1">
            <p><strong>Người đại diện:</strong> NGUYỄN THANH PHONG</p>
            <p><strong>MST:</strong> 0319347662</p>
            <p><strong>Địa chỉ:</strong> Số 491/1 Trường Chinh, Phường Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
            <p><strong>Hotline:</strong> 0932 685 794</p>
            <p><strong>Email:</strong> phatloctech.ltd@gmail.com</p>
          </div>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white font-bold text-lg mb-4">Dịch vụ</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/dich-vu/may-tinh" className="hover:text-white transition-colors">Máy tính doanh nghiệp</Link></li>
            <li><Link href="/dich-vu/camera" className="hover:text-white transition-colors">Camera giám sát</Link></li>
            <li><Link href="/dich-vu/mang" className="hover:text-white transition-colors">Hạ tầng mạng</Link></li>
            <li><Link href="/dich-vu/it-thue-ngoai" className="hover:text-white transition-colors">IT thuê ngoài</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-white font-bold text-lg mb-4">Chính sách</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white transition-colors">Bảo hành</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Đổi trả</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Bảo mật thông tin</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="text-white font-bold text-lg mb-4">Bản đồ</h4>
          <div className="w-full h-40 rounded-lg overflow-hidden bg-slate-800">
            <iframe 
              src="https://maps.google.com/maps?q=491/1%20Trường%20Chinh,%20Phường%2014,%20Tân%20Bình,%20Thành%20phố%20Hồ%20Chí%20Minh&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-sm text-center">
        © 2026 Phát Lộc Tech. All rights reserved.
      </div>
    </footer>
  );
}
