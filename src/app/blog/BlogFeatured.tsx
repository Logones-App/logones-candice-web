import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { BLOG as C } from "./palette";
import { BLOG_PHOTOS } from "./photos";

export function BlogFeatured() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(24px, 3vw, 40px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <article
          className="grid gap-0 overflow-hidden lg:grid-cols-[1.1fr_1fr_0.7fr]"
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
            boxShadow: "0 14px 40px rgba(7,17,31,0.06)",
          }}
        >
          {/* 1 — Image */}
          <div className="relative" style={{ minHeight: "240px" }}>
            {BLOG_PHOTOS.featured ? (
              <Image
                src={BLOG_PHOTOS.featured}
                alt="Restaurant en service"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,106,26,0.18), rgba(7,17,31,0.10))",
                }}
                aria-hidden
              />
            )}
          </div>

          {/* 2 — Texte */}
          <div
            className="flex flex-col justify-center"
            style={{ padding: "clamp(24px, 3vw, 40px)" }}
          >
            <span
              className="inline-flex w-fit items-center rounded-full"
              style={{
                fontSize: "10.5px",
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: C.orange,
                padding: "4px 11px",
                marginBottom: "16px",
              }}
            >
              À la une
            </span>
            <h2
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.2,
                fontWeight: 850,
                color: C.text,
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              <Link
                href="/blog/rentabilite/cout-cache-logiciel-restaurant"
                className="transition-colors hover:text-[#FF6A1A]"
              >
                Pourquoi votre logiciel restaurant vous coûte plus cher que
                vous ne le pensez.
              </Link>
            </h2>
            <p
              style={{
                fontSize: "14.5px",
                lineHeight: 1.6,
                color: C.textSubtle,
                marginBottom: "20px",
              }}
            >
              Commissions, modules payants, coûts cachés… Décryptage complet de
              tout ce qui rogne vos marges sans que vous le voyiez.
            </p>
            <div className="flex items-center gap-4">
              <span
                className="inline-flex items-center gap-1.5"
                style={{ fontSize: "12.5px", color: C.textMuted, fontWeight: 600 }}
              >
                <Clock size={13} strokeWidth={2} />
                10 min de lecture
              </span>
            </div>
            <Link
              href="/blog/rentabilite/cout-cache-logiciel-restaurant"
              className="mt-5 inline-flex w-fit items-center gap-1.5 transition-transform hover:translate-x-0.5"
              style={{ fontSize: "14px", fontWeight: 800, color: C.orange }}
            >
              Lire l&apos;article
              <ArrowRight size={15} strokeWidth={2.5} />
            </Link>
          </div>

          {/* 3 — Statistique */}
          <div
            className="flex flex-col justify-center"
            style={{
              padding: "clamp(24px, 3vw, 40px)",
              background: C.bgDark,
            }}
          >
            <span
              className="flex items-center justify-center rounded-xl"
              style={{
                width: "42px",
                height: "42px",
                background: "rgba(255,106,26,0.14)",
                border: `1px solid ${C.orangeBorder}`,
                color: C.orange,
                marginBottom: "16px",
              }}
              aria-hidden
            >
              <TrendingUp size={20} strokeWidth={2} />
            </span>
            <p
              style={{
                fontSize: "clamp(40px, 5vw, 56px)",
                fontWeight: 850,
                color: C.orange,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              +23 %
            </p>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: C.textOnDarkSubtle,
              }}
            >
              de coûts cachés en moyenne avec les logiciels traditionnels.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
