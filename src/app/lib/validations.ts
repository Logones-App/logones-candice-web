import { z } from "zod";

export const coversOptions = [
  "moins-30",
  "30-50",
  "50-80",
  "80-100",
  "plus-100",
] as const;

export const coversLabels: Record<(typeof coversOptions)[number], string> = {
  "moins-30": "Moins de 30",
  "30-50": "30 à 50",
  "50-80": "50 à 80",
  "80-100": "80 à 100",
  "plus-100": "Plus de 100",
};

export const moduleIds = [
  "caisse",
  "stocks",
  "haccp",
  "rh",
  "reservation",
] as const;

export const demoFormSchema = z.object({
  firstName: z.string().min(2, "Prénom requis (2 caractères minimum)"),
  lastName: z.string().min(2, "Nom requis (2 caractères minimum)"),
  email: z.string().email("Adresse email invalide"),
  phone: z
    .string()
    .optional()
    .refine(
      (v) => !v || /^[\d\s+().-]{10,}$/.test(v),
      "Numéro de téléphone invalide",
    ),
  restaurantName: z.string().min(2, "Nom du restaurant requis"),
  city: z.string().min(2, "Ville requise"),
  covers: z.enum(coversOptions),
  modules: z
    .array(z.enum(moduleIds))
    .min(1, "Sélectionnez au moins un module"),
  message: z.string().max(2000).optional(),
  consent: z.literal(true, {
    error: "Vous devez accepter le traitement de vos données",
  }),
});

export type DemoFormValues = z.infer<typeof demoFormSchema>;
