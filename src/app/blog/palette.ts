import { brand, ground, onNight, onPaper } from "../lib/tokens";

/** Alias du blog vers les tokens. Aucune couleur propre ici. */
export const BLOG = {
  bg: ground.paper,
  bgDark: ground.night,
  bgDarkSecondary: ground.nightSurface,
  card: ground.card,

  orange: brand.orange,
  orangeDeep: brand.orangeDeep,
  /** Orange lisible sur papier ou carte blanche (5,01:1). brand.orange n'y passe pas (3,05:1). */
  orangeOnPaper: brand.orangeDeep,
  orangeSoft: brand.orangeSoft,
  orangeBorder: brand.orangeBorder,

  text: onPaper.text,
  textSubtle: onPaper.subtle,
  textMuted: onPaper.muted,
  textOnDark: onNight.text,
  textOnDarkSubtle: onNight.subtle,
  textOnDarkMuted: onNight.muted,

  border: onPaper.border,
  borderSoft: onPaper.borderSoft,
  borderOnDark: onNight.border,
} as const;
