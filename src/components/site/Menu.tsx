import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type Dish = { name: string; desc: string; price: string };
type Category = { title: string; dishes: Dish[] };

const categories: Category[] = [
  {
    title: "Antipasti",
    dishes: [
      { name: "Vitello tonnato della casa", desc: "Fettine di vitello con salsa tonnata classica e capperi.", price: "12" },
      { name: "Tomini piemontesi", desc: "Tomini freschi con salsa verde e peperoni in agrodolce.", price: "10" },
      { name: "Tagliere di salumi e formaggi", desc: "Selezione di salumi piemontesi e formaggi locali.", price: "14" },
    ],
  },
  {
    title: "Primi",
    dishes: [
      { name: "Agnolotti al sugo d’arrosto", desc: "Pasta fresca ripiena, condita con sugo d’arrosto della casa.", price: "13" },
      { name: "Tajarin al ragù", desc: "Tajarin all’uovo tirati a mano, ragù di carne lentamente cotto.", price: "12" },
      { name: "Risotto del giorno", desc: "Preparato secondo la stagione, chiedere al personale.", price: "13" },
    ],
  },
  {
    title: "Secondi",
    dishes: [
      { name: "Brasato al vino rosso", desc: "Manzo cotto a lungo nel vino rosso, servito con polenta.", price: "18" },
      { name: "Milanese con patate", desc: "Cotoletta dorata e croccante, contorno di patate al forno.", price: "16" },
      { name: "Arrosto con contorno di stagione", desc: "Arrosto di vitello con verdure di stagione.", price: "17" },
    ],
  },
  {
    title: "Dolci",
    dishes: [
      { name: "Bonet piemontese", desc: "Dolce al cucchiaio con cacao, amaretti e caramello.", price: "6" },
      { name: "Tiramisù della casa", desc: "Preparato ogni giorno con savoiardi, mascarpone e caffè.", price: "6" },
      { name: "Panna cotta", desc: "Panna cotta classica con cuore di frutti di bosco o caramello.", price: "6" },
    ],
  },
  {
    title: "Vini e bevande",
    dishes: [
      { name: "Calice di Barbera d’Asti", desc: "Selezione di cantine piemontesi.", price: "5" },
      { name: "Calice di Nebbiolo", desc: "Vino rosso strutturato, servito alla giusta temperatura.", price: "6" },
      { name: "Acqua, caffè e digestivi", desc: "Carta completa di bevande e amari della tradizione.", price: "—" },
    ],
  },
];

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="paper-texture absolute inset-0 opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Il menu
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Il nostro <span className="italic text-wine">menu</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground text-balance">
            Piatti semplici, saporiti e pensati per farvi stare bene a tavola.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-14">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="font-display text-3xl text-wine border-b border-wine/20 pb-3">
                {cat.title}
              </h3>
              <ul className="mt-6 space-y-5">
                {cat.dishes.map((d) => (
                  <li key={d.name} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xl text-foreground">{d.name}</span>
                      <span className="flex-1 border-b border-dotted border-border/80 translate-y-[-4px]" />
                      <span className="font-medium text-foreground tabular-nums">
                        {d.price === "—" ? "—" : `€ ${d.price}`}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="outline" size="lg">
            <Download className="h-4 w-4" />
            Scarica il menu completo
          </Button>
          <p className="text-sm text-muted-foreground">
            Prezzi indicativi. Il menu può variare in base alla stagione.
          </p>
        </div>
      </div>
    </section>
  );
}
