"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const SCALES = ["Dưới 10 người", "10–50 người", "Trên 50 người"];

/** Phiếu yêu cầu kỹ thuật ở đầu trang: chọn hạng mục + quy mô → sang form liên hệ đã điền sẵn. */
export function RequestTicket() {
  const router = useRouter();
  const [picked, setPicked] = useState<string[]>([]);
  const [scale, setScale] = useState(SCALES[0]);

  const toggle = (name: string) =>
    setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));

  const submit = () => {
    const items = picked.length ? picked.join(", ") : "Chưa chọn — cần tư vấn chung";
    const note = `Hạng mục: ${items}. Quy mô: ${scale}.`;
    router.push(`/contact?nhu-cau=${encodeURIComponent(note)}#form-lien-he`);
  };

  return (
    <div className="relative rounded-2xl border border-line bg-white shadow-[0_24px_60px_-24px_rgba(10,31,68,0.35)]">
      {/* răng cưa phiếu */}
      <div aria-hidden="true" className="h-2 rounded-t-2xl bg-[radial-gradient(circle_at_6px_0,transparent_5px,var(--navy)_5.5px)] [background-size:12px_8px]" />
      <div className="flex items-baseline justify-between border-b border-dashed border-line px-5 py-4 md:px-6">
        <p className="font-display text-lg font-bold text-navy">Phiếu yêu cầu kỹ thuật</p>
        <p className="text-xs text-muted">Miễn phí khảo sát</p>
      </div>

      <div className="px-5 pt-4 md:px-6">
        <p id="ticket-hang-muc" className="mb-3 text-sm font-semibold text-ink">Doanh nghiệp bạn cần làm gì?</p>
        <div role="group" aria-labelledby="ticket-hang-muc" className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SERVICES.map(({ slug, name, icon: Icon }) => {
            const on = picked.includes(name);
            return (
              <button
                key={slug}
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(name)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition-colors",
                  on ? "border-navy bg-navy text-white" : "border-line bg-white text-ink hover:border-navy"
                )}
              >
                <span
                  className={cn(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-md border",
                    on ? "border-white bg-white text-navy" : "border-slate-300"
                  )}
                >
                  {on && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                </span>
                <Icon className={cn("h-4 w-4 shrink-0", on ? "text-white" : "text-sky")} aria-hidden="true" />
                <span className="font-medium leading-snug">{name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-5 pt-5 md:px-6">
        <p id="ticket-quy-mo" className="mb-3 text-sm font-semibold text-ink">Quy mô</p>
        <div role="radiogroup" aria-labelledby="ticket-quy-mo" className="flex flex-wrap gap-2">
          {SCALES.map((s) => (
            <button
              key={s}
              type="button"
              role="radio"
              aria-checked={scale === s}
              onClick={() => setScale(s)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-sm",
                scale === s ? "border-navy bg-paper font-semibold text-navy" : "border-line text-muted hover:border-navy"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="px-5 py-5 md:px-6">
        <Button variant="cta" size="lg" className="w-full" onClick={submit}>
          {picked.length ? `Gửi yêu cầu (${picked.length} hạng mục)` : "Gửi yêu cầu tư vấn"}
        </Button>
      </div>
    </div>
  );
}
