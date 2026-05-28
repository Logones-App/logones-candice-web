import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { BLOG as C } from "../palette";
import {
  THEME_LABELS,
  getArticlesByTheme,
  getThemesWithArticles,
} from "../lib/articles";

type Params = { theme: string };

export function generateStaticParams(): Params[] {
  return Array.from(getThemesWithArticles()).map((theme) => ({ theme }));
}

// Autorise les thèmes dont le 1er article est programmé à apparaître à leur date.
export const dynamicParams = true;
export const revalidate = 600;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { theme } = await params;
  const label = THEME_LABELS[theme];
  if (!label) return {};
  return {
    title: `${label} — Blog restaurant Logones`,
    description: `Articles ${label.toLowerCase()} pour restaurateurs : analyses concrètes et conseils terrain pour piloter votre rentabilité.`,
    alternates: { canonical: `/logones/blog/${theme}` },
  };
}

export default async function ThemePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { theme } = await params;
  const label = THEME_LABELS[theme];
  if (!label) notFound();

  const articles = getArticlesByTheme(theme);
  // Thème sans aucun article en ligne (ou uniquement programmés) → 404 jusqu'à publication.
  if (articles.length === 0) notFound();

  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "120px clamp(48px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
        minHeight: "70vh",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <nav style={{ marginBottom: "20px" }}>
          <Link
            href="/logones/blog"
            className="inline-flex items-center gap-1.5 transition-transform hover:-translate-x-0.5"
            style={{ fontSize: "14px", fontWeight: 800, color: C.orange }}
          >
            <ArrowLeft size={15} strokeWidth={2.5} />
            Retour au blog
          </Link>
        </nav>

        <p
          style={{
            color: C.orange,
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          Thème
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 4.4vw, 50px)",
            lineHeight: 1.08,
            fontWeight: 850,
            color: C.text,
            letterSpacing: "-0.02em",
            marginBottom: "40px",
          }}
        >
          {label}
        </h1>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/logones/blog/${a.theme}/${a.slug}`}
              className="group flex flex-col transition-transform hover:-translate-y-1"
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(7,17,31,0.05)",
              }}
            >
              <div style={{ padding: "22px" }}>
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "10px" }}
                >
                  <span
                    style={{
                      fontSize: "10.5px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: C.orange,
                    }}
                  >
                    {a.category}
                  </span>
                  <span
                    className="inline-flex items-center gap-1"
                    style={{ fontSize: "11px", color: C.textMuted }}
                  >
                    <Clock size={12} aria-hidden />
                    {a.readTime}
                  </span>
                </div>
                <h2
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    lineHeight: 1.3,
                    color: C.text,
                    marginBottom: "10px",
                  }}
                >
                  {a.title}
                </h2>
                <p
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: C.textSubtle,
                    marginBottom: "16px",
                  }}
                >
                  {a.excerpt}
                </p>
                <span
                  className="inline-flex items-center gap-1.5"
                  style={{ fontSize: "13px", fontWeight: 800, color: C.orange }}
                >
                  Lire l&apos;article
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
