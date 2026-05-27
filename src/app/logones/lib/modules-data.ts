export type ModuleId = "caisse" | "stocks" | "haccp" | "rh" | "resa";

export type ModuleData = {
  id: ModuleId;
  slug: string;
  name: string;
  label: string;
  tagline: string;
  description: string;
  bullets: string[];
  colorVar: string;
  accentClass: string;
  borderClass: string;
  glowClass: string;
  bgGlowClass: string;
};

export const MODULES: Record<ModuleId, ModuleData> = {
  caisse: {
    id: "caisse",
    slug: "caisse",
    name: "Caisse",
    label: "CAISSE NF525",
    tagline: "La caisse qui connaît votre restaurant.",
    description:
      "Certifiée NF525, elle gère nativement la TVA multi-taux par client à la même table, les plans de salle dynamiques et calcule vos marges en temps réel pendant le service.",
    bullets: [
      "TVA individualisée par client (même table)",
      "Plan de salle relié aux réservations",
      "Calcul de marge sur composants en direct",
    ],
    colorVar: "--caisse-bright",
    accentClass: "text-caisse-accent",
    borderClass: "border-caisse-bright",
    glowClass: "shadow-glow-blue",
    bgGlowClass: "bg-caisse-deep",
  },
  stocks: {
    id: "stocks",
    slug: "stocks",
    name: "Stocks",
    label: "GESTION DES STOCKS",
    tagline: "Votre food cost. En temps réel. Sans ressaisie.",
    description:
      "Scannez votre bon de livraison fournisseur. Le stock se met à jour. La marge se recalcule. Immédiatement. Sans toucher à rien.",
    bullets: [
      "Scan BL → stock automatique",
      "Alerte dérive food cost configurable",
      "Fiche technique par plat, coût à la portion",
    ],
    colorVar: "--stocks-bright",
    accentClass: "text-stocks-accent",
    borderClass: "border-stocks-bright",
    glowClass: "",
    bgGlowClass: "bg-stocks-deep",
  },
  haccp: {
    id: "haccp",
    slug: "haccp",
    name: "HACCP",
    label: "HACCP PROACTIF",
    tagline: "L'hygiène anticipée, pas subie.",
    description:
      "Tableau de bord de complétude HACCP conforme au règlement CE 852/2004. Alertes proactives avant vos échéances réglementaires — pas après une mise en demeure.",
    bullets: [
      "Veille réglementaire automatique intégrée",
      "Tableau de bord de complétude HACCP",
      "Historique horodaté exportable",
    ],
    colorVar: "--haccp-bright",
    accentClass: "text-haccp-accent",
    borderClass: "border-haccp-bright",
    glowClass: "shadow-glow-green",
    bgGlowClass: "bg-haccp-deep",
  },
  rh: {
    id: "rh",
    slug: "rh",
    name: "RH",
    label: "RESSOURCES HUMAINES",
    tagline: "La paie et les plannings conformes CCN HCR.",
    description:
      "Planning hebdomadaire, pointeuse intégrée, gestion CDI/CDD/CDDU, alerte DPAE automatique. Conforme à la Convention Collective HCR IDCC 1979. Aucun supplément par salarié — inclus dans le tier Premium.",
    bullets: [
      "Conformité CCN HCR IDCC 1979",
      "Alerte DPAE à chaque contrat",
      "Ratio masse salariale / CA en temps réel",
    ],
    colorVar: "--rh-bright",
    accentClass: "text-rh-accent",
    borderClass: "border-rh-bright",
    glowClass: "",
    bgGlowClass: "bg-rh-deep",
  },
  resa: {
    id: "resa",
    slug: "reservation",
    name: "Réservation",
    label: "RÉSERVATION",
    tagline: "Vos réservations et votre salle, enfin synchronisées.",
    description:
      "Plans de salle dynamiques mis à jour en temps réel selon les réservations. Synchronisation native avec les stocks et la caisse. Aucun abonnement réservation séparé.",
    bullets: [
      "Plan de salle dynamique temps réel",
      "Widget réservation intégrable sur votre site",
      "Synchronisation automatique stocks → réservation",
    ],
    colorVar: "--resa-bright",
    accentClass: "text-resa-accent",
    borderClass: "border-resa-bright",
    glowClass: "",
    bgGlowClass: "bg-resa-deep",
  },
};

export const MODULE_ORDER: ModuleId[] = [
  "caisse",
  "stocks",
  "haccp",
  "rh",
  "resa",
];
