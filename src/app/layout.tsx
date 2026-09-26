import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Phát Lộc Tech - Giải pháp CNTT toàn diện cho doanh nghiệp",
  description: "Phát Lộc Tech cung cấp máy tính doanh nghiệp, camera giám sát, hạ tầng mạng, dịch vụ IT thuê ngoài và phần mềm quản lý chuyên nghiệp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
