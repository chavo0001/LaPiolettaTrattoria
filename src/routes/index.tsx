import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
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
      { title: "Trattoria A Casa Mia · Cucina italiana a Rivoli (TO)" },
      {
        name: "description",
        content:
          "Trattoria A Casa Mia a Rivoli, Torino. Cucina italiana e piemontese, atmosfera familiare. Prenota un tavolo o chiama 011 956 1186.",
      },
      { property: "og:title", content: "Trattoria A Casa Mia · Rivoli (TO)" },
      {
        property: "og:description",
        content:
          "Cucina italiana, atmosfera familiare e il piacere di sentirsi davvero a casa. Corso Francia 28, Rivoli.",
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
