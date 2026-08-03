/**
 * ÉCHELLE TYPOGRAPHIQUE — LOGONES
 * ============================================================================
 * Même principe que tokens.ts pour la couleur : on nomme des décisions, pas
 * des valeurs. Un titre demande `type.h2`, pas `clamp(28px, 3.6vw, 42px)`.
 *
 * L'échelle a été calée sur l'usage réel du site, pas inventée : chaque palier
 * correspond à un groupe de tailles qui existait déjà et que rien ne
 * distinguait. Le code en comptait 47 fluides et 31 fixes ; il en reste 13.
 *
 * Ce qui n'entre PAS dans l'échelle : les maquettes d'interface (widgets de
 * tableau de bord, faux écrans de caisse). Ce sont des dessins, pas du texte —
 * leurs 8 et 9 px sont volontaires et restent en dur.
 */

/* --------------------------------------------------------------------------
   TAILLES
   Six paliers fluides pour les titres, six fixes pour le texte.
   -------------------------------------------------------------------------- */

export const type = {
  /** Titre de héros de page module — le plus gros palier, un par page au plus. */
  display: "clamp(40px, 6vw, 68px)",
  /** Titre de héros courant : tarifs, blog, à propos, démo, RH, réservation. */
  h1: "clamp(36px, 5vw, 56px)",
  /** Titre de section. Le palier le plus utilisé du site. */
  h2: "clamp(28px, 3.8vw, 42px)",
  /** Sous-titre de section, titre de carte large. */
  h3: "clamp(24px, 3vw, 32px)",
  /** Titre de carte. */
  h4: "clamp(20px, 2.4vw, 26px)",

  /** Chapô sous un titre. */
  lead: "clamp(16px, 1.5vw, 19px)",
  /** Texte d'accroche, intertitre non titré. */
  bodyLg: "17px",
  /** Texte courant. */
  body: "15px",
  /** Texte dense : listes de fonctionnalités, colonnes. */
  bodySm: "14px",
  /** Légendes, méta d'article, mentions sous un champ. */
  caption: "13px",
  /** Étiquettes, badges, en-têtes de tableau. */
  label: "12px",
  /** Surtitres en capitales, mentions légales. */
  micro: "11px",
  /** Plus petit palier admis pour du texte lisible. */
  nano: "10px",
} as const;

/* --------------------------------------------------------------------------
   GRAISSES
   Uniquement des valeurs réellement chargées par next/font.
   850 et 650 n'existaient pas : le navigateur les résolvait en 900 et 700.
   -------------------------------------------------------------------------- */

export const weight = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

/* --------------------------------------------------------------------------
   INTERLIGNES
   -------------------------------------------------------------------------- */

export const leading = {
  /** Gros titres : les lignes doivent se toucher presque. */
  display: 1.05,
  /** Titres de section. */
  title: 1.15,
  /** Titres de carte, texte court sur deux lignes. */
  snug: 1.25,
  /** Texte d'interface. */
  normal: 1.45,
  /** Paragraphes de lecture. */
  relaxed: 1.6,
} as const;

/* --------------------------------------------------------------------------
   APPROCHES
   -------------------------------------------------------------------------- */

export const tracking = {
  /** Gros titres : resserrer pour éviter l'effet « lettres qui flottent ». */
  tight: "-0.02em",
  normal: "0",
  /** Petites capitales douces. */
  wide: "0.06em",
  /** Surtitres en capitales — la valeur la plus utilisée du site. */
  eyebrow: "0.14em",
} as const;

/* --------------------------------------------------------------------------
   COMPOSITIONS PRÊTES À L'EMPLOI
   Un surtitre, c'est toujours ces quatre décisions ensemble : autant les
   nommer une fois.
   -------------------------------------------------------------------------- */

export const eyebrowStyle = {
  fontSize: type.micro,
  fontWeight: weight.extrabold,
  letterSpacing: tracking.eyebrow,
  textTransform: "uppercase",
} as const;
