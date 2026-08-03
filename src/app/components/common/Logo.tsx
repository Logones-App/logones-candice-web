import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";
import { LogonesWordmark } from "./LogonesWordmark";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
  /** @deprecated — gardé pour rétrocompatibilité d'API mais sans effet */
  showText?: boolean;
}) {
  const textColor = variant === "light" ? "#FFFFFF" : "#07111F";

  return (
    <Link
      href="/"
      aria-label="Logones — retour à l'accueil"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      {/* Vignette BIMI : la même marque que celle affichée dans la boîte
          mail des clients. Ne pas modifier ce fichier — il doit rester
          conforme au profil Tiny-PS exigé par BIMI. */}
      <Image
        src="/logones-bimi.svg"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 rounded-[10px]"
      />
      <LogonesWordmark textColor={textColor} className="text-2xl" />
    </Link>
  );
}
