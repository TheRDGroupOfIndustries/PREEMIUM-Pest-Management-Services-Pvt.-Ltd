const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/917001664727?text=Hi%2C%20I%20need%20pest%20management%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] p-4 rounded-full shadow-lg hover-lift group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-6 w-6 fill-current"
      >
        <path d="M16.03 3C8.88 3 3.06 8.78 3.06 15.88c0 2.27.6 4.48 1.75 6.43L3 29l6.9-1.79a13.06 13.06 0 0 0 6.13 1.54C23.18 28.75 29 22.98 29 15.88S23.18 3 16.03 3Zm0 23.58c-1.92 0-3.79-.51-5.42-1.48l-.39-.23-4.09 1.06 1.09-3.96-.26-.41a10.53 10.53 0 0 1-1.72-5.68c0-5.9 4.84-10.7 10.79-10.7 5.95 0 10.79 4.8 10.79 10.7 0 5.9-4.84 10.7-10.79 10.7Zm5.91-8.02c-.32-.16-1.9-.93-2.19-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.7-.98-2.33-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.4 5.42 4.77.76.33 1.35.52 1.81.66.76.24 1.46.21 2.01.13.61-.09 1.9-.77 2.17-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background text-foreground text-xs px-3 py-1.5 rounded-full shadow-card whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        WhatsApp Chat
      </span>
    </a>
  );
};

export default WhatsAppWidget;
