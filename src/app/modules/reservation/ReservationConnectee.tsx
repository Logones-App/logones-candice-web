import type { LucideIcon } from "lucide-react";
import {
  LayoutGrid,
  Smartphone,
  ChefHat,
  Monitor,
} from "lucide-react";
import { RES as C } from "./palette";

const cards: {
  icon: LucideIcon;
  title: string;
  body: string;
  visual: "plan" | "phone" | "kitchen" | "pos";
}[] = [
  {
    icon: LayoutGrid,
    title: "Plan de salle dynamique",
    body: "Visualisez votre salle en temps réel et adaptez-vous en un instant.",
    visual: "plan",
  },
  {
    icon: Smartphone,
    title: "Réservations en ligne",
    body: "Vos clients réservent 24/7, confirmations et rappels automatiques.",
    visual: "phone",
  },
  {
    icon: ChefHat,
    title: "Service aligné",
    body: "Cuisine et salle sont informées en temps réel pour un service fluide.",
    visual: "kitchen",
  },
  {
    icon: Monitor,
    title: "Caisse connectée",
    body: "Toutes les informations remontent automatiquement dans votre caisse.",
    visual: "pos",
  },
];

export function ReservationConnectee() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(40px, 5vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto grid items-start gap-10 lg:grid-cols-[28fr_72fr] lg:gap-10"
        style={{ maxWidth: "1280px" }}
      >
        {/* LEFT — text */}
        <div className="lg:sticky lg:top-24">
          <p
            style={{
              color: C.redAccent,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Tout est connecté
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 38px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              marginBottom: "18px",
            }}
          >
            Du clic à l&apos;encaissement,
            <br />
            <span style={{ color: C.redAccent }}>tout est synchronisé.</span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.65,
              color: C.textSubtle,
            }}
          >
            Plan de salle, réservations, caisse et équipe communiquent en temps
            réel pour un service fluide et maîtrisé.
          </p>
        </div>

        {/* RIGHT — 4 cards with visuals */}
        <ul className="grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <li
              key={c.title}
              className="overflow-hidden"
              style={{
                background: C.card,
                border: `1px solid rgba(255,48,48,0.14)`,
                borderRadius: "14px",
                boxShadow:
                  "0 18px 45px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <CardVisual variant={c.visual} />
              <div style={{ padding: "18px" }}>
                <div className="flex items-center gap-2">
                  <span
                    className="flex items-center justify-center rounded-md"
                    style={{
                      width: "26px",
                      height: "26px",
                      backgroundColor: "rgba(255,48,48,0.10)",
                      border: `1px solid rgba(255,48,48,0.30)`,
                      color: C.redAccent,
                    }}
                    aria-hidden
                  >
                    <c.icon size={14} strokeWidth={2} />
                  </span>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 850,
                      color: C.text,
                      lineHeight: 1.2,
                    }}
                  >
                    {c.title}
                  </h3>
                </div>
                <p
                  className="mt-2"
                  style={{
                    fontSize: "13.5px",
                    lineHeight: 1.55,
                    color: C.textSubtle,
                  }}
                >
                  {c.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
   4 mini-visuels CSS pour les cards
   ============================================================ */
function CardVisual({
  variant,
}: {
  variant: "plan" | "phone" | "kitchen" | "pos";
}) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: "130px",
        background:
          "linear-gradient(160deg, #2A0D0D 0%, #0F0A0A 60%, #02060B 100%)",
        borderBottom: "1px solid rgba(255,48,48,0.14)",
      }}
    >
      {/* Soft red glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "10%",
          left: "30%",
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse, rgba(255,48,48,0.20), transparent 70%)",
          filter: "blur(12px)",
        }}
        aria-hidden
      />
      {variant === "plan" && <PlanSalleVisual />}
      {variant === "phone" && <PhoneVisual />}
      {variant === "kitchen" && <KitchenVisual />}
      {variant === "pos" && <PosVisual />}
    </div>
  );
}

function PlanSalleVisual() {
  const tables: Array<"red" | "green" | "orange" | "neutral"> = [
    "red", "green", "orange", "red",
    "neutral", "green", "red", "green",
  ];
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      <div
        className="grid grid-cols-4 gap-1.5"
        style={{
          padding: "12px",
          background: "rgba(2,6,11,0.65)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
        }}
      >
        {tables.map((s, i) => {
          const color =
            s === "red"
              ? C.redAccent
              : s === "green"
                ? "#22C55E"
                : s === "orange"
                  ? "#F59E0B"
                  : "rgba(255,255,255,0.12)";
          return (
            <span
              key={i}
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "4px",
                backgroundColor: color,
                opacity: s === "neutral" ? 1 : 0.85,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function PhoneVisual() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      <div
        style={{
          width: "120px",
          height: "180px",
          background:
            "linear-gradient(180deg, #0A0F18 0%, #04080D 100%)",
          border: "6px solid #1A1A22",
          borderRadius: "20px",
          padding: "12px 8px",
          boxShadow: "0 16px 30px rgba(0,0,0,0.55)",
          transform: "translateY(20%) rotate(-4deg)",
        }}
      >
        <div
          style={{
            fontSize: "8px",
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            fontWeight: 700,
          }}
        >
          Logones
        </div>
        <div
          style={{
            marginTop: "8px",
            padding: "8px",
            background: "rgba(255,48,48,0.16)",
            border: `1px solid rgba(255,48,48,0.30)`,
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: 900,
              color: C.text,
              fontVariantNumeric: "tabular-nums",
              lineHeight: 1,
            }}
          >
            19:30
          </p>
          <p
            style={{
              fontSize: "8px",
              color: C.textMuted,
              marginTop: "3px",
            }}
          >
            2 personnes
          </p>
        </div>
        <div className="mt-2 flex gap-1">
          <span
            style={{
              flex: 1,
              height: "16px",
              background: C.red,
              borderRadius: "4px",
              fontSize: "6px",
              fontWeight: 800,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "0.04em",
            }}
          >
            CONFIRMER
          </span>
        </div>
      </div>
    </div>
  );
}

function KitchenVisual() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      <div
        style={{
          width: "84%",
          background: "rgba(2,6,11,0.65)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          padding: "10px 12px",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: "8.5px",
            fontWeight: 700,
            color: C.textMuted,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            marginBottom: "8px",
          }}
        >
          <span>Bon de cuisine</span>
          <span style={{ color: C.redAccent }}>Table 12</span>
        </div>
        <ul className="space-y-1">
          {["Tataki saumon ×2", "Burger Signature ×1", "Filet dorade ×1"].map(
            (item) => (
              <li
                key={item}
                className="flex items-center gap-1.5"
                style={{ fontSize: "9px", color: C.text }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "999px",
                    backgroundColor: C.redAccent,
                  }}
                />
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

function PosVisual() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      <div
        style={{
          width: "75%",
          aspectRatio: "1.6/1",
          background: "rgba(2,6,11,0.75)",
          border: "6px solid #1A1A22",
          borderRadius: "10px",
          padding: "8px",
          transform: "rotate(-3deg)",
          boxShadow: "0 16px 30px rgba(0,0,0,0.55)",
        }}
      >
        <div
          style={{
            height: "8px",
            background: "rgba(255,48,48,0.30)",
            borderRadius: "3px",
            marginBottom: "4px",
          }}
        />
        <div className="grid grid-cols-4 gap-0.5" style={{ height: "calc(100% - 12px)" }}>
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              style={{
                backgroundColor:
                  i === 0 || i === 5
                    ? "rgba(255,48,48,0.40)"
                    : "rgba(255,255,255,0.06)",
                border:
                  i === 0 || i === 5
                    ? `1px solid rgba(255,48,48,0.60)`
                    : "1px solid rgba(255,255,255,0.06)",
                borderRadius: "3px",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
