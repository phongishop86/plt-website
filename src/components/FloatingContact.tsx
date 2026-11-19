import { Phone, MapPin, MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a 
        href="https://zalo.me/0932685794" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-zalo text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,104,255,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200 ease-out-strong group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-150 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-[opacity,transform] duration-150 ease-out-strong whitespace-nowrap shadow-lg pointer-events-none">
          Chat Zalo
        </span>
        <MessageCircle className="w-6 h-6" />
      </a>
      
      <a 
        href="tel:0932685794" 
        className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,105,0,0.4)] hover:scale-105 active:scale-95 transition-transform duration-200 ease-out-strong call-ring group relative"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-bold opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-150 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-[opacity,transform] duration-150 ease-out-strong whitespace-nowrap shadow-lg pointer-events-none">
          Gọi Ngay: 0932.685.794
        </span>
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
