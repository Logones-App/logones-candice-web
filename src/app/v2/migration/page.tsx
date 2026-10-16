import type { Metadata } from "next";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { FaqSection } from "../../components/v2/Ajouts";
import { CtaPremiumSection } from "../../components/home/CtaPremiumSection";

export const metadata: Metadata = {
  title: "Changer de logiciel — proposition",
};

const LINE = onNight.border;

const BLOCS: [string, string][] = [
  ["On regarde ce que vous avez", "Votre carte, votre plan de salle, vos habitudes de service, votre matériel actuel. On vous dit franchement ce qui se reprend et ce qui ne se reprend pas."],
  ["On récupère votre carte", "Produits, prix, catégories, formules, suppléments, plan de salle. Vous relisez, vous corrigez. Vous ne retapez rien."],
  ["On paramètre avec vous", "Postes, imprimantes, droits par employé, modes de paiement. Le matériel arrive préconfiguré, pas dans son carton d'origine."],
  ["On forme l'équipe", "Sur site, sur votre vraie carte. Salle, cuisine et comptoir séparément — chacun n'apprend que ce qu'il utilise."],
  ["On bascule un mardi", "Jamais un vendredi. Formation le matin, service accompagné le soir, et quelqu'un au bout du fil tout le premier week-end."],
  ["Ce qui ne se reprend pas", "L'historique détaillé ligne par ligne, les fiches clients non exportables, les fiches techniques qui n'existent que sur papier. On vous le dit avant de commencer, pas au milieu."],
];

const FAQ = [
  { q: "Combien de temps dure la migration ?", r: "Environ trois semaines entre le premier échange et la bascule, dont l'essentiel se passe sans vous. La partie qui vous demande du temps représente quelques heures." },
  { q: "Dois-je fermer mon restaurant ?", r: "Non. La bascule se fait sur un service creux, en général un mardi midi. L'ancien système reste consultable le temps que vous soyez à l'aise." },
  { q: "Puis-je garder mon matériel actuel ?", r: "Parfois. Les imprimantes de tickets et les tiroirs-caisse standards se réutilisent souvent. Nous vérifions votre parc avant de vous proposer quoi que ce soit — inutile de racheter ce qui fonctionne." },
  { q: "Que se passe-t-il si ça se passe mal ?", r: "Vous n'êtes pas engagé, et vos données restent les vôtres. Rien ne vous empêche de revenir en arrière." },
];

/** Page nouvelle : rien d'équivalent sur le site actuel. */
export default function MigrationV2() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${ground.nightSurface}, ${ground.night})`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div
          className="mx-auto"
          style={{ maxWidth: container, paddingInline: gutter, paddingTop: "150px", paddingBottom: "72px" }}
        >
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.orangeLight }}>
            Changer de logiciel
          </p>
          <h1 className="max-w-[22ch] text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
            Vous avez déjà une caisse. Voici comment on en change sans rien perdre.
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed" style={{ color: onNight.subtle }}>
            Changer de logiciel de caisse fait peur pour trois raisons : perdre sa carte, perdre son historique, et tomber en panne un vendredi soir. Voici comment nous traitons les trois.
          </p>
        </div>
      </section>

      <section className="py-[clamp(56px,7vw,96px)]" style={{ backgroundColor: ground.night }}>
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-10 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Cinq étapes, sur trois semaines
          </h2>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: LINE }}>
            {BLOCS.map(([t, d]) => (
              <div key={t} className="p-6" style={{ backgroundColor: ground.nightSurface }}>
                <h3 className="mb-2 text-[16px] font-bold text-white">{t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSection questions={FAQ} titre="Sur la bascule" />

      <CtaPremiumSection />
    </>
  );
}
