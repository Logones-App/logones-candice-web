import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Clock, CalendarDays, ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG as C } from "../palette";
import type { Article } from "../lib/articles";
import { getRelatedArticles } from "../lib/articles";

export const SITE_URL = "https://logones.fr";

export function ArticleLayout({ article }: { article: Article }) {
  const related = getRelatedArticles(article);
  const url = `${SITE_URL}/logones/blog/${article.theme}/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        author: { "@type": "Organization", name: article.author },
        publisher: {
          "@type": "Organization",
          name: "Logones",
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        ...(article.cover ? { image: `${SITE_URL}${article.cover}` } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${SITE_URL}/logones/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: article.themeLabel,
            item: `${SITE_URL}/logones/blog/${article.theme}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <article style={{ backgroundColor: C.bg }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <header
        style={{
          backgroundColor: C.bgDark,
          paddingBlock: "120px clamp(40px, 5vw, 56px)",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "820px" }}>
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            className="flex flex-wrap items-center gap-1.5"
            style={{ fontSize: "12.5px", color: C.textOnDarkMuted, marginBottom: "24px" }}
          >
            <Link href="/logones/blog" style={{ color: C.textOnDarkSubtle }}>
              Blog
            </Link>
            <ChevronRight size={13} aria-hidden />
            <Link
              href={`/logones/blog/${article.theme}`}
              style={{ color: C.textOnDarkSubtle }}
            >
              {article.themeLabel}
            </Link>
            <ChevronRight size={13} aria-hidden />
            <span style={{ color: C.textOnDarkMuted }} aria-current="page">
              Article
            </span>
          </nav>

          <span
            className="inline-flex w-fit items-center rounded-full"
            style={{
              fontSize: "10.5px",
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              background: C.orange,
              padding: "4px 11px",
              marginBottom: "18px",
            }}
          >
            {article.category}
          </span>

          <h1
            style={{
              fontSize: "clamp(30px, 4.4vw, 46px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.textOnDark,
              letterSpacing: "-0.02em",
              marginBottom: "18px",
            }}
          >
            {article.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: C.textOnDarkSubtle,
              marginBottom: "26px",
            }}
          >
            {article.excerpt}
          </p>

          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
            style={{ fontSize: "13px", color: C.textOnDarkMuted }}
          >
            <span style={{ color: C.textOnDarkSubtle, fontWeight: 600 }}>
              {article.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden />
              <time dateTime={article.publishedAt}>{article.dateLabel}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} aria-hidden />
              {article.readTime} de lecture
            </span>
          </div>
        </div>
      </header>

      {/* COVER */}
      {article.cover && (
        <div
          style={{
            backgroundColor: C.bgDark,
            paddingInline: "clamp(20px, 3vw, 40px)",
          }}
        >
          <div className="mx-auto" style={{ maxWidth: "980px" }}>
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "16/9",
                borderRadius: "16px",
                transform: "translateY(40px)",
                boxShadow: "0 30px 70px rgba(2,8,23,0.35)",
              }}
            >
              <Image
                src={article.cover}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 980px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* BODY */}
      <div
        style={{
          paddingBlock: `${article.cover ? "80px" : "48px"} clamp(48px, 6vw, 80px)`,
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "820px" }}>
          <article.Content />
        </div>
      </div>

      {/* CTA */}
      <div
        style={{
          paddingBottom: "clamp(48px, 6vw, 80px)",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "820px" }}>
          <div
            className="relative overflow-hidden text-center"
            style={{
              background: `linear-gradient(135deg, ${C.bgDark}, ${C.bgDarkSecondary})`,
              borderRadius: "20px",
              padding: "clamp(32px, 4vw, 48px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(22px, 2.8vw, 30px)",
                fontWeight: 850,
                color: C.textOnDark,
                marginBottom: "12px",
                lineHeight: 1.15,
              }}
            >
              Combien vous coûte <span style={{ color: C.orange }}>vraiment</span> votre pile logicielle ?
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: C.textOnDarkSubtle,
                maxWidth: "520px",
                margin: "0 auto 24px",
              }}
            >
              30 minutes pour faire le calcul réel, commissions et temps de
              gestion inclus — et voir ce que Logones change.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/logones/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                style={{
                  height: "50px",
                  padding: "0 26px",
                  background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                  fontSize: "15px",
                  fontWeight: 800,
                  boxShadow:
                    "0 12px 28px rgba(255,106,26,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Demander une démo
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/logones/tarifs"
                className="inline-flex items-center justify-center rounded-full transition-all hover:-translate-y-0.5"
                style={{
                  height: "50px",
                  padding: "0 26px",
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${C.borderOnDark}`,
                  color: C.textOnDark,
                  fontSize: "15px",
                  fontWeight: 800,
                }}
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED + BACK */}
      <div
        style={{
          paddingBottom: "clamp(48px, 6vw, 80px)",
          paddingInline: "clamp(20px, 3vw, 40px)",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "820px" }}>
          {related.length > 0 && (
            <>
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: 850,
                  color: C.text,
                  marginBottom: "18px",
                }}
              >
                À lire aussi
              </h2>
              <div className="grid gap-4 sm:grid-cols-2" style={{ marginBottom: "32px" }}>
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/logones/blog/${r.theme}/${r.slug}`}
                    className="block transition-transform hover:-translate-y-1"
                    style={{
                      background: C.card,
                      border: `1px solid ${C.border}`,
                      borderRadius: "12px",
                      padding: "18px",
                    }}
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
                      {r.category}
                    </span>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: 800,
                        lineHeight: 1.3,
                        color: C.text,
                        marginTop: "8px",
                      }}
                    >
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}

          <Link
            href="/logones/blog"
            className="inline-flex items-center gap-1.5 transition-transform hover:-translate-x-0.5"
            style={{ fontSize: "14px", fontWeight: 800, color: C.orange }}
          >
            <ArrowLeft size={15} strokeWidth={2.5} />
            Retour au blog
          </Link>
        </div>
      </div>
    </article>
  );
}
