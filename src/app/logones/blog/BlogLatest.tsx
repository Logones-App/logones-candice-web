import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChefHat,
  CalendarCheck,
  ShieldCheck,
  Monitor,
} from "lucide-react";
import { BLOG as C } from "./palette";

const articles = [
  {
    icon: CalendarDays,
    category: "RH & Planning",
    readTime: "6 min",
    title: "Combien coûte réellement un salarié en restauration en 2026 ?",
    excerpt: "Le vrai calcul, charges comprises, avantages inclus.",
  },
  {
    icon: ChefHat,
    category: "Food cost",
    readTime: "7 min",
    title: "Pourquoi votre food cost est faux sans stock temps réel",
    excerpt: "Les erreurs invisibles qui vous coûtent des milliers d'euros.",
  },
  {
    icon: CalendarCheck,
    category: "Réservation",
    readTime: "8 min",
    title: "Les commissions de réservation détruisent-elles votre rentabilité ?",
    excerpt: "Calculs, comparatifs et solutions sans commission.",
  },
  {
    icon: ShieldCheck,
    category: "HACCP",
    readTime: "9 min",
    title: "HACCP : les nouvelles obligations à connaître en 2026",
    excerpt: "Ce qui change et comment se mettre en conformité.",
  },
  {
    icon: Monitor,
    category: "Caisse & NF525",
    readTime: "5 min",
    title: "NF525 : ce qui change vraiment pour les restaurateurs",
    excerpt: "Échéances, équipement et impacts sur votre activité.",
  },
];

export function BlogLatest() {
  return (
    <section
      id="derniers-articles"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <div
          className="flex items-end justify-between gap-4"
          style={{ marginBottom: "28px" }}
        >
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
            }}
          >
            Nos derniers articles
          </h2>
          <Link
            href="#"
            className="inline-flex shrink-0 items-center gap-1.5 transition-transform hover:translate-x-0.5"
            style={{ fontSize: "14px", fontWeight: 800, color: C.orange }}
          >
            Voir tous les articles
            <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {articles.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: "10px",
                boxShadow: "0 8px 24px rgba(7,17,31,0.05)",
              }}
            >
              {/* Thumbnail */}
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "160px",
                  background:
                    "linear-gradient(135deg, rgba(255,106,26,0.16), rgba(7,17,31,0.08))",
                }}
                aria-hidden
              >
                <span
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: "52px",
                    height: "52px",
                    background: "rgba(255,255,255,0.85)",
                    color: C.orange,
                    boxShadow: "0 8px 20px rgba(7,17,31,0.10)",
                  }}
                >
                  <a.icon size={24} strokeWidth={1.8} />
                </span>
              </div>

              <div className="flex flex-1 flex-col" style={{ padding: "18px" }}>
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
                  <span style={{ fontSize: "11px", color: C.textMuted }}>
                    {a.readTime}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: 800,
                    lineHeight: 1.3,
                    color: C.text,
                    marginBottom: "8px",
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: C.textSubtle,
                    marginBottom: "16px",
                  }}
                >
                  {a.excerpt}
                </p>
                <Link
                  href="#"
                  className="mt-auto inline-flex w-fit items-center gap-1.5"
                  style={{ fontSize: "13px", fontWeight: 800, color: C.orange }}
                >
                  Lire l&apos;article
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
