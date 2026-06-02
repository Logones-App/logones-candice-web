import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "../../lib/utils";

type PhotoSlotProps = {
  src?: string | null;
  alt?: string;
  brief?: string;
  ratio?: "4/3" | "3/4" | "16/9" | "1/1" | "square" | "portrait" | "landscape";
  className?: string;
  rounded?: "lg" | "xl" | "2xl" | "3xl";
  priority?: boolean;
  tint?: "warm" | "cool" | "neutral";
};

const ratioMap = {
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[16/10]",
};

const roundedMap = {
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
};

export function PhotoSlot({
  src,
  alt,
  brief,
  ratio = "4/3",
  className,
  rounded = "2xl",
  priority,
  tint = "warm",
}: PhotoSlotProps) {
  const baseClasses = cn(
    "relative overflow-hidden border border-border",
    roundedMap[rounded],
    ratioMap[ratio],
    className,
  );

  if (src) {
    return (
      <div className={baseClasses}>
        <Image
          src={src}
          alt={alt ?? brief ?? ""}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  // Cinematic placeholder — warm restaurant ambiance via CSS only
  const tintGradients = {
    warm:
      "radial-gradient(at 20% 30%, color-mix(in srgb, var(--gold-light) 35%, transparent), transparent 55%), radial-gradient(at 70% 70%, color-mix(in srgb, var(--gold-mid) 28%, transparent), transparent 60%), linear-gradient(135deg, #2A2A3D 0%, #1F1F2D 50%, #15151E 100%)",
    cool:
      "radial-gradient(at 20% 30%, color-mix(in srgb, var(--caisse-bright) 30%, transparent), transparent 55%), linear-gradient(135deg, #2A2A3D 0%, #1F1F2D 100%)",
    neutral:
      "linear-gradient(135deg, #2A2A3D 0%, #1F1F2D 100%)",
  };

  return (
    <div
      className={baseClasses}
      style={{ background: tintGradients[tint] }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='200' height='200' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/30 bg-gold-pale">
          <Camera className="h-4 w-4 text-gold-light" aria-hidden />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold-light">
          Photo à intégrer
        </p>
        {brief && (
          <p className="max-w-[28ch] text-[13px] leading-relaxed text-text-secondary">
            {brief}
          </p>
        )}
      </div>
    </div>
  );
}
