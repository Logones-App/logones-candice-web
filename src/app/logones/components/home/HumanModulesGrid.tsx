import Link from "next/link";
import { ArrowUpRight, Receipt, LineChart, Users, BellRing } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../common/Section";
import { PhotoSlot } from "../common/PhotoSlot";

type HumanModule = {
  href: string;
  label: string;
  title: string;
  body: string;
  icon: typeof Receipt;
  iconColor: string;
  photoBrief: string;
};

const modules: HumanModule[] = [
  {
    href: "/logones/modules/caisse",
    label: "Caisse",
    title: "L'encaissement qui ne vous oublie pas.",
    body: "TVA multi-taux par client, plan de salle dynamique, certification NF525 en cours. Vos serveurs gagnent du temps, vos clients gagnent en fluidité.",
    icon: Receipt,
    iconColor: "var(--caisse-accent)",
    photoBrief:
      "Serveur attentif posant la tablette POS à table, échange chaleureux avec un client, lumière chaude du soir.",
  },
  {
    href: "/logones/modules/stocks",
    label: "Pilotage",
    title: "Vos chiffres-clés, lisibles d'un coup d'œil.",
    body: "Food cost en temps réel, marge à la portion, alertes de dérive avant que la rentabilité ne fuit. Vous décidez avant qu'il soit trop tard.",
    icon: LineChart,
    iconColor: "var(--stocks-accent)",
    photoBrief:
      "Manager dans un coin tranquille du restaurant consultant un dashboard sur tablette, posture concentrée et apaisée.",
  },
  {
    href: "/logones/modules/rh",
    label: "RH & masse salariale",
    title: "Les plannings et la paie sans risque juridique.",
    body: "Conforme CCN HCR IDCC 1979, alerte DPAE, ratio masse salariale / CA en direct. Aucun supplément par salarié — peu importe la taille de l'équipe.",
    icon: Users,
    iconColor: "var(--rh-accent)",
    photoBrief:
      "Manager en cuisine échangeant avec un membre de l'équipe — briefing avant service, ambiance bienveillante.",
  },
  {
    href: "/logones/modules/haccp",
    label: "Alertes & HACCP",
    title: "Les bonnes nouvelles arrivent avant les contrôles.",
    body: "Veille réglementaire intégrée, tableau de bord de complétude HACCP, notifications avant échéance. Vous ne courez plus jamais après le dernier relevé.",
    icon: BellRing,
    iconColor: "var(--haccp-accent)",
    photoBrief:
      "Chef en cuisine consultant son smartphone, relevé HACCP confirmé visuellement, ambiance maîtrisée.",
  },
];

export function HumanModulesGrid() {
  return (
    <Section tone="dark">
      <div className="text-center">
        <SectionLabel color="gold">Quatre modules, un même outil</SectionLabel>
        <SectionTitle align="center">
          Pensé pour les gens qui font tourner la salle.
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-secondary">
          Chaque module est conçu pour s&apos;adapter à votre métier — pas
          l&apos;inverse. Et tous parlent la même langue.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {modules.map((mod) => (
          <Link
            key={mod.href}
            href={mod.href}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold-light/30 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="relative">
              <PhotoSlot
                brief={mod.photoBrief}
                ratio="landscape"
                rounded="lg"
                className="!rounded-none !border-0 !border-b !border-border"
                tint="warm"
              />
              <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-bg-elevated/95 shadow-md backdrop-blur-md">
                <mod.icon
                  className="h-5 w-5"
                  style={{ color: mod.iconColor }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.08em]"
                style={{ color: mod.iconColor }}
              >
                {mod.label}
              </p>
              <h3 className="mt-2 font-display text-[22px] font-semibold leading-[1.25] tracking-[-0.015em] text-text-primary">
                {mod.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.65] text-text-secondary">
                {mod.body}
              </p>
              <p className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-gold-light transition-all group-hover:gap-2">
                Découvrir le module
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
