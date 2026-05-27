export const siteConfig = {
  name: "Logones",
  legalEntity: "Logones SASU",
  founder: "La Plank des Gones",
  city: "Lyon",
  region: "Auvergne-Rhône-Alpes",
  contactEmail: "contact@logones.fr",

  nav: {
    modules: [
      {
        href: "/logones/modules/caisse",
        title: "Caisse NF525",
        subtitle: "Certifiée, TVA multi-taux",
        moduleId: "caisse" as const,
      },
      {
        href: "/logones/modules/haccp",
        title: "HACCP proactif",
        subtitle: "Veille réglementaire intégrée",
        moduleId: "haccp" as const,
      },
      {
        href: "/logones/modules/rh",
        title: "Ressources Humaines",
        subtitle: "Conforme CCN HCR",
        moduleId: "rh" as const,
      },
      {
        href: "/logones/modules/reservation",
        title: "Réservation",
        subtitle: "Synchronisée avec la caisse",
        moduleId: "resa" as const,
      },
      {
        href: "/logones/modules/stocks",
        title: "Gestion des stocks",
        subtitle: "Scan BL, marge en temps réel",
        moduleId: "stocks" as const,
      },
    ],
    primary: [
      { label: "Tarifs", href: "/logones/tarifs" },
      { label: "Blog", href: "/logones/blog" },
      { label: "À propos", href: "/logones/a-propos" },
    ],
  },

  footer: {
    legal: [
      { label: "Mentions légales", href: "/logones/mentions-legales" },
      { label: "CGV", href: "/logones/cgv" },
      { label: "Politique de confidentialité", href: "/logones/politique-confidentialite" },
      { label: "Cookies", href: "/logones/cookies" },
    ],
    company: [
      { label: "Tarifs", href: "/logones/tarifs" },
      { label: "À propos", href: "/logones/a-propos" },
      { label: "Blog", href: "/logones/blog" },
      { label: "Demander une démo", href: "/logones/demo" },
    ],
  },
} as const;
