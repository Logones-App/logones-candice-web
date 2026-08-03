import { Poppins, Archivo } from "next/font/google";

/**
 * Deux familles, deux rôles :
 *   Poppins — tout le texte courant et l'interface
 *   Archivo — le wordmark et les titres d'affichage
 *
 * Archivo remplace Anton : grotesque dessinée pour les interfaces à forte
 * densité, elle reste lisible à 24 px dans la barre de navigation là où les
 * contreformes d'Anton se fermaient, et elle se décline de 100 à 900 quand
 * Anton n'existait qu'en une seule graisse.
 */

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});
