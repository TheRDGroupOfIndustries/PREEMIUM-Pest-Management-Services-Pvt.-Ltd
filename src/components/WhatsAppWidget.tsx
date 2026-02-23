import { MessageCircle } from "lucide-react";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/917001664727?text=Hi%2C%20I%20need%20pest%20management%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] p-4 rounded-full shadow-lg hover-lift group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground text-xs px-3 py-1.5 rounded-full shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Chat
      </span>
    </a>
  );
};

export default WhatsAppWidget;
