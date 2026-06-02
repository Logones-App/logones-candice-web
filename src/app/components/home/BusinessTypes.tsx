import {
  ForkKnife,
  Coffee,
  Wine,
  BeerStein,
  Hamburger,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionLabel, SectionTitle } from "../common/Section";

const types = [
  {
    icon: ForkKnife,
    name: "Restaurants traditionnels",
    body: "Bouchons, gastros, bistros — service classique, cuisine maison, marge au plat.",
  },
  {
    icon: Coffee,
    name: "Cafés & salons de thé",
    body: "Service continu, ticket moyen léger, gestion fine du flux client.",
  },
  {
    icon: Wine,
    name: "Bars à vin",
    body: "Carte évolutive, TVA multi-taux, stock liquides précis au centilitre.",
  },
  {
    icon: BeerStein,
    name: "Brasseries",
    body: "Service rapide, cuisine en continu, équipes nombreuses à piloter.",
  },
  {
    icon: Hamburger,
    name: "Snacks & rapide",
    body: "Volume élevé, cycles courts, paiements éclair en heure de pointe.",
  },
];

export function BusinessTypes() {
  return (
    <Section tone="light">
      <div className="text-center">
        <SectionLabel color="gold">Pour qui ?</SectionLabel>
        <SectionTitle tone="light" align="center">
          Construit pour <span className="italic">tous</span> les indépendants de la restauration.
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-dark-sec">
          Que vous serviez 30 couverts dans un bouchon ou 200 dans une brasserie,
          Logones s&apos;adapte à votre rythme — pas l&apos;inverse.
        </p>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {types.map((type) => (
          <li
            key={type.name}
            className="group flex flex-col items-start rounded-2xl border border-border-light bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-light/40 hover:shadow-[0_20px_60px_-20px_rgba(31,31,45,0.15)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-pale">
              <type.icon
                size={22}
                weight="duotone"
                className="text-gold-mid"
                aria-hidden
              />
            </div>
            <h3 className="mt-5 font-sans text-base font-semibold text-text-dark">
              {type.name}
            </h3>
            <p className="mt-2 text-[13px] leading-[1.6] text-text-dark-sec">
              {type.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
