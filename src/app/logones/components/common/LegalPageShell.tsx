import { Section } from "./Section";
import { LegalNotice } from "./LegalNotice";

export function LegalPageShell({
  title,
  lastUpdated,
  draft = true,
  children,
}: {
  title: string;
  lastUpdated: string;
  draft?: boolean;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="pt-[140px] pb-10 ardoise-bg grain-overlay relative isolate">
        <div className="relative mx-auto max-w-[800px] px-5 sm:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Page légale
          </p>
          <h1 className="mt-2 font-display text-[clamp(28px,4vw,48px)] font-normal leading-[1.15] tracking-[-0.02em] text-text-primary">
            {title}
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </section>

      <Section tone="dark" containerClassName="max-w-[800px]">
        {draft && (
          <div className="mb-8">
            <LegalNotice>
              <strong className="text-text-primary">Document de travail.</strong>{" "}
              Ce contenu doit être validé par le Cabinet Expeo ou un juriste
              spécialisé avant mise en ligne. Ne pas publier en l&apos;état.
            </LegalNotice>
          </div>
        )}
        <div className="space-y-6 text-[15px] leading-[1.75] text-text-secondary [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-8 [&_strong]:text-text-primary [&_a]:text-gold-light [&_a]:underline">
          {children}
        </div>
      </Section>
    </>
  );
}
