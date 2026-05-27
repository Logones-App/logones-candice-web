import type { Metadata } from "next";
import { Section, SectionLabel } from "../components/common/Section";

export const metadata: Metadata = {
  title: "Blog — Veille réglementaire CHR, gestion restaurant, NF525",
  description:
    "Actualités réglementaires, guides pratiques et analyses pour restaurateurs indépendants. Par des gens du métier.",
};

const articles = [
  {
    category: "Réglementation",
    categoryColor: "var(--caisse-accent)",
    title: "Votre logiciel de caisse est-il certifié NF525 ? Comment vérifier en 2026",
    excerpt: "Liste officielle AFNOR, vérifications à faire, sanctions encourues. Le guide complet pour rester en règle.",
    readTime: "8 min",
    date: "Bientôt",
  },
  {
    category: "Gestion financière",
    categoryColor: "var(--gold-light)",
    title: "Combien coûte vraiment la gestion logicielle d'un restaurant indépendant en 2026",
    excerpt: "Décomposition honnête de la pile logicielle moyenne, frais cachés inclus. Avec un calculateur interactif.",
    readTime: "12 min",
    date: "Bientôt",
  },
  {
    category: "HACCP",
    categoryColor: "var(--haccp-accent)",
    title: "HACCP proactif vs HACCP réactif : ce que votre logiciel ne vous dira pas",
    excerpt: "La différence cruciale entre enregistrer et anticiper. Et ce que vous risquez en cas de contrôle DDPP.",
    readTime: "10 min",
    date: "Bientôt",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-[140px] pb-12 ardoise-bg grain-overlay relative">
        <div className="relative mx-auto max-w-[1000px] px-5 sm:px-8">
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-normal leading-[1.1] tracking-[-0.025em] text-text-primary">
            Veille réglementaire <span className="italic">et</span> gestion restaurant.
          </h1>
          <p className="mt-8 max-w-[640px] text-[clamp(17px,1.5vw,20px)] leading-[1.65] text-text-secondary">
            Des informations concrètes pour les restaurateurs indépendants. Réglementation, gestion financière, outils. Par des gens du métier.
          </p>
        </div>
      </section>

      <Section tone="dark">
        <SectionLabel color="gold">Premier articles à venir</SectionLabel>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article
              key={a.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-surface transition-colors hover:border-gold-light/40"
            >
              <div className="aspect-[16/9] bg-bg-elevated relative">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 30% 50%, ${a.categoryColor}, transparent 70%)`,
                  }}
                  aria-hidden
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span
                  className="inline-block self-start text-[11px] font-semibold uppercase tracking-[0.08em]"
                  style={{ color: a.categoryColor }}
                >
                  {a.category}
                </span>
                <h2 className="mt-3 font-display text-xl font-normal leading-[1.3] text-text-primary">
                  {a.title}
                </h2>
                <p className="mt-3 line-clamp-2 text-sm leading-[1.65] text-text-secondary">
                  {a.excerpt}
                </p>
                <p className="mt-auto pt-4 text-xs text-text-muted">
                  {a.readTime} · {a.date}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm italic text-text-muted">
          Le blog Logones démarre avec le lancement commercial en juillet 2026. Inscrivez-vous à la liste de notification depuis la page démo pour être prévenu des premiers articles.
        </p>
      </Section>
    </>
  );
}
