import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Star } from "lucide-react";
import heroImg from "@/assets/pioletta-locale-reale.png";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pioletta_trattoriapiemontese/",
    Icon: Instagram,
  },
  {
    label: "TheFork",
    href: "https://www.thefork.it/ristorante/pioletta-trattoria-piemontese-r855605",
    Icon: Facebook,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Sala interna de La Pioletta Trattoria Piemontese a Torino"
        className="absolute inset-0 h-full w-full object-cover object-[center_44%] opacity-[0.78]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-16 pt-28 md:pb-20 md:pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mt-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-sand text-sand" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-cream/85">
              4,4/5 su TheFork · Torino
            </span>
          </div>

          <h1 className="mt-8 text-cream drop-shadow-[0_3px_18px_rgb(0_0_0_/_0.55)]">
            <span className="font-pioletta block text-[4.6rem] leading-[0.82] text-balance text-cream min-[390px]:text-[5.15rem] md:text-[8.2rem] lg:text-[10rem]">
              Pioletta
            </span>
            <span className="mt-4 flex max-w-[21rem] items-center gap-x-3 font-body text-[0.62rem] font-medium uppercase tracking-[0.24em] text-cream/85 min-[390px]:gap-x-4 min-[390px]:text-[0.68rem] min-[390px]:tracking-[0.28em] md:mt-5 md:max-w-none md:gap-x-5 md:text-base md:tracking-[0.42em]">
              <span>Trattoria</span>
              <span
                className="relative inline-flex h-8 w-5 shrink-0 -rotate-6 items-center justify-center text-sand md:h-14 md:w-8"
                aria-hidden="true"
              >
                <span className="absolute top-0.5 h-4 w-3 rounded-b-full rounded-t-[45%] border-2 border-current md:top-1 md:h-6 md:w-5" />
                <span className="absolute top-2 h-2 w-2 rounded-b-full bg-current/75 md:top-3 md:h-3 md:w-3.5" />
                <span className="absolute top-[1.1rem] h-4 w-0.5 bg-current md:top-7 md:h-6" />
                <span className="absolute bottom-0.5 h-0.5 w-4 rounded-full bg-current md:bottom-1 md:w-6" />
              </span>
              <span>Piemontese</span>
            </span>
          </h1>

          <p className="mt-7 max-w-[20rem] text-sm leading-relaxed text-cream/82 md:mt-10 md:max-w-xl md:text-base">
            Agnolotti, plin, vitello tonnato e i sapori veri della cucina piemontese.
            <br />
            Nel cuore del Quadrilatero Romano di Torino.
          </p>

          <p className="mt-4 max-w-[20rem] text-[0.62rem] uppercase leading-relaxed tracking-[0.18em] text-cream/60 md:mt-5 md:max-w-none md:text-xs md:tracking-[0.28em]">
            Torino · Cucina Piemontese · Prenotazione consigliata
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-5">
            <Button asChild variant="cream" size="xl">
              <a href="#prenota">Prenota un tavolo</a>
            </Button>
            <Button asChild variant="circle" size="circleLg" className="hidden md:inline-flex">
              <a href="#menu-pdf">
                Guarda<br />il menu
              </a>
            </Button>
            <Button asChild variant="editorial" size="xl" className="md:hidden">
              <a href="#menu-pdf">Guarda il menu</a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-ink/35 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-cream/80 backdrop-blur-sm transition-all hover:border-sand/70 hover:bg-cream/10 hover:text-sand"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
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
