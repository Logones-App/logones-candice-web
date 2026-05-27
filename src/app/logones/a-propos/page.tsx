import type { Metadata } from "next";
import { Section, SectionLabel, SectionTitle } from "../components/common/Section";
import { FinalCTA } from "../components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Notre histoire — Logones, fondé par des restaurateurs lyonnais",
  description:
    "Logones est né d'une frustration réelle : 6 abonnements qui ne se parlaient pas, 255€/mois de pile fragmentée, aucun outil conçu pour les indépendants.",
};

const values = [
  {
    title: "La vérité sur nos prix",
    body: "Affichés publiquement, avant tout appel. Si un concurrent cache ses prix, c'est qu'il y a quelque chose à cacher.",
  },
  {
    title: "Le support pendant vos services",
    body: "Vous travaillez quand les autres dorment. Nous aussi. Notre équipe est joignable aux heures où ça compte vraiment.",
  },
  {
    title: "Les données qui vous appartiennent",
    body: "Export standard à tout moment, sans frais. Pas de chantage à la portabilité. Pas de verrouillage contractuel.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="pt-[140px] pb-12 ardoise-bg grain-overlay relative isolate">
        <div className="relative mx-auto max-w-[1000px] px-5 sm:px-8">
          <h1 className="font-display text-[clamp(36px,5vw,64px)] font-light italic leading-[1.1] tracking-[-0.025em] text-text-primary">
            Nous avons cherché ce logiciel.
            <br />
            <span className="not-italic font-semibold text-gold-light">Il n&apos;existait pas.</span>
          </h1>
          <p className="mt-8 max-w-[640px] text-[clamp(17px,1.5vw,20px)] leading-[1.65] text-text-secondary">
            Logones est né d&apos;une frustration réelle : 6 abonnements, 4 SAV différents, des données qui ne se parlaient pas. Et une conviction — que les restaurateurs méritaient un outil conçu par des gens du métier.
          </p>
        </div>
      </section>

      <Section tone="dark">
        <SectionLabel color="gold">Notre histoire</SectionLabel>
        <SectionTitle>Trois constats. Une décision.</SectionTitle>

        <div className="mt-12 max-w-3xl space-y-8 text-[17px] leading-[1.75] text-text-secondary">
          <p>
            <span className="font-display text-2xl italic text-text-primary">Le constat.</span>{" "}
            J&apos;ai tenu un restaurant. J&apos;ai connu les fins de service où l&apos;on ressaisit les bons de livraison du jour dans un tableur Excel à 23h30. Les contrôles HACCP où l&apos;on cherche frénétiquement les relevés de température dans un classeur papier. Les plannings que personne ne comprend parce qu&apos;ils sont sur une application qui ne sait pas ce qu&apos;il y a dans les frigos.
          </p>
          <p>
            <span className="font-display text-2xl italic text-text-primary">La décision.</span>{" "}
            On aurait pu assembler les meilleurs outils du marché. On a regardé. Il y avait des bons outils de caisse. De bons outils HACCP. De bons outils RH. Mais aucun qui se parlait. Et le coût total de la pile — sans frais cachés — dépassait systématiquement ce que les restaurateurs avaient anticipé à la signature.
          </p>
          <p>
            <span className="font-display text-2xl italic text-text-primary">Le choix de la transparence.</span>{" "}
            Logones affiche ses prix. Avant votre premier appel. Parce que si votre concurrent n&apos;affiche pas ses prix, c&apos;est qu&apos;il y a quelque chose à cacher. Nos CGV sont en ligne. Nos conditions de résiliation aussi. Ce n&apos;est pas une vertu — c&apos;est un choix commercial. La confiance se construit avant la signature.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <SectionLabel color="gold">L&apos;équipe</SectionLabel>
        <SectionTitle>Deux co-fondateurs. Deux métiers.</SectionTitle>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {[
            {
              initials: "C",
              name: "Candice",
              role: "Co-fondatrice — Produit & Marketing",
              bio: "Ex-restauratrice. Spécialiste de l'expérience client en salle. Pilote la stratégie produit et la voix de marque Logones.",
            },
            {
              initials: "P",
              name: "Philippe",
              role: "Co-fondateur — Développement",
              bio: "Développeur full-stack avec 12 ans d'expérience SaaS B2B. Architecte des modules Logones et de leur interconnexion native.",
            },
          ].map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-border bg-bg-elevated p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-pale text-xl font-semibold text-gold-light">
                  {p.initials}
                </div>
                <div>
                  <p className="text-lg font-semibold text-text-primary">{p.name}</p>
                  <p className="text-sm text-text-secondary">{p.role}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-[1.65] text-text-secondary">
                {p.bio}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionLabel color="gold">Nos valeurs</SectionLabel>
        <SectionTitle>Concrètes. Vérifiables. Pas des slogans.</SectionTitle>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <article
              key={v.title}
              className="rounded-2xl border border-border bg-bg-surface p-7"
            >
              <h3 className="font-display text-xl font-semibold text-text-primary">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.65] text-text-secondary">
                {v.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="light" size="compact">
        <SectionLabel color="caisse">État actuel</SectionLabel>
        <SectionTitle tone="light">NF525 — où en sommes-nous ?</SectionTitle>
        <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-text-dark-sec">
          La certification NF525 est en cours d&apos;audit. Elle sera obtenue avant le lancement commercial de juillet 2026. Nous ne vous vendrons pas un logiciel non certifié.
        </p>
      </Section>

      <FinalCTA />
    </>
  );
}
