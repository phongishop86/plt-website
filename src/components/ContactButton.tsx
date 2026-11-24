"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { ConsentCheckbox } from "./ConsentCheckbox";

export function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [consent, setConsent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Khác",
    note: "",
  });

  const closeDialog = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 140);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDialog();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeDialog]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, consent, source: "popup-tu-van" }),
      });
      
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", service: "Khác", note: "" });
        setConsent(false);
        setTimeout(() => {
          closeDialog();
          setTimeout(() => setIsSuccess(false), 160);
        }, 3000);
      } else {
        alert("Có lỗi xảy ra, vui lòng thử lại sau.");
      }
    } catch (error) {
      alert("Không thể kết nối đến máy chủ.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        size="lg" 
        className="bg-accent hover:bg-accent-hover text-white shadow-[0_0_20px_rgba(255,105,0,0.4)]"
      >
        Nhận tư vấn ngay
      </Button>

      {isOpen && (
        <div
          data-closing={isClosing}
          className="overlay-motion fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onMouseDown={(e) => { if (e.target === e.currentTarget) closeDialog(); }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Đăng ký nhận tư vấn"
            data-closing={isClosing}
            className="dialog-motion bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="bg-primary p-4 flex justify-between items-center text-white">
              <h3 className="font-bold text-lg">Đăng ký nhận tư vấn</h3>
              <button onClick={closeDialog} aria-label="Đóng" className="text-white/70 hover:text-white transition-colors active:scale-95">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            
            <div className="p-6 text-slate-800">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="font-bold text-xl mb-2 text-primary">Thành công!</h4>
                  <p className="text-slate-600">Chúng tôi đã nhận được thông tin và sẽ liên hệ lại với bạn sớm nhất.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Họ và Tên *</label>
                    <input 
                      id="name"
                      required
                      type="text" 
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Nhập họ tên của bạn"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Số điện thoại *</label>
                    <input 
                      id="phone"
                      required
                      type="tel" 
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Nhập số điện thoại liên hệ"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="service">Dịch vụ quan tâm</label>
                    <select 
                      id="service"
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="Máy tính doanh nghiệp">Máy tính doanh nghiệp</option>
                      <option value="Camera giám sát">Camera giám sát</option>
                      <option value="Thiết bị văn phòng">Thiết bị văn phòng</option>
                      <option value="Hạ tầng mạng">Hạ tầng mạng</option>
                      <option value="Dịch vụ IT">Dịch vụ IT</option>
                      <option value="Phần mềm & Số hóa">Phần mềm & Số hóa</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="note">Ghi chú thêm</label>
                    <textarea 
                      id="note"
                      rows={3}
                      className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                      placeholder="Nhập yêu cầu chi tiết (nếu có)"
                      value={formData.note}
                      onChange={(e) => setFormData({...formData, note: e.target.value})}
                    />
                  </div>
                  <div onChange={(e) => setConsent((e.target as HTMLInputElement).checked)}>
                    <ConsentCheckbox id="popup-consent" />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-deep text-white py-3 rounded-lg font-bold text-lg mt-2"
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
