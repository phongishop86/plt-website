import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PolicyPage, type PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Chính sách vận chuyển & giao nhận",
  "Chính sách vận chuyển, giao nhận và lắp đặt thiết bị CNTT của Phát Lộc Tech tại TP.HCM và các tỉnh thành.",
  "/chinh-sach-van-chuyen",
);

const sections: PolicySection[] = [
  { heading: "Phạm vi giao hàng", items: ["Giao hàng và lắp đặt trực tiếp tại TP. Hồ Chí Minh và khu vực lân cận.", "Các tỉnh thành khác giao qua đơn vị vận chuyển uy tín."] },
  { heading: "Thời gian giao hàng", items: ["Thời gian giao hàng dự kiến được thông báo khi xác nhận đơn, tùy tình trạng hàng sẵn có và địa điểm nhận.", "Với dự án lắp đặt, tiến độ thực hiện theo kế hoạch đã thống nhất."] },
  { heading: "Phí vận chuyển", items: ["Phí giao hàng, lắp đặt được báo rõ trong báo giá trước khi khách hàng xác nhận đơn."] },
  { heading: "Kiểm tra khi nhận hàng", items: ["Khách hàng vui lòng kiểm tra tình trạng bên ngoài, số lượng, mẫu mã sản phẩm trước khi ký nhận.", "Nếu phát hiện hư hỏng, thiếu hàng, vui lòng ghi chú trên biên bản giao nhận và báo ngay cho Phát Lộc Tech qua hotline 0932 685 794."] },
];

export default function Page() {
  return (
    <PolicyPage
      title="Chính sách vận chuyển & giao nhận"
      intro="Phát Lộc Tech hỗ trợ giao hàng và lắp đặt tận nơi để thiết bị đến tay khách hàng an toàn, đúng hẹn."
      sections={sections}
      updated="29/10/2026"
    />
  );
}
