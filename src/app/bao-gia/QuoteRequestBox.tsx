"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Send, Monitor, Shield, Cloud, Server } from "lucide-react";

const SUGGESTIONS = [
  { label: "Máy văn phòng", icon: Monitor, text: "Tôi cần báo giá máy tính văn phòng" },
  { label: "Máy thiết kế đồ họa", icon: Monitor, text: "Tôi cần báo giá máy tính thiết kế đồ họa" },
  { label: "Camera", icon: Shield, text: "Tôi cần báo giá lắp đặt camera giám sát" },
  { label: "Hạ tầng mạng", icon: Cloud, text: "Tôi cần báo giá thi công hạ tầng mạng / wifi" },
  { label: "Máy chủ & Lưu trữ", icon: Server, text: "Tôi cần báo giá máy chủ / thiết bị lưu trữ" },
];

/** Ô nhập nhu cầu: chuyển khách sang trang Liên hệ với nội dung đã điền sẵn. */
export function QuoteRequestBox() {
  const router = useRouter();
  const [need, setNeed] = React.useState("");

  const goToContact = (text: string) => {
    const value = text.trim();
    if (!value) return;
    router.push(`/contact?nhu-cau=${encodeURIComponent(value)}#form-lien-he`);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mb-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToContact(need);
          }}
          className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row items-stretch gap-2 shadow-sm border border-slate-200"
        >
          <label htmlFor="nhu-cau" className="sr-only">Nhu cầu của bạn</label>
          <input
            id="nhu-cau"
            type="text"
            placeholder='Ví dụ: "Cần 10 máy tính văn phòng dưới 12 triệu"'
            className="w-full px-4 py-3 outline-none text-base md:text-lg bg-transparent"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
          />
          <Button type="submit" size="lg" className="gap-2 shrink-0">
            <Send className="w-4 h-4" /> Gửi yêu cầu báo giá
          </Button>
        </form>
      </div>

      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {SUGGESTIONS.map(({ label, icon: Icon, text }) => (
          <Button key={label} variant="outline" className="gap-2" onClick={() => setNeed(text)}>
            <Icon className="w-4 h-4" /> {label}
          </Button>
        ))}
      </div>
    </>
  );
}
