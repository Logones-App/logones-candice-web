import Link from "next/link";

import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import {
  DOULEURS,
  FORCES,
  MODULE_EXTRAS,
  MODULES_TARIF,
} from "../../lib/v2-content";

/**
 * Sections ajoutées par la proposition.
 *
 * Elles n'existent nulle part sur le site actuel. Chacune porte un liseré
 * orange à gauche : en parcourant une page /v2, on voit d'un coup d'œil ce
 * qui est nouveau et ce qui vient du site en ligne.
 */

const LINE = onNight.border;

function Bande({
  children,
  tone = "dark",
  ajout = true,
}: {
  children: React.ReactNode;
  tone?: "dark" | "surface";
  ajout?: boolean;
}) {
  return (
    <section
      className="relative overflow-hidden py-[clamp(56px,7vw,96px)]"
      style={{
        backgroundColor: tone === "dark" ? ground.night : ground.nightSurface,
        borderTop: `1px solid ${LINE}`,
        borderLeft: ajout ? `3px solid ${brand.orange}` : undefined,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
        {children}
      </div>
    </section>
  );
}

function Surtitre({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
      style={{ color: brand.orangeLight }}
    >
      {children}
    </p>
  );
}

function Titre({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
      {children}
    </h2>
  );
}

/* ================= Les huit douleurs ================= */

export function DouleursSection({ module }: { module?: string }) {
  const liste = module ? DOULEURS.filter((d) => d.module === module) : DOULEURS;
  if (liste.length === 0) return null;

  return (
    <Bande>
      <Surtitre>Ce que vous nous dites</Surtitre>
      <Titre>
        {module
          ? "Les douleurs que ce module règle"
          : "Huit phrases qu'on entend dans toutes les cuisines"}
      </Titre>
      {!module && (
        <p className="max-w-[46ch] text-[15px]" style={{ color: onNight.subtle }}>
          Et ce que Logones y répond, concrètement.
        </p>
      )}

      <div className="mt-10 grid gap-px sm:grid-cols-2" style={{ backgroundColor: LINE }}>
        {liste.map((d) => (
          <div
            key={d.dit}
            className="p-6"
            style={{ backgroundColor: ground.nightSurface }}
          >
            <p
              className="mb-3 border-l-2 pl-4 text-[17px] font-bold leading-snug text-white"
              style={{ borderColor: brand.orange }}
            >
              «&nbsp;{d.dit}&nbsp;»
            </p>
            <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
              {d.reponse}
            </p>
            <span
              className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: onNight.muted }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: d.couleur }}
              />
              {d.module}
            </span>
          </div>
        ))}
      </div>
    </Bande>
  );
}

/* ================= Nos forces ================= */

