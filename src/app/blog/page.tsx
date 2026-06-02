import type { Metadata } from "next";
import { BlogHero } from "./BlogHero";
import { BlogCategories } from "./BlogCategories";
import { BlogFeatured } from "./BlogFeatured";
import { BlogLatest } from "./BlogLatest";
import { BlogSearchIntents } from "./BlogSearchIntents";
import { BlogNewsletter } from "./BlogNewsletter";

export const metadata: Metadata = {
  title: "Blog restaurant — Rentabilité, food cost, HACCP, NF525 et gestion CHR",
  description:
    "Le média des restaurateurs : rentabilité restaurant, food cost, logiciel de caisse, HACCP, planning, réservation, réglementation CHR et masse salariale. Par des gens du métier.",
};

// Régénère périodiquement pour faire apparaître les articles à leur date programmée.
export const revalidate = 600;

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogFeatured />
      <BlogLatest />
      <BlogSearchIntents />
      <BlogNewsletter />
    </>
  );
}
