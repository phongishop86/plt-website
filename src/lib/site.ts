/** Thông tin doanh nghiệp dùng chung cho SEO (metadata, sitemap, dữ liệu có cấu trúc). */
export const SITE = {
  url: "https://www.phatloctech.vn",
  name: "Phát Lộc Tech",
  legalName: "CÔNG TY TNHH PHÁT LỘC TECH",
  taxId: "0319347662",
  phone: "+84932685794",
  email: "info@phatloctech.vn",
  description:
    "Phát Lộc Tech cung cấp máy tính doanh nghiệp, camera giám sát, hạ tầng mạng, dịch vụ IT helpdesk thuê ngoài, phần mềm quản lý và giải pháp AI vận hành CNTT tại TP.HCM.",
  address: {
    street: "491/1 Trường Chinh, Phường Tân Bình",
    city: "Thành phố Hồ Chí Minh",
    country: "VN",
  },
  zalo: "https://zalo.me/0932685794",
} as const;

/** Metadata cho từng trang: giữ đủ ảnh chia sẻ, tên site khi ghi đè openGraph. */
export function pageMeta(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      locale: "vi_VN",
      siteName: SITE.name,
      url: path,
      title: `${title} | ${SITE.name}`,
      description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE.name }],
    },
  };
}
