/**
 * SOURCE DE VÉRITÉ COULEUR — LOGONES
 * ============================================================================
 * Toute couleur du site vient d'ici. Les fichiers `palette.ts` de chaque
 * section ne sont plus que des alias vers ces valeurs, et `globals.css`
 * expose les mêmes en variables CSS.
 *
 * Deux règles fixent l'ensemble :
 *
 *  1. UNE SEULE MARQUE. L'orange est celui du logo BIMI, #E26818. Ses dérivés
 *     se déduisent mécaniquement — on n'invente pas un orange par page.
 *
 *  2. L'ACCENT IDENTIFIE, LE BOUTON SE LIT. La couleur d'un module sert au
 *     badge, à l'icône, au titre, au filet. Elle est trop claire pour porter
 *     du texte : chaque module a donc un couple `buttonFrom → buttonTo`
 *     distinct, vérifié au-dessus de 4,5:1 (WCAG AA) sur ses deux extrémités.
 */

/** Passe un hex en rgba() — sert à dériver voiles et bordures d'un accent. */
export function tint(hex: string, alpha: number): string {
  const v = hex.replace("#", "");
  const r = parseInt(v.slice(0, 2), 16);
  const g = parseInt(v.slice(2, 4), 16);
  const b = parseInt(v.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

/* ==========================================================================
   MARQUE
   ========================================================================== */

export const brand = {
  /** Orange du logo BIMI. Ne porte jamais de texte courant sur fond clair (3,05:1). */
  orange: "#E26818",
  /** Le remplaçant obligatoire sur papier : 5,01:1, AA. Sert aussi de survol. */
  orangeDeep: "#AD4B0D",
  /** Accents et graphiques sur fond nuit. */
  orangeLight: "#F0954E",
  orangeSoft: tint("#E26818", 0.12),
  orangeBorder: tint("#E26818", 0.3),
  /** Texte posé sur un aplat orange plein : 5,73:1. Jamais de blanc (3,37:1). */
  onOrange: "#1A0A00",
} as const;

/* ==========================================================================
   TERRAINS
   ========================================================================== */

export const ground = {
  /** Fond unique des pages module, du pied de page et du <body>. */
  night: "#02060B",
  /** Extrémité sombre des dégradés de section. */
  nightDeep: "#010409",
  /** Cartes et blocs surélevés sur fond nuit. */
  nightSurface: "#08111C",
  /** Blocs imbriqués, en-têtes de tableau. */
  nightSurfaceHigh: "#0F1A26",

  /** Fond unique des sections claires : tarifs, blog, à propos. */
  paper: "#F7F3EC",
  /** Bandes alternées, pieds de carte. */
  paperAlt: "#EDE7DE",
  /** Cartes sur papier. */
  card: "#FFFFFF",
} as const;

export const onNight = {
  text: "#FFFFFF",
  subtle: "rgba(255,255,255,0.72)",
  muted: "rgba(255,255,255,0.52)",
  border: "rgba(255,255,255,0.10)",
  borderSoft: "rgba(255,255,255,0.06)",
} as const;

export const onPaper = {
  text: "#07111F",
  subtle: "rgba(7,17,31,0.72)",
  muted: "rgba(7,17,31,0.55)",
  border: "rgba(7,17,31,0.10)",
  borderSoft: "rgba(7,17,31,0.06)",
} as const;

/* ==========================================================================
   STATUTS
   --------------------------------------------------------------------------
   Deux versions de chaque : le fond nuit et le papier n'admettent pas la même
   luminosité. Sur la page HACCP, « conforme » et l'identité du module restent
   volontairement de la même famille verte — les deux disent la même chose.
   Ce sont l'alerte et l'erreur qui doivent s'en distinguer.
   ========================================================================== */

export const status = {
  success: { paper: "#15803D", night: "#3DD27C" },
  warning: { paper: "#B45309", night: "#F0A81E" },
  error: { paper: "#B3261E", night: "#F06A5E" },
  info: { paper: "#1D6FD0", night: "#5AA6FF" },
} as const;

/* ==========================================================================
   MODULES
   --------------------------------------------------------------------------
   `accent` identifie, `button*` porte le texte. Les ratios en commentaire sont
   ceux de `onButton` sur la plus défavorable des deux extrémités du dégradé.
   ========================================================================== */

type ModuleColor = {
  accent: string;
  deep: string;
  light: string;
  buttonFrom: string;
  buttonTo: string;
  onButton: string;
  soft: string;
  softer: string;
  border: string;
};

function moduleColor(
  accent: string,
  deep: string,
  light: string,
  buttonFrom: string,
  buttonTo: string,
  onButton: string,
): ModuleColor {
  return {
    accent,
    deep,
    light,
    buttonFrom,
    buttonTo,
    onButton,
    soft: tint(accent, 0.16),
    softer: tint(accent, 0.08),
    border: tint(accent, 0.18),
  };
}

export const modules = {
  /** Bleu électrique. Bouton assombri d'un cran : blanc 5,3:1. */
  caisse: moduleColor("#147CFF", "#005BFF", "#5AA6FF", "#1668D6", "#0050E0", "#FFFFFF"),
  /** Vert vif. L'encre sombre passe largement : 6,1:1. */
  haccp: moduleColor("#22C55E", "#16A34A", "#6EE7A0", "#22C55E", "#16A34A", "#04070B"),
  /** Violet. Bouton assombri d'un cran : blanc 5,4:1. */
  rh: moduleColor("#A36BFF", "#7C4AE0", "#C6A3FF", "#7C4AE0", "#6535BD", "#FFFFFF"),
  /** Rouge brique — désaturé pour sortir du registre « erreur ». Blanc 5,1:1. */
  reservation: moduleColor("#D14343", "#A32E2E", "#EE8080", "#C24040", "#A32E2E", "#FFFFFF"),
  /** Jaune franc, tenu à distance de l'ambre d'alerte. Encre 10,1:1. */
  stocks: moduleColor("#FFC400", "#F5A800", "#FFD873", "#FFC400", "#F5A800", "#04070B"),
} as const;

export type ModuleId = keyof typeof modules;

/* ==========================================================================
   PONT VERS LE CSS
   --------------------------------------------------------------------------
   `globals.css` ne contient aucune valeur : il déclare les noms attendus par
   Tailwind et les fait pointer sur les variables `--tk-*` produites ici.
   La chaîne est donc : tokens.ts → --tk-* → --color-* → classe Tailwind.
   Une couleur ne s'écrit qu'à un seul endroit, ce fichier.

   Le <style> est injecté par app/layout.tsx, donc présent au premier rendu
   serveur : pas de flash de couleur au chargement.
   ========================================================================== */

/** Déclarations `--tk-*` à injecter dans :root. */
export function cssVariables(): string {
  const lines: string[] = [];
  const put = (name: string, value: string) => lines.push(`--tk-${name}:${value}`);

  put("brand", brand.orange);
  put("brand-deep", brand.orangeDeep);
  put("brand-light", brand.orangeLight);
  put("brand-soft", brand.orangeSoft);
  put("brand-border", brand.orangeBorder);
  put("brand-glow", tint(brand.orange, 0.25));
  put("on-brand", brand.onOrange);

  put("night", ground.night);
  put("night-deep", ground.nightDeep);
  put("night-surface", ground.nightSurface);
  put("night-surface-high", ground.nightSurfaceHigh);
  put("paper", ground.paper);
  put("paper-alt", ground.paperAlt);
  put("card", ground.card);

  put("on-night-text", onNight.text);
  put("on-night-subtle", onNight.subtle);
  put("on-night-muted", onNight.muted);
  put("on-night-border", onNight.border);
  put("on-night-border-soft", onNight.borderSoft);

  put("on-paper-text", onPaper.text);
  put("on-paper-subtle", onPaper.subtle);
  put("on-paper-muted", onPaper.muted);
  put("on-paper-border", onPaper.border);
  put("on-paper-border-soft", onPaper.borderSoft);

  for (const [key, value] of Object.entries(status)) {
    put(key, value.paper);
    put(`${key}-on-dark`, value.night);
  }

  for (const [key, m] of Object.entries(modules)) {
    put(`${key}-accent`, m.accent);
    put(`${key}-deep`, m.deep);
    put(`${key}-light`, m.light);
    put(`${key}-button-from`, m.buttonFrom);
    put(`${key}-button-to`, m.buttonTo);
    put(`${key}-on-button`, m.onButton);
    put(`${key}-soft`, m.soft);
    put(`${key}-softer`, m.softer);
    put(`${key}-border`, m.border);
    put(`${key}-glow`, tint(m.accent, 0.2));
  }

  return `:root{${lines.join(";")}}`;
}
