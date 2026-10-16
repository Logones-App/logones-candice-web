import { brand, ground, onNight } from "../../lib/tokens";
import { container, gutter } from "../../lib/spacing";
import { DEMOS, type Demo } from "../../lib/v2-demos";

/**
 * Étage 1 — les trois démonstrations du module.
 *
 * C'est ce qu'on lit. La liste complète des fonctionnalités vient après, et
 * l'index exhaustif après elle. Trois niveaux de lecture, du cas concret au
 * catalogue, pour que le prospect trouve son entrée selon où il en est.
 *
 * La mise en forme suit la nature de la preuve — écran, geste ou garantie —
 * et alterne le sens de lecture d'une démonstration à l'autre.
 */

const LINE = onNight.border;

export function Demonstrations({
  moduleId,
  couleur,
}: {
  moduleId: string;
  couleur: string;
}) {
  const demos = DEMOS[moduleId];
  if (!demos?.length) return null;

  return (
    <section
      className="relative overflow-hidden py-[clamp(56px,7vw,96px)]"
      style={{
        backgroundColor: ground.nightSurface,
        borderTop: `1px solid ${LINE}`,
        borderLeft: `3px solid ${brand.orange}`,
      }}
    >
      <div className="mx-auto" style={{ maxWidth: container, paddingInline: gutter }}>
        <p
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em]"
          style={{ color: brand.orangeLight }}
        >
          Trois situations que vous connaissez
        </p>
        <h2 className="max-w-[24ch] text-[clamp(26px,3.4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white">
          Ce que ça change,
          <span style={{ color: couleur }}> concrètement</span>
        </h2>

        <div className="mt-14 flex flex-col gap-16">
          {demos.map((d, i) => (
            <Bloc key={d.cle} d={d} couleur={couleur} inverse={i % 2 === 1} n={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Bloc({
  d,
  couleur,
  inverse,
  n,
}: {
  d: Demo;
  couleur: string;
  inverse: boolean;
  n: number;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className={inverse ? "lg:order-2" : undefined}>
        <span
          className="text-[12px] font-extrabold tracking-[0.14em]"
          style={{ color: couleur, fontVariantNumeric: "tabular-nums" }}
        >
          {String(n).padStart(2, "0")}
        </span>
        <h3 className="mt-2 text-[clamp(19px,2.4vw,26px)] font-bold leading-snug text-white">
          {d.situation}
        </h3>
        <p
          className="mt-4 max-w-[52ch] text-[15px] leading-relaxed"
          style={{ color: onNight.subtle }}
        >
          {d.recit}
        </p>
        <p
          className="mt-5 border-l-2 pl-4 text-[16px] font-bold leading-snug text-white"
          style={{ borderColor: couleur }}
        >
          {d.cle}
        </p>
      </div>

      <div className={inverse ? "lg:order-1" : undefined}>
        <Preuve d={d} couleur={couleur} />
      </div>
    </div>
  );
}

function Preuve({ d, couleur }: { d: Demo; couleur: string }) {
  const p = d.preuve;

  /* ---- une interface : on la montre ---- */
  if (p.type === "ecran") {
    return (
      <div
        className="rounded-xl border p-5"
        style={{ backgroundColor: ground.nightSurfaceHigh, borderColor: LINE }}
      >
        <p
          className="mb-3 border-b pb-2.5 text-[11px] font-bold uppercase tracking-[0.1em]"
          style={{ borderColor: LINE, color: onNight.muted }}
        >
          {p.entete}
        </p>
        {p.lignes.map(([l, v]) => (
          <p
            key={l}
            className="flex justify-between gap-4 border-b border-dotted py-2 text-[14px]"
            style={{ borderColor: LINE, fontVariantNumeric: "tabular-nums" }}
          >
            <span style={{ color: onNight.subtle }}>{l}</span>
            <span className="shrink-0 font-semibold text-white">{v}</span>
          </p>
        ))}
        {p.total && (
          <p
            className="mt-2 flex justify-between gap-4 border-t pt-3 text-[17px] font-extrabold"
            style={{ borderColor: LINE, color: couleur, fontVariantNumeric: "tabular-nums" }}
          >
            <span>{p.total[0]}</span>
            <span className="shrink-0">{p.total[1]}</span>
          </p>
        )}
        {p.pied && (
          <p className="mt-3 text-[12px] leading-relaxed" style={{ color: onNight.muted }}>
            {p.pied}
          </p>
        )}
      </div>
    );
  }

  /* ---- un geste : on montre la séquence ---- */
  if (p.type === "geste") {
    return (
      <ol className="list-none border-l pl-0" style={{ borderColor: LINE }}>
        {p.etapes.map((e) => (
          <li key={e.t} className="relative pb-6 pl-7 last:pb-0">
            <span
              className="absolute left-[-4.5px] top-2 h-2 w-2 rounded-full"
              style={{ backgroundColor: couleur }}
              aria-hidden
            />
            <span className="block text-[15px] font-bold text-white">{e.t}</span>
            <p
              className="mt-1 max-w-[46ch] text-[14px] leading-relaxed"
              style={{ color: onNight.subtle }}
            >
              {e.d}
            </p>
          </li>
        ))}
      </ol>
    );
  }

  /* ---- une garantie : rien à montrer, tout à énoncer ---- */
  return (
    <div className="grid gap-px" style={{ backgroundColor: LINE }}>
      {p.points.map((pt) => (
        <div key={pt.t} className="p-4" style={{ backgroundColor: ground.nightSurfaceHigh }}>
          <span className="block text-[15px] font-bold text-white">{pt.t}</span>
          <p
            className="mt-1 max-w-[52ch] text-[14px] leading-relaxed"
            style={{ color: onNight.subtle }}
          >
            {pt.d}
          </p>
        </div>
      ))}
    </div>
  );
}
