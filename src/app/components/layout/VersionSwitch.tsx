"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { brand, ground, onNight } from "../../lib/tokens";
import { versionActuelle } from "../../lib/v2-content";

/**
 * Bascule flottante entre la version en ligne et la proposition.
 *
 * Elle ne s'affiche que sur les routes /v2 : le site actuel n'est pas modifié,
 * pas même par ce composant.
 *
 * Toutes les pages n'ont pas de jumelle. Depuis /v2/pourquoi ou /v2/pilotage,
 * il n'y a rien à comparer — le bouton est alors désactivé plutôt que de
 * renvoyer vers une page qui n'existe pas.
 */
export function VersionSwitch() {
  const pathname = usePathname() ?? "/";
  if (pathname !== "/v2" && !pathname.startsWith("/v2/")) return null;

  const actuel = versionActuelle(pathname);

  const cadre = {
    backgroundColor: ground.nightSurfaceHigh,
    border: `1px solid ${onNight.border}`,
    borderRadius: "12px",
    boxShadow: "0 12px 40px rgba(0,0,0,0.55)",
    padding: "6px",
  };

  return (
    <div
      className="fixed bottom-5 left-1/2 z-[150] flex -translate-x-1/2 items-center gap-1.5"
      style={cadre}
    >
      <span
        className="hidden px-2 text-[11px] font-bold uppercase tracking-[0.14em] sm:inline"
        style={{ color: onNight.muted }}
      >
        Version
      </span>

      {actuel ? (
        <Link
          href={actuel}
          className="rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors hover:bg-white/5"
          style={{ color: onNight.subtle }}
        >
          Actuelle
        </Link>
      ) : (
        <span
          className="cursor-not-allowed rounded-lg px-3 py-2 text-[13px] font-semibold"
          style={{ color: onNight.muted, opacity: 0.55 }}
          title="Cette page n'existe pas encore sur le site en ligne : il n'y a rien à comparer."
        >
          Actuelle
        </span>
      )}

      <span
        className="rounded-lg px-3 py-2 text-[13px] font-bold"
        style={{ backgroundColor: brand.orange, color: brand.onOrange }}
        aria-current="page"
      >
        Proposition
      </span>

      {!actuel && (
        <span
          className="hidden pl-1 pr-2 text-[11px] sm:inline"
          style={{ color: onNight.muted }}
        >
          page nouvelle
        </span>
      )}
    </div>
  );
}
