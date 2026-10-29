import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import { PolicyPage, type PolicySection } from "@/components/PolicyPage";

export const metadata: Metadata = pageMeta(
  "Chính sách bảo mật",
  "Chính sách bảo mật thông tin khách hàng của Phát Lộc Tech: thông tin thu thập, mục đích sử dụng, thời gian lưu trữ và quyền của khách hàng.",
  "/chinh-sach-bao-mat",
);

const sections: PolicySection[] = [
  { heading: "Thông tin thu thập", items: ["Họ tên, số điện thoại, email, nhu cầu tư vấn do khách hàng tự nguyện cung cấp qua form liên hệ, điện thoại hoặc Zalo.", "Thông tin xuất hóa đơn (tên đơn vị, mã số thuế, địa chỉ) khi khách hàng mua hàng."] },
  { heading: "Mục đích sử dụng", items: ["Liên hệ tư vấn, gửi báo giá, giao hàng, bảo hành và chăm sóc khách hàng.", "Không sử dụng thông tin cho mục đích khác khi chưa có sự đồng ý của khách hàng."] },
  { heading: "Chia sẻ thông tin", items: ["Phát Lộc Tech không bán hoặc cho thuê thông tin khách hàng.", "Thông tin chỉ được chia sẻ với đơn vị vận chuyển, hãng bảo hành khi cần thiết để thực hiện đơn hàng, hoặc khi cơ quan nhà nước có thẩm quyền yêu cầu."] },
  { heading: "Lưu trữ và bảo vệ", items: ["Thông tin được lưu trữ trong thời gian cần thiết để phục vụ khách hàng và theo quy định về lưu trữ chứng từ kế toán.", "Áp dụng các biện pháp kỹ thuật phù hợp để hạn chế truy cập trái phép."] },
  { heading: "Quyền của khách hàng", items: ["Khách hàng có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân bằng cách liên hệ email info@phatloctech.vn hoặc hotline 0932 685 794."] },
];

export default function Page() {
  return (
    <PolicyPage
      title="Chính sách bảo mật"
      intro="Phát Lộc Tech tôn trọng và bảo vệ thông tin cá nhân của khách hàng theo quy định pháp luật Việt Nam về bảo vệ dữ liệu cá nhân."
      sections={sections}
      updated="29/10/2026"
    />
  );
}
