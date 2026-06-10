"use client";

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a href="tel:0932685794" className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-secondary/90 transition-colors group relative">
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Gọi Hotline
        </span>
      </a>
      <a href="https://zalo.me/0932685794" target="_blank" rel="noreferrer" className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors group relative">
        <MessageCircle className="w-5 h-5" />
        <span className="absolute right-14 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Zalo
        </span>
      </a>
      <a href="mailto:phatloctech.ltd@gmail.com" className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:bg-accent/90 transition-colors group relative">
        <Mail className="w-5 h-5" />
        <span className="absolute right-14 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Gửi Email
        </span>
      </a>
      <a href="#" className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors group relative">
        <MapPin className="w-5 h-5" />
        <span className="absolute right-14 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chỉ đường
        </span>
      </a>
    </div>
  );
}
