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
        href: "/modules/caisse",
        title: "Caisse NF525",
        subtitle: "Certifiée, TVA multi-taux",
        moduleId: "caisse" as const,
      },
      {
        href: "/modules/haccp",
        title: "HACCP proactif",
        subtitle: "Veille réglementaire intégrée",
        moduleId: "haccp" as const,
      },
      {
        href: "/modules/rh",
        title: "Ressources Humaines",
        subtitle: "Conforme CCN HCR",
        moduleId: "rh" as const,
      },
      {
        href: "/modules/reservation",
        title: "Réservation",
        subtitle: "Synchronisée avec la caisse",
        moduleId: "resa" as const,
      },
      {
        href: "/modules/stocks",
        title: "Gestion des stocks",
        subtitle: "Scan BL, marge en temps réel",
        moduleId: "stocks" as const,
      },
    ],
    primary: [
      { label: "Tarifs", href: "/tarifs" },
      { label: "Blog", href: "/blog" },
      { label: "À propos", href: "/a-propos" },
    ],
  },

  footer: {
    legal: [
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "CGV", href: "/cgv" },
      { label: "Politique de confidentialité", href: "/politique-confidentialite" },
      { label: "Cookies", href: "/cookies" },
    ],
    company: [
      { label: "Tarifs", href: "/tarifs" },
      { label: "À propos", href: "/a-propos" },
      { label: "Blog", href: "/blog" },
      { label: "Demander une démo", href: "/demo" },
    ],
  },
} as const;
