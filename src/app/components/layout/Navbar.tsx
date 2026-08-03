"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "../common/Logo";
import { siteConfig } from "../../lib/site-config";
import { modules as moduleTokens } from "../../lib/tokens";
import type { ModuleId as NavModuleId } from "../../lib/modules-data";
import { cn } from "../../lib/utils";

/** Le site nomme la réservation « resa », les jetons « reservation ». */
const TOKEN_KEY: Record<NavModuleId, keyof typeof moduleTokens> = {
  caisse: "caisse",
  haccp: "haccp",
  rh: "rh",
  resa: "reservation",
  stocks: "stocks",
};

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const modulesButtonRef = useRef<HTMLButtonElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const onModules = pathname.startsWith("/modules");
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!modulesOpen && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        burgerRef.current?.focus();
      } else if (modulesOpen) {
        setModulesOpen(false);
        modulesButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modulesOpen, mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setModulesOpen(false);
  }, [pathname]);

  const ring =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light";
  const link =
    "relative rounded-md px-3.5 py-2 text-[14px] font-medium transition-colors duration-150";

  return (
    <>
      {/* Voile très léger : les héros sont des photos et les liens s'y
          perdaient. Il n'ajoute pas de bandeau, il assombrit seulement. */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-[99] h-[120px] transition-opacity duration-300",
          scrolled ? "opacity-0" : "opacity-100",
        )}
        style={{
          background: "linear-gradient(to bottom, rgba(2,6,11,0.62), transparent)",
        }}
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-colors duration-300",
          scrolled
            ? "border-b border-white/[0.07] bg-[color:var(--color-bg-base)]/85 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center lg:flex"
          >
            <div
              className="relative"
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <button
                ref={modulesButtonRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={modulesOpen}
                aria-current={onModules ? "page" : undefined}
                className={cn(
                  link,
                  ring,
                  "inline-flex items-center gap-1.5",
                  onModules || modulesOpen
                    ? "text-white"
                    : "text-white/60 hover:text-white",
                )}
                onClick={() => setModulesOpen((v) => !v)}
              >
                Modules
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    modulesOpen && "rotate-180",
                  )}
                  aria-hidden
                />
                {onModules && <Marker />}
              </button>

              <div
                inert={!modulesOpen}
                className={cn(
                  "absolute left-0 top-full w-[300px] pt-3 transition-all duration-150",
                  modulesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-1 opacity-0",
                )}
              >
                <div className="rounded-xl border border-white/[0.08] bg-[color:var(--color-bg-surface)] p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  {siteConfig.nav.modules.map((m) => {
                    const current = pathname === m.href;
                    return (
                      <Link
                        key={m.href}
                        href={m.href}
                        aria-current={current ? "page" : undefined}
                        onClick={() => setModulesOpen(false)}
                        className={cn(
                          "flex items-center gap-2.5 rounded-lg px-3 py-2.5 transition-colors duration-150",
                          ring,
                          current ? "bg-white/[0.05]" : "hover:bg-white/[0.04]",
                        )}
                      >
                        {/* Seul rappel de la couleur du module : un point. */}
                        <span
                          aria-hidden
                          className="h-[6px] w-[6px] shrink-0 rounded-full"
                          style={{
                            backgroundColor:
                              moduleTokens[TOKEN_KEY[m.moduleId]].accent,
                          }}
                        />
                        <span className="min-w-0">
                          <span
                            className={cn(
                              "block truncate text-[14px] font-medium",
                              current ? "text-white" : "text-white/85",
                            )}
                          >
                            {m.title}
                          </span>
                          <span className="mt-0.5 block truncate text-[12px] text-white/45">
                            {m.subtitle}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {siteConfig.nav.primary.map((item) => {
              const current = isCurrent(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    link,
                    ring,
                    current ? "text-white" : "text-white/60 hover:text-white",
                  )}
                >
                  {item.label}
                  {current && <Marker />}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/demo"
              className={cn(
                "inline-flex items-center justify-center rounded-full bg-gold-light px-5 py-2 text-[14px] font-semibold text-on-gold transition-[filter] duration-150 hover:brightness-105",
                ring,
              )}
            >
              Demander une démo
            </Link>
          </div>

          <button
            ref={burgerRef}
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            aria-controls="menu-mobile"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-md text-white lg:hidden",
              ring,
            )}
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        inert={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[150] bg-bg-base transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-white/[0.07] px-5">
          <Logo />
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => {
              setMobileOpen(false);
              burgerRef.current?.focus();
            }}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-md text-white",
              ring,
            )}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <nav
          aria-label="Navigation principale mobile"
          className="flex flex-col px-4 py-6"
        >
          <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
            Modules
          </div>
          {siteConfig.nav.modules.map((m) => {
            const current = pathname === m.href;
            return (
              <Link
                key={m.href}
                href={m.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-3",
                  ring,
                  current && "bg-white/[0.05]",
                )}
              >
                <span
                  aria-hidden
                  className="h-[6px] w-[6px] shrink-0 rounded-full"
                  style={{
                    backgroundColor: moduleTokens[TOKEN_KEY[m.moduleId]].accent,
                  }}
                />
                <span
                  className={cn(
                    "text-[15px] font-medium",
                    current ? "text-white" : "text-white/85",
                  )}
                >
                  {m.title}
                </span>
              </Link>
            );
          })}

          <div className="mx-3 my-4 h-px bg-white/[0.07]" />

          {siteConfig.nav.primary.map((item) => {
            const current = isCurrent(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-3 text-[15px] font-medium",
                  ring,
                  current ? "text-white" : "text-white/85",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/demo"
            onClick={() => setMobileOpen(false)}
            className={cn(
              "mx-3 mt-7 inline-flex items-center justify-center rounded-full bg-gold-light px-6 py-3 text-[15px] font-semibold text-on-gold",
              ring,
            )}
          >
            Demander une démo
          </Link>
        </nav>
      </div>
    </>
  );
}

/** Repère de page courante : un trait court, pas un soulignement plein. */
function Marker() {
  return (
    <span
      aria-hidden
      className="absolute bottom-0.5 left-1/2 h-[2px] w-3.5 -translate-x-1/2 rounded-full bg-gold-light"
    />
  );
}
