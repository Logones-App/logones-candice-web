import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BLOG as C } from "./palette";
import { BLOG_PHOTOS } from "./photos";

export function BlogHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: C.bgDark,
        minHeight: "520px",
        paddingBlock: "120px clamp(40px, 5vw, 64px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      {/* Right photo */}
      {BLOG_PHOTOS.hero && (
        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
          style={{ width: "52%" }}
          aria-hidden
        >
          <Image
            src={BLOG_PHOTOS.hero}
            alt=""
            fill
            priority
            sizes="52vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${C.bgDark} 0%, rgba(7,17,31,0.85) 18%, rgba(7,17,31,0.30) 50%, rgba(7,17,31,0.10) 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 50%, rgba(255,106,26,0.16), transparent 55%)",
            }}
          />
        </div>
      )}

      {/* Mobile fallback */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background: `radial-gradient(circle at 70% 30%, rgba(255,106,26,0.16), transparent 55%), ${C.bgDark}`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto" style={{ maxWidth: "1320px" }}>
        <div className="max-w-[640px]">
          <p
            className="inline-block rounded-full"
            style={{
              color: C.orange,
              backgroundColor: C.orangeSoft,
              border: `1px solid ${C.orangeBorder}`,
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              padding: "6px 12px",
              marginBottom: "24px",
            }}
          >
            Le blog Logones
          </p>

          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 1.04,
              fontWeight: 850,
              color: C.textOnDark,
              letterSpacing: "-0.02em",
              marginBottom: "22px",
              textShadow: "0 2px 24px rgba(0,0,0,0.5)",
            }}
          >
            Le média des
            <br />
            restaurateurs qui
            <br />
            refusent de{" "}
            <span style={{ color: C.orange }}>piloter à l&apos;aveugle.</span>
          </h1>

          <p
            style={{
              fontSize: "17px",
              lineHeight: 1.6,
              color: C.textOnDarkSubtle,
              maxWidth: "540px",
              marginBottom: "32px",
            }}
          >
            Réglementation, rentabilité, RH, food cost, réservations, logiciels,
            obligations… Des analyses concrètes, écrites par des gens du métier.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#derniers-articles"
              className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{
                height: "54px",
                padding: "0 28px",
                background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                fontSize: "15px",
                fontWeight: 800,
                boxShadow:
                  "0 14px 32px rgba(255,106,26,0.38), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              Lire les derniers articles
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
            <Link
              href="#newsletter"
              className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              style={{
                height: "54px",
                padding: "0 28px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.28)",
                fontSize: "15px",
                fontWeight: 800,
                backdropFilter: "blur(10px)",
              }}
            >
              S&apos;abonner à la newsletter
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
