import { Phone, MapPin, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href="https://zalo.me/0932685794" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,104,255,0.4)] hover:scale-110 hover:-translate-y-1 transition-all group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Chat Zalo
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>
      
      <a 
        href="tel:0932685794" 
        className="w-14 h-14 bg-[#FF6900] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,105,0,0.4)] hover:scale-110 hover:-translate-y-1 transition-all animate-pulse group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg pointer-events-none">
          Gọi Ngay: 0932.685.794
        </span>
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
