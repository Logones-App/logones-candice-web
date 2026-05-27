"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "../common/Logo";
import { ModuleIcon } from "../common/ModuleIcon";
import { siteConfig } from "../../lib/site-config";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
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

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border bg-[color:var(--color-bg-elevated)]/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-1 lg:flex"
          >
            <div
              className="relative"
              onMouseEnter={() => setModulesOpen(true)}
              onMouseLeave={() => setModulesOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={modulesOpen}
                className="inline-flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
                onClick={() => setModulesOpen((v) => !v)}
              >
                Modules
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    modulesOpen && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>

              <div
                className={cn(
                  "absolute left-0 top-full w-[340px] origin-top pt-2 transition-all duration-200",
                  modulesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0",
                )}
              >
                <div className="rounded-2xl border border-border bg-[color:var(--color-bg-elevated)] p-2 shadow-[var(--shadow-lg)]">
                  {siteConfig.nav.modules.map((m) => (
                    <Link
                      key={m.href}
                      href={m.href}
                      className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[color:var(--color-bg-surface)]"
                      onClick={() => setModulesOpen(false)}
                    >
                      <ModuleIcon module={m.moduleId} size={22} />
                      <div className="flex-1">
                        <div className="text-[15px] font-medium text-text-primary">
                          {m.title}
                        </div>
                        <div className="text-[13px] text-text-secondary">
                          {m.subtitle}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {siteConfig.nav.primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-[15px] font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/logones/demo"
              className="inline-flex items-center justify-center rounded-full bg-gold-light px-6 py-2.5 text-sm font-semibold text-bg-base transition-all hover:brightness-110 hover:shadow-glow-gold"
            >
              Demander une démo
            </Link>
          </div>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-primary lg:hidden"
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[150] bg-bg-surface transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-border px-5">
          <Logo />
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-text-primary"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-5 py-6">
          <div className="px-3 pb-2 pt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-gold-light">
            Modules
          </div>
          {siteConfig.nav.modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-bg-elevated"
            >
              <ModuleIcon module={m.moduleId} size={20} />
              <span className="text-[15px] font-medium text-text-primary">
                {m.title}
              </span>
            </Link>
          ))}

          <div className="my-3 h-px bg-border" />

          {siteConfig.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-3 text-[16px] font-medium text-text-primary"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/logones/demo"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gold-light px-6 py-3.5 text-base font-semibold text-bg-base"
          >
            Demander une démo
          </Link>
        </nav>
      </div>
    </>
  );
}
