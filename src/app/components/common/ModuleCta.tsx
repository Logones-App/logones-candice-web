import { container, gutter, rhythm } from "../../lib/spacing";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { modules, onNight, ground, tint, type ModuleId } from "../../lib/tokens";

/**
 * Bandeau d'appel à l'action fermant chaque page module.
 *
 * Remplace HaccpCtaFinal, RhCtaFinal, StocksCtaFinal et ReservationCtaFinal,
 * qui étaient identiques à 97 % : seuls changeaient la couleur, le titre et
 * l'accroche. Les dimensions, l'image, les voiles et la rangée de
 * réassurance étaient recopiés à l'identique dans les quatre.
 *
 * Le bouton principal utilise le couple `button*` du module, dont le
 * contraste est vérifié — l'accent seul serait illisible.
 */

const DEFAULT_REASSURANCE = ["Sans engagement", "30 minutes", "Disponible 7j/7"];

type Props = {
  /** Détermine toutes les couleurs du bandeau. */
  module: ModuleId;
  /** Nom du module tel qu'il apparaît dans les intitulés d'accessibilité. */
  label: string;
  /** Titre, avec sa partie colorée. */
  title: React.ReactNode;
  /** Accroche sous le titre. */
  lead: string;
  /** Cible du bouton secondaire. */
  featuresHref?: string;
  reassurance?: string[];
};

export function ModuleCta({
  module,
  label,
  title,
  lead,
  featuresHref = "#features",
  reassurance = DEFAULT_REASSURANCE,
}: Props) {
  const M = modules[module];

  return (
    <section
      style={{
        backgroundColor: ground.night,
        paddingBlock: rhythm.compact,
        paddingInline: gutter,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container }}>
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: "320px",
            borderRadius: "22px",
            border: `1px solid ${M.border}`,
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          <Image
            src="/images/Gemini_Generated_Image_pssz3npssz3npssz.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 1480px, 100vw"
            className="absolute inset-0 z-0 object-cover"
            aria-hidden
          />

          {/* Voile sombre gauche → droite, plus halo de la couleur du module */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background: `
                linear-gradient(90deg, ${ground.night} 0%, rgba(2,6,11,0.94) 43%, rgba(2,6,11,0.55) 70%, rgba(2,6,11,0.15) 100%),
                radial-gradient(circle at 78% 45%, ${tint(M.accent, 0.2)}, transparent 34%)
              `,
            }}
            aria-hidden
          />

          {/* Halo diffus derrière le sujet de la photo */}
          <div
            className="pointer-events-none absolute z-[1] hidden lg:block"
            style={{
              right: "60px",
              bottom: 0,
              width: "420px",
              height: "260px",
              background: `radial-gradient(circle, ${tint(M.accent, 0.22)}, transparent 65%)`,
              filter: "blur(18px)",
            }}
            aria-hidden
          />

          <div
            className="relative z-[2] flex h-full items-center"
            style={{ padding: "clamp(40px, 6vw, 64px) clamp(28px, 5vw, 72px)" }}
          >
            <div style={{ maxWidth: "640px" }}>
              <h2
                style={{
                  fontSize: "clamp(28px, 3.8vw, 42px)",
                  lineHeight: 1.15,
                  fontWeight: 900,
                  color: onNight.text,
                  marginBottom: "18px",
                }}
              >
                {title}
              </h2>

              <p
                style={{
                  color: onNight.subtle,
                  fontSize: "17px",
                  lineHeight: 1.45,
                  maxWidth: "560px",
                  marginBottom: "30px",
                }}
              >
                {lead}
              </p>

              <div className="flex flex-wrap" style={{ gap: "16px" }}>
                <Link
                  href="/demo"
                  aria-label={`Demander une démo personnalisée du module ${label} Logones`}
                  className="inline-flex items-center justify-center gap-2 rounded-full transition-all hover:-translate-y-0.5"
                  style={{
                    height: "54px",
                    padding: "0 28px",
                    background: `linear-gradient(135deg, ${M.buttonFrom}, ${M.buttonTo})`,
                    color: M.onButton,
                    fontSize: "15px",
                    fontWeight: 900,
                    boxShadow: `0 16px 35px ${tint(M.accent, 0.38)}, inset 0 1px 0 rgba(255,255,255,0.28)`,
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  Demander une démo
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>

                <Link
                  href={featuresHref}
                  aria-label={`Voir toutes les fonctionnalités du module ${label}`}
                  className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                  style={{
                    height: "54px",
                    padding: "0 28px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.28)",
                    fontSize: "15px",
                    fontWeight: 900,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Voir toutes les fonctionnalités
                </Link>
              </div>

              <ul
                className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
                style={{ fontSize: "13px", color: onNight.muted }}
              >
                {reassurance.map((r) => (
                  <li key={r} className="inline-flex items-center gap-1.5">
                    <Check size={13} strokeWidth={2.5} style={{ color: M.accent }} />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
