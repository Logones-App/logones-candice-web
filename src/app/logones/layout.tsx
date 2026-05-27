import type { Metadata } from "next";
import { fraunces, poppins, anton, caveat } from "./fonts";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { CookieBanner } from "./components/layout/CookieBanner";

export const metadata: Metadata = {
  title: {
    default:
      "Logones — Logiciel de caisse NF525 tout-en-un pour restaurateurs indépendants",
    template: "%s · Logones",
  },
  description:
    "Un seul outil. Caisse NF525 + stocks + HACCP + RH + réservation nativement connectés. Fondé par des restaurateurs lyonnais. Tarifs transparents dès 90 € TTC/mois.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Logones",
  },
};

export default function LogonesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${fraunces.variable} ${poppins.variable} ${anton.variable} ${caveat.variable} ardoise-bg min-h-screen text-text-primary antialiased`}
      style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
    >
      <a
        href="#contenu-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-gold-light focus:px-4 focus:py-2 focus:text-bg-base focus:font-semibold"
      >
        Aller au contenu principal
      </a>
      <Navbar />
      <main id="contenu-principal">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
