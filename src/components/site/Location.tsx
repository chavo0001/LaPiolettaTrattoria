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
  "https://www.google.com/maps/place/Trattoria+A+Casa+Mia/@45.0702341,7.5215887,17z/data=!3m1!4b1!4m6!3m5!1s0x47886aa1dfee4505:0x7164252d327e1ff1!8m2!3d45.0702303!4d7.5241636!16s%2Fg%2F1thkql5v";

export function Location() {
  return (
    <section id="dove-siamo" className="bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="max-w-2xl">
          <span className="eyebrow"><span className="rule" />Contatti</span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Dove
            <span className="italic text-sand font-light"> siamo.</span>
          </h2>
          <p className="mt-6 text-cream/70 leading-relaxed">
            Siamo a Rivoli, in Corso Francia, facilmente raggiungibili dal centro città
            e dai comuni vicini.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 overflow-hidden border border-cream/10 min-h-[420px]">
            <iframe
              title="Mappa Trattoria A Casa Mia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.5180%2C45.0680%2C7.5310%2C45.0735&layer=mapnik&marker=45.0702%2C7.5241"
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
                Corso Francia 28<br />10098 Rivoli TO
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
              <a href="tel:0119561186" className="mt-3 block font-display text-2xl text-sand italic font-light">
                011 956 1186
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
