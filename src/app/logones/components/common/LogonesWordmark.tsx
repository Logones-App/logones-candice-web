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
  textColor = "#F1F0EA",
  accentColor = "#FF7000",
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-bold leading-none tracking-[0.02em]",
        className,
      )}
      style={{
        fontFamily: "var(--font-anton), 'Arial Narrow', sans-serif",
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
    <svg
      viewBox="0 0 100 100"
      style={{
        width: "0.92em",
        height: "0.92em",
        marginInline: "-0.02em",
        flexShrink: 0,
      }}
      aria-hidden
    >
      {/* Outer ring — the "O" shape */}
      <circle
        cx="50"
        cy="50"
        r="38"
        stroke={ringColor}
        strokeWidth="14"
        fill="none"
      />
      {/* Bullseye — centered accent dot */}
      <circle cx="50" cy="50" r="11" fill={bullsEyeColor} />
    </svg>
  );
}
