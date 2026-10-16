import type { Metadata } from "next";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { FaqSection } from "../../components/v2/Ajouts";
import { CtaPremiumSection } from "../../components/home/CtaPremiumSection";

export const metadata: Metadata = {
  title: "Plusieurs établissements — proposition",
};

const LINE = onNight.border;

const BLOCS: [string, string][] = [
  ["Des chiffres qu'on ne peut pas comparer", "Quand chaque établissement calcule son food cost à sa façon, la comparaison ne veut rien dire. Ici la méthode est la même partout — l'écart que vous voyez est un vrai écart."],
  ["Une carte qui diverge", "Le prix change au siège, il change partout. Vous gardez la possibilité d'autoriser des écarts locaux, mais vous savez lesquels et où."],
  ["Des droits qui ne suivent pas", "Un responsable de site voit son établissement, un directeur régional son périmètre, vous voyez tout. Sans multiplier les comptes ni partager de mots de passe."],
  ["Un support qui repart de zéro", "Un interlocuteur dédié qui connaît votre organisation, pas un ticket qui recommence à chaque appel."],
  ["Consolidation et comparaison", "Chiffre d'affaires, coût matière, masse salariale et résultat consolidés, détaillables établissement par établissement, avec les écarts mis en évidence."],
  ["Un déploiement progressif", "Site par site, en commençant par celui qui a le plus à y gagner. Le premier prend trois semaines, le quatrième en prend une."],
];

const FAQ = [
  { q: "À partir de combien d'établissements ?", r: "Deux. Dès la deuxième adresse, la consolidation et les droits par périmètre changent votre quotidien — et le tarif s'adapte au nombre de sites." },
  { q: "Les cartes doivent-elles être identiques ?", r: "Non. Vous diffusez un socle commun depuis le siège, et vous décidez du degré d'autonomie de chaque site : prix libres, plats locaux, ou alignement strict." },
  { q: "Et si mes établissements ont des enseignes différentes ?", r: "C'est prévu. Chaque site garde son identité, son site vitrine et sa carte ; seule la consolidation les réunit." },
  { q: "Le tarif est-il dégressif ?", r: "Le tarif est construit avec vous selon le nombre de sites et les modules retenus." },
];

/** Page nouvelle : rien d'équivalent sur le site actuel. */
export default function GroupesV2() {
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
            Plusieurs établissements
          </p>
          <h1 className="max-w-[22ch] text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
            Comparez vos adresses sur les mêmes chiffres
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed" style={{ color: onNight.subtle }}>
            Une carte diffusée depuis le siège, des droits qui suivent la hiérarchie, et un compte de résultat par établissement — sur des ratios réellement comparables, parce qu&apos;ils sont calculés de la même façon partout.
          </p>
        </div>
      </section>

      <section className="py-[clamp(56px,7vw,96px)]" style={{ backgroundColor: ground.night }}>
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-10 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Quatre problèmes qui n'existent qu'à partir de deux adresses
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

      <FaqSection questions={FAQ} titre="Sur le multi-établissements" />

      <CtaPremiumSection />
    </>
  );
}
