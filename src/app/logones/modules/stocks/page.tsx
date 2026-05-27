import type { Metadata } from "next";
import { ModulePageHero } from "../../components/common/ModulePageHero";
import { Section, SectionLabel, SectionTitle, SectionLead } from "../../components/common/Section";
import { FeatureRow } from "../../components/common/FeatureRow";
import { LegalNotice } from "../../components/common/LegalNotice";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Gestion des stocks restaurant : scan BL fournisseur et marge en temps réel",
  description:
    "Scan du bon de livraison fournisseur → mise à jour automatique du stock → recalcul de la marge. Natif, zéro saisie double.",
};

export default function StocksPage() {
  return (
    <>
      <ModulePageHero
        module="stocks"
        title="Votre food cost. En temps réel. Sans ressaisie."
        lead="Scannez votre bon de livraison fournisseur. Le stock se met à jour. La marge se recalcule. Immédiatement. Sans toucher à rien."
      />

      <Section tone="dark">
        <SectionLabel color="stocks">Ce que vous faites encore à la main</SectionLabel>
        <SectionTitle>Trois heures par semaine qui ne devraient pas exister.</SectionTitle>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { title: "Ressaisie manuelle des BL", body: "Vous tapez ligne par ligne ce que le fournisseur vous livre — souvent à 23h après le service." },
            { title: "Food cost mensuel à l'aveugle", body: "Vous découvrez la dérive en fin de mois quand l'expert-comptable arrive avec les chiffres." },
            { title: "Inventaires-rituels longs", body: "Chaque inventaire papier vous coûte 2 à 4 heures et finit dans un classeur que personne ne consulte." },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-bg-surface p-6">
              <h3 className="text-base font-semibold text-text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-[1.65] text-text-secondary">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="space-y-20">
          <FeatureRow
            module="stocks"
            title="Scan du BL fournisseur → stock automatique"
            description="Photographiez ou importez le bon de livraison. Logones reconnaît les références, met à jour les quantités et recalcule les coûts unitaires. Le travail saisie est terminé."
            bullets={[
              "Reconnaissance OCR des BL standards",
              "Mapping fournisseur ↔ référence interne",
              "Historique des prix d'achat traçable",
            ]}
          />
          <FeatureRow
            module="stocks"
            title="Calcul de marge en direct, par plat"
            description="À chaque encaissement, le coût matière de la recette est déduit, la marge est calculée, votre food cost remis à jour. Vous voyez ce qui marche — pendant le service."
            bullets={[
              "Fiche technique par plat avec coût à la portion",
              "Marge nominale vs marge réelle",
              "Catégorisation automatique par famille",
            ]}
            reverse
          />
          <FeatureRow
            module="stocks"
            title="Alertes dérive food cost"
            description="Fixez votre seuil. Logones surveille votre food cost en continu et vous alerte avant que la dérive ne devienne un problème de trésorerie."
            bullets={[
              "Seuils configurables par catégorie",
              "Alerte journalière, hebdomadaire ou temps réel",
              "Suggestions de cause (prix d'achat, gaspillage, vol)",
            ]}
          />
        </div>
      </Section>

      <Section tone="light" size="compact">
        <LegalNotice tone="light">
          Les estimations de food cost et de marge présentées par Logones sont indicatives. Pour la validation de vos comptes et de votre déductibilité, consultez votre expert-comptable.
        </LegalNotice>
      </Section>

      <FinalCTA />
    </>
  );
}
