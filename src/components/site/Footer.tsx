import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

const socialLinks = {
  instagram: "https://www.instagram.com/trattoria_a_casamia/",
  facebook: "https://www.facebook.com/p/Trattoria-A-Casa-Mia-Rivoli-100063458896018/",
};

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display leading-none">
              <div className="text-3xl text-cream">Trattoria</div>
              <div className="text-4xl italic text-sand -mt-1 font-light">A Casa Mia</div>
            </div>
            <p className="mt-6 max-w-sm text-cream/60 leading-relaxed">
              Cucina italiana e atmosfera familiare nel cuore di Rivoli.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-wine hover:border-wine transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:bg-wine hover:border-wine transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Naviga</h4>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-sand transition-colors">Home</a></li>
              <li><a href="#trattoria" className="hover:text-sand transition-colors">La Trattoria</a></li>
              <li><a href="#menu-pdf" className="hover:text-sand transition-colors">Menu</a></li>
              <li><a href="#prenota" className="hover:text-sand transition-colors">Prenota</a></li>
              <li><a href="#recensioni" className="hover:text-sand transition-colors">Recensioni</a></li>
              <li><a href="#dove-siamo" className="hover:text-sand transition-colors">Dove siamo</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-cream/50">Contatti</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-sand" />
                <span>Corso Francia 28<br />10098 Rivoli TO</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-sand" />
                <a href="tel:0119561186" className="hover:text-sand transition-colors">011 956 1186</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Trattoria A Casa Mia. Tutti i diritti riservati.</span>
          <span>Rivoli (TO)</span>
        </div>
      </div>
    </footer>
  );
}
