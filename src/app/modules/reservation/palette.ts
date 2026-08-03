import { ground, modules, onNight, onPaper, status } from "../../lib/tokens";

const M = modules.reservation;

/** Alias du module Réservation vers les tokens. Aucune couleur propre ici. */
export const RES = {
  bg: ground.night,
  bgSecondary: ground.nightSurface,
  card: ground.nightSurface,
  cardLighter: ground.nightSurfaceHigh,

  /** Rouge brique, désaturé pour ne plus se lire comme une alarme. */
  red: M.accent,
  redAccent: M.light,
  redDeep: M.deep,
  redSoft: M.soft,
  redSofter: M.softer,

  /** Bouton : blanc sur rouge brique, 5,1:1. */
  buttonFrom: M.buttonFrom,
  buttonTo: M.buttonTo,
  onButton: M.onButton,

  text: onNight.text,
  textSubtle: onNight.subtle,
  textMuted: onNight.muted,
  border: M.border,
  borderSoft: onNight.borderSoft,

  // Section claire
  lightBg: ground.paper,
  lightInk: onPaper.text,
  lightInkSubtle: onPaper.subtle,

  green: status.success.night,
} as const;
