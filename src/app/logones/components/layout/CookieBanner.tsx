"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "logones-cookie-consent";

type Choice = "accepted" | "refused" | null;

export function CookieBanner() {
  const [choice, setChoice] = useState<Choice>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined"
      ? window.localStorage.getItem(STORAGE_KEY)
      : null) as Choice;
    setChoice(stored);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function decide(value: Exclude<Choice, null>) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setChoice(value);
    setVisible(false);
  }

  if (choice !== null || !visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[180] animate-fade-up border-t border-border bg-bg-elevated/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 px-5 py-5 sm:px-8 lg:flex-row lg:items-center lg:px-10">
        <div className="flex-1">
          <p id="cookie-title" className="text-sm leading-relaxed text-text-primary">
            Nous utilisons des cookies pour mesurer l&apos;audience de notre
            site, améliorer votre navigation et mémoriser vos préférences.
            Aucun cookie publicitaire. Vous pouvez accepter, refuser ou
            personnaliser vos choix à tout moment.
          </p>
          <Link
            href="/logones/cookies"
            className="mt-1 inline-block text-xs text-text-muted underline transition-colors hover:text-gold-light"
          >
            Politique cookies
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 lg:flex-nowrap">
          <button
            type="button"
            onClick={() => decide("refused")}
            className="rounded-full border border-border bg-transparent px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:border-gold-light hover:text-gold-light"
          >
            Tout refuser
          </button>
          <Link
            href="/logones/cookies"
            className="rounded-full border border-transparent px-5 py-2.5 text-sm font-semibold text-text-secondary transition-colors hover:text-text-primary"
          >
            Personnaliser
          </Link>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-full bg-gold-light px-5 py-2.5 text-sm font-semibold text-bg-base transition-all hover:brightness-110"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
