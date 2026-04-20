import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] pointer-events-none z-50">
      <a
        href="https://wa.link/0rvht5"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto absolute bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
