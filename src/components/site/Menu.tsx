import { FileText } from "lucide-react";
import menuImage from "@/assets/pioletta-plin-piatto.png";

const menus = [
  { label: "Menu Italiano", href: "/menu/pioletta-menu-italiano.png", lang: "IT" },
  { label: "Menu English", href: "/menu/pioletta-menu-english.png", lang: "EN" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-ink py-20 sm:py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="rule" />
              La cucina
            </span>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-cream md:mt-6 md:text-5xl lg:text-6xl">
              Piatti che
              <span className="block italic font-light text-sand">sappiamo fare.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70 md:mt-8">
              La Pioletta propone la cucina piemontese come la conosciamo: agnolotti al ragù, plin alle erbette, vitello tonnato. Piatti che torni a ordinare perché sono buoni, perché li riconosci, perché sono fatti come devono. Non c&apos;è novità, c&apos;è tradizione.
            </p>
            <p className="mt-5 text-sm italic leading-relaxed text-cream/50">
            </p>
          </div>

          <div className="lg:col-span-7">
            <figure className="relative overflow-hidden rounded-lg border border-cream/12 bg-espresso shadow-2xl shadow-black/25">
              <img
                src={menuImage}
                alt="Plin e vino rosso de La Pioletta"
                className="aspect-[16/10] w-full object-cover md:aspect-[4/3]"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div
          id="menu-pdf"
          className="scroll-mt-28 mt-14 rounded-lg border border-cream/12 bg-espresso/70 px-4 py-8 text-center shadow-2xl shadow-black/20 md:mt-24 md:px-10 md:py-12 lg:mt-32 lg:px-14 lg:py-16"
        >
          <span className="eyebrow">Consulta il menu completo</span>
          <h3 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-cream md:mt-5 md:text-5xl lg:text-6xl">
            Scegli la lingua
            <span className="block italic font-light text-sand">e apri la carta.</span>
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/60 md:mt-6 md:text-base">
            I menu si aprono in una nuova scheda. Prezzi e disponibilita
            possono variare in base alla stagione.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
            {menus.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-32 flex-col items-center justify-center rounded-lg border border-cream/18 bg-ink/55 p-4 text-cream transition-all hover:-translate-y-1 hover:border-sand/70 hover:bg-ink/80 hover:shadow-xl hover:shadow-black/20 md:min-h-40 md:p-7"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/45 text-sand transition-colors group-hover:bg-sand group-hover:text-ink md:h-14 md:w-14">
                  <FileText className="h-5 w-5 md:h-6 md:w-6" />
                </span>
                <span className="mt-4 text-[10px] uppercase tracking-[0.35em] text-sand/75 md:mt-6">
                  {p.lang}
                </span>
                <span className="mt-2 font-display text-2xl text-cream md:mt-3 md:text-3xl">{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
