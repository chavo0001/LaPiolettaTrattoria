import { Heart, MapPin, UtensilsCrossed } from "lucide-react";

const cards = [
  {
    icon: UtensilsCrossed,
    title: "Cucina tradizionale",
    text: "Piatti italiani preparati con attenzione, sapori riconoscibili e ingredienti scelti.",
  },
  {
    icon: Heart,
    title: "Atmosfera familiare",
    text: "Un ambiente caldo e informale, perfetto per pranzi, cene e momenti in compagnia.",
  },
  {
    icon: MapPin,
    title: "A Rivoli",
    text: "Facile da raggiungere, in Corso Francia 28, a pochi minuti dal centro.",
  },
];

export function Intro() {
  return (
    <section id="trattoria" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            La trattoria
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Una trattoria dove
            <span className="italic text-wine"> sentirsi a casa</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance leading-relaxed">
            A Casa Mia nasce per chi cerca una cucina sincera, un ambiente accogliente e
            piatti capaci di riportare al piacere della tavola italiana. Una trattoria
            semplice, curata e familiare, nel cuore di Rivoli.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-lg border border-border bg-card p-8 transition-all hover:border-wine/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-wine/10 text-wine">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
