import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section } from "../components/common/Section";
import { DemoForm } from "../components/common/DemoForm";
import { LegalNotice } from "../components/common/LegalNotice";
import { siteConfig } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Demander une démo — Logiciel restaurant tout-en-un",
  description:
    "Réservez une démonstration personnalisée avec l'équipe Logones. 30 minutes. Sans engagement. Pour restaurants de 30 à 100 couverts en Auvergne-Rhône-Alpes.",
  robots: { index: true, follow: true },
};

const timeline = [
  {
    duration: "10 min",
    title: "On écoute votre restaurant",
    body: "Vous nous parlez de vos outils actuels, de vos problèmes quotidiens, de la taille de votre équipe. Pas de script — une vraie conversation.",
  },
  {
    duration: "15 min",
    title: "On vous montre ce qui vous concerne",
    body: "Pas une démo générique. On vous montre les modules qui répondent à vos problèmes spécifiques — dans l'interface réelle.",
  },
  {
    duration: "5 min",
    title: "On répond à toutes vos questions",
    body: "Y compris les questions qu'on préférerait esquiver. Tarifs, contrat, délais, limites actuelles du produit.",
  },
];

const reassurance = [
  "Aucun argument de vente sous pression",
  "Disponible du mardi au dimanche, 9h-14h et 19h-22h",
  "En visio ou sur site à Lyon (intramuros + métropole)",
  "Vous repartez avec un comparatif personnalisé",
];

export default function DemoPage() {
  return (
    <>
      <section className="pt-[140px] pb-12 ardoise-bg grain-overlay relative">
        <div className="relative mx-auto max-w-[1000px] px-5 text-center sm:px-8">
          <h1 className="font-sans text-[clamp(36px,5vw,64px)] font-semibold leading-[1.1] tracking-[-0.025em] text-text-primary">
            Voyez Logones dans votre restaurant.
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-secondary">
            30 minutes. Sans engagement. Sans pression commerciale.
          </p>
        </div>
      </section>

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="rounded-2xl border border-border bg-bg-surface p-7 sm:p-10">
              <DemoForm />

              <div className="mt-8">
                <LegalNotice>
                  Les informations recueillies dans ce formulaire sont
                  collectées par {siteConfig.legalEntity} (Logones) aux fins de
                  traitement de votre demande de démonstration. Conformément au
                  Règlement UE 2016/679 (RGPD) et à la loi Informatique et
                  Libertés, vous disposez d&apos;un droit d&apos;accès, de
                  rectification, d&apos;opposition et d&apos;effacement de vos
                  données. Pour exercer ces droits ou pour toute question,
                  contactez-nous à{" "}
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="underline hover:text-gold-light"
                  >
                    {siteConfig.contactEmail}
                  </a>
                  .
                </LegalNotice>
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <h2 className="font-sans text-2xl font-semibold text-text-primary">
              Ce qui se passe lors de la démo
            </h2>

            <ol className="mt-6 space-y-6">
              {timeline.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-light/30 bg-gold-pale text-sm font-semibold text-gold-light">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-base font-semibold text-text-primary">
                        {step.title}
                      </h3>
                      <span className="text-xs font-medium text-text-muted">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl border border-border bg-bg-surface p-6">
              <ul className="space-y-3">
                {reassurance.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-haccp-accent"
                      aria-hidden
                    />
                    <span className="text-text-primary">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
