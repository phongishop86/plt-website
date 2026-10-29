import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PolicyPage, type PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Điều khoản giao dịch",
  "Điều khoản và điều kiện giao dịch khi mua hàng, sử dụng dịch vụ CNTT của Phát Lộc Tech: báo giá, đặt hàng, thanh toán, đổi trả.",
  "/dieu-khoan-giao-dich",
);

const sections: PolicySection[] = [
  { heading: "Báo giá và đặt hàng", items: ["Mọi báo giá được gửi bằng văn bản (email, Zalo hoặc file báo giá) và có hiệu lực trong thời hạn ghi trên báo giá.", "Đơn hàng được xác nhận khi hai bên thống nhất sản phẩm, số lượng, giá và thời gian giao hàng."] },
  { heading: "Giá và thanh toán", items: ["Giá sản phẩm, dịch vụ được niêm yết hoặc báo giá bằng Việt Nam đồng, đã hoặc chưa gồm VAT theo ghi chú trên báo giá.", "Hình thức thanh toán: tiền mặt hoặc chuyển khoản vào tài khoản đứng tên CÔNG TY TNHH PHÁT LỘC TECH.", "Với dự án, đơn hàng lớn, tiến độ thanh toán thực hiện theo hợp đồng ký kết."] },
  { heading: "Hóa đơn", items: ["Phát Lộc Tech xuất hóa đơn điện tử theo thông tin khách hàng cung cấp khi đặt hàng."] },
  { heading: "Đổi trả", items: ["Sản phẩm lỗi do nhà sản xuất khi giao hàng được đổi mới trong thời gian hai bên thỏa thuận, với điều kiện còn đầy đủ hộp, phụ kiện và tem niêm phong.", "Không áp dụng đổi trả với sản phẩm đã kích hoạt bản quyền phần mềm hoặc hàng đặt theo yêu cầu riêng, trừ khi có thỏa thuận khác."] },
  { heading: "Giải quyết tranh chấp", items: ["Mọi khiếu nại được tiếp nhận qua hotline, email và ưu tiên giải quyết bằng thương lượng.", "Trường hợp không thống nhất, tranh chấp được giải quyết theo quy định của pháp luật Việt Nam."] },
];

export default function Page() {
  return (
    <PolicyPage
      title="Điều khoản giao dịch"
      intro="Khi đặt hàng hoặc sử dụng dịch vụ của Phát Lộc Tech, quý khách đồng ý với các điều khoản dưới đây."
      sections={sections}
      updated="29/10/2026"
    />
  );
}
