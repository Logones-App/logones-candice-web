import type { Metadata } from "next";
import { ModulePageHero } from "../../components/common/ModulePageHero";
import { Section, SectionLabel, SectionTitle } from "../../components/common/Section";
import { FeatureRow } from "../../components/common/FeatureRow";
import { LegalNotice } from "../../components/common/LegalNotice";
import { FinalCTA } from "../../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Module réservation restaurant connecté à la caisse",
  description:
    "Plans de salle dynamiques liés aux réservations, synchronisation temps réel avec les stocks. Aucun abonnement réservation séparé.",
};

export default function ReservationPage() {
  return (
    <>
      <ModulePageHero
        module="resa"
        title="Vos réservations et votre salle, enfin synchronisées."
        lead="Plans de salle dynamiques mis à jour en temps réel selon les réservations. Synchronisation native avec les stocks et la caisse. Aucun abonnement réservation séparé."
      />

      <Section tone="dark">
        <SectionLabel color="resa">Ce que les plateformes vous coûtent</SectionLabel>
        <SectionTitle>Vos clients, vos données, votre marge — pas la leur.</SectionTitle>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { title: "Commission par couvert", body: "Les plateformes vous prennent 2 à 3 € par couvert. Sur 30 couverts/jour, c'est 30 000 € par an." },
            { title: "Données client captives", body: "Vos clients sont les clients de la plateforme. Vous ne pouvez pas leur écrire directement." },
            { title: "Désynchronisation cuisine", body: "Les réservations arrivent par email. La cuisine ne sait rien. Personne n'anticipe les couverts du soir." },
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
            module="resa"
            title="Plan de salle dynamique en temps réel"
            description="À chaque réservation, le plan de salle se met à jour. Les serveurs voient ce qui arrive, la cuisine anticipe, vous ne survendez pas votre salle."
            bullets={[
              "Vue tablette pour les serveurs",
              "Réorganisation drag-and-drop",
              "Timing service automatique",
            ]}
          />
          <FeatureRow
            module="resa"
            title="Widget réservation pour votre site"
            description="Un widget intégrable directement sur votre site internet. Vos clients réservent chez vous — pas sur une plateforme qui prélève 8 % par couvert."
            bullets={[
              "Intégration HTML/iframe",
              "Personnalisable aux couleurs de votre site",
              "Données restent chez vous",
            ]}
            reverse
          />
          <FeatureRow
            module="resa"
            title="Synchronisation native stocks ↔ réservation"
            description="Quand 30 couverts sont réservés pour le service, les besoins stocks sont mis à jour. Le chef sait ce qu'il faut commander demain — pas vendredi."
            bullets={[
              "Prévisionnel stock par service",
              "Alerte rupture probable",
              "Historique consommation par jour de semaine",
            ]}
          />
        </div>
      </Section>

      <Section tone="light" size="compact">
        <LegalNotice tone="light">
          Les estimations de commissions plateformes sont des moyennes observées sur le marché — votre situation peut varier. Pour l&apos;analyse précise de votre rentabilité, consultez votre expert-comptable.
        </LegalNotice>
      </Section>

      <FinalCTA />
    </>
  );
}
