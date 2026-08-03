import { ground, modules, onNight, status } from "../../lib/tokens";

const M = modules.haccp;

/** Alias du module HACCP vers les tokens. Aucune couleur propre ici. */
export const HACCP = {
  bg: ground.night,
  bgSecondary: ground.nightSurface,
  card: ground.nightSurface,
  cardLighter: ground.nightSurfaceHigh,

  green: M.accent,
  greenDeep: M.deep,
  greenLight: M.light,
  greenSoft: M.soft,
  greenSofter: M.softer,

  /** Bouton : encre sombre sur vert, 6,1:1. */
  buttonFrom: M.buttonFrom,
  buttonTo: M.buttonTo,
  onButton: M.onButton,

  text: onNight.text,
  textSubtle: onNight.subtle,
  textMuted: onNight.muted,
  border: M.border,
  borderSoft: onNight.borderSoft,

  red: status.error.night,
  orange: status.warning.night,
} as const;
