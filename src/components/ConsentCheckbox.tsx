import Link from "next/link";

/** Ô đồng ý xử lý dữ liệu cá nhân (không tích sẵn) dùng chung cho các form. */
export function ConsentCheckbox({ id }: { id: string }) {
  return (
    <div className="text-sm text-slate-600 leading-relaxed">
      <label htmlFor={id} className="flex items-start gap-3 cursor-pointer">
        <input
          id={id}
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#0693E3]"
        />
        <span>
          Tôi đồng ý để CÔNG TY TNHH PHÁT LỘC TECH xử lý họ tên, số điện thoại, email và nội dung đã nhập
          nhằm liên hệ tư vấn, báo giá theo{" "}
          <Link href="/chinh-sach-bao-mat" target="_blank" className="font-semibold text-[#0693E3] underline">
            Chính sách bảo vệ dữ liệu cá nhân
          </Link>
          . *
        </span>
      </label>
    </div>
  );
}
