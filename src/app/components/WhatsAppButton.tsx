import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const number = "5521999999999";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a Casa de Maria Damião.");

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 glass-strong w-14 h-14 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
      aria-label="WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
