import { ground, modules, onNight, status } from "../../lib/tokens";

const M = modules.stocks;

/** Alias du module Stocks vers les tokens. Aucune couleur propre ici. */
export const STOCKS = {
  bg: ground.night,
  bgSecondary: ground.nightSurface,
  card: ground.nightSurface,
  cardLighter: ground.nightSurfaceHigh,

  yellow: M.accent,
  yellowDeep: M.deep,
  yellowLight: M.light,
  yellowSoft: M.soft,
  yellowSofter: M.softer,
  /** Ancien « orange » de la page : c'est le jaune profond, pas l'orange de marque. */
  orange: M.deep,

  /** Bouton : encre sombre sur jaune, 10,1:1 — le plus lisible du site. */
  buttonFrom: M.buttonFrom,
  buttonTo: M.buttonTo,
  onButton: M.onButton,

  text: onNight.text,
  textSubtle: onNight.subtle,
  textMuted: onNight.muted,
  border: M.border,
  borderSoft: onNight.borderSoft,

  red: status.error.night,
  green: status.success.night,
} as const;
