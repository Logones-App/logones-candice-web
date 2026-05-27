import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Lightning,
  ColumnsPlusRight,
  ReceiptX,
  Calculator,
  SquaresFour,
  ShieldCheck,
  Timer,
  ArrowsClockwise,
  Sparkle,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: Lightning,
    title: "Encaissement ultra rapide",
    body: "Interface intuitive et tactile pour aller à l'essentiel, même en plein rush.",
  },
  {
    icon: ColumnsPlusRight,
    title: "Division réelle des produits",
    body: "Chaque client paie exactement ce qu'il a consommé. Simple et équitable.",
  },
  {
    icon: ReceiptX,
    title: "Notes et tickets personnalisés",
    body: "Ajoutez vos mentions légales, logos et messages clients.",
  },
  {
    icon: Calculator,
    title: "Ventilation TVA par client",
    body: "Calcul automatique et affichage détaillé de la TVA correspondant à chaque client.",
  },
  {
    icon: SquaresFour,
    title: "Gestion des tables simplifiée",
    body: "Transférez, fusionnez, divisez ou déplacez vos tables en un clic.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé et certifié",
    body: "Conforme à la réglementation et en cours de certification NF525.",
  },
];

const terrainKpis = [
  { icon: Timer, label: "Moins d'attente, plus de service" },
  { icon: ArrowsClockwise, label: "Rotation des tables optimisée" },
  { icon: Sparkle, label: "Expérience client améliorée" },
  { icon: TrendUp, label: "Chiffre d'affaires mieux maîtrisé" },
];

export function CaisseFeatureHero() {
  return (
    <>
      {/* ============ HERO MODULE ENCAISSEMENT — image en fond ============ */}
      <section className="relative isolate overflow-hidden pt-[120px] pb-20 sm:pt-[140px] sm:pb-28">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/Gemini_Generated_Image_ncqoypncqoypncqo.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Diagonal overlay: dense left, lighter right (reveal POS screen on the right) */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(100deg, rgba(15,14,13,0.94) 0%, rgba(15,42,77,0.90) 35%, rgba(15,42,77,0.50) 60%, rgba(15,42,77,0.30) 100%)",
          }}
          aria-hidden
        />
        {/* Bottom fade into the next section */}
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-32"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--color-bg-base) 100%)",
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <div className="max-w-[660px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caisse-accent">
              Module Encaissement
            </p>

            <h1
              className="mt-4 font-display text-[clamp(36px,5.5vw,72px)] font-light leading-[1.05] tracking-[-0.02em] text-text-primary"
              style={{ textShadow: "0 2px 30px rgba(0,0,0,0.6)" }}
            >
              Un encaissement
              <br />
              <span
                className="font-semibold not-italic"
                style={{
                  background:
                    "linear-gradient(90deg, var(--caisse-accent), var(--caisse-bright))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                rapide, fluide
              </span>{" "}
              <span className="italic font-light">et fiable.</span>
            </h1>

            <p
              className="mt-6 max-w-[560px] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-text-primary/90"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
            >
              Pensé pour le rythme des restaurants, notre caisse vous fait
              gagner un temps précieux à chaque service.
            </p>

            {/* 6 Features in 2 cols */}
            <ul className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-caisse-bright/30 bg-caisse-deep/60 backdrop-blur-md">
                    <f.icon
                      size={22}
                      weight="duotone"
                      className="text-caisse-accent"
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[15px] font-semibold leading-tight text-text-primary"
                      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="mt-1 text-[13px] leading-[1.55] text-text-primary/80"
                      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
                    >
                      {f.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============ BOTTOM: 2 cards ============ */}
      <section className="relative bg-bg-base py-20">
        <div className="mx-auto grid max-w-[1280px] gap-5 px-5 sm:px-8 md:grid-cols-2 lg:px-10">
          {/* CARD: Conçu pour le terrain */}
          <article className="rounded-3xl border border-border bg-bg-surface p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caisse-accent">
              Tous types d&apos;établissements
            </p>
            <h2 className="mt-3 font-display text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] text-text-primary">
              Conçu pour le terrain.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-text-secondary">
              LOGONES Encaissement s&apos;adapte à tous les types
              d&apos;établissements : restaurants, cafés, bars, brasseries,
              food trucks…
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {terrainKpis.map((kpi) => (
                <li
                  key={kpi.label}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-bg-elevated/50 p-3"
                >
                  <kpi.icon
                    size={18}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-caisse-accent"
                    aria-hidden
                  />
                  <span className="text-[13px] font-medium leading-tight text-text-primary">
                    {kpi.label}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          {/* CARD: Certification NF525 */}
          <article className="relative overflow-hidden rounded-3xl border border-caisse-bright/30 bg-gradient-to-br from-caisse-deep/40 via-bg-surface to-bg-base p-8">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full opacity-30 blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, var(--caisse-bright), transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-caisse-accent bg-caisse-deep shadow-glow-blue">
                <ShieldCheck
                  size={36}
                  weight="duotone"
                  className="text-caisse-accent"
                  aria-hidden
                />
              </div>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-caisse-accent">
                Conformité légale
              </p>
              <h2 className="mt-2 font-display text-[clamp(22px,2.5vw,30px)] font-semibold leading-[1.2] text-text-primary">
                Certification NF525.
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-text-secondary">
                LOGONES est <strong className="text-text-primary">en cours
                de certification NF525</strong>, garantissant la conformité
                légale de notre solution d&apos;encaissement.
              </p>

              <Link
                href="#nf525"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-caisse-accent px-5 py-2.5 text-sm font-semibold text-caisse-accent transition-colors hover:bg-caisse-deep/40"
              >
                En savoir plus sur la certification
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
