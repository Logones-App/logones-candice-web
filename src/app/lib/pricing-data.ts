import type { ModuleId } from "./modules-data";

export type PricingTier = {
  id: "starter" | "pro" | "premium";
  name: string;
  priceTTC: number;
  highlighted?: boolean;
  modules: Record<ModuleId, boolean>;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    priceTTC: 90,
    modules: {
      caisse: true,
      stocks: true,
      haccp: false,
      rh: false,
      resa: false,
    },
  },
  {
    id: "pro",
    name: "Pro",
    priceTTC: 169,
    highlighted: true,
    modules: {
      caisse: true,
      stocks: true,
      haccp: true,
      rh: false,
      resa: true,
    },
  },
  {
    id: "premium",
    name: "Premium",
    priceTTC: 300,
    modules: {
      caisse: true,
      stocks: true,
      haccp: true,
      rh: true,
      resa: true,
    },
  },
];

export type FeatureRow = {
  feature: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
  group: "Caisse" | "Stocks" | "HACCP" | "Réservation" | "RH" | "Support";
};

export const FEATURE_MATRIX: FeatureRow[] = [
  { feature: "Caisse NF525", starter: true, pro: true, premium: true, group: "Caisse" },
  { feature: "Plan de salle dynamique", starter: true, pro: true, premium: true, group: "Caisse" },
  { feature: "TVA multi-taux par client", starter: true, pro: true, premium: true, group: "Caisse" },
  { feature: "Stocks — suivi de base", starter: true, pro: true, premium: true, group: "Stocks" },
  { feature: "Scan BL fournisseur → stock auto", starter: false, pro: true, premium: true, group: "Stocks" },
  { feature: "Calcul marge sur composants", starter: false, pro: true, premium: true, group: "Stocks" },
  { feature: "Alertes dérive food cost", starter: false, pro: true, premium: true, group: "Stocks" },
  { feature: "HACCP — tableau de bord complétude", starter: false, pro: true, premium: true, group: "HACCP" },
  { feature: "HACCP — veille réglementaire proactive", starter: false, pro: false, premium: true, group: "HACCP" },
  { feature: "Réservation — widget site internet", starter: false, pro: true, premium: true, group: "Réservation" },
  { feature: "Réservation — plan de salle ↔ stocks", starter: false, pro: true, premium: true, group: "Réservation" },
  { feature: "Module RH — planning + pointeuse", starter: false, pro: false, premium: true, group: "RH" },
  { feature: "Conformité CCN HCR IDCC 1979", starter: false, pro: false, premium: true, group: "RH" },
  { feature: "Alerte DPAE automatique", starter: false, pro: false, premium: true, group: "RH" },
  { feature: "Export paie expert-comptable CHR", starter: false, pro: false, premium: true, group: "RH" },
  { feature: "Support aux heures de service", starter: true, pro: true, premium: true, group: "Support" },
  { feature: "Onboarding sur site (région lyonnaise)", starter: false, pro: true, premium: true, group: "Support" },
];

export type MarketCost = {
  id: "caisse" | "haccp" | "rh" | "reservation" | "autres";
  label: string;
  defaultMonthly: number;
};

export const MARKET_COSTS: MarketCost[] = [
  { id: "caisse", label: "Logiciel de caisse", defaultMonthly: 70 },
  { id: "haccp", label: "Logiciel HACCP", defaultMonthly: 40 },
  { id: "rh", label: "Logiciel RH / planning", defaultMonthly: 75 },
  { id: "reservation", label: "Outil de réservation", defaultMonthly: 80 },
  { id: "autres", label: "Autres abonnements", defaultMonthly: 0 },
];
