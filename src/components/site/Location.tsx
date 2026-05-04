import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";
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

export function Location() {
  return (
    <section id="dove-siamo" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Contatti
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Dove <span className="italic text-wine">siamo</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Siamo a Rivoli, facilmente raggiungibili sia dal centro città sia dai comuni vicini.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border shadow-sm bg-card min-h-[360px]">
            <iframe
              title="Mappa Trattoria A Casa Mia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.5050%2C45.0660%2C7.5350%2C45.0760&layer=mapnik&marker=45.0710%2C7.5200"
              className="w-full h-full min-h-[360px] border-0"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">Indirizzo</h3>
                  <p className="mt-1 text-muted-foreground">
                    Corso Francia 28<br />10098 Rivoli TO
                  </p>
                </div>
              </div>
              <Button asChild variant="outline" className="mt-5 w-full">
                <a
                  href="https://maps.google.com/?q=Corso+Francia+28+Rivoli+TO"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apri su Google Maps <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">Telefono</h3>
                  <a href="tel:0119561186" className="mt-1 block text-muted-foreground hover:text-wine">
                    011 956 1186
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-card border border-border p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wine/10 text-wine">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl">Orari di apertura</h3>
              </div>
              <ul className="mt-5 space-y-2.5">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex items-baseline justify-between gap-3 text-sm border-b border-border/50 pb-2 last:border-0"
                  >
                    <span className="font-medium text-foreground">{h.day}</span>
                    <span className={h.closed ? "text-wine font-medium" : "text-muted-foreground tabular-nums"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-muted-foreground italic">
                Orari indicativi, da confermare in fase di prenotazione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
