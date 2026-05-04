import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Users, Clock, CheckCircle2 } from "lucide-react";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="prenota" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Prenotazioni
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Prenota il tuo <span className="italic text-wine">tavolo</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Scegli giorno, orario e numero di persone. Ti ricontatteremo per confermare la disponibilità.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* FORM */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 md:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-wine" />
                <h3 className="mt-5 font-display text-3xl text-foreground">Richiesta inviata</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Grazie! Ti contatteremo a breve per confermare la disponibilità del tavolo.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
                  Nuova prenotazione
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="md:col-span-2">
                  <Label htmlFor="nome">Nome e cognome</Label>
                  <Input id="nome" required placeholder="Mario Rossi" className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label htmlFor="tel">Telefono</Label>
                  <Input id="tel" type="tel" required placeholder="+39 ..." className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-muted-foreground font-normal">(opzionale)</span>
                  </Label>
                  <Input id="email" type="email" placeholder="email@esempio.it" className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label htmlFor="data" className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> Data
                  </Label>
                  <Input id="data" type="date" required className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label htmlFor="ora" className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> Orario
                  </Label>
                  <Input id="ora" type="time" required className="mt-1.5 h-11" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="persone" className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> Numero di persone
                  </Label>
                  <Input id="persone" type="number" min={1} max={20} required defaultValue={2} className="mt-1.5 h-11" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="note">Note o richieste particolari</Label>
                  <Textarea id="note" rows={4} placeholder="Allergie, intolleranze, occasioni speciali..." className="mt-1.5" />
                </div>
                <p className="md:col-span-2 text-sm text-muted-foreground">
                  Per gruppi numerosi o richieste particolari consigliamo di chiamare direttamente il ristorante.
                </p>
                <div className="md:col-span-2 pt-2">
                  <Button type="submit" variant="wine" size="xl" className="w-full md:w-auto">
                    Invia richiesta di prenotazione
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* CALL CARD */}
          <aside className="rounded-xl bg-wine text-wine-foreground p-8 shadow-lg">
            <Phone className="h-7 w-7 text-sand" />
            <h3 className="mt-5 font-display text-3xl">Preferisci chiamare?</h3>
            <p className="mt-3 text-cream/85 leading-relaxed">
              Siamo a disposizione durante gli orari di apertura per prenotazioni dirette
              e richieste speciali.
            </p>
            <a href="tel:0119561186" className="mt-6 block font-display text-3xl text-sand">
              011 956 1186
            </a>
            <Button asChild variant="cream" size="lg" className="mt-6 w-full">
              <a href="tel:0119561186">
                <Phone className="h-4 w-4" /> Chiama ora
              </a>
            </Button>
            <p className="mt-6 text-xs text-cream/70 leading-relaxed">
              Risposta dal personale del ristorante negli orari di servizio. Fuori orario,
              utilizza il modulo di prenotazione.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