export function ForcesSection() {
  return (
    <Bande tone="surface">
      <Surtitre>Nos forces</Surtitre>
      <Titre>Six choix de conception dont vous sentirez l&apos;effet tous les jours</Titre>

      <div
        className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
        style={{ backgroundColor: LINE }}
      >
        {FORCES.map((f, i) => (
          <div key={f.titre} className="p-6" style={{ backgroundColor: ground.night }}>
            <span
              className="mb-3 block text-[11px] font-extrabold tracking-[0.14em]"
              style={{ color: brand.orange, fontVariantNumeric: "tabular-nums" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 text-[16px] font-bold text-white">{f.titre}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
              {f.texte}
            </p>
          </div>
        ))}
      </div>
    </Bande>
  );
}

/* ================= Parti pris ================= */

export function PartiPrisSection({ moduleId }: { moduleId: string }) {
  const extra = MODULE_EXTRAS[moduleId];
  if (!extra) return null;

  return (
    <Bande tone="surface">
      <Surtitre>Notre parti pris</Surtitre>
      <Titre>{extra.partiPris.titre}</Titre>
      <p
        className="max-w-[62ch] text-[clamp(17px,2vw,20px)] leading-relaxed"
        style={{ color: onNight.subtle }}
      >
        {extra.partiPris.texte}
      </p>
    </Bande>
  );
}

/* ================= Questions fréquentes ================= */

export function FaqSection({
  moduleId,
  questions,
  titre = "Ce qu'on nous demande le plus",
}: {
  moduleId?: string;
  questions?: { q: string; r: string }[];
  titre?: string;
}) {
  const liste = questions ?? (moduleId ? MODULE_EXTRAS[moduleId]?.faq : undefined);
  if (!liste || liste.length === 0) return null;

  return (
    <Bande>
      <Surtitre>Questions fréquentes</Surtitre>
      <Titre>{titre}</Titre>

      <div
        className="mt-8 max-w-[68ch] overflow-hidden rounded-xl border"
        style={{ borderColor: LINE, backgroundColor: ground.nightSurface }}
      >
        {liste.map((f, i) => (
          <details
            key={f.q}
            className="group"
            style={{ borderTop: i === 0 ? undefined : `1px solid ${LINE}` }}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[15px] font-bold text-white hover:bg-white/[0.03]">
              {f.q}
              <span
                className="shrink-0 text-lg font-extrabold transition-transform group-open:rotate-45"
                style={{ color: brand.orange }}
                aria-hidden
              >
                +
              </span>
            </summary>
            <p
              className="px-5 pb-5 text-[15px] leading-relaxed"
              style={{ color: onNight.subtle }}
            >
              {f.r}
            </p>
          </details>
        ))}
      </div>
    </Bande>
  );
}

/* ================= Les autres modules ================= */

export function AutresModulesSection({ sauf }: { sauf?: string }) {
  const liste = MODULES_TARIF.filter((m) => m.id !== sauf);

  return (
    <Bande>
      <Surtitre>Les autres modules</Surtitre>
      <Titre>Ils partagent la même base</Titre>
      <p className="max-w-[52ch] text-[15px]" style={{ color: onNight.subtle }}>
        Chacun fonctionne seul. Ensemble, ils cessent d&apos;être des logiciels séparés.
      </p>

      <div
        className="mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-3"
        style={{ backgroundColor: LINE }}
      >
        {liste.map((m) => (
          <Link
            key={m.id}
            href={m.href}
            className="block p-5 transition-colors hover:bg-white/[0.03]"
            style={{ backgroundColor: ground.nightSurface }}
          >
            <span className="flex items-center gap-2 text-[15px] font-bold text-white">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: m.couleur }}
              />
              {m.nom}
            </span>
            <span className="mt-1 block text-[13px]" style={{ color: onNight.muted }}>
              {m.resume}
            </span>
          </Link>
        ))}
      </div>
    </Bande>
  );
}

/* ================= Une soirée avec Logones ================= */

const SOIREE: { h: string; titre: string; texte: string; couleur: string }[] = [
  {
    h: "17 h 00",
    titre: "Mise en place",
    texte:
      "Les relevés de température partent depuis le téléphone en passant devant les frigos. La checklist d'ouverture se signe au doigt — horodatée, nominative, impossible à antidater.",
    couleur: "var(--haccp-bright, #22C55E)",
  },
  {
    h: "17 h 40",
    titre: "Livraison",
    texte:
      "La facture du poissonnier est scannée. Les lots entrent en stock avec leur DLC, et le coût matière du plat du jour se recalcule seul parce que le prix a bougé de 12 %.",
    couleur: "var(--stocks-bright, #FFC400)",
  },
  {
    h: "19 h 15",
    titre: "Premier service",
    texte:
      "Les commandes se prennent en salle et partent en cuisine sans papier. L'écran de préparation les classe par ordre d'envoi, et la salle voit où en est chaque table.",
    couleur: "var(--caisse-bright, #147CFF)",
  },
  {
    h: "20 h 30",
    titre: "La box tombe",
    texte:
      "Il ne se passe rien. On encaisse, on imprime, on envoie en cuisine. Les appareils continuent de se parler sur le réseau local. À 20 h 52, le réseau revient et tout remonte seul, dans l'ordre, sans un doublon.",
    couleur: brand.orange,
  },
  {
    h: "21 h 05",
    titre: "Un désistement",
    texte:
      "Table de six annulée. La liste d'attente relance automatiquement, et la table est reprise à 21 h 20. Le service n'a pas perdu six couverts.",
    couleur: "var(--resa-bright, #D14343)",
  },
  {
    h: "00 h 30",
    titre: "Clôture",
    texte:
      "Rapport Z, journal des événements, archivage. L'export comptable est prêt : il n'y aura rien à refaire le mois prochain.",
    couleur: "var(--caisse-bright, #147CFF)",
  },
  {
    h: "08 h 00",
    titre: "Le lendemain",
    texte:
      "Le chiffre de la veille, les couverts, le food cost réel du service, le coût du personnel rapporté aux couverts, et le plat qui a le mieux contribué au résultat. Pas le mois prochain. Ce matin.",
    couleur: "#22D3EE",
  },
];

