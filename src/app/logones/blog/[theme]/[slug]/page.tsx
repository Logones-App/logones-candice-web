import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "../../components/ArticleLayout";
import { getArticle, getAllArticleParams } from "../../lib/articles";

type Params = { theme: string; slug: string };

export function generateStaticParams(): Params[] {
  return getAllArticleParams();
}

// Autorise la génération à la demande des articles programmés une fois leur date atteinte.
export const dynamicParams = true;
// Régénère périodiquement pour publier automatiquement les articles à leur date.
export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { theme, slug } = await params;
  const article = getArticle(theme, slug);
  if (!article) return {};

  const path = `/logones/blog/${article.theme}/${article.slug}`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: path,
      publishedTime: article.publishedAt,
      authors: [article.author],
      ...(article.cover ? { images: [{ url: article.cover }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      ...(article.cover ? { images: [article.cover] } : {}),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { theme, slug } = await params;
  const article = getArticle(theme, slug);
  if (!article) notFound();

  return <ArticleLayout article={article} />;
}
