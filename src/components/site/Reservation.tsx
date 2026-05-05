import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";
import bg from "@/assets/real-interior-2.jpg";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const labelClass = "text-xs font-medium uppercase tracking-[0.18em] text-sand/85";
  const fieldClass =
    "mt-2 h-12 rounded-md border border-cream/15 bg-cream/[0.06] px-4 text-cream placeholder:text-cream/35 focus-visible:border-sand focus-visible:ring-1 focus-visible:ring-sand/30";

  return (
    <section id="prenota" className="relative overflow-hidden bg-espresso py-24 lg:py-36">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-14"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,22,18,0.96),rgba(28,22,18,0.9)_42%,rgba(16,14,12,0.98))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-cream/10" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-cream/10" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">
            <span className="rule" />
            Prenotazioni
            <span className="rule ml-3" />
          </span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
            Prenota il tuo
            <span className="block italic font-light text-sand">tavolo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-cream/65 md:text-base">
            Lasciaci i tuoi dati: ti richiamiamo per confermare disponibilita e orario.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch overflow-hidden rounded-lg border border-cream/12 bg-ink/45 shadow-2xl shadow-black/25 backdrop-blur-sm lg:grid-cols-12">
          <div className="p-6 md:p-10 lg:col-span-8 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[26rem] flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-sand" />
                <h3 className="mt-5 font-display text-3xl text-cream">Richiesta inviata</h3>
                <p className="mt-3 max-w-md text-cream/65">
                  Grazie! Vi contatteremo a breve per confermare la disponibilita.
                </p>
                <Button variant="editorial" className="mt-7" onClick={() => setSubmitted(false)}>
                  Nuova prenotazione
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                <div className="mb-2 border-b border-cream/10 pb-5 md:col-span-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-sand/75">
                    Richiesta tavolo
                  </span>
                  <h3 className="mt-3 font-display text-3xl text-cream">
                    Dettagli prenotazione
                  </h3>
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="nome" className={labelClass}>
                    Nome e cognome
                  </Label>
                  <Input id="nome" required placeholder="Mario Rossi" className={fieldClass} />
                </div>

                <div>
                  <Label htmlFor="tel" className={labelClass}>
                    Telefono
                  </Label>
                  <Input id="tel" type="tel" required placeholder="+39 ..." className={fieldClass} />
                </div>

                <div>
                  <Label htmlFor="email" className={labelClass}>
                    Email{" "}
                    <span className="text-cream/40 normal-case tracking-normal">(opzionale)</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@esempio.it"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <Label htmlFor="data" className={`${labelClass} flex items-center gap-1.5`}>
                    <Calendar className="h-3.5 w-3.5" /> Data
                  </Label>
                  <Input id="data" type="date" required className={fieldClass} />
                </div>

                <div>
                  <Label htmlFor="ora" className={`${labelClass} flex items-center gap-1.5`}>
                    <Clock className="h-3.5 w-3.5" /> Orario
                  </Label>
                  <Input id="ora" type="time" required className={fieldClass} />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="persone" className={`${labelClass} flex items-center gap-1.5`}>
                    <Users className="h-3.5 w-3.5" /> Numero di persone
                  </Label>
                  <Input
                    id="persone"
                    type="number"
                    min={1}
                    max={20}
                    required
                    defaultValue={2}
                    className={fieldClass}
                  />
                </div>

                <div className="md:col-span-2">
                  <Label htmlFor="note" className={labelClass}>
                    Note o richieste particolari
                  </Label>
                  <Textarea
                    id="note"
                    rows={4}
                    placeholder="Allergie, intolleranze, occasioni speciali..."
                    className="mt-2 rounded-md border border-cream/15 bg-cream/[0.06] px-4 py-3 text-cream placeholder:text-cream/35 focus-visible:border-sand focus-visible:ring-1 focus-visible:ring-sand/30"
                  />
                </div>

                <p className="text-xs italic leading-relaxed text-cream/50 md:col-span-2">
                  La prenotazione verra confermata dal ristorante in base alla disponibilita.
                </p>

                <div className="pt-2 md:col-span-2">
                  <Button type="submit" variant="cream" size="xl" className="w-full rounded-md md:w-auto">
                    Richiedi prenotazione
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="relative overflow-hidden border-t border-cream/10 bg-wine/65 p-8 text-cream md:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,224,177,0.18),transparent_36%)]" />
            <div className="relative flex h-full flex-col">
              <span className="text-[10px] uppercase tracking-[0.3em] text-sand">
                Preferisci chiamare?
              </span>
              <h3 className="mt-5 font-display text-4xl italic font-light leading-tight">
                Una voce fa prima.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-cream/78">
                Per gruppi numerosi, allergie o richieste particolari, una telefonata e il modo
                piu rapido.
              </p>
              <div className="mt-8 border-y border-cream/15 py-7">
                <span className="text-[10px] uppercase tracking-[0.28em] text-cream/50">
                  Telefono
                </span>
                <a href="tel:0119561186" className="mt-3 block font-display text-4xl text-sand">
                  011 956 1186
                </a>
              </div>
              <Button asChild variant="cream" size="lg" className="mt-8 w-full rounded-md">
                <a href="tel:0119561186">
                  <Phone className="h-4 w-4" /> Chiama ora
                </a>
              </Button>
              <p className="mt-auto pt-8 text-xs italic leading-relaxed text-cream/55">
                Consigliamo la prenotazione, soprattutto nel fine settimana.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
