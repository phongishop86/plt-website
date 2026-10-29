import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PolicyPage, type PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Chính sách bảo hành",
  "Chính sách bảo hành sản phẩm và dịch vụ của Phát Lộc Tech: thời hạn, điều kiện, quy trình tiếp nhận bảo hành máy tính, camera, thiết bị mạng.",
  "/chinh-sach-bao-hanh",
);

const sections: PolicySection[] = [
  { heading: "Thời hạn bảo hành", items: ["Thời hạn bảo hành theo chính sách của nhà sản xuất và được ghi rõ trên hóa đơn, phiếu bảo hành hoặc tem bảo hành của từng sản phẩm.", "Dịch vụ lắp đặt, thi công do Phát Lộc Tech thực hiện được bảo hành theo thời hạn ghi trong hợp đồng hoặc biên bản nghiệm thu."] },
  { heading: "Điều kiện được bảo hành", items: ["Sản phẩm còn trong thời hạn bảo hành, tem bảo hành và số serial còn nguyên vẹn.", "Lỗi phát sinh do nhà sản xuất hoặc do quá trình thi công, lắp đặt của Phát Lộc Tech."] },
  { heading: "Trường hợp không được bảo hành", items: ["Sản phẩm hư hỏng do rơi vỡ, va đập, vào nước, cháy nổ, côn trùng hoặc thiên tai.", "Sản phẩm bị tự ý tháo mở, sửa chữa, thay đổi linh kiện bởi bên không được ủy quyền.", "Sử dụng sai hướng dẫn, nguồn điện không ổn định hoặc môi trường không phù hợp.", "Phần mềm, dữ liệu, virus; Phát Lộc Tech không chịu trách nhiệm về mất mát dữ liệu, khách hàng vui lòng sao lưu trước khi gửi bảo hành."] },
  { heading: "Quy trình bảo hành", items: ["Liên hệ hotline 0932 685 794 hoặc Zalo để mô tả lỗi và đặt lịch kiểm tra.", "Mang sản phẩm đến văn phòng hoặc yêu cầu kỹ thuật viên kiểm tra tại chỗ (áp dụng theo khu vực và hợp đồng).", "Phát Lộc Tech thông báo kết quả kiểm tra và thời gian xử lý dự kiến cho khách hàng."] },
];

export default function Page() {
  return (
    <PolicyPage
      title="Chính sách bảo hành"
      intro="Phát Lộc Tech cam kết cung cấp sản phẩm chính hãng và hỗ trợ bảo hành nhanh chóng, minh bạch cho mọi khách hàng."
      sections={sections}
      updated="29/10/2026"
    />
  );
}
