import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { PageHeader } from "@/components/PageHeader";
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
    <>
      <PageHeader
        title="Báo giá"
        lead="Mô tả nhu cầu, kỹ thuật viên tư vấn cấu hình phù hợp và gửi báo giá chi tiết, hoàn toàn miễn phí."
      />
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 py-12 md:py-16">
        <QuoteRequestBox />

        <h2 className="mb-6 text-2xl font-bold text-navy">Sản phẩm tiêu biểu</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PRODUCTS.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              {/* Thay bằng ảnh sản phẩm thật khi có */}
              <div className="flex aspect-[4/3] items-center justify-center bg-paper">
                <Icon className="h-20 w-20 text-slate-300" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <CardHeader className="flex-1 pb-4">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardFooter className="justify-between gap-4">
                <span className="font-semibold text-navy">Giá: liên hệ</span>
                <Button asChild variant="cta">
                  <Link href={`/contact?nhu-cau=${encodeURIComponent(`Báo giá: ${title}`)}#form-lien-he`}>Hỏi giá</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
