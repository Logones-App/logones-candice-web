import type { ComponentType } from "react";
import { CoutCacheLogicielBody } from "../content/rentabilite/cout-cache-logiciel-restaurant";

export type Article = {
  theme: string; // slug du thème (URL)
  themeLabel: string; // libellé affiché
  slug: string; // slug de l'article (URL)
  title: string;
  excerpt: string;
  category: string; // badge uppercase
  readTime: string;
  /**
   * Date/heure de publication au format ISO (ex: "2026-06-15T09:00:00+02:00").
   * Si la date est dans le futur, l'article est masqué partout et son URL renvoie
   * un 404 jusqu'à cette date (programmation éditoriale).
   */
  publishedAt: string;
  dateLabel: string; // affichage humain
  /** true = brouillon : jamais visible, quelle que soit la date. */
  draft?: boolean;
  cover: string | null;
  author: string;
  Content: ComponentType;
};

export const THEME_LABELS: Record<string, string> = {
  rentabilite: "Rentabilité",
  "food-cost": "Food cost",
  "rh-planning": "RH & planning",
  haccp: "HACCP",
  reservation: "Réservation",
  "marketing-restaurant": "Marketing restaurant",
  "reglementation-chr": "Réglementation CHR",
  "logiciel-caisse": "Logiciel de caisse",
  "pilotage-multi-sites": "Pilotage multi-sites",
};

export const ARTICLES: Article[] = [
  {
    theme: "rentabilite",
    themeLabel: THEME_LABELS.rentabilite,
    slug: "cout-cache-logiciel-restaurant",
    title:
      "Pourquoi votre logiciel restaurant vous coûte plus cher que vous ne le pensez",
    excerpt:
      "Commissions, modules payants, coûts cachés… Décryptage complet de tout ce qui rogne vos marges sans que vous le voyiez.",
    category: "Rentabilité",
    readTime: "10 min",
    publishedAt: "2026-05-27T09:00:00+02:00",
    dateLabel: "27 mai 2026",
    cover: "/images/Gemini_Generated_Image_3pri453pri453pri (1).png",
    author: "L'équipe Logones",
    Content: CoutCacheLogicielBody,
  },
];

/** Un article est en ligne s'il n'est pas brouillon et que sa date est passée. */
export function isPublished(article: Article, now: number = Date.now()): boolean {
  if (article.draft) return false;
  return new Date(article.publishedAt).getTime() <= now;
}

/** Articles en ligne, triés du plus récent au plus ancien. */
export function getPublishedArticles(now: number = Date.now()): Article[] {
  return ARTICLES.filter((a) => isPublished(a, now)).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticle(theme: string, slug: string): Article | undefined {
  const article = ARTICLES.find((a) => a.theme === theme && a.slug === slug);
  if (!article || !isPublished(article)) return undefined;
  return article;
}

export function getArticlesByTheme(theme: string): Article[] {
  return getPublishedArticles().filter((a) => a.theme === theme);
}

export function getThemesWithArticles(): Set<string> {
  return new Set(getPublishedArticles().map((a) => a.theme));
}

export function getAllArticleParams(): Array<{ theme: string; slug: string }> {
  return getPublishedArticles().map((a) => ({ theme: a.theme, slug: a.slug }));
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  return getPublishedArticles()
    .filter((a) => a.slug !== current.slug)
    .slice(0, limit);
}
