import { Phone, CalendarCheck, Map } from "lucide-react";

export function MobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-cream/15 bg-ink/95 backdrop-blur-md">
      <div className="grid grid-cols-3 divide-x divide-cream/10">
        <a href="tel:3514233563" className="flex flex-col items-center gap-1 py-3 text-[10px] tracking-[0.2em] uppercase font-medium text-cream/85">
          <Phone className="h-5 w-5 text-sand" />
          Chiama
        </a>
        <a href="#prenota" className="flex flex-col items-center gap-1 py-3 text-[10px] tracking-[0.2em] uppercase font-medium text-cream bg-wine">
          <CalendarCheck className="h-5 w-5" />
          Prenota
        </a>
        <a
          href="https://www.google.com/maps/place/Pioletta+-+Trattoria+Piemontese/@45.0744791,7.6787613,17z/data=!3m1!4b1!4m6!3m5!1s0x47886d55dd530045:0x7a24b0faa7a67f04!8m2!3d45.0744753!4d7.6813362!16s%2Fg%2F11mydz3pqh?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[10px] tracking-[0.2em] uppercase font-medium text-cream/85"
        >
          <Map className="h-5 w-5 text-sand" />
          Mappa
        </a>
      </div>
    </div>
  );
}
