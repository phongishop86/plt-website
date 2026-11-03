import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo vệ dữ liệu cá nhân | Phát Lộc Tech",
  description:
    "Chính sách bảo vệ dữ liệu cá nhân của CÔNG TY TNHH PHÁT LỘC TECH: dữ liệu thu thập, mục đích, bên nhận, thời gian lưu trữ và quyền của chủ thể dữ liệu.",
  alternates: { canonical: "/chinh-sach-bao-mat" },
};

const H2 = "text-xl font-bold text-slate-900 mt-10 mb-3";

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-slate-700 leading-relaxed">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Chính sách bảo vệ dữ liệu cá nhân</h1>
      <p className="text-sm text-slate-500 mb-8">Cập nhật lần đầu: 03/11/2026</p>

      <h2 className={H2}>1. Đơn vị xử lý dữ liệu</h2>
      <p>
        CÔNG TY TNHH PHÁT LỘC TECH, mã số thuế 0319347662, địa chỉ Số 491/1 Trường Chinh, Phường Tân Bình,
        Thành phố Hồ Chí Minh. Người đại diện: Nguyễn Thanh Phong. Hotline 0932 685 794, email
        phatloctech.ltd@gmail.com.
      </p>

      <h2 className={H2}>2. Dữ liệu chúng tôi thu thập</h2>
      <p>
        Khi bạn gửi form liên hệ, nhận tư vấn hoặc yêu cầu báo giá trên website: họ tên, số điện thoại, email
        (nếu bạn nhập), loại dịch vụ quan tâm và nội dung bạn viết. Chúng tôi không thu thập dữ liệu nhạy cảm
        và không dùng cookie theo dõi hay công cụ phân tích quảng cáo trên website này.
      </p>

      <h2 className={H2}>3. Mục đích xử lý</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>Liên hệ lại, tư vấn giải pháp và gửi báo giá theo yêu cầu của bạn.</li>
        <li>Lưu lịch sử trao đổi để phục vụ hỗ trợ và chăm sóc khách hàng.</li>
      </ul>
      <p className="mt-3">Chúng tôi không bán dữ liệu cá nhân và không dùng cho mục đích khác khi chưa có sự đồng ý của bạn.</p>

      <h2 className={H2}>4. Cơ sở xử lý và sự đồng ý</h2>
      <p>
        Chúng tôi chỉ xử lý dữ liệu sau khi bạn tích chọn ô đồng ý (không tích sẵn) trên form. Thời điểm đồng ý
        được lưu cùng bản ghi để có thể kiểm chứng. Bạn có thể rút lại sự đồng ý bất cứ lúc nào bằng cách liên
        hệ qua email hoặc hotline ở mục 8.
      </p>

      <h2 className={H2}>5. Bên nhận và dịch vụ hỗ trợ xử lý dữ liệu</h2>
      <p>Để vận hành website và tiếp nhận yêu cầu, dữ liệu có thể được xử lý qua các dịch vụ sau, một số đặt máy chủ ngoài Việt Nam:</p>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Vercel (lưu trữ và vận hành website).</li>
        <li>Google Sheets (lưu danh sách yêu cầu liên hệ).</li>
        <li>FormSubmit (gửi email thông báo yêu cầu về hộp thư của công ty).</li>
      </ul>
      <p className="mt-3">
        Chúng tôi chỉ chia sẻ dữ liệu cho các bên này trong phạm vi cần thiết để thực hiện mục đích nêu trên,
        và cho cơ quan nhà nước có thẩm quyền khi pháp luật yêu cầu.
      </p>

      <h2 className={H2}>6. Thời gian lưu trữ</h2>
      <p>
        Dữ liệu được lưu trong thời gian cần thiết để tư vấn, báo giá và hỗ trợ sau đó. Khi không còn cần thiết
        hoặc khi bạn yêu cầu xóa, chúng tôi sẽ xóa hoặc ẩn danh dữ liệu, trừ trường hợp pháp luật yêu cầu lưu giữ.
      </p>

      <h2 className={H2}>7. Quyền của bạn</h2>
      <p>
        Bạn có quyền được biết, xem, chỉnh sửa, xóa, hạn chế xử lý, phản đối xử lý, rút lại sự đồng ý và khiếu
        nại về dữ liệu cá nhân của mình theo Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15 và Nghị định
        356/2025/NĐ-CP. Chúng tôi sẽ phản hồi yêu cầu trong thời hạn pháp luật quy định.
      </p>

      <h2 className={H2}>8. Cách liên hệ để thực hiện quyền</h2>
      <p>
        Gửi yêu cầu qua email phatloctech.ltd@gmail.com hoặc gọi hotline 0932 685 794, kèm họ tên và số điện
        thoại đã dùng khi gửi form để chúng tôi xác minh.
      </p>

      <h2 className={H2}>9. Thay đổi chính sách</h2>
      <p>
        Khi có thay đổi quan trọng (ví dụ bổ sung công cụ theo dõi hoặc chức năng đặt hàng), chúng tôi sẽ cập
        nhật trang này và xin lại sự đồng ý nếu pháp luật yêu cầu.
      </p>
    </div>
  );
}
