import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";
import bg from "@/assets/real-interior-2.jpg";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="prenota" className="relative py-24 lg:py-36 bg-ink overflow-hidden">
      <img
        src={bg}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

      <div className="relative mx-auto max-w-6xl px-5 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow"><span className="rule" />Prenotazioni<span className="rule ml-3" /></span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
            Prenota il tuo
            <span className="block italic text-sand font-light">tavolo.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* FORM */}
          <div className="lg:col-span-2 bg-cream text-ink p-7 md:p-12">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-wine" />
                <h3 className="mt-5 font-display text-3xl">Richiesta inviata</h3>
                <p className="mt-3 text-ink/70 max-w-md mx-auto">
                  Grazie! Vi contatteremo a breve per confermare la disponibilità.
                </p>
                <Button variant="editorialDark" className="mt-6" onClick={() => setSubmitted(false)}>
                  Nuova prenotazione
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="md:col-span-2 mb-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-ink/50">
                    Compila i dati per richiedere il tuo tavolo
                  </span>
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="nome" className="text-ink/70">Nome e cognome</Label>
                  <Input id="nome" required placeholder="Mario Rossi" className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div>
                  <Label htmlFor="tel" className="text-ink/70">Telefono</Label>
                  <Input id="tel" type="tel" required placeholder="+39 ..." className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-ink/70">Email <span className="text-ink/40">(opzionale)</span></Label>
                  <Input id="email" type="email" placeholder="email@esempio.it" className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div>
                  <Label htmlFor="data" className="text-ink/70 flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> Data</Label>
                  <Input id="data" type="date" required className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div>
                  <Label htmlFor="ora" className="text-ink/70 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Orario</Label>
                  <Input id="ora" type="time" required className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="persone" className="text-ink/70 flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> Numero di persone</Label>
                  <Input id="persone" type="number" min={1} max={20} required defaultValue={2} className="mt-1.5 h-11 bg-transparent border-0 border-b border-ink/20 rounded-none px-0 focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="note" className="text-ink/70">Note o richieste particolari</Label>
                  <Textarea id="note" rows={3} placeholder="Allergie, intolleranze, occasioni speciali..." className="mt-1.5 bg-transparent border border-ink/20 rounded-none focus-visible:border-wine focus-visible:ring-0" />
                </div>
                <p className="md:col-span-2 text-xs text-ink/55 italic">
                  La prenotazione verrà confermata dal ristorante in base alla disponibilità.
                </p>
                <div className="md:col-span-2 pt-2">
                  <Button type="submit" variant="editorialDark" size="xl" className="w-full md:w-auto">
                    Richiedi prenotazione
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* CALL CARD */}
          <aside className="bg-wine text-cream p-8 md:p-10">
            <span className="text-[10px] tracking-[0.3em] uppercase text-cream/70">Preferisci chiamare?</span>
            <h3 className="mt-4 font-display text-3xl italic font-light">Siamo qui per te.</h3>
            <p className="mt-4 text-cream/80 text-sm leading-relaxed">
              Per gruppi numerosi o richieste particolari, una telefonata è il modo più rapido.
            </p>
            <a href="tel:0119561186" className="mt-8 block font-display text-3xl text-sand">
              011 956 1186
            </a>
            <Button asChild variant="cream" size="lg" className="mt-6 w-full">
              <a href="tel:0119561186">
                <Phone className="h-4 w-4" /> Chiama ora
              </a>
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}
