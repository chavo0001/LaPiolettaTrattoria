import { Phone, CalendarCheck, Map } from "lucide-react";

export function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-md">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a href="tel:0119561186" className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground">
          <Phone className="h-5 w-5 text-wine" />
          Chiama
        </a>
        <a href="#prenota" className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-wine-foreground bg-wine">
          <CalendarCheck className="h-5 w-5" />
          Prenota
        </a>
        <a
          href="https://maps.google.com/?q=Corso+Francia+28+Rivoli+TO"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-foreground"
        >
          <Map className="h-5 w-5 text-wine" />
          Mappa
        </a>
      </div>
    </div>
  );
}
