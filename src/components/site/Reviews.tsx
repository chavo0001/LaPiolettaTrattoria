import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Ambiente accogliente, cucina ottima e personale gentile. Una vera trattoria come piace a noi.",
    author: "Cliente Google",
  },
  {
    text: "Piatti abbondanti e sapori autentici. Ci siamo sentiti davvero a casa.",
    author: "Cliente Tripadvisor",
  },
  {
    text: "Ottima scoperta a Rivoli. Consigliato per una cena tranquilla e genuina.",
    author: "Cliente Facebook",
  },
];

export function Reviews() {
  return (
    <section id="recensioni" className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Le recensioni
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Cosa dicono i nostri <span className="italic text-wine">clienti</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Oltre 600 recensioni raccontano l’esperienza di chi è già stato da noi.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-wine/10 px-5 py-2.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-wine text-wine" />
              ))}
            </div>
            <span className="font-medium text-wine">Valutazione media 4,4 / 5</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <figure
              key={i}
              className="relative rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-wine/15" />
              <div className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-sand text-sand" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground italic">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm font-medium text-muted-foreground">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="wine" size="lg">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
              Leggi le recensioni
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
              Lascia una recensione
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
