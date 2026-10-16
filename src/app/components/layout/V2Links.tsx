"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { ROUTES_JUMELLES } from "../../lib/v2-content";

/**
 * Garde les liens internes à l'intérieur de /v2.
 *
 * La barre de navigation, le pied de page et toutes les sections réutilisées
 * pointent vers les routes du site en ligne — c'est normal, ce sont les mêmes
 * fichiers. Sans ce composant, un clic sur « Tarifs » depuis /v2 vous ferait
 * sortir de la proposition sans prévenir, et la comparaison serait faussée.
 *
 * On ne duplique ni la navbar ni le pied de page pour y réécrire des URLs :
 * on réécrit l'attribut `href` dans le document. Intercepter le clic aurait
 * suffi pour un clic gauche, mais aurait laissé mentir le survol, le clic
 * milieu et « ouvrir dans un nouvel onglet ». Ici les trois disent vrai.
 *
 * Un observateur suit les rendus de Next : un menu qui s'ouvre après coup est
 * traité comme le reste.
 *
 * Rien de tout cela ne s'exécute sur le site actuel : le composant n'est monté
 * que par le layout /v2.
 */
export function V2Links() {
  const router = useRouter();

  useEffect(() => {
    const jumelles = new Set(ROUTES_JUMELLES);

    function reecrire(racine: ParentNode) {
      const liens = racine.querySelectorAll?.<HTMLAnchorElement>("a[href^='/']");
      if (!liens) return;

      liens.forEach((a) => {
        const href = a.getAttribute("href");
        if (!href || href.startsWith("/v2")) return;

        // On isole le chemin : /tarifs#faq et /tarifs?plan=pro doivent marcher.
        const coupe = href.search(/[?#]/);
        const chemin = coupe === -1 ? href : href.slice(0, coupe);
        const reste = coupe === -1 ? "" : href.slice(coupe);
        if (!jumelles.has(chemin)) return;

        // On garde l'original : il servira à revenir en arrière le jour de la
        // fusion, et il rend la réécriture lisible dans l'inspecteur.
        a.dataset.hrefV1 = href;
        a.setAttribute("href", (chemin === "/" ? "/v2" : `/v2${chemin}`) + reste);
      });
    }

    reecrire(document);

    const observateur = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.type === "childList") {
          m.addedNodes.forEach((n) => {
            if (n.nodeType === 1) reecrire(n as Element);
          });
        } else if (m.type === "attributes" && m.target.nodeType === 1) {
          const el = m.target as Element;
          if (el.tagName === "A") reecrire(el.parentNode ?? document);
        }
      }
    });

    observateur.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    /* Réécrire l'attribut ne suffit pas.
       Next <Link> navigue avec la valeur passée en prop React, pas avec ce
       qui se trouve dans le DOM : le lien affichait bien /v2/tarifs et
       ramenait quand même en V1. On intercepte donc le clic en phase de
       CAPTURE — donc avant le gestionnaire de React — et on route soi-même. */
    function auClic(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return; // nouvel onglet

      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      // On repart de l'URL d'origine : elle survit aux rendus de React.
      const href = a.dataset.hrefV1 ?? a.getAttribute("href");
      if (!href || !href.startsWith("/")) return;

      const coupe = href.search(/[?#]/);
      const chemin = coupe === -1 ? href : href.slice(0, coupe);
      const reste = coupe === -1 ? "" : href.slice(coupe);
      if (!jumelles.has(chemin)) return;

      e.preventDefault();
      e.stopPropagation();
      router.push((chemin === "/" ? "/v2" : `/v2${chemin}`) + reste);
    }

    document.addEventListener("click", auClic, true);

    return () => {
      observateur.disconnect();
      document.removeEventListener("click", auClic, true);
    };
  }, [router]);

  return null;
}
