import agnolotti from "@/assets/dish-agnolotti.jpg";
import vitello from "@/assets/dish-vitello.jpg";
import wine from "@/assets/wine-cheers.jpg";
import bonet from "@/assets/dish-bonet.jpg";
import table from "@/assets/table-set.jpg";
import pasta from "@/assets/pasta-hands.jpg";

const items = [
  { src: agnolotti, alt: "Agnolotti al sugo d’arrosto", className: "md:col-span-2 md:row-span-2 aspect-square" },
  { src: table, alt: "Tavolo apparecchiato con vino", className: "aspect-square" },
  { src: wine, alt: "Brindisi con vino rosso", className: "aspect-square" },
  { src: pasta, alt: "Pasta fresca tirata a mano", className: "aspect-square" },
  { src: vitello, alt: "Vitello tonnato della casa", className: "aspect-square" },
  { src: bonet, alt: "Bonet piemontese", className: "md:col-span-2 aspect-[2/1]" },
];

export function Gallery() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Galleria
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Un assaggio di <span className="italic text-wine">A Casa Mia</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-lg ${it.className}`}>
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/15 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
