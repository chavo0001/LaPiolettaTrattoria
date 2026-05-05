import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImg from "@/assets/real-interior-1.jpg";
import insegna from "@/assets/insegna-wordmark.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Sala interna della Trattoria A Casa Mia a Rivoli"
        className="absolute inset-0 h-full w-full object-cover opacity-65"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mt-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-sand text-sand" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-cream/85">
              4,4 su Google · oltre 600 recensioni
            </span>
          </div>

          <h1 className="mt-8">
            <span className="sr-only">Trattoria A Casa Mia</span>
            <span
              aria-hidden="true"
              className="block w-full max-w-[640px] rounded-sm bg-[#0a0d18] p-5 md:p-7 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] ring-1 ring-cream/10"
            >
              <img
                src={insegna}
                alt=""
                width={1600}
                height={896}
                className="block h-auto w-full select-none"
                draggable={false}
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-cream/80 text-balance leading-relaxed">
            Cucina italiana, atmosfera familiare e il piacere di sentirsi davvero a casa.
          </p>

          <p className="mt-5 text-xs tracking-[0.28em] uppercase text-cream/60">
            Rivoli · Cucina tradizionale · Prenotazione consigliata
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Button asChild variant="cream" size="xl">
              <a href="#prenota">Prenota un tavolo</a>
            </Button>
            <Button asChild variant="circle" size="circleLg" className="hidden md:inline-flex">
              <a href="#menu">
                Guarda<br />il menu
              </a>
            </Button>
            <Button asChild variant="editorial" size="xl" className="md:hidden">
              <a href="#menu">Guarda il menu</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 right-5 lg:right-12 hidden md:flex flex-col items-end gap-2 text-cream/60">
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <span className="h-12 w-px bg-cream/40" />
        </div>
      </div>
    </section>
  );
}
