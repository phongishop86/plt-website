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
      <div className="mb-4 max-w-3xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            goToContact(need);
          }}
          className="flex flex-col items-stretch gap-2 rounded-2xl border border-line bg-white p-2 focus-within:border-sky sm:flex-row"
        >
          <label htmlFor="nhu-cau" className="sr-only">Nhu cầu của bạn</label>
          <input
            id="nhu-cau"
            type="text"
            placeholder='Ví dụ: "Cần 10 máy tính văn phòng dưới 12 triệu"'
            className="w-full bg-transparent px-4 py-3 text-base text-ink outline-none md:text-lg"
            value={need}
            onChange={(e) => setNeed(e.target.value)}
          />
          <Button type="submit" variant="cta" size="lg" className="shrink-0">
            <Send className="w-4 h-4" /> Gửi yêu cầu báo giá
          </Button>
        </form>
      </div>

      <div className="mb-14 flex flex-wrap gap-2">
        {SUGGESTIONS.map(({ label, icon: Icon, text }) => (
          <Button key={label} variant="outline" size="sm" className="rounded-full" onClick={() => setNeed(text)}>
            <Icon className="h-4 w-4 text-sky" aria-hidden="true" /> {label}
          </Button>
        ))}
      </div>
    </>
  );
}
