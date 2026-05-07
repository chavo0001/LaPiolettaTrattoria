import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const googleReviewsUrl =
  "https://www.google.com/search?client=firefox-b-d&hs=vWV&sa=X&sca_esv=2139bdf85252c619&sxsrf=ANbL-n4qw_S9N8gDBMw7neMXRf0zSvm0Ow:1778087565594&q=Trattoria+A+Casa+Mia+Recensioni&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDQ3MLM0MzUAAnMLAxNLQ-MNjIyvGOVDihJLSvKLMhMVHBWcE4sTFXyBzKDU5NS84sz8vMxFrIRUAADXIOq5XgAAAA&rldimm=8170696500007804913&tbm=lcl&hl=it-IT&ved=2ahUKEwjZ8-etlKWUAxVKzgIHHa3eDiIQ9fQKegQISBAG&biw=1536&bih=751&dpr=1.25#lkt=LocalPoiReviews";
const googleWriteReviewUrl =
  "https://www.google.com/search?q=Trattoria+A+Casa+Mia+Rivoli&ludocid=8170696500007804913#lrd=0x0:0x7164252d327e1ff1,3,,,,";

const reviews = [
  { text: "Ambiente accogliente, cucina ottima e personale gentile. Una vera trattoria come piace a noi.", author: "Cliente Google" },
  { text: "Piatti abbondanti e sapori autentici. Ci siamo sentiti davvero a casa.", author: "Cliente Tripadvisor" },
  { text: "Ottima scoperta a Rivoli. Consigliato per una cena tranquilla e genuina.", author: "Cliente Facebook" },
];

export function Reviews() {
  return (
    <section id="recensioni" className="bg-espresso py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow"><span className="rule" />Le recensioni</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Una trattoria scelta
              <span className="block italic text-sand font-light">dai clienti.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-cream/70 leading-relaxed">
              Oltre 600 recensioni raccontano l’esperienza di chi è già stato da noi.
            </p>
            <div className="mt-5 inline-flex items-center gap-3 border border-cream/25 px-5 py-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-sand text-sand" />
                ))}
              </div>
              <span className="text-sm font-medium text-cream tracking-wide">4,4 / 5 · Google</span>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10">
          {reviews.map((r, i) => (
            <figure key={i} className="bg-espresso p-8 lg:p-10">
              <span className="font-display italic text-5xl text-sand leading-none">“</span>
              <blockquote className="mt-2 font-display text-xl lg:text-2xl text-cream leading-snug italic font-light">
                {r.text}
              </blockquote>
              <figcaption className="mt-8 text-[10px] tracking-[0.3em] uppercase text-cream/50">
                — {r.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="editorial" size="lg">
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer">
              Leggi le recensioni
            </a>
          </Button>
          <Button asChild variant="editorial" size="lg">
            <a href={googleWriteReviewUrl} target="_blank" rel="noreferrer">
              Lascia una recensione
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
