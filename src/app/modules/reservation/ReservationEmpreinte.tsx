import { Wifi } from "lucide-react";
import { RES as C } from "./palette";

const benefits = [
  {
    title: "5 % uniquement sur l'empreinte encaissée",
    sub: "via Stripe",
  },
  {
    title: "Paramétrable selon vos règles",
    sub: "montant, délai, conditions d'annulation",
  },
  {
    title: "Moins de no-shows, plus de revenus",
    sub: "protégez votre temps et vos tables",
  },
];

export function ReservationEmpreinte() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(20px, 3vw, 40px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: C.lightBg,
            color: C.lightInk,
            border: `1px solid rgba(17,17,17,0.08)`,
            boxShadow:
              "0 24px 65px rgba(0,0,0,0.30)",
          }}
        >
          <div className="grid lg:grid-cols-[45fr_55fr]" style={{ minHeight: "460px" }}>
            {/* LEFT */}
            <div
              className="relative"
              style={{ padding: "clamp(36px, 4vw, 56px) clamp(24px, 4vw, 56px)" }}
            >
              <p
                style={{
                  color: C.red,
                  fontSize: "12px",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "18px",
                }}
              >
                Empreinte bancaire
              </p>
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.08,
                  fontWeight: 850,
                  color: C.lightInk,
                  letterSpacing: "-0.02em",
                  marginBottom: "20px",
                }}
              >
                Protégez votre service.
                <br />
                <span style={{ color: C.red }}>Pas notre croissance.</span>
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.65,
                  color: C.lightInkSubtle,
                  marginBottom: "32px",
                  maxWidth: "540px",
                }}
              >
                Chez Logones,{" "}
                <strong style={{ color: C.lightInk }}>
                  aucune commission sur vos réservations
                </strong>
                . Des frais uniquement lorsque l&apos;empreinte bancaire est
                réellement encaissée après un no-show.
              </p>

              <ul className="flex flex-col" style={{ gap: "16px" }}>
                {benefits.map((b, i) => (
                  <li
                    key={b.title}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{
                        width: "32px",
                        height: "32px",
                        backgroundColor: "rgba(224,32,32,0.10)",
                        border: `1px solid rgba(224,32,32,0.28)`,
                        color: C.red,
                        fontSize: "13px",
                        fontWeight: 900,
                      }}
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: 800,
                          color: C.lightInk,
                          lineHeight: 1.3,
                        }}
                      >
                        {b.title}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: C.lightInkSubtle,
                          marginTop: "2px",
                        }}
                      >
                        {b.sub}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — Visual */}
            <div
              className="relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #1A0808 0%, #0A0405 50%, #050203 100%)",
                minHeight: "320px",
              }}
            >
              {/* Soft ambient warm light */}
              <div
                className="pointer-events-none absolute"
                style={{
                  top: "10%",
                  left: "20%",
                  width: "50%",
                  height: "60%",
                  background:
                    "radial-gradient(ellipse, rgba(245,158,11,0.20), transparent 65%)",
                  filter: "blur(20px)",
                }}
                aria-hidden
              />

              {/* CSS-only POS terminal with credit card */}
              <PosTerminalVisual />

              {/* 5% Badge — top-right */}
              <FivePercentBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PosTerminalVisual() {
  return (
    <div
      className="absolute"
      style={{
        left: "10%",
        bottom: "8%",
        width: "60%",
        transform: "rotate(-6deg)",
        filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.60))",
      }}
    >
      {/* Terminal body */}
      <div
        style={{
          width: "100%",
          aspectRatio: "1/1.5",
          background: "linear-gradient(180deg, #1E2832 0%, #0A0F14 100%)",
          borderRadius: "26px 26px 16px 16px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
          padding: "16px",
          position: "relative",
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "44%",
            borderRadius: "8px",
            background:
              "linear-gradient(180deg, rgba(224,32,32,0.40), rgba(122,17,17,0.45))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.20)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "0.05em",
          }}
        >
          EMPREINTE
        </div>
        {/* Keypad */}
        <div
          className="mt-2 grid grid-cols-3 gap-1.5"
          style={{ height: "44%" }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <span
              key={n}
              style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                borderRadius: "5px",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Credit card — partially inserted */}
      <div
        className="absolute"
        style={{
          left: "8%",
          top: "30%",
          width: "75%",
          aspectRatio: "1.585/1",
          background:
            "linear-gradient(135deg, #2B0F0F 0%, #4A1818 40%, #7A1111 100%)",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.18)",
          transform: "translateY(-46%) rotate(-3deg)",
          padding: "12px",
        }}
        aria-hidden
      >
        {/* Chip */}
        <div
          style={{
            width: "28px",
            height: "22px",
            background:
              "linear-gradient(135deg, #FFD580, #B07A30)",
            borderRadius: "4px",
            border: "1px solid rgba(0,0,0,0.20)",
          }}
        />
        {/* NFC waves */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            color: "rgba(255,255,255,0.40)",
          }}
        >
          <Wifi size={18} strokeWidth={2} style={{ transform: "rotate(90deg)" }} />
        </div>
        {/* Card number */}
        <p
          style={{
            position: "absolute",
            bottom: "20px",
            left: "12px",
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "11px",
            color: "rgba(255,255,255,0.78)",
            letterSpacing: "0.10em",
          }}
        >
          •••• •••• •••• 4242
        </p>
        {/* Card logo placeholder */}
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            display: "flex",
            gap: "2px",
          }}
        >
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#FF3030",
              opacity: 0.85,
            }}
          />
          <span
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#F59E0B",
              opacity: 0.85,
              marginLeft: "-7px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function FivePercentBadge() {
  return (
    <div
      className="absolute"
      style={{
        right: "8%",
        top: "12%",
        width: "180px",
        height: "180px",
      }}
      aria-hidden
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-4 rounded-full opacity-50 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,48,48,0.55), transparent 70%)",
        }}
      />
      {/* Main circle */}
      <div
        className="relative flex h-full w-full flex-col items-center justify-center rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #FF3838 0%, #E02020 45%, #7A1111 100%)",
          border: "3px solid rgba(255,255,255,0.18)",
          boxShadow:
            "0 0 40px rgba(224,32,32,0.55), inset 0 4px 0 rgba(255,255,255,0.18), inset 0 -8px 24px rgba(0,0,0,0.45)",
        }}
      >
        <p
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          5 %
        </p>
        <p
          className="mt-2 text-center"
          style={{
            fontSize: "9px",
            fontWeight: 900,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "0.12em",
            lineHeight: 1.3,
            paddingInline: "12px",
          }}
        >
          UNIQUEMENT SUR
          <br />
          L&apos;EMPREINTE ENCAISSÉE
        </p>
      </div>
    </div>
  );
}
