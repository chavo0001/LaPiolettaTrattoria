import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import antipasti from "@/assets/real-antipasti.jpg";
import tartare from "@/assets/real-tartare.jpg";
import agnolotti from "@/assets/dish-agnolotti.jpg";
import bonet from "@/assets/dish-bonet.jpg";

const dishes = [
  { name: "Vitello tonnato della casa", desc: "Vitello cotto a bassa temperatura, salsa tonnata classica e capperi.", price: "12", img: antipasti },
  { name: "Agnolotti al sugo d’arrosto", desc: "Pasta fresca ripiena, condita con sugo d’arrosto della casa.", price: "13", img: agnolotti },
  { name: "Tajarin al ragù", desc: "Tajarin all’uovo tirati a mano, ragù di carne lentamente cotto.", price: "12", img: null },
  { name: "Brasato al vino rosso", desc: "Manzo cotto a lungo nel vino rosso, servito con polenta.", price: "18", img: tartare },
  { name: "Tomini piemontesi", desc: "Tomini freschi con salsa verde e peperoni in agrodolce.", price: "10", img: null },
  { name: "Bonet della tradizione", desc: "Dolce al cucchiaio con cacao, amaretti e caramello.", price: "6", img: bonet },
];

const pdfs = [
  { label: "Menu Italiano" },
  { label: "Menu English" },
  { label: "Menu Français" },
  { label: "Carta vini" },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-ink py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow"><span className="rule" />Il menu</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Il nostro
              <span className="italic text-sand font-light"> menù.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-cream/70 leading-relaxed">
            Una selezione di piatti italiani e piemontesi, tra tradizione e semplicità.
            Una cucina sincera, fatta ogni giorno con cura.
          </p>
        </div>

        {/* Dish list */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {dishes.map((d, i) => (
            <article key={d.name} className="group flex gap-5 border-t border-cream/12 pt-6">
              {d.img && (
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-20 h-24 lg:w-24 lg:h-28 object-cover flex-shrink-0 transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl text-cream truncate">{d.name}</h3>
                  <span className="flex-1 border-b border-dotted border-cream/20 translate-y-[-4px]" />
                  <span className="font-display text-xl text-sand tabular-nums">€ {d.price}</span>
                </div>
                <p className="mt-2 text-sm text-cream/65 leading-relaxed">{d.desc}</p>
                <span className="mt-3 inline-block text-[10px] tracking-[0.3em] uppercase text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* PDF section */}
        <div className="mt-24 border-t border-cream/12 pt-14 text-center max-w-3xl mx-auto">
          <span className="eyebrow">Consulta il menu completo</span>
          <h3 className="mt-5 font-display text-3xl md:text-4xl text-cream italic font-light">
            Carta completa & vini
          </h3>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {pdfs.map((p) => (
              <Button key={p.label} variant="editorial" size="lg" asChild>
                <a href="#" aria-disabled>
                  <FileText className="h-3.5 w-3.5" /> {p.label}
                </a>
              </Button>
            ))}
          </div>
          <p className="mt-6 text-xs text-cream/45 italic">
            I PDF saranno collegati a breve. Prezzi indicativi, soggetti a variazioni stagionali.
          </p>
        </div>
      </div>
    </section>
  );
}
