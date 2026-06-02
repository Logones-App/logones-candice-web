import Link from "next/link";
import { Logo } from "../common/Logo";
import { siteConfig } from "../../lib/site-config";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07111F]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-10">
        {/* Colonne identité */}
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-secondary">
            Logones est un logiciel de gestion tout-en-un pour restaurateurs
            indépendants, fondé à Lyon. Caisse NF525 + stocks + HACCP + RH +
            réservation dans un seul outil. Aucun frais caché. Aucune API
            tierce.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Logones"
              className="text-text-secondary transition-colors hover:text-gold-light"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Logones"
              className="text-text-secondary transition-colors hover:text-gold-light"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Modules
          </h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.nav.modules.map((m) => (
              <li key={m.href}>
                <Link
                  href={m.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Entreprise */}
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Entreprise
          </h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.footer.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Légal & contact */}
        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Légal
          </h2>
          <ul className="mt-4 space-y-3">
            {siteConfig.footer.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-1 text-xs text-text-muted">
            <p className="font-medium text-text-secondary">
              {siteConfig.legalEntity}
            </p>
            <p>c/o {siteConfig.founder}</p>
            <p>
              {siteConfig.city} ({siteConfig.region.split("-")[0].slice(0, 3)}),
              France
            </p>
            <p>SIRET : à compléter</p>
            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-text-secondary hover:text-gold-light"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-2 px-5 py-5 text-xs text-text-muted sm:px-8 md:flex-row md:items-center lg:px-10">
          <p>
            © {new Date().getFullYear()} Logones — {siteConfig.legalEntity} au
            capital de [X]€ — RCS Lyon [SIRET]
          </p>
          <p className="font-medium tracking-[0.04em]">
            NF525 · CCN HCR · RGPD
          </p>
        </div>
      </div>
    </footer>
  );
}
