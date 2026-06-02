import { Check, Star, Quote } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../common/Section";
import { PhotoSlot } from "../common/PhotoSlot";
import { formatEuros } from "../../lib/utils";

const bullets = [
  "Votre CA, votre food cost et votre marge — en direct, pendant le service.",
  "Une seule connexion. Une seule facture. Un seul interlocuteur.",
  "Des alertes qui arrivent avant que le problème ne devienne incident.",
];

export function SolutionSection() {
  return (
    <Section tone="surface">
      <div className="text-center">
        <SectionLabel color="gold">Logones, votre centre de contrôle</SectionLabel>
        <SectionTitle align="center">
          Tout votre restaurant. <span className="italic">Dans la paume de votre main.</span>
        </SectionTitle>
        <p className="mx-auto mt-5 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65] text-text-secondary">
          Une application connectée à votre caisse, à vos stocks, à votre HACCP
          et à votre équipe. Vous suivez votre restaurant comme on lit une
          carte. Simplement. Sans formation à rallonge.
        </p>
      </div>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Mobile dashboard mockup */}
        <div className="relative mx-auto w-full max-w-[420px]">
          {/* Phone frame */}
          <div className="relative aspect-[9/19] rounded-[44px] border-[10px] border-[#0A0A12] bg-bg-base shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)]">
            {/* Notch */}
            <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0A0A12]" />
            {/* Screen content */}
            <div className="relative h-full overflow-hidden rounded-[34px] bg-bg-base p-5 pt-10">
              <p className="text-[10px] font-medium uppercase tracking-wider text-text-muted">
                Lundi 25 mai · service du soir
              </p>
              <h3 className="mt-2 font-sans text-xl font-semibold text-text-primary">
                Bonsoir Philippe
              </h3>

              <div className="mt-5 rounded-2xl border border-gold-light/20 bg-gold-pale p-4">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                  CA du jour
                </p>
                <p className="mt-1 font-sans text-3xl font-semibold text-text-primary">
                  {formatEuros(2847)}
                </p>
                <p className="mt-1 text-xs font-medium text-haccp-accent">
                  + 12 % vs lundi dernier
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-bg-surface p-3">
                  <p className="text-[10px] uppercase tracking-wider text-text-muted">
                    Food cost
                  </p>
                  <p className="mt-1 font-sans text-lg font-semibold text-text-primary">
                    31,4 %
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-bg-surface p-3">
                  <p className="text-[10px] uppercase tracking-wider text-text-muted">
                    Couverts
                  </p>
                  <p className="mt-1 font-sans text-lg font-semibold text-text-primary">
                    47
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-border bg-bg-surface p-3">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-wider text-text-muted">
                    HACCP — complétude
                  </p>
                  <span className="rounded-full bg-haccp-deep px-2 py-0.5 text-[9px] font-semibold text-haccp-accent">
                    100 %
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-base">
                  <div className="h-full w-full rounded-full bg-haccp-bright" />
                </div>
              </div>

              <div className="mt-3 rounded-2xl border border-gold-light/30 bg-gold-pale/40 p-3">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold-light">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-light" />
                  Suggestion
                </p>
                <p className="mt-1 text-[12px] leading-snug text-text-primary">
                  La marge sur le menu du jour est de 64 %. C&apos;est 8 points
                  au-dessus de la moyenne.
                </p>
              </div>
            </div>
          </div>

          {/* Glow behind phone */}
          <div
            className="pointer-events-none absolute -inset-12 -z-10 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, var(--gold-light), transparent 70%)",
            }}
            aria-hidden
          />
        </div>

        {/* Right column: bullets + testimonial */}
        <div className="space-y-10">
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[17px] leading-[1.6] text-text-primary"
              >
                <Check
                  className="mt-1 h-5 w-5 shrink-0 text-gold-light"
                  aria-hidden
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial card */}
          <article className="rounded-3xl border border-border bg-bg-elevated p-7 shadow-[var(--shadow-lg)]">
            <div className="flex items-center justify-between">
              <div
                className="flex gap-0.5"
                aria-label="Note 5 sur 5"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold-light text-gold-light"
                    aria-hidden
                  />
                ))}
              </div>
              <Quote
                className="h-6 w-6 text-gold-light/40"
                aria-hidden
              />
            </div>
            <p className="mt-5 font-sans text-[18px] italic leading-[1.5] text-text-primary">
              « Pour la première fois en 12 ans, je vois ma marge en direct
              pendant le service. J&apos;ai arrêté de subir mes fins de mois. »
            </p>
            <footer className="mt-6 flex items-center gap-4">
              <PhotoSlot
                brief="Portrait restaurateur quarantaine, look authentique"
                ratio="1/1"
                rounded="2xl"
                className="!h-14 !w-14 !aspect-square"
              />
              <div>
                <p className="text-sm font-semibold text-text-primary">
                  Julien D.
                </p>
                <p className="text-[13px] text-text-secondary">
                  Le Loup Pendu — bouchon lyonnais
                </p>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </Section>
  );
}
