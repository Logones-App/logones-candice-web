import type { Metadata } from "next";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { FaqSection } from "../../components/v2/Ajouts";
import { CtaPremiumSection } from "../../components/home/CtaPremiumSection";

export const metadata: Metadata = {
  title: "Conformité — proposition",
};

const LINE = onNight.border;

const BLOCS: [string, string][] = [
  ["Inaltérabilité", "Toute correction crée une écriture nouvelle qui annule la précédente, sans jamais l'effacer. Un ticket annulé reste visible, avec son motif, son heure et son auteur."],
  ["Sécurisation", "Chaque opération est signée et chaînée à la précédente. Une modification directe des données casse la chaîne et devient détectable."],
  ["Conservation", "Clôtures journalières, mensuelles et annuelles produites automatiquement, avec les grands totaux et les compteurs réglementaires."],
  ["Archivage", "Les archives sont figées, datées et exportables dans un format lisible sans notre logiciel. Elles restent les vôtres."],
  ["Journal des événements", "Ouvertures de tiroir, annulations, remises, changements de prix et interventions techniques sont journalisés et ineffaçables."],
  ["Traçabilité de l'opérateur", "Chaque geste porte le nom de la personne qui l'a fait, via son code PIN. Aucun compte partagé n'est nécessaire."],
];

const FAQ = [
  { q: "Une certification est-elle obligatoire ?", r: "Non. La loi impose quatre conditions et laisse le choix du mode de preuve : certificat d'un organisme accrédité, ou attestation individuelle de l'éditeur. Les deux ont la même valeur." },
  { q: "Que vaut une attestation d'éditeur ?", r: "C'est un document engageant, prévu par les textes, que vous présentez en cas de contrôle. L'éditeur qui l'établit engage sa responsabilité." },
  { q: "Où sont conservées mes données fiscales ?", r: "En France, chez un hébergeur français, pour les durées légales. Elles sont exportables à tout moment dans un format lisible sans notre logiciel." },
  { q: "La certification en cours change-t-elle quelque chose pour moi ?", r: "Non, votre conformité est acquise dès aujourd'hui par l'attestation. La certification est une démarche supplémentaire de notre côté." },
];

/** Page nouvelle : rien d'équivalent sur le site actuel. */
export default function ConformiteV2() {
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
            Conformité
          </p>
          <h1 className="max-w-[22ch] text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.04] tracking-[-0.025em] text-white">
            Ce que la loi exige, et ce que nous fournissons
          </h1>
          <p className="mt-6 max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-relaxed" style={{ color: onNight.subtle }}>
            Une page technique, pas commerciale. Elle existe pour que vous puissiez vérifier, et pour que votre expert-comptable trouve ce qu&apos;il cherche sans nous appeler.
          </p>
        </div>
      </section>

      <section className="py-[clamp(56px,7vw,96px)]" style={{ backgroundColor: ground.night }}>
        <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
          <h2 className="mb-10 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
            Quatre conditions, et comment chacune est satisfaite
          </h2>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ backgroundColor: LINE }}>
            {BLOCS.map(([t, d]) => (
              <div key={t} className="p-6" style={{ backgroundColor: ground.nightSurface }}>
                <h3 className="mb-2 text-[16px] font-bold text-white">{t}</h3>
                <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
            La preuve de ces conditions se fait <strong className="text-white">au choix</strong> :
            par un certificat délivré par un organisme accrédité, ou par une attestation
            individuelle de l&apos;éditeur. Nous vous remettons la nôtre à la signature.
          </p>
          <p className="my-6 max-w-[52ch] border-l-2 pl-4 text-[17px] font-semibold leading-snug text-white" style={{ borderColor: brand.orange }}>
            Conforme à l&apos;article 286 du CGI — attestation éditeur. Certification NF525 en cours.
          </p>
          <p className="text-[13px]" style={{ color: onNight.muted }}>
            Cette page décrit notre compréhension des obligations applicables. Elle ne constitue
            pas un conseil juridique ou fiscal : pour votre situation, adressez-vous à votre
            expert-comptable.
          </p>
        </div>
      </section>

      <FaqSection questions={FAQ} titre="Sur la conformité" />

      <CtaPremiumSection />
    </>
  );
}
