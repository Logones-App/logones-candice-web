import { brand, ground, modules, onNight, status } from "../../lib/tokens";

const M = modules.rh;

/** Alias du module RH vers les tokens. Aucune couleur propre ici. */
export const RH = {
  bg: ground.night,
  bgSecondary: ground.nightSurface,
  card: ground.nightSurface,
  cardLight: ground.nightSurfaceHigh,

  orange: brand.orange,
  orangeDeep: brand.orangeDeep,
  orangeLight: brand.orangeLight,

  violet: M.accent,
  violetDeep: M.deep,
  violetLight: M.light,
  violetSoft: M.soft,
  violetSofter: M.softer,

  /** Bouton : blanc sur violet assombri, 5,4:1. */
  buttonFrom: M.buttonFrom,
  buttonTo: M.buttonTo,
  onButton: M.onButton,

  text: onNight.text,
  textSubtle: onNight.subtle,
  textMuted: onNight.muted,
  border: M.border,
  borderSoft: onNight.borderSoft,

  green: status.success.night,
  red: status.error.night,
  amber: status.warning.night,
} as const;