export function SoireeSection() {
  return (
    <Bande>
      <Surtitre>Une soirée avec Logones</Surtitre>
      <Titre>De la mise en place au chiffre du lendemain matin</Titre>
      <p className="max-w-[52ch] text-[15px]" style={{ color: onNight.subtle }}>
        Le produit ne se résume pas à une liste de fonctions. Voici ce qu&apos;il fait
        pendant un vrai service.
      </p>

      <ol
        className="mt-10 max-w-[46rem] list-none border-l pl-0"
        style={{ borderColor: onNight.borderSoft }}
      >
        {SOIREE.map((s) => (
          <li key={s.h} className="relative pb-8 pl-8">
            <span
              className="absolute left-[-4.5px] top-2 h-2 w-2 rounded-full"
              style={{ backgroundColor: s.couleur }}
              aria-hidden
            />
            <span
              className="block text-[12px] font-bold tracking-[0.12em]"
              style={{ color: s.couleur, fontVariantNumeric: "tabular-nums" }}
            >
              {s.h.toUpperCase()} — {s.titre.toUpperCase()}
            </span>
            <p className="mt-1 text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
              {s.texte}
            </p>
          </li>
        ))}
      </ol>
    </Bande>
  );
}

/* ================= Le matériel, sans prix ================= */

const MATERIEL = [
  {
    titre: "Le poste hybride",
    texte:
      "Au comptoir ou en main. Imprimante et lecteur de carte intégrés : on encaisse à table sans revenir chercher un terminal.",
  },
  {
    titre: "Le terminal de poche",
    texte:
      "Pour prendre la commande et encaisser en salle, dans la poche du tablier.",
  },
  {
    titre: "La tablette de commande",
    texte:
      "11 ou 14 pouces, sur socle au comptoir ou à la main en salle. Batterie qui tient le double service.",
  },
  {
    titre: "L'écran de cuisine",
    texte:
      "Tactile et étanche aux projections. Les commandes arrivent classées par ordre d'envoi.",
  },
];

export function MaterielSection() {
  return (
    <Bande tone="surface">
      <Surtitre>Le matériel</Surtitre>
      <Titre>Conçu pour le service, pas pour un bureau</Titre>
      <p className="max-w-[62ch] text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
        Terminaux mobiles avec imprimante et paiement intégrés, tablettes de prise de
        commande, écran de cuisine étanche aux projections. Nous vous le fournissons{" "}
        <strong className="text-white">préconfiguré et garanti</strong> — à l&apos;achat ou
        en location, et vous en êtes propriétaire au terme.
      </p>

      <div className="mt-8 grid gap-px sm:grid-cols-2" style={{ backgroundColor: LINE }}>
        {MATERIEL.map((m) => (
          <div key={m.titre} className="p-6" style={{ backgroundColor: ground.night }}>
            <h3 className="mb-1 text-[16px] font-bold text-white">{m.titre}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
              {m.texte}
            </p>
          </div>
        ))}
      </div>
    </Bande>
  );
}

/* ================= Migration ================= */

const ETAPES = [
  {
    titre: "On récupère votre carte",
    texte:
      "Produits, prix, catégories, formules, plan de salle. Vous relisez, vous corrigez. Vous ne retapez rien.",
  },
  {
    titre: "Vos archives restent les vôtres",
    texte:
      "Vos données fiscales demeurent accessibles et exportables. Changer de logiciel n'efface pas votre historique.",
  },
  {
    titre: "On bascule un mardi",
    texte:
      "Jamais un vendredi. Formation sur site le matin, service accompagné le soir, et quelqu'un au bout du fil tout le premier week-end.",
  },
];

export function MigrationSection({ lien = true }: { lien?: boolean }) {
  return (
    <Bande>
      <Surtitre>Migration</Surtitre>
      <Titre>
        Vous avez déjà une caisse. Voici comment on en change sans rien perdre.
      </Titre>

      <div
        className="mt-10 grid gap-px sm:grid-cols-3"
        style={{ backgroundColor: LINE }}
      >
        {ETAPES.map((e, i) => (
          <div key={e.titre} className="p-6" style={{ backgroundColor: ground.nightSurface }}>
            <span
              className="mb-3 block text-[11px] font-extrabold tracking-[0.14em]"
              style={{ color: brand.orange, fontVariantNumeric: "tabular-nums" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mb-2 text-[16px] font-bold text-white">{e.titre}</h3>
            <p className="text-[15px] leading-relaxed" style={{ color: onNight.subtle }}>
              {e.texte}
            </p>
          </div>
        ))}
      </div>

      {lien && (
        <Link
          href="/v2/migration"
          className="mt-8 inline-flex items-center justify-center font-semibold text-white transition-colors hover:bg-white/5"
          style={{
            border: "1px solid rgba(255,255,255,0.45)",
            borderRadius: "10px",
            padding: "16px 28px",
          }}
        >
          Le détail de la migration
        </Link>
      )}
    </Bande>
  );
}
