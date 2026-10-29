import type { Metadata, Viewport } from "next";
import { Inter, Be_Vietnam_Pro } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

// Font tiêu đề: Be Vietnam Pro — thiết kế cho tiếng Việt, dấu đẹp ở cỡ lớn
const display = Be_Vietnam_Pro({
  variable: "--font-display-vn",
  subsets: ["latin", "vietnamese"],
  weight: ["600", "700"],
});

const defaultTitle = "Phát Lộc Tech - Giải pháp CNTT toàn diện cho doanh nghiệp tại TP.HCM";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | Phát Lộc Tech",
  },
  description: SITE.description,
  keywords: [
    "Phát Lộc Tech",
    "giải pháp CNTT doanh nghiệp",
    "máy tính văn phòng",
    "lắp đặt camera giám sát",
    "thi công hạ tầng mạng",
    "IT helpdesk thuê ngoài",
    "bảo trì máy tính doanh nghiệp",
    "giải pháp AI vận hành CNTT",
    "Tân Bình",
    "TP.HCM",
  ],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: SITE.name,
    title: defaultTitle,
    description: SITE.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Phát Lộc Tech - Giải pháp AI & Hạ tầng CNTT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-512.png",
  },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#003388",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo-512.png`,
  image: `${SITE.url}/og-image.png`,
  description: SITE.description,
  telephone: SITE.phone,
  email: SITE.email,
  taxID: SITE.taxId,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  },
  areaServed: { "@type": "City", name: "Thành phố Hồ Chí Minh" },
  sameAs: [SITE.zalo],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    availableLanguage: ["Vietnamese"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} ${display.variable} font-sans antialiased min-h-screen flex flex-col bg-white text-ink`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="noi-dung" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
