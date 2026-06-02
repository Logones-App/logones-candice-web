import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../common/Section";
import { ButtonPrimary } from "../common/Buttons";

const includedAll = [
  "Caisse en cours de certification NF525",
  "Données exportables, sans frais",
  "Support aux heures de service",
  "Onboarding sur site à Lyon",
];

export function PricingTeaser() {
  return (
    <Section tone="surface">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <SectionLabel color="gold">Tarifs publics</SectionLabel>
          <SectionTitle>
            Affichés. <span className="italic">Avant votre premier appel.</span>
          </SectionTitle>
          <p className="mt-5 max-w-[480px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-secondary">
            13 logiciels sur 15 cachent leurs prix. Pas nous. Nous pensons
            qu&apos;un restaurateur mérite de savoir ce qu&apos;il achète avant
            de parler à un commercial.
          </p>

          <ul className="mt-7 space-y-3">
            {includedAll.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold-light"
                  aria-hidden
                />
                <span className="text-text-primary">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonPrimary href="/tarifs" size="lg" showArrow>
              Voir tous les tarifs
            </ButtonPrimary>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: "Starter", price: 90 },
            { name: "Pro", price: 169, featured: true },
            { name: "Premium", price: 300 },
          ].map((tier) => (
            <Link
              key={tier.name}
              href="/tarifs"
              className={`flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                tier.featured
                  ? "border-gold-light bg-bg-base shadow-[var(--shadow-glow-gold)]"
                  : "border-border bg-bg-elevated hover:border-gold-light/30"
              }`}
            >
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.08em] ${
                  tier.featured ? "text-gold-light" : "text-text-muted"
                }`}
              >
                {tier.name}
              </p>
              <p
                className={`mt-3 font-sans text-3xl font-semibold ${
                  tier.featured ? "text-gold-light" : "text-text-primary"
                }`}
              >
                {tier.price} €
              </p>
              <p className="mt-0.5 text-[11px] text-text-muted">/ mois TTC</p>
              <p className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-gold-light">
                Voir le détail
                <ArrowRight className="h-3 w-3" aria-hidden />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
