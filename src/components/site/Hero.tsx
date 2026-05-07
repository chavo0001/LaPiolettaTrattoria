import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Star } from "lucide-react";
import heroImg from "@/assets/real-interior-1.jpg";
import heroWordmark from "@/assets/hero-wordmark.png";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/trattoria_a_casamia/",
    Icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/p/Trattoria-A-Casa-Mia-Rivoli-100063458896018/",
    Icon: Facebook,
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Sala interna della Trattoria A Casa Mia a Rivoli"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.78]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-20 pt-32 lg:px-12 lg:pb-28 lg:pt-40">
        <div className="mt-auto max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/40 px-4 py-1.5 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-sand text-sand" />
            <span className="text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase text-cream/85">
              4,4/5 su Google · oltre 600 recensioni
            </span>
          </div>

          <h1 className="sr-only">Trattoria A Casa Mia</h1>
          <img
            src={heroWordmark}
            alt=""
            aria-hidden="true"
            className="mt-8 block w-full max-w-[36.8rem] drop-shadow-[0_2px_18px_rgb(0_0_0_/_0.45)] md:max-w-[40rem] lg:max-w-[43.2rem]"
          />

          <p className="mt-10 max-w-xl text-sm md:text-base text-cream/82 leading-relaxed">
            In centro a Rivoli da oltre 20 anni, carni frollate e ottimo vino
            <br />
            La tradizione ha un sapore rivoluzionario
          </p>

          <p className="mt-5 text-xs tracking-[0.28em] uppercase text-cream/60">
            Rivoli · Cucina tradizionale · Prenotazione consigliata
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
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
