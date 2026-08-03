import { ground, modules, onNight, status } from "../../lib/tokens";

const M = modules.caisse;

/**
 * Alias du module Caisse vers les tokens. Remplace les trois objets `C`
 * qui étaient dupliqués dans CaisseHardwareSection, CaissePainsAndFeatures
 * et CaisseSettingsAndCta.
 */
export const CAISSE = {
  bg: ground.night,
  bgSecondary: ground.nightSurface,
  card: ground.nightSurface,
  cardDark: ground.nightSurface,
  cardSecondary: ground.nightSurfaceHigh,
  cardGradient: "linear-gradient(180deg, rgba(10,25,40,0.96), rgba(4,13,23,0.98))",
  widgetBg: "rgba(2,8,15,0.55)",

  blue: M.accent,
  blueDeep: M.deep,
  blueLight: M.light,
  blueSoft: M.soft,
  blueSofter: M.softer,

  /** Bouton : blanc sur bleu assombri, 5,3:1. */
  buttonFrom: M.buttonFrom,
  buttonTo: M.buttonTo,
  onButton: M.onButton,

  text: onNight.text,
  textBright: "rgba(255,255,255,0.82)",
  textSubtle: onNight.subtle,
  textMuted: onNight.muted,
  border: M.border,
  borderSoft: onNight.borderSoft,

  green: status.success.night,
  red: status.error.night,
} as const;
