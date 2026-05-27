import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle, SectionLead } from "../components/common/Section";
import { PricingGrid } from "../components/common/PricingGrid";
import { PileSimulator } from "../components/common/PileSimulator";
import { FeatureMatrix } from "../components/common/FeatureMatrix";
import { LegalNotice } from "../components/common/LegalNotice";
import { FinalCTA } from "../components/home/FinalCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const metadata: Metadata = {
  title: "Tarifs — Starter 90€ · Pro 169€ · Premium 300€ TTC/mois",
  description:
    "Tarification transparente, affichée publiquement. Comparez votre pile actuelle vs Logones. Calculateur interactif inclus.",
};

const faq = [
  {
    q: "Pourquoi un contrat 2 ans ?",
    a: "Parce que déployer un logiciel de caisse dans un restaurant prend du temps. Un onboarding sérieux, une formation équipe, une migration de données. Nous préférons un engagement clair plutôt que des frais cachés de résiliation.",
  },
  {
    q: "Puis-je résilier avant la fin du contrat ?",
    a: "Les conditions de résiliation sont dans nos CGV, en ligne avant votre premier appel. Vos données vous appartiennent et sont exportables dans un format standard sans frais.",
  },
  {
    q: "Le matériel est-il inclus ?",
    a: "Non. Le matériel (terminal tactile, imprimante de tickets) est disponible en location dès 1 200 € HT/an via notre partenaire matériel. Il peut aussi être acheté séparément.",
  },
  {
    q: "Logones est-il compatible avec mon TPE bancaire actuel ?",
    a: "Nous supportons les principaux terminaux de paiement du marché. Cette question est traitée lors de la démo en fonction de votre configuration.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <section className="pt-[140px] pb-12 pierre-claire-bg">
        <div className="mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.1] tracking-[-0.025em] text-text-dark">
            Nos tarifs. <span className="italic">Affichés.</span> Avant votre premier appel.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-dark-sec">
            13 logiciels sur 15 dans notre secteur cachent leurs prix derrière un formulaire. Nous faisons le choix de la transparence.
          </p>
        </div>
      </section>

      <Section tone="light">
        <PricingGrid variant="full" />
      </Section>

      <Section tone="light" size="compact">
        <SectionLabel color="gold">Matrice complète</SectionLabel>
        <SectionTitle tone="light">Comparer toutes les fonctionnalités</SectionTitle>
        <div className="mt-10">
          <FeatureMatrix />
        </div>
      </Section>

      <Section tone="surface">
        <SectionLabel color="gold">Simulateur</SectionLabel>
        <SectionTitle>Simulez votre économie sur 24 mois.</SectionTitle>
        <SectionLead>
          Activez les outils que vous utilisez aujourd&apos;hui. Ajustez les prix selon vos contrats réels. Comparez le total avec Logones Premium.
        </SectionLead>
        <div className="mt-12">
          <PileSimulator intro={false} />
        </div>
      </Section>

      <Section tone="dark">
        <SectionLabel color="gold">Questions fréquentes</SectionLabel>
        <SectionTitle>Tout ce que vous nous demandez régulièrement.</SectionTitle>

        <Accordion type="single" collapsible className="mt-10 max-w-3xl">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="py-5 text-left text-base font-medium text-text-primary hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-[1.65] text-text-secondary">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section tone="light" size="compact">
        <LegalNotice tone="light">
          Tous les prix affichés sont TTC, conformément à l&apos;article L112-1 du Code de la consommation. Les prix HT sont disponibles sur demande pour les professionnels assujettis à la TVA. Les informations tarifaires de cette page ne constituent pas un devis au sens du Code civil. Un devis contractuel est fourni avant toute signature. Pour la déductibilité de votre abonnement logiciel, consultez votre expert-comptable.
        </LegalNotice>
      </Section>

      <FinalCTA />
    </>
  );
}
