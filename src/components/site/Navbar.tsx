import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#trattoria", label: "La Trattoria" },
  { href: "#menu", label: "Menu" },
  { href: "#recensioni", label: "Recensioni" },
  { href: "#dove-siamo", label: "Dove siamo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#home" className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-xl md:text-2xl tracking-tight",
              scrolled ? "text-foreground" : "text-cream"
            )}
          >
            Trattoria
          </span>
          <span
            className={cn(
              "font-display italic text-base md:text-lg -mt-1",
              scrolled ? "text-wine" : "text-sand"
            )}
          >
            A Casa Mia
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-wine",
                scrolled ? "text-foreground/80" : "text-cream/90"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0119561186"
            className={cn(
              "flex items-center gap-2 text-sm font-medium",
              scrolled ? "text-foreground/80" : "text-cream/90"
            )}
          >
            <Phone className="h-4 w-4" /> 011 956 1186
          </a>
          <Button asChild variant="wine" size="sm">
            <a href="#prenota">Prenota</a>
          </Button>
        </div>

        <button
          aria-label="Apri menu"
          className={cn(
            "lg:hidden p-2 rounded-md",
            scrolled ? "text-foreground" : "text-cream"
          )}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="flex flex-col px-5 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-foreground/90 border-b border-border/60"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" className="flex-1">
                <a href="tel:0119561186"><Phone className="h-4 w-4 mr-2" />Chiama</a>
              </Button>
              <Button asChild variant="wine" className="flex-1">
                <a href="#prenota" onClick={() => setOpen(false)}>Prenota</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
