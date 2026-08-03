import { brand, ground, onNight, onPaper, status } from "../lib/tokens";

/** Alias de la page tarifs vers les tokens. Aucune couleur propre ici. */
export const TARIFS = {
  bg: ground.paper,
  bgDark: ground.night,
  bgDarkSecondary: ground.nightSurface,
  card: ground.card,
  cardDark: ground.nightSurfaceHigh,

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
  borderOnDarkSoft: onNight.borderSoft,

  /** Coches « inclus » de la matrice, sur cartes claires. */
  green: status.success.paper,
} as const;
