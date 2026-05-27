import { ExternalLink, ShieldCheck } from "lucide-react";
import { Section, SectionLabel } from "../common/Section";

export function NF525Block() {
  return (
    <Section tone="light" size="compact">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionLabel color="caisse">Certification NF525</SectionLabel>
          <h3 className="mt-3 font-display text-[clamp(20px,2.5vw,32px)] font-semibold leading-[1.25] tracking-[-0.015em] text-text-dark">
            Votre logiciel de caisse est-il encore légal ?
          </h3>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-text-dark-sec">
            <p>
              Depuis la loi de finances 2016 (art. 286 bis du CGI), tout
              assujetti à la TVA utilisant un logiciel de caisse doit détenir
              une attestation de conformité. Les logiciels non conformes
              exposent leur utilisateur à une amende de{" "}
              <strong className="text-text-dark">7 500 €</strong> (art. 1770
              duodecies du CGI).
            </p>
            <p>
              Logones est <strong className="text-text-dark">en cours de
              certification NF525</strong> auprès de l&apos;organisme
              certificateur. L&apos;audit est financé et planifié. Résultat
              attendu : juillet 2026.
            </p>
          </div>

          <a
            href="https://www.infocert.org"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-caisse-mid hover:text-caisse-bright"
          >
            Vérifier la liste officielle AFNOR / Infocert
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>

          <p className="mt-4 text-xs italic text-text-dark-sec">
            Pour toute question sur vos obligations fiscales, consultez votre
            expert-comptable.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full"
            style={{
              background:
                "radial-gradient(circle, var(--caisse-glow) 0%, transparent 70%)",
              boxShadow: "var(--shadow-glow-blue)",
            }}
          >
            <div className="relative flex h-[180px] w-[180px] items-center justify-center rounded-3xl border-2 border-caisse-accent bg-bg-base">
              <div className="text-center">
                <ShieldCheck
                  className="mx-auto h-8 w-8 text-caisse-accent"
                  aria-hidden
                />
                <p className="mt-2 font-display text-2xl font-bold text-text-primary">
                  NF525
                </p>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-caisse-accent">
                  En cours d&apos;audit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
