# Phát Lộc Tech – Website (phatloctech.vn)

Website giới thiệu CÔNG TY TNHH PHÁT LỘC TECH: giải pháp AI & hạ tầng CNTT cho doanh nghiệp.

## Công nghệ
- Next.js 16 (App Router) + React 19 + Tailwind CSS 4
- Form liên hệ gửi qua FormSubmit (có captcha + bẫy chống bot)
- Triển khai trên Vercel

## Chạy trên máy
```bash
npm install
npm run dev      # mở http://localhost:3000
npm run build    # kiểm tra trước khi đẩy lên
```

## Cấu trúc chính
| Đường dẫn | Nội dung |
|---|---|
| `/` | Trang chủ |
| `/bao-gia` | Gửi yêu cầu báo giá |
| `/contact` | Liên hệ (nhận `?nhu-cau=` để điền sẵn nhu cầu) |
| `/chinh-sach-*`, `/dieu-khoan-giao-dich` | Trang chính sách |
| `/sitemap.xml`, `/robots.txt` | Tự sinh cho SEO |

## SEO
- Thông tin doanh nghiệp dùng chung: `src/lib/site.ts` (sửa SĐT, địa chỉ, mô tả tại đây).
- Mỗi trang khai báo tiêu đề/mô tả bằng `pageMeta()`.
- Dữ liệu có cấu trúc LocalBusiness (JSON-LD) nằm trong `src/app/layout.tsx`.
- Ảnh chia sẻ mạng xã hội: `public/og-image.png` (1200×630).
