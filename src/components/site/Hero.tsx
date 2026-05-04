import { Button } from "@/components/ui/button";
import { MapPin, Star, UtensilsCrossed } from "lucide-react";
import heroImg from "@/assets/hero-trattoria.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Interno della Trattoria A Casa Mia a Rivoli"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-sand text-sand" />
            <span className="text-xs md:text-sm font-medium tracking-wide text-cream">
              4,4 su Google · oltre 600 recensioni
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-cream md:text-7xl lg:text-8xl">
            Trattoria
            <span className="block italic text-sand">A Casa Mia</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg md:text-xl text-cream/90 text-balance">
            Cucina italiana, atmosfera familiare e il piacere di sentirsi davvero a casa.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/80">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> Rivoli, Torino
            </span>
            <span className="text-sand">·</span>
            <span className="inline-flex items-center gap-1.5">
              <UtensilsCrossed className="h-4 w-4" /> Cucina tradizionale
            </span>
            <span className="text-sand">·</span>
            <span>Prenotazione consigliata</span>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#prenota">Prenota un tavolo</a>
            </Button>
            <Button asChild variant="cream" size="xl">
              <a href="#menu">Guarda il menu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
