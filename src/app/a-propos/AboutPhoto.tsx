import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { ABOUT as C } from "./palette";

type AboutPhotoProps = {
  src?: string | null;
  alt: string;
  label?: string;
  rounded?: string;
  /** CSS aspect-ratio for responsive boxes, e.g. "4/5". Ignored if `size` is set. */
  aspect?: string;
  /** Fixed square size in px (for round avatars). */
  size?: number;
  /** Fill the parent (parent must be position:relative with its own height). */
  fillParent?: boolean;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Affiche la vraie photo si `src` est fourni, sinon un emplacement marqué.
 * Les photos des fondateurs sont utilisées telles quelles, sans retouche.
 */
export function AboutPhoto({
  src,
  alt,
  label = "Photo à insérer",
  rounded = "20px",
  aspect = "4/5",
  size,
  fillParent,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: AboutPhotoProps) {
  const boxStyle: React.CSSProperties = fillParent
    ? { position: "absolute", inset: 0, width: "100%", height: "100%" }
    : size
      ? { position: "relative", width: `${size}px`, height: `${size}px`, flexShrink: 0 }
      : { position: "relative", width: "100%", aspectRatio: aspect };

  if (src) {
    return (
      <div
        className={className}
        style={{
          ...boxStyle,
          borderRadius: rounded,
          overflow: "hidden",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={size ? `${size}px` : sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        ...boxStyle,
        borderRadius: rounded,
        overflow: "hidden",
        background:
          "repeating-linear-gradient(135deg, rgba(255,106,42,0.05) 0 14px, rgba(255,106,42,0.02) 14px 28px)",
        border: `1px dashed ${C.orangeBorder}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label={alt}
    >
      <div
        className="flex flex-col items-center text-center"
        style={{ gap: size && size < 120 ? "4px" : "10px", padding: "12px" }}
      >
        <span
          className="flex items-center justify-center rounded-full"
          style={{
            width: size && size < 120 ? "28px" : "44px",
            height: size && size < 120 ? "28px" : "44px",
            background: C.orangeSoft,
            border: `1px solid ${C.orangeBorder}`,
            color: C.orange,
          }}
          aria-hidden
        >
          <ImageIcon size={size && size < 120 ? 13 : 20} strokeWidth={1.8} />
        </span>
        {!(size && size < 120) && (
          <span
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: C.orange,
              letterSpacing: "0.04em",
            }}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
