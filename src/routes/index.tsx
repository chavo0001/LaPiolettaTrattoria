import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Taste } from "@/components/site/Taste";
import { Intro } from "@/components/site/Intro";
import { MenuSection } from "@/components/site/Menu";
import { Reservation } from "@/components/site/Reservation";
import { Reviews } from "@/components/site/Reviews";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { MobileBar } from "@/components/site/MobileBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Pioletta Trattoria Piemontese · Torino Quadrilatero Romano" },
      {
        name: "description",
        content:
          "La Pioletta Trattoria Piemontese a Torino, nel Quadrilatero Romano. Agnolotti, plin, vitello tonnato. Cucina autentica, vini piemontesi, atmosfera raccolta. Prenota: 351 423 3563.",
      },
      { property: "og:title", content: "La Pioletta Trattoria Piemontese · Torino" },
      {
        property: "og:description",
        content:
          "Tradizione piemontese, piatti fatti bene, atmosfera conviviale. Via San Domenico 4, Torino.",
      },
      { property: "og:type", content: "restaurant" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <Taste />
      <Intro />
      <MenuSection />
      <Reservation />
      <Reviews />
      <Gallery />
      <Location />
      <Footer />
      <MobileBar />
    </main>
  );
}
