"use client";

import { useState, useMemo } from "react";
import { Store, Users, CalendarCheck, TrendingDown, ArrowRight } from "lucide-react";
import { TARIFS as C } from "./palette";

const PRICE_PER_RESA = 2;
const PRICE_PER_EMPLOYEE = 6;
const PRICE_PER_ESTAB_LEGACY = 130;
const FIXED_LEGACY = 88;
const PRICE_PER_ESTAB_LOGONES = 300;

const fmt = (n: number) =>
  new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + " €";

export function TarifsSimulateur() {
  const [establishments, setEstablishments] = useState(2);
  const [employees, setEmployees] = useState(20);
  const [bookings, setBookings] = useState(400);

  const { legacyMonthly, legacy24, logonesMonthly, logones24, savings24 } =
    useMemo(() => {
      const legacyMonthly =
        bookings * PRICE_PER_RESA +
        employees * PRICE_PER_EMPLOYEE +
        establishments * PRICE_PER_ESTAB_LEGACY +
        FIXED_LEGACY;
      const logonesMonthly = establishments * PRICE_PER_ESTAB_LOGONES;
      const legacy24 = legacyMonthly * 24;
      const logones24 = logonesMonthly * 24;
      const savings24 = legacy24 - logones24;
      return { legacyMonthly, legacy24, logonesMonthly, logones24, savings24 };
    }, [establishments, employees, bookings]);

  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div
          className="relative overflow-hidden"
          style={{
            background: `linear-gradient(180deg, ${C.bgDark}, ${C.bgDarkSecondary})`,
            borderRadius: "24px",
            border: `1px solid ${C.borderOnDark}`,
            padding: "clamp(28px, 4vw, 48px)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Halo */}
          <div
            className="pointer-events-none absolute"
            style={{
              top: "-120px",
              right: "-80px",
              width: "420px",
              height: "320px",
              background:
                "radial-gradient(ellipse, rgba(255,106,26,0.18), transparent 65%)",
              filter: "blur(20px)",
            }}
            aria-hidden
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:gap-8">
            {/* Col 1 — Inputs */}
            <div>
              <p
                style={{
                  color: C.orange,
                  fontSize: "12px",
                  fontWeight: 900,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Simulateur d&apos;économies
              </p>
              <h2
                style={{
                  fontSize: "clamp(24px, 2.6vw, 32px)",
                  lineHeight: 1.1,
                  fontWeight: 850,
                  color: C.textOnDark,
                  marginBottom: "12px",
                }}
              >
                Découvrez ce que vous{" "}
                <span style={{ color: C.orange }}>économisez réellement.</span>
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.55,
                  color: C.textOnDarkSubtle,
                  marginBottom: "24px",
                }}
              >
                Ajustez les curseurs selon votre réalité. Les montants sont
                indicatifs et basés sur les tarifs moyens du marché CHR.
              </p>

              <div className="space-y-4">
                <Slider
                  icon={Store}
                  label="Établissements"
                  value={establishments}
                  min={1}
                  max={10}
                  step={1}
                  onChange={setEstablishments}
                />
                <Slider
                  icon={Users}
                  label="Salariés"
                  value={employees}
                  min={1}
                  max={80}
                  step={1}
                  onChange={setEmployees}
                />
                <Slider
                  icon={CalendarCheck}
                  label="Réservations / mois"
                  value={bookings}
                  min={0}
                  max={1500}
                  step={50}
                  onChange={setBookings}
                />
              </div>
            </div>

            {/* Col 2 — Situation actuelle */}
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: C.textOnDarkMuted,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Situation actuelle
              </p>
              <ul className="space-y-2.5">
                {[
                  "Logiciel de caisse",
                  "Module RH / Planning",
                  "Outil HACCP",
                  "Plateforme de réservation",
                  "Module de stocks",
                  "Exports comptables",
                ].map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-2"
                    style={{
                      fontSize: "13px",
                      color: C.textOnDarkSubtle,
                      lineHeight: 1.4,
                    }}
                  >
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "999px",
                        backgroundColor: C.orange,
                        marginTop: "8px",
                        flexShrink: 0,
                      }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Coût actuel */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.borderOnDarkSoft}`,
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: C.textOnDarkMuted,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Coût actuel
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: C.textOnDarkMuted,
                  marginBottom: "2px",
                }}
              >
                Mensuel moyen
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 850,
                  color: C.textOnDark,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: "16px",
                }}
              >
                {fmt(legacyMonthly)}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: C.textOnDarkMuted,
                  marginBottom: "2px",
                }}
              >
                Sur 24 mois
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: C.textOnDarkSubtle,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {fmt(legacy24)}
              </p>
            </div>

            {/* Col 4 — Logones Premium */}
            <div
              className="relative overflow-hidden"
              style={{
                background: `linear-gradient(160deg, rgba(255,106,26,0.18), rgba(255,106,26,0.04))`,
                border: `1px solid ${C.orangeBorder}`,
                borderRadius: "16px",
                padding: "20px",
                boxShadow: "0 18px 40px rgba(255,106,26,0.18)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 800,
                  color: C.orange,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Avec Logones Premium
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: C.textOnDarkMuted,
                  marginBottom: "2px",
                }}
              >
                Mensuel tout-en-un
              </p>
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: 850,
                  color: C.textOnDark,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: "16px",
                }}
              >
                {fmt(logonesMonthly)}
              </p>
              <p
                style={{
                  fontSize: "11px",
                  color: C.textOnDarkMuted,
                  marginBottom: "2px",
                }}
              >
                Sur 24 mois
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: C.textOnDark,
                  lineHeight: 1,
                  fontVariantNumeric: "tabular-nums",
                  marginBottom: "18px",
                }}
              >
                {fmt(logones24)}
              </p>

              <div
                className="flex items-center gap-2 rounded-lg"
                style={{
                  background: C.orange,
                  color: "#1A0700",
                  padding: "10px 12px",
                  fontWeight: 850,
                }}
              >
                <TrendingDown size={16} strokeWidth={2.5} />
                <div className="flex-1">
                  <p style={{ fontSize: "10px", fontWeight: 700, opacity: 0.8 }}>
                    Économie sur 24 mois
                  </p>
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: 850,
                      lineHeight: 1,
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {fmt(savings24)}
                  </p>
                </div>
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  icon: Icon,
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  icon: typeof Store;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${C.borderOnDarkSoft}`,
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <div className="flex items-center justify-between" style={{ marginBottom: "10px" }}>
        <div className="flex items-center gap-2">
          <span
            className="flex items-center justify-center rounded-md"
            style={{
              width: "26px",
              height: "26px",
              background: C.orangeSoft,
              border: `1px solid ${C.orangeBorder}`,
              color: C.orange,
            }}
            aria-hidden
          >
            <Icon size={13} strokeWidth={2} />
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: C.textOnDark,
            }}
          >
            {label}
          </span>
        </div>
        <span
          style={{
            fontSize: "16px",
            fontWeight: 850,
            color: C.orange,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full appearance-none bg-transparent cursor-pointer"
        style={{
          height: "6px",
          borderRadius: "999px",
          background: `linear-gradient(to right, ${C.orange} 0%, ${C.orange} ${pct}%, rgba(255,255,255,0.10) ${pct}%, rgba(255,255,255,0.10) 100%)`,
          outline: "none",
        }}
      />
      <div
        className="flex justify-between"
        style={{
          fontSize: "10px",
          color: C.textOnDarkMuted,
          marginTop: "4px",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
