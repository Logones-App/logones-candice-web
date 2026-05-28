"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BLOG as C } from "./palette";

export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(40px, 5vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <div
          className="relative overflow-hidden flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
          style={{
            background: `linear-gradient(135deg, ${C.bgDark}, ${C.bgDarkSecondary})`,
            borderRadius: "12px",
            padding: "36px",
            boxShadow: "0 24px 60px rgba(7,17,31,0.20)",
          }}
        >
          {/* Glow */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-100px",
              right: "-60px",
              width: "380px",
              height: "280px",
              background:
                "radial-gradient(ellipse, rgba(255,106,26,0.16), transparent 65%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />

          {/* Left — text */}
          <div className="relative" style={{ maxWidth: "520px" }}>
            <h2
              style={{
                fontSize: "clamp(24px, 3vw, 34px)",
                lineHeight: 1.12,
                fontWeight: 850,
                color: C.textOnDark,
                marginBottom: "12px",
              }}
            >
              Un email <span style={{ color: C.orange }}>utile.</span>
              <br />
              Une fois par semaine.
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: C.textOnDarkSubtle,
              }}
            >
              Réglementation, coûts cachés, outils, obligations, stratégies
              terrain. Sans spam. Sans bullshit.
            </p>
          </div>

          {/* Right — form */}
          <div className="relative w-full lg:w-auto lg:min-w-[380px]">
            {submitted ? (
              <div
                className="flex items-center gap-3"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `1px solid ${C.orangeBorder}`,
                  borderRadius: "12px",
                  padding: "18px 20px",
                }}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{
                    width: "32px",
                    height: "32px",
                    background: C.orange,
                    color: "#FFFFFF",
                    flexShrink: 0,
                  }}
                  aria-hidden
                >
                  <Check size={17} strokeWidth={3} />
                </span>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: C.textOnDark,
                  }}
                >
                  Merci ! Vous êtes inscrit à la newsletter Logones.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Votre email
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 rounded-full outline-none"
                  style={{
                    height: "52px",
                    padding: "0 20px",
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid ${C.borderOnDark}`,
                    color: C.textOnDark,
                    fontSize: "15px",
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all hover:-translate-y-0.5"
                  style={{
                    height: "52px",
                    padding: "0 24px",
                    background: `linear-gradient(135deg, ${C.orange}, ${C.orangeDeep})`,
                    fontSize: "15px",
                    fontWeight: 800,
                    boxShadow:
                      "0 12px 28px rgba(255,106,26,0.35), inset 0 1px 0 rgba(255,255,255,0.28)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Je m&apos;abonne
                  <ArrowRight size={16} strokeWidth={2.5} />
                </button>
              </form>
            )}
            <p
              style={{
                fontSize: "12px",
                color: C.textOnDarkMuted,
                marginTop: "12px",
              }}
            >
              Désabonnement en 1 clic. Jamais de spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
