import { Laptop, Cctv, Network, Headset, FileSignature, Bot, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  short: string;
  examples: string[];
  icon: LucideIcon;
};

/** 6 dịch vụ cốt lõi — dùng chung cho trang chủ, form, chân trang. Thứ tự = mức ưu tiên kinh doanh. */
export const SERVICES: Service[] = [
  {
    slug: "may-tinh",
    name: "Máy tính & thiết bị văn phòng",
    short: "PC, laptop, màn hình, máy in, máy chiếu chính hãng, cài đặt sẵn trước khi giao.",
    examples: ["Trang bị đồng loạt cho văn phòng mới", "Phòng máy tin học cho trường học", "Nâng cấp RAM, SSD cho máy cũ"],
    icon: Laptop,
  },
  {
    slug: "camera",
    name: "Camera giám sát",
    short: "Khảo sát, thi công camera IP cho văn phòng, cửa hàng, nhà xưởng; xem trực tiếp trên điện thoại.",
    examples: ["Camera có màu ban đêm", "Lưu trữ 15–30 ngày", "Đi dây gọn, có bản vẽ vị trí"],
    icon: Cctv,
  },
  {
    slug: "ha-tang-mang",
    name: "Hạ tầng mạng & máy chủ",
    short: "Thiết kế LAN, WiFi phủ sóng, tường lửa, tủ rack và máy chủ lưu trữ cho doanh nghiệp.",
    examples: ["WiFi không rớt cho văn phòng 2–5 tầng", "Chia mạng khách và mạng nội bộ", "NAS sao lưu dữ liệu"],
    icon: Network,
  },
  {
    slug: "it-helpdesk",
    name: "IT helpdesk & bảo trì",
    short: "Thuê ngoài bộ phận IT: hỗ trợ từ xa, bảo trì định kỳ, xử lý sự cố tại chỗ.",
    examples: ["Gói bảo trì theo tháng", "Hỗ trợ từ xa trong giờ hành chính", "Báo cáo tình trạng thiết bị"],
    icon: Headset,
  },
  {
    slug: "phan-mem",
    name: "Phần mềm & số hóa",
    short: "Chữ ký số, hóa đơn điện tử, phần mềm bản quyền và công cụ quản lý nội bộ.",
    examples: ["Chữ ký số, hóa đơn điện tử", "Microsoft 365, Windows bản quyền", "Công cụ quản lý tài sản IT"],
    icon: FileSignature,
  },
  {
    slug: "giai-phap-ai",
    name: "Giải pháp AI vận hành CNTT",
    short: "Trợ lý AI giúp đội IT tra cứu quy trình, chẩn đoán sự cố và lập báo cáo nhanh hơn.",
    examples: ["Tra cứu tài liệu nội bộ", "Gợi ý xử lý sự cố từng bước", "Tự tổng hợp báo cáo bảo trì"],
    icon: Bot,
  },
];

export const SERVICE_OPTIONS = [...SERVICES.map((s) => s.name), "Khác"];
