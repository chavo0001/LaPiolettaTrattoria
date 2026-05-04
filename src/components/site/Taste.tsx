import { Button } from "@/components/ui/button";
import agnolotti from "@/assets/dish-agnolotti.jpg";
import table from "@/assets/table-set.jpg";
import wine from "@/assets/wine-cheers.jpg";
import pasta from "@/assets/pasta-hands.jpg";

export function Taste() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="divider-ornament text-xs uppercase tracking-[0.25em]">
            Assaggio
          </span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            Sapori di casa, <span className="italic text-wine">a colpo d’occhio</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Piatti semplici, caldi e tradizionali, pensati per farvi sentire davvero a casa.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {/* Foto principale */}
          <div className="relative col-span-2 md:col-span-2 md:row-span-2 overflow-hidden rounded-xl shadow-sm aspect-[4/3] md:aspect-[5/4]">
            <img
              src={agnolotti}
              alt="Agnolotti al sugo d’arrosto"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
            <div className="absolute left-3 bottom-3 md:left-4 md:bottom-4">
              <span className="inline-block rounded-full bg-ink/70 backdrop-blur-sm px-3 py-1.5 text-[11px] md:text-xs font-medium tracking-wide text-cream">
                Cucina italiana · atmosfera familiare
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-sm aspect-square">
            <img
              src={pasta}
              alt="Pasta fresca tirata a mano"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="overflow-hidden rounded-xl shadow-sm aspect-square">
            <img
              src={table}
              alt="Tavolo apparecchiato"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          <div className="hidden md:block overflow-hidden rounded-xl shadow-sm aspect-square col-start-3">
            <img
              src={wine}
              alt="Brindisi con vino rosso"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#prenota">Prenota un tavolo</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#menu">Guarda il menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
