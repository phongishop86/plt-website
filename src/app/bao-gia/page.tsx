"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/Card";
import { Search, Sparkles, Filter, Server, Monitor, Shield, Cloud } from "lucide-react";

export default function PricingPage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isSearching, setIsSearching] = React.useState(false);

  const handleAISearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setIsSearching(true);
    // Simulate AI Search delay
    setTimeout(() => {
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tra cứu báo giá chuyên nghiệp</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tìm kiếm giải pháp CNTT phù hợp với nhu cầu của doanh nghiệp bạn. 
          Sử dụng trợ lý AI của chúng tôi để nhận được đề xuất chính xác nhất.
        </p>
      </div>

      {/* AI Search Bar */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 p-1 rounded-2xl">
          <div className="bg-white rounded-xl p-2 flex items-center shadow-sm">
            <Sparkles className="w-6 h-6 text-accent ml-3 mr-2" />
            <form onSubmit={handleAISearch} className="flex-1 flex items-center">
              <input 
                type="text" 
                placeholder='Ví dụ: "Tôi cần máy tính văn phòng dưới 10 triệu" hoặc "Tôi cần camera cho cửa hàng"'
                className="w-full px-4 py-3 outline-none text-lg bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" size="lg" disabled={isSearching}>
                {isSearching ? "Đang phân tích..." : "Tìm kiếm AI"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        <Button variant="outline" className="gap-2"><Monitor className="w-4 h-4" /> Máy văn phòng</Button>
        <Button variant="outline" className="gap-2"><Monitor className="w-4 h-4" /> Máy gaming</Button>
        <Button variant="outline" className="gap-2"><Monitor className="w-4 h-4" /> Thiết kế đồ họa</Button>
        <Button variant="outline" className="gap-2"><Shield className="w-4 h-4" /> Camera</Button>
        <Button variant="outline" className="gap-2"><Cloud className="w-4 h-4" /> Mạng</Button>
        <Button variant="outline" className="gap-2"><Server className="w-4 h-4" /> Server</Button>
        <Button variant="outline" className="gap-2"><Server className="w-4 h-4" /> Lưu trữ</Button>
      </div>

      {/* Results (Mockup) */}
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2"><Filter className="w-5 h-5"/> Bộ lọc</h3>
            <div className="space-y-4">
              <div>
                <label className="font-medium text-sm text-slate-600 block mb-2">Khoảng giá</label>
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Từ" className="w-full border rounded p-2 text-sm" />
                  <span>-</span>
                  <input type="number" placeholder="Đến" className="w-full border rounded p-2 text-sm" />
                </div>
              </div>
              <div>
                <label className="font-medium text-sm text-slate-600 block mb-2">Thương hiệu</label>
                <div className="space-y-2">
                  {["Dell", "HP", "Cisco", "Hikvision"].map(brand => (
                    <label key={brand} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" /> {brand}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Product Card 1 */}
          <Card className="flex flex-col h-full">
            <div className="aspect-square bg-slate-100 flex items-center justify-center p-4">
              <Monitor className="w-24 h-24 text-slate-300" />
            </div>
            <CardHeader className="flex-1 pb-4">
              <CardTitle className="text-lg">Máy tính văn phòng Dell OptiPlex</CardTitle>
              <CardDescription>Core i5 12th Gen, 8GB RAM, 256GB SSD. Đáp ứng tốt nhu cầu văn phòng cơ bản.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-primary">Liên hệ</div>
            </CardContent>
            <CardFooter className="pt-0 flex gap-2">
              <Button className="flex-1">Báo giá nhanh</Button>
              <Button variant="outline" className="px-3">So sánh</Button>
            </CardFooter>
          </Card>

          {/* Sample Product Card 2 */}
          <Card className="flex flex-col h-full">
            <div className="aspect-square bg-slate-100 flex items-center justify-center p-4">
              <Shield className="w-24 h-24 text-slate-300" />
            </div>
            <CardHeader className="flex-1 pb-4">
              <CardTitle className="text-lg">Bộ 4 Camera Hikvision 2MP</CardTitle>
              <CardDescription>Gồm đầu ghi, 4 mắt camera, ổ cứng 1TB. Bao công lắp đặt tận nơi.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-primary">Liên hệ</div>
            </CardContent>
            <CardFooter className="pt-0 flex gap-2">
              <Button className="flex-1">Báo giá nhanh</Button>
              <Button variant="outline" className="px-3">So sánh</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  );
}
