import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionLead } from "../../components/common/Section";
import { FeatureRow } from "../../components/common/FeatureRow";
import { LegalNotice } from "../../components/common/LegalNotice";
import { FinalCTA } from "../../components/home/FinalCTA";
import { CaisseFeatureHero } from "./CaisseFeatureHero";

export const metadata: Metadata = {
  title: "Logiciel de caisse NF525 certifié pour restaurant indépendant",
  description:
    "Caisse certifiée NF525, TVA multi-taux par client, plan de salle dynamique, calcul de marge en temps réel. Aucune surprise contractuelle.",
};

export default function CaissePage() {
  return (
    <>
      <CaisseFeatureHero />

      <Section tone="dark">
        <SectionLabel color="caisse">Ce que les autres ne font pas</SectionLabel>
        <SectionTitle>Trois points où votre caisse actuelle vous coûte cher.</SectionTitle>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "TVA par table, pas par client",
              body: "Quand un client commande avec alcool et un autre sans à la même table, ils ne paient pas le même taux. La quasi-totalité des caisses gère par table — pas par client.",
            },
            {
              title: "Plan de salle figé",
              body: "Vos réservations vivent ailleurs. Votre plan de salle ne sait pas qui arrive. Vous découvrez les tables disponibles à la volée.",
            },
            {
              title: "Marge calculée après-coup",
              body: "Votre marge, vous la connaissez en fin de mois quand votre expert-comptable vous l'annonce. Trop tard pour corriger.",
            },
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
            module="caisse"
            title="TVA multi-taux individualisée par client"
            description="Logones gère la ventilation TVA à l'échelle du client — pas de la table. Quand votre client A commande un menu enfant et votre client B un menu avec vin, les taux 10% et 20% s'appliquent au bon endroit, sans intervention manuelle."
            bullets={[
              "Détection automatique du taux selon le produit",
              "Reventilation en temps réel sur le ticket",
              "Export comptable cohérent CGI art. 279",
            ]}
          />
          <FeatureRow
            module="caisse"
            title="Plan de salle dynamique relié aux réservations"
            description="Le plan de salle reflète en temps réel l'état du restaurant : réservé, occupé, libéré, en attente. Les serveurs voient ce qui arrive. La cuisine anticipe. Personne n'est surpris."
            bullets={[
              "Synchronisation réservation → table",
              "Gestion du timing de service",
              "Vue tablette optimisée",
            ]}
            reverse
          />
          <FeatureRow
            module="caisse"
            title="Marge calculée en direct pendant le service"
            description="Votre food cost, votre marge sur chaque plat, votre ratio par catégorie — recalculés à chaque encaissement. Vous voyez ce qui se passe pendant le service, pas trois semaines après."
            bullets={[
              "Recette technique par plat",
              "Décomposition coûts/marge à la portion",
              "Alertes dérive configurables",
            ]}
          />
        </div>
      </Section>

      <Section tone="dark">
        <div className="rounded-3xl border border-caisse-bright/30 bg-caisse-deep/40 p-8 sm:p-12" style={{ boxShadow: "var(--shadow-glow-blue)" }}>
          <SectionLabel color="caisse">Différence fiscale, pas option</SectionLabel>
          <h3 className="mt-3 font-display text-[clamp(22px,2.5vw,32px)] font-semibold leading-[1.2] text-text-primary">
            TVA individualisée par client à la même table.
          </h3>
          <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-text-secondary">
            En France, un client qui commande avec alcool et un client qui commande sans alcool à la même table ne paient pas le même taux de TVA. La quasi-totalité des logiciels de caisse gèrent la TVA par table — pas par client. Logones la gère par client. C&apos;est une différence fiscale, pas une option.
          </p>
          <p className="mt-3 text-xs text-text-muted">
            Source : Article 279 du CGI — taux réduit 10 % boissons sans alcool, taux normal 20 % boissons alcoolisées (hors exception).
          </p>
          <div className="mt-6">
            <LegalNotice>
              Pour votre situation fiscale spécifique, consultez votre expert-comptable.
            </LegalNotice>
          </div>
        </div>
      </Section>

      <Section id="nf525" tone="light" size="compact">
        <SectionLabel color="caisse">Conformité légale</SectionLabel>
        <SectionTitle tone="light">Certification NF525 — vos obligations.</SectionTitle>
        <SectionLead tone="light">
          Depuis la loi de finances 2016 (art. 286 bis du CGI), tout assujetti à la TVA utilisant un logiciel de caisse doit détenir une attestation de conformité. Logones est <strong>en cours de certification NF525</strong>. Résultat attendu : juillet 2026.
        </SectionLead>
        <div className="mt-6 max-w-3xl">
          <LegalNotice tone="light">
            Pour toute question sur vos obligations fiscales, consultez votre expert-comptable.
          </LegalNotice>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
