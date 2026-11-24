import { ChatBot } from "./ChatBot";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ChatBot />
    </div>
  );
}
