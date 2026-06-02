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
  const textColor = variant === "light" ? "#F1F0EA" : "#1F1F2D";

  return (
    <Link
      href="/"
      aria-label="Logones — retour à l'accueil"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <Image
        src="/images/logos/LOGONES-Logo-Final.svg"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10"
      />
      <LogonesWordmark textColor={textColor} className="text-2xl" />
    </Link>
  );
}
