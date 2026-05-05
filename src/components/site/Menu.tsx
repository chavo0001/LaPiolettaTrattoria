import { FileText } from "lucide-react";
import team from "@/assets/team.png";

const pdfs = [
  { label: "Menu Italiano", href: "/menu/menu-italiano.pdf", lang: "IT" },
  { label: "Menu English", href: "/menu/menu-english.pdf", lang: "EN" },
  { label: "Menu Francais", href: "/menu/menu-francais.pdf", lang: "FR" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <span className="rule" />
              Il nostro team
            </span>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-5xl lg:text-6xl">
              Oltre vent&apos;anni
              <span className="block italic font-light text-sand">di A Casa Mia.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-cream/70">
              Da piu di 20 anni accogliamo i nostri ospiti a Rivoli con cucina sincera,
              carni selezionate e un servizio familiare. Dietro ogni piatto c&apos;e una
              squadra che lavora ogni giorno con passione, attenzione e voglia di farvi
              sentire a casa.
            </p>
            <p className="mt-5 text-sm italic leading-relaxed text-cream/50">
            </p>
          </div>

          <div className="lg:col-span-7">
            <figure className="relative overflow-hidden rounded-lg border border-cream/12 bg-espresso shadow-2xl shadow-black/25">
              <img
                src={team}
                alt="Team della Trattoria A Casa Mia nel locale"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>

        <div
          id="menu-pdf"
          className="scroll-mt-28 mt-24 rounded-lg border border-cream/12 bg-espresso/70 px-6 py-12 text-center shadow-2xl shadow-black/20 md:px-10 lg:mt-32 lg:px-14 lg:py-16"
        >
          <span className="eyebrow">Consulta il menu completo</span>
          <h3 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Scegli la lingua
            <span className="block italic font-light text-sand">e apri la carta.</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-cream/60 md:text-base">
            Tutti i menu si aprono in PDF in una nuova scheda. Prezzi e disponibilita
            possono variare in base alla stagione.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {pdfs.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-40 flex-col items-center justify-center rounded-lg border border-cream/18 bg-ink/55 p-7 text-cream transition-all hover:-translate-y-1 hover:border-sand/70 hover:bg-ink/80 hover:shadow-xl hover:shadow-black/20"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sand/45 text-sand transition-colors group-hover:bg-sand group-hover:text-ink">
                  <FileText className="h-6 w-6" />
                </span>
                <span className="mt-6 text-[10px] uppercase tracking-[0.35em] text-sand/75">
                  {p.lang}
                </span>
                <span className="mt-3 font-display text-3xl text-cream">{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
