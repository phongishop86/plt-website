import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Monitor, Shield } from "lucide-react";
import { QuoteRequestBox } from "./QuoteRequestBox";

export const metadata: Metadata = pageMeta(
  "Báo giá máy tính, camera, hạ tầng mạng cho doanh nghiệp",
  "Nhận báo giá miễn phí máy tính văn phòng, camera giám sát, hạ tầng mạng và máy chủ cho doanh nghiệp tại TP.HCM. Phát Lộc Tech phản hồi trong 30 phút giờ hành chính.",
  "/bao-gia",
);

const SAMPLE_PRODUCTS = [
  {
    icon: Monitor,
    title: "Máy tính văn phòng Dell OptiPlex",
    desc: "Core i5 12th Gen, 8GB RAM, 256GB SSD. Đáp ứng tốt nhu cầu văn phòng cơ bản.",
  },
  {
    icon: Shield,
    title: "Bộ 4 Camera Hikvision 2MP",
    desc: "Gồm đầu ghi, 4 mắt camera, ổ cứng 1TB. Bao công lắp đặt tận nơi.",
  },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Báo giá thiết bị & giải pháp CNTT</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Mô tả nhu cầu của doanh nghiệp bạn, kỹ thuật viên Phát Lộc Tech sẽ tư vấn cấu hình phù hợp
          và gửi báo giá chi tiết, hoàn toàn miễn phí.
        </p>
      </div>

      <QuoteRequestBox />

      <h2 className="text-2xl font-bold mb-6">Sản phẩm tiêu biểu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="flex flex-col h-full">
            <div className="aspect-square bg-slate-100 flex items-center justify-center p-4">
              <Icon className="w-24 h-24 text-slate-300" aria-hidden="true" />
            </div>
            <CardHeader className="flex-1 pb-4">
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-primary">Giá: Liên hệ</div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link href={`/contact?nhu-cau=${encodeURIComponent(`Báo giá: ${title}`)}#form-lien-he`} className="w-full">
                <Button className="w-full">Báo giá nhanh</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
