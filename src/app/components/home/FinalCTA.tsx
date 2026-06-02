import { ArrowRight, Check } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "../common/Buttons";
import { PhotoSlot } from "../common/PhotoSlot";

const microReassurance = [
  "Sans engagement",
  "30 minutes",
  "Disponible 7j/7",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Photo background with gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <PhotoSlot
          brief="Restaurateur(trice) souriant(e) dans son établissement, regard confiant tourné vers la caméra, lumière chaude, salle pleine en arrière-plan flou."
          ratio="16/9"
          rounded="lg"
          className="!aspect-auto !h-full !w-full !rounded-none !border-0"
          tint="warm"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(31,31,45,0.92) 0%, rgba(31,31,45,0.85) 50%, rgba(31,31,45,0.95) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="grain-overlay relative">
        <div className="mx-auto max-w-[900px] px-5 py-[clamp(80px,10vw,160px)] text-center sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-light">
            Reprenez le contrôle
          </p>
          <h2 className="mt-5 text-balance font-sans text-[clamp(32px,5vw,64px)] font-semibold leading-[1.1] tracking-[-0.025em] text-text-primary">
            Et si demain, votre restaurant
            <br className="hidden sm:block" />{" "}
            <span className="font-semibold not-italic text-gold-light">
              fonctionnait pour vous
            </span>
            {" "}— pas l&apos;inverse ?
          </h2>

          <p className="mx-auto mt-7 max-w-[640px] text-[clamp(17px,1.5vw,20px)] leading-[1.65] text-text-secondary">
            30 minutes de démo. Vous repartez avec un comparatif honnête de
            votre pile actuelle, et les réponses à toutes vos questions — même
            celles qu&apos;un commercial préférerait esquiver.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonPrimary
              href="/demo"
              size="lg"
              className="w-full sm:w-auto"
            >
              Demander une démo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </ButtonPrimary>
            <ButtonSecondary
              href="/tarifs"
              size="lg"
              className="w-full sm:w-auto"
            >
              Voir les tarifs
            </ButtonSecondary>
          </div>

          <ul className="mt-9 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-text-muted">
            {microReassurance.map((item) => (
              <li key={item} className="inline-flex items-center gap-1.5">
                <Check
                  className="h-3.5 w-3.5 text-gold-light"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
