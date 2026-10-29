import { Button } from "@/components/ui/Button";
import { SERVICE_OPTIONS } from "@/lib/services";

const FORM_ACTION = "https://formsubmit.co/phatloctech.ltd@gmail.com";

const field =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-slate-400 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30";
const label = "mb-2 block text-sm font-semibold text-ink";

/**
 * Form yêu cầu báo giá dùng chung (trang chủ + trang liên hệ).
 * Gửi qua FormSubmit: có captcha + ô bẫy bot `_honey`.
 */
export function QuoteForm({
  subject,
  next,
  idPrefix,
  showEmail = false,
  defaultNote = "",
  submitLabel = "Gửi yêu cầu báo giá",
}: {
  subject: string;
  next: string;
  idPrefix: string;
  showEmail?: boolean;
  defaultNote?: string;
  submitLabel?: string;
}) {
  const id = (k: string) => `${idPrefix}-${k}`;
  return (
    <form action={FORM_ACTION} method="POST" className="space-y-5">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={next} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>Họ và tên *</label>
          <input id={id("name")} name="Họ và Tên" type="text" autoComplete="name" placeholder="Nguyễn Văn A" required className={field} />
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>Số điện thoại *</label>
          <input id={id("phone")} name="Số điện thoại" type="tel" autoComplete="tel" inputMode="tel" placeholder="09xx xxx xxx" required className={field} />
        </div>
      </div>
      {showEmail && (
        <div>
          <label htmlFor={id("email")} className={label}>Email</label>
          <input id={id("email")} name="Email" type="email" autoComplete="email" placeholder="ban@congty.vn" className={field} />
        </div>
      )}
      <div>
        <label htmlFor={id("svc")} className={label}>Dịch vụ cần tư vấn</label>
        <select id={id("svc")} name="Loại dịch vụ quan tâm" className={field}>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={id("note")} className={label}>Mô tả nhu cầu</label>
        <textarea
          id={id("note")}
          name="Chi tiết nhu cầu"
          rows={4}
          defaultValue={defaultNote}
          placeholder="Ví dụ: Cần lắp 8 camera cho nhà xưởng 500m², xem được trên điện thoại."
          className={field}
        />
      </div>
      <Button type="submit" variant="cta" size="lg" className="w-full">
        {submitLabel}
      </Button>
      <p className="text-center text-xs text-muted">
        Kỹ thuật viên gọi lại trong 30 phút (giờ hành chính). Thông tin chỉ dùng để tư vấn — xem{" "}
        <a href="/chinh-sach-bao-mat" className="underline hover:text-navy">chính sách bảo mật</a>.
      </p>
    </form>
  );
}
