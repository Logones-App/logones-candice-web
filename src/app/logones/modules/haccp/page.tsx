import type { Metadata } from "next";
import { ModulePageHero } from "../../components/common/ModulePageHero";
import { Section, SectionLabel, SectionTitle, SectionLead } from "../../components/common/Section";
import { FeatureRow } from "../../components/common/FeatureRow";
import { LegalNotice } from "../../components/common/LegalNotice";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Module HACCP proactif avec veille réglementaire",
  description:
    "Tableau de bord de complétude HACCP, alertes proactives avant inspection, conforme règlement CE 852/2004. Le seul HACCP intégré à une caisse NF525.",
};

export default function HaccpPage() {
  return (
    <>
      <ModulePageHero
        module="haccp"
        title="L'hygiène alimentaire qui vous alerte avant — pas après."
        lead="Tableau de bord de complétude HACCP conforme au règlement CE 852/2004. Alertes proactives avant vos échéances réglementaires — pas après une mise en demeure."
      />

      <Section tone="dark">
        <SectionLabel color="haccp">Ce que votre HACCP actuel ne fait pas</SectionLabel>
        <SectionTitle>Enregistrer, ce n&apos;est pas anticiper.</SectionTitle>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { title: "Aucune veille réglementaire", body: "Vous lisez le Journal Officiel ? Personne ne le fait. Les obligations évoluent, vous n'êtes prévenu que par votre vétérinaire officiel — souvent en contrôle." },
            { title: "Alertes après-coup", body: "Votre logiciel vous dit que vous avez oublié un relevé. Hier. Trop tard pour la traçabilité du jour." },
            { title: "Pas de complétude visible", body: "Vous avez 200 enregistrements ce mois-ci. Combien manquent ? Aucune idée — sauf à fouiller." },
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
            module="haccp"
            title="Tableau de bord de complétude HACCP"
            description="Un seul écran vous dit où vous en êtes. Quelle proportion de relevés faits, combien manquent, où sont les trous. Pas de prédiction sur le résultat d'une inspection — juste la vérité sur votre documentation."
            bullets={[
              "Visualisation hebdo / mensuelle / trimestrielle",
              "Détection des trous de traçabilité",
              "Export horodaté pour les contrôles DDPP",
            ]}
          />
          <FeatureRow
            module="haccp"
            title="Veille réglementaire proactive automatique"
            description="Logones surveille les évolutions réglementaires HACCP et vous alerte avant vos échéances — sans que vous ayez à surveiller le Journal Officiel."
            bullets={[
              "Suivi des arrêtés et règlements applicables CHR",
              "Alertes avant échéance, pas après",
              "Recommandation d'actions concrètes",
            ]}
            reverse
          />
          <FeatureRow
            module="haccp"
            title="Historique horodaté exportable"
            description="Tous vos enregistrements sont horodatés, signés, traçables. Exportables en un clic au format demandé par la DDPP."
            bullets={[
              "Horodatage qualifié, non modifiable",
              "Export PDF + CSV",
              "Conservation 3 ans automatique",
            ]}
          />
        </div>
      </Section>

      <Section tone="dark">
        <div className="rounded-3xl border border-haccp-bright/30 bg-haccp-deep/40 p-8 sm:p-12" style={{ boxShadow: "var(--shadow-glow-green)" }}>
          <SectionLabel color="haccp">Ce que le module HACCP n&apos;est pas</SectionLabel>
          <h3 className="mt-3 font-display text-[clamp(22px,2.5vw,32px)] font-semibold leading-[1.2] text-text-primary">
            Un tableau de complétude. Pas une garantie de conformité.
          </h3>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-text-secondary">
            Le module HACCP de Logones est un outil de suivi de la complétude de votre documentation sanitaire. Il mesure si vos enregistrements sont remplis — il ne prédit pas le résultat d&apos;une inspection DDPP et ne constitue pas une garantie de conformité réglementaire.
          </p>
          <p className="mt-3 text-[15px] leading-[1.7] text-text-secondary">
            La conformité aux obligations sanitaires relève de votre responsabilité d&apos;exploitant au titre du{" "}
            <strong className="text-text-primary">Règlement CE 852/2004</strong> et de l&apos;article L233-1 du Code rural. En cas de doute, consultez votre vétérinaire officiel ou la DDPP de votre département.
          </p>
        </div>
      </Section>

      <Section tone="light" size="compact">
        <LegalNotice tone="light">
          Les informations présentées sur cette page ont un caractère informatif général. Elles ne constituent pas un conseil sanitaire ou juridique. Pour toute question relative à vos obligations HACCP, consultez votre vétérinaire officiel ou la DDPP compétente.
        </LegalNotice>
      </Section>

      <FinalCTA />
    </>
  );
}
