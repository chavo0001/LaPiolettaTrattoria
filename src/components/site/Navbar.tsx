import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#trattoria", label: "La Pioletta" },
  { href: "#menu-pdf", label: "Menu" },
  { href: "#prenota", label: "Prenota" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#dove-siamo", label: "Dove siamo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-cream/10" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-12">
        <a
          href="#home"
          aria-label="La Pioletta Trattoria Piemontese"
          className="relative flex h-[3.05rem] w-[9.65rem] items-center justify-center overflow-hidden rounded-[50%] border border-cream/75 bg-[#6f1f2c] shadow-lg shadow-black/25 ring-1 ring-black/20 md:h-[3.35rem] md:w-[10.6rem]"
        >
          <span className="absolute inset-[2px] rounded-[50%] border border-cream/20" aria-hidden="true" />
          <span className="flex -translate-y-px flex-col items-center leading-none text-cream">
            <span className="font-pioletta text-[1.62rem] leading-[0.8] md:text-[1.8rem]">
              Pioletta
            </span>
            <span className="mt-1 flex items-center gap-1 font-body text-[0.34rem] font-semibold uppercase tracking-[0.05em] md:text-[0.38rem] md:tracking-[0.07em]">
              <span>Trattoria</span>
              <span className="relative inline-flex h-3 w-2 -rotate-6 items-center justify-center" aria-hidden="true">
                <span className="absolute top-0 h-2 w-1.5 rounded-b-full rounded-t-[45%] border border-current" />
                <span className="absolute top-2 h-1.5 w-px bg-current" />
                <span className="absolute bottom-0 h-px w-2 rounded-full bg-current" />
              </span>
              <span>Piemontese</span>
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-[11px] font-medium tracking-[0.22em] uppercase text-cream/80 hover:text-sand transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:3514233563"
            className="flex items-center gap-2 text-xs tracking-wider text-cream/80 hover:text-sand transition-colors">
            <Phone className="h-3.5 w-3.5" /> 351 423 3563
          </a>
        </div>

        <button aria-label="Apri menu"
          className="lg:hidden p-2 text-cream"
          onClick={() => setOpen((o) => !o)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-cream/10">
          <div className="flex flex-col px-5 py-6 gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="py-3 text-base text-cream/90 border-b border-cream/10 tracking-wide">
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-5">
              <Button asChild variant="editorial" className="flex-1">
                <a href="tel:3514233563"><Phone className="h-4 w-4 mr-2" />Chiama</a>
              </Button>
              <Button asChild variant="cream" className="flex-1">
                <a href="#prenota" onClick={() => setOpen(false)}>Prenota</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
