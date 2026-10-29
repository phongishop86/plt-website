import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/bao-gia", priority: 0.9, freq: "weekly" },
    { path: "/contact", priority: 0.8, freq: "monthly" },
    { path: "/chinh-sach-bao-hanh", priority: 0.4, freq: "yearly" },
    { path: "/dieu-khoan-giao-dich", priority: 0.4, freq: "yearly" },
    { path: "/chinh-sach-bao-mat", priority: 0.4, freq: "yearly" },
    { path: "/chinh-sach-van-chuyen", priority: 0.4, freq: "yearly" },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
