import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviewsUrl =
  "https://www.thefork.it/ristorante/pioletta-trattoria-piemontese-r855605";

const reviews = [
  {
    text: "La Pioletta e una vera trattoria piemontese nel cuore di Torino. Agnolotti e vini che sanno di passione.",
    author: "Cliente TheFork",
  },
  {
    text: "Atmosfera raccolta, piatti autentici, servizio caloroso. Ci siamo sentiti a casa.",
    author: "Cliente TripAdvisor",
  },
  {
    text: "La miglior cucina piemontese in centro. Vitello tonnato eccezionale e vini perfetti.",
    author: "Cliente Google",
  },
];

export function Reviews() {
  return (
    <section id="recensioni" className="bg-espresso py-20 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <span className="eyebrow"><span className="rule" />Le recensioni</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              La Pioletta scelta
              <span className="block italic text-sand font-light">dai torinesi.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-cream/70 leading-relaxed">
              Nel Quadrilatero Romano, la gente conosce La Pioletta. Tornano per mangiare bene, per l'atmosfera, per la cucina che sanno.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 border border-cream/25 px-4 py-2.5 md:px-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sand text-sand" />
                ))}
              </div>
              <span className="text-sm font-medium text-cream tracking-wide">4,4 / 5 - TheFork</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 md:mt-16 md:grid md:grid-cols-3 md:gap-px md:overflow-visible md:bg-cream/10 md:pb-0">
          {reviews.map((r) => (
            <figure key={r.author} className="min-w-[78%] rounded-md border border-cream/10 bg-espresso p-5 md:min-w-0 md:rounded-none md:border-0 md:p-8 lg:p-10">
              <span className="font-display italic text-4xl text-sand leading-none md:text-5xl">"</span>
              <blockquote className="mt-2 font-display text-lg italic font-light leading-snug text-cream lg:text-2xl">
                {r.text}
              </blockquote>
              <figcaption className="mt-6 text-[10px] uppercase tracking-[0.3em] text-cream/50 md:mt-8">
                - {r.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:flex sm:flex-row sm:justify-center sm:gap-4">
          <Button asChild variant="editorial" size="lg" className="w-full px-2 text-[11px] sm:w-auto sm:px-5 sm:text-sm">
            <a href={reviewsUrl} target="_blank" rel="noreferrer">
              Leggi le recensioni
            </a>
          </Button>
          <Button asChild variant="editorial" size="lg" className="w-full px-2 text-[11px] sm:w-auto sm:px-5 sm:text-sm">
            <a href={reviewsUrl} target="_blank" rel="noreferrer">
              Lascia una recensione
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
