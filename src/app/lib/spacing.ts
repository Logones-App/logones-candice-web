/**
 * RYTHME ET GABARIT — LOGONES
 * ============================================================================
 * Troisième et dernière famille de jetons, après la couleur (tokens.ts) et
 * la typographie (typography.ts).
 *
 * Le site comptait 21 rythmes verticaux et 9 gouttières différents, souvent
 * séparés de quelques pixels — des écarts invisibles à l'écriture mais qui
 * empêchent l'œil de trouver une régularité en faisant défiler la page.
 */

/* --------------------------------------------------------------------------
   RYTHME VERTICAL
   Quatre respirations, pas une de plus. Le choix se fait sur l'importance de
   la section dans la page, jamais sur la longueur de son contenu.
   -------------------------------------------------------------------------- */

export const rhythm = {
  /**
   * Héros de page. Les 120px du haut dégagent la barre de navigation, qui est
   * fixe et haute de 72px.
   */
  hero: "120px clamp(56px, 6vw, 80px)",
  /** Section principale — la respiration par défaut. */
  section: "clamp(56px, 6vw, 80px)",
  /** Section de service : bandeau de réassurance, CTA, encart. */
  compact: "clamp(32px, 4vw, 48px)",
  /** Bande fine : fil d'ariane, barre de logos, séparateur habité. */
  tight: "clamp(20px, 3vw, 32px)",
} as const;

/* --------------------------------------------------------------------------
   GOUTTIÈRES ET GABARIT
   -------------------------------------------------------------------------- */

/** Marge latérale de toute section pleine largeur. */
export const gutter = "clamp(20px, 3vw, 40px)";

/** Largeur maximale du contenu. */
export const container = "1280px";

/** Largeur de lecture confortable pour un paragraphe isolé. */
export const measure = "680px";

export type Rhythm = keyof typeof rhythm;
