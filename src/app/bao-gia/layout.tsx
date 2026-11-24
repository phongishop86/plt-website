import { notFound } from "next/navigation";

// Tạm ẩn trang tra cứu báo giá (bản mô phỏng) cho đến khi hoạt động thật.
export default function BaoGiaLayout({ children }: { children: React.ReactNode }) {
  void children;
  notFound();
}
