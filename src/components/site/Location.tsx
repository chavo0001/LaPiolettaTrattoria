import { MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì", time: "12:15 – 14:30  ·  19:15 – 22:30" },
  { day: "Mercoledì", time: "12:15 – 14:30  ·  19:15 – 22:30" },
  { day: "Giovedì", time: "12:15 – 14:30  ·  19:15 – 22:30" },
  { day: "Venerdì", time: "12:15 – 14:30  ·  19:15 – 22:30" },
  { day: "Sabato", time: "12:15 – 14:30  ·  19:15 – 22:30" },
  { day: "Domenica", time: "12:15 – 14:30" },
];

const MAPS_URL =
  "https://www.google.com/maps/place/Pioletta+-+Trattoria+Piemontese/@45.0744791,7.6787613,17z/data=!3m1!4b1!4m6!3m5!1s0x47886d55dd530045:0x7a24b0faa7a67f04!8m2!3d45.0744753!4d7.6813362!16s%2Fg%2F11mydz3pqh?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D";

export function Location() {
  return (
    <section id="dove-siamo" className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="rule" />Contatti</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Nel Quadrilatero
            <span className="italic text-sand font-light"> Romano di Torino.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            La Pioletta Trattoria Piemontese è in Via San Domenico 4, nel cuore del Quadrilatero Romano. Facile da raggiungere a piedi, in auto o con i mezzi pubblici dal centro di Torino.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 overflow-hidden border border-cream/10 min-h-[420px]">
            <iframe
              title="Mappa La Pioletta Trattoria Piemontese"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.6763%2C45.0719%2C7.6863%2C45.0770&layer=mapnik&marker=45.0744753%2C7.6813362"
              className="w-full h-full min-h-[420px] border-0 grayscale-[30%]"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="border border-cream/15 p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50 flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" /> Indirizzo
              </span>
              <p className="mt-3 font-display text-2xl text-cream italic font-light">
                Via San Domenico 4<br />10122 Torino TO
              </p>
              <Button asChild variant="editorial" size="lg" className="mt-5 w-full">
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Apri su Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>

            <div className="border border-cream/15 p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50 flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" /> Telefono
              </span>
              <a href="tel:3514233563" className="mt-3 block font-display text-2xl text-sand italic font-light">
                351 423 3563
              </a>
            </div>

            <div className="border border-cream/15 p-7">
              <span className="text-[10px] tracking-[0.3em] uppercase text-cream/50">
                Orari
              </span>
              <ul className="mt-4 space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between gap-3 text-sm border-b border-cream/10 pb-1.5 last:border-0">
                    <span className="text-cream/85">{h.day}</span>
                    <span className={h.closed ? "text-sand" : "text-cream/60 tabular-nums text-xs"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] text-cream/45 italic">
                Orari da confermare con il ristorante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
