import type { Metadata } from "next";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { DouleursSection, ForcesSection } from "../../components/v2/Ajouts";
import { CtaPremiumSection } from "../../components/home/CtaPremiumSection";

export const metadata: Metadata = {
  title: "Pourquoi Logones — proposition",
};

const LINE = onNight.border;

const QUOTIDIEN = [
  ["Le dimanche", "Plus de saisie de bons de livraison ni de tableur de marge. Les factures sont lues au scan pendant la réception, en semaine, en trente secondes."],
  ["La fin de mois", "L'export comptable est prêt à chaque clôture. Le compte de résultat sort seul le 1er. Il n'y a rien à reconstituer."],
  ["Le lundi matin", "Le planning se fait en une fois, face au chiffre d'affaires prévu, et l'équipe le voit dans son application. Plus de version qui circule par message."],
  ["Le jour du contrôle", "Le dossier s'exporte en un geste. Rien à préparer, rien à rattraper, rien à expliquer."],
  ["Le soir où la box tombe", "Le service continue. C'est le seul soir où vous mesurez vraiment ce que vous avez acheté."],
  ["Quand vous changez la carte", "Le prix, la marge et le site suivent ensemble. Un seul endroit à mettre à jour, donc aucun endroit à oublier."],
];

/** Page nouvelle : rien d'équivalent sur le site actuel. */
export default function PourquoiV2() {
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
          <p
            className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: brand.orangeLight }}
          >
            Pourquoi Logones
          </p>
          <h1 className="max-w-[20ch] text-[clamp(34px,5.5vw,60px)] font-extrabold leading-[1.03] tracking-[-0.025em] text-white">
            Vos problèmes, un par un
          </h1>
          <p
            className="mt-6 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed"
            style={{ color: onNight.subtle }}
          >
            Nous n&apos;avons pas construit une suite logicielle pour cocher des cases.
            Chaque module existe parce qu&apos;un restaurateur nous a décrit ce qui lui
            coûtait du temps, de l&apos;argent ou du sommeil.
          </p>
        </div>
      </section>

      <DouleursSection />
      <ForcesSection />

      <section className="py-[clamp(56px,7vw,96px)]" style={{ backgroundColor: ground.night, borderTop: `1px solid ${LINE}` }}>
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.orangeLight }}>
            Ce que ça change au quotidien
          </p>
          <h2 className="mb-10 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Le temps que vous récupérez
          </h2>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: LINE }}>
            {QUOTIDIEN.map(([t, d]) => (
              <div key={t} className="p-6" style={{ backgroundColor: ground.nightSurface }}>
                <h3 className="mb-2 text-[16px] font-bold text-white">{t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-[clamp(56px,7vw,96px)]"
        style={{ backgroundColor: ground.nightSurface, borderTop: `1px solid ${LINE}` }}
      >
        <div className="mx-auto" style={{ maxWidth: "52rem", paddingInline: gutter }}>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: brand.orangeLight }}>
            Ce que nous ne faisons pas
          </p>
          <h2 className="mb-6 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Autant le dire tout de suite
          </h2>
          <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
            La livraison par agrégateurs et le programme de fidélité ne sont pas encore au
            catalogue. Si la livraison représente une part importante de votre chiffre
            d&apos;affaires, nous ne sommes pas le bon outil pour vous aujourd&apos;hui.
          </p>
          <p
            className="my-6 border-l-2 pl-4 text-[17px] font-semibold leading-snug text-white"
            style={{ borderColor: brand.orange }}
          >
            Nous préférons vous le dire avant la démonstration qu&apos;après la signature.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
            Nous ne vendons pas non plus de bornes de commande. Notre pari est ailleurs :
            l&apos;arrière-cuisine et l&apos;administratif, là où vous perdez vos dimanches.
          </p>
        </div>
      </section>

      <CtaPremiumSection />
    </>
  );
}
