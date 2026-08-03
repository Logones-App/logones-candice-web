import { cn } from "../../lib/utils";

type Props = {
  className?: string;
  textColor?: string;
  accentColor?: string;
};

/**
 * Wordmark "LOGONES" tout en majuscules, bicolore :
 *   "LO"    → couleur principale (textColor)
 *   "GONES" → couleur accent (accentColor)
 * Le O situé après le G est dessiné comme une cible :
 * anneau extérieur de la couleur principale, bullseye accent au centre.
 */
export function LogonesWordmark({
  className,
  textColor = "#FFFFFF",
  accentColor = "#E26818",
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center leading-none tracking-[-0.02em]",
        className,
      )}
      style={{
        fontFamily: "var(--font-archivo), system-ui, sans-serif",
        fontWeight: 700,
      }}
      aria-label="LOGONES"
    >
      <span aria-hidden style={{ color: textColor }}>
        LO
      </span>
      <span aria-hidden style={{ color: accentColor }}>
        G
      </span>
      <TargetO ringColor={textColor} bullsEyeColor={accentColor} />
      <span aria-hidden style={{ color: accentColor }}>
        NES
      </span>
    </span>
  );
}

function TargetO({
  ringColor,
  bullsEyeColor,
}: {
  ringColor: string;
  bullsEyeColor: string;
}) {
  return (
    /* Calé sur le O d'Archivo 700 : chasse ≈ 0,76 em, graisse du fût ≈ 0,17 em.
       L'anneau reprend ces proportions pour que la cible passe pour une lettre
       et non pour un pictogramme posé au milieu du mot. */
    <svg
      viewBox="0 0 100 100"
      style={{
        width: "0.76em",
        height: "0.76em",
        marginInline: "0.005em",
        flexShrink: 0,
      }}
      aria-hidden
    >
      <circle
        cx="50"
        cy="50"
        r="38.5"
        stroke={ringColor}
        strokeWidth="23"
        fill="none"
      />
      {/* Point central, en accent */}
      <circle cx="50" cy="50" r="10" fill={bullsEyeColor} />
    </svg>
  );
}
