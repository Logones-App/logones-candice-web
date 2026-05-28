import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Settings,
  Layers,
  CreditCard,
  Calculator,
  Receipt,
  Printer,
  Users,
  Bell,
  Plus,
  Check,
  Banknote,
  Ticket,
  FileText,
  ArrowLeftRight,
  Nfc,
} from "lucide-react";

const C = {
  bg: "#02060B",
  blue: "#147CFF",
  blueDeep: "#005BFF",
  cardDark: "#06111D",
  cardSecondary: "#071523",
  text: "#FFFFFF",
  textSubtle: "rgba(255,255,255,0.68)",
  textBright: "rgba(255,255,255,0.82)",
  textMuted: "rgba(255,255,255,0.50)",
  border: "rgba(20,124,255,0.18)",
  borderSoft: "rgba(255,255,255,0.07)",
};

export function CaisseSettingsAndCta() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(32px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 32px)",
      }}
    >
      <div
        className="mx-auto flex flex-col gap-6"
        style={{ maxWidth: "1480px" }}
      >
        <SettingsBlock />
        <CtaFinalBlock />
      </div>
    </section>
  );
}

/* ============================================================
   SECTION 1 — PARAMÉTRABLE ET ÉVOLUTIVE
   ============================================================ */
function SettingsBlock() {
  return (
    <div
      className="relative grid gap-10 overflow-hidden lg:grid-cols-[58%_42%] lg:gap-14"
      style={{
        background:
          "linear-gradient(180deg, rgba(7,21,35,0.96), rgba(4,13,23,0.98))",
        border: `1px solid ${C.border}`,
        borderRadius: "18px",
        padding: "clamp(28px, 3.5vw, 42px)",
        boxShadow:
          "0 24px 65px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)",
        alignItems: "center",
      }}
    >
      {/* Soft glow */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-120px",
          right: "10%",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(20,124,255,0.14), transparent 65%)",
          filter: "blur(12px)",
        }}
        aria-hidden
      />

      {/* Left — mockup interface */}
      <div className="relative">
        <SettingsMockup />
      </div>

      {/* Right — text */}
      <div className="relative">
        <p
          style={{
            color: C.blue,
            fontSize: "12px",
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Paramétrable et évolutive
        </p>
        <h2
          style={{
            color: C.text,
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.05,
            fontWeight: 850,
            marginBottom: "22px",
          }}
        >
          Une caisse qui évolue
          <br />
          avec vous.
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontSize: "16px",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "24px",
          }}
        >
          Adaptez votre caisse à votre activité : gestion des droits,
          catégories personnalisées, promotions, happy hours, formules… tout
          est configurable en quelques clics.
        </p>

        <ul className="flex flex-col" style={{ gap: "10px" }}>
          {[
            "Droits utilisateurs et suivi des actions",
            "Catégories et tarifs personnalisés",
            "Promotions et formules",
            "Happy hours et remises",
            "Exports comptables automatisés",
            "Sauvegardes et clôtures de caisse",
          ].map((label) => (
            <li
              key={label}
              className="flex items-center"
              style={{
                gap: "12px",
                fontSize: "15px",
                fontWeight: 650,
                color: C.textBright,
              }}
            >
              <Check
                size={18}
                strokeWidth={2.4}
                style={{ color: C.blue, flexShrink: 0 }}
                aria-hidden
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----- Mockup "Paramètres de la caisse" ----- */
function SettingsMockup() {
  const sidebar: { icon: LucideIcon; label: string; active?: boolean }[] = [
    { icon: Settings, label: "Général" },
    { icon: Layers, label: "Services" },
    { icon: CreditCard, label: "Modes de paiement", active: true },
    { icon: Calculator, label: "Taxes et TVA" },
    { icon: Receipt, label: "Tickets et factures" },
    { icon: Printer, label: "Périphériques" },
    { icon: Users, label: "Utilisateurs" },
    { icon: Bell, label: "Notifications" },
  ];

  const rows: {
    icon: LucideIcon;
    label: string;
    active: boolean;
    cap: string;
  }[] = [
    { icon: Banknote, label: "Espèces", active: false, cap: "" },
    { icon: CreditCard, label: "Carte bancaire", active: true, cap: "500,00 €" },
    { icon: Ticket, label: "Titre restaurant", active: true, cap: "Illimité" },
    { icon: FileText, label: "Chèque", active: true, cap: "" },
    { icon: ArrowLeftRight, label: "Virement", active: false, cap: "" },
    { icon: Nfc, label: "Paiement sans contact", active: false, cap: "" },
  ];

  return (
    <div
      className="grid overflow-hidden"
      style={{
        backgroundColor: C.cardDark,
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "18px",
        height: "330px",
        boxShadow: "0 24px 55px rgba(0,0,0,0.35)",
        gridTemplateColumns: "170px 1fr",
        gap: "0px",
      }}
      aria-hidden
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col"
        style={{
          backgroundColor: "rgba(255,255,255,0.025)",
          borderRight: "1px solid rgba(255,255,255,0.07)",
          padding: "14px 10px",
          gap: "4px",
          margin: "-18px 0 -18px -18px",
        }}
      >
        {sidebar.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg"
            style={{
              padding: "7px 9px",
              backgroundColor: item.active
                ? "rgba(20,124,255,0.14)"
                : "transparent",
              color: item.active ? C.text : C.textMuted,
              fontSize: "10.5px",
              fontWeight: item.active ? 700 : 500,
            }}
          >
            <item.icon
              size={12}
              strokeWidth={1.75}
              style={{
                color: item.active ? C.blue : C.textMuted,
                flexShrink: 0,
              }}
            />
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </aside>

      {/* Main */}
      <div style={{ padding: "8px 18px" }} className="flex flex-col">
        {/* Header */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: "16px" }}
        >
          <h3
            style={{
              fontSize: "13px",
              fontWeight: 800,
              color: C.text,
              lineHeight: 1.2,
            }}
          >
            Paramètres de la caisse
          </h3>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg"
            style={{
              backgroundColor: C.blue,
              color: C.text,
              padding: "6px 10px",
              fontSize: "10.5px",
              fontWeight: 800,
              boxShadow: "0 4px 12px rgba(20,124,255,0.30)",
            }}
            tabIndex={-1}
          >
            <Plus size={12} strokeWidth={2.5} />
            Nouveau mode
          </button>
        </div>

        {/* Table header */}
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "1fr 80px 100px",
            fontSize: "9.5px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: C.textMuted,
            paddingBottom: "8px",
            borderBottom: `1px solid rgba(255,255,255,0.10)`,
          }}
        >
          <span>Modes de paiement</span>
          <span className="text-center">Actif</span>
          <span className="text-right">Plafond</span>
        </div>

        {/* Rows */}
        <ul className="flex-1 overflow-hidden">
          {rows.map((row) => (
            <li
              key={row.label}
              className="grid items-center"
              style={{
                gridTemplateColumns: "1fr 80px 100px",
                minHeight: "32px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontSize: "10.5px",
                color: "rgba(255,255,255,0.76)",
              }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="flex items-center justify-center rounded-md"
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "rgba(20,124,255,0.10)",
                    border: "1px solid rgba(20,124,255,0.20)",
                    color: C.blue,
                    flexShrink: 0,
                  }}
                >
                  <row.icon size={11} strokeWidth={1.75} />
                </span>
                <span style={{ color: C.text, fontWeight: 600 }}>
                  {row.label}
                </span>
              </span>
              <div className="flex justify-center">
                <Toggle active={row.active} />
              </div>
              <span
                className="text-right"
                style={{
                  fontVariantNumeric: "tabular-nums",
                  fontWeight: row.cap ? 700 : 500,
                  color: row.cap ? C.text : C.textMuted,
                }}
              >
                {row.cap || "—"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Toggle({ active }: { active: boolean }) {
  return (
    <span
      style={{
        width: "32px",
        height: "18px",
        borderRadius: "999px",
        backgroundColor: active ? C.blue : "rgba(255,255,255,0.10)",
        boxShadow: active
          ? "0 0 8px rgba(20,124,255,0.40), inset 0 1px 0 rgba(255,255,255,0.20)"
          : "inset 0 1px 0 rgba(255,255,255,0.06)",
        position: "relative",
        display: "inline-block",
        transition: "background-color 200ms",
      }}
      aria-hidden
    >
      <span
        style={{
          position: "absolute",
          top: "2px",
          left: active ? "16px" : "2px",
          width: "14px",
          height: "14px",
          borderRadius: "999px",
          backgroundColor: active ? "#FFFFFF" : "rgba(255,255,255,0.55)",
          transition: "left 200ms",
          boxShadow: "0 1px 2px rgba(0,0,0,0.30)",
        }}
      />
    </span>
  );
}

/* ============================================================
   SECTION 2 — CTA FINAL
   ============================================================ */
function CtaFinalBlock() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: "280px",
        borderRadius: "18px",
        border: `1px solid ${C.border}`,
        boxShadow:
          "0 24px 65px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/Gemini_Generated_Image_pssz3npssz3npssz.png"
        alt=""
        fill
        sizes="(min-width: 1024px) 1480px, 100vw"
        className="absolute inset-0 z-0 object-cover"
        aria-hidden
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(90deg, #02060B 0%, rgba(2,6,11,0.94) 43%, rgba(2,6,11,0.55) 70%, rgba(2,6,11,0.15) 100%),
            radial-gradient(circle at 78% 45%, rgba(20,124,255,0.14), transparent 34%)
          `,
        }}
        aria-hidden
      />

      {/* Halo behind person */}
      <div
        className="pointer-events-none absolute z-[1] hidden lg:block"
        style={{
          right: "60px",
          bottom: 0,
          width: "420px",
          height: "260px",
          background:
            "radial-gradient(circle, rgba(20,124,255,0.18), transparent 65%)",
          filter: "blur(18px)",
        }}
        aria-hidden
      />

      {/* Content */}
      <div
        className="relative z-[2] flex h-full items-center"
        style={{
          padding: "clamp(36px, 5vw, 54px) clamp(24px, 5vw, 64px)",
          gap: "48px",
        }}
      >
        <div style={{ maxWidth: "640px" }}>
          <h2
            style={{
              color: C.text,
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.08,
              fontWeight: 850,
              marginBottom: "18px",
            }}
          >
            Prêt à <span style={{ color: "#147CFF" }}>moderniser</span> votre encaissement ?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.74)",
              fontSize: "17px",
              lineHeight: 1.5,
              maxWidth: "560px",
              marginBottom: "30px",
            }}
          >
            Découvrez Logones Caisse en démo personnalisée avec un expert.
          </p>

          <div className="flex flex-wrap" style={{ gap: "20px" }}>
            <Link
              href="/logones/demo"
              aria-label="Demander une démo personnalisée du module caisse Logones"
              className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5"
              style={{
                height: "56px",
                padding: "0 30px",
                background: `linear-gradient(135deg, ${C.blue}, ${C.blueDeep})`,
                fontSize: "15px",
                fontWeight: 850,
                boxShadow: "0 16px 35px rgba(20,124,255,0.38)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              Demander une démo →
            </Link>
            <Link
              href="#features"
              aria-label="Voir toutes les fonctionnalités du module caisse"
              className="inline-flex items-center justify-center rounded-full text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              style={{
                height: "56px",
                padding: "0 30px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.28)",
                fontSize: "15px",
                fontWeight: 850,
                backdropFilter: "blur(10px)",
              }}
            >
              Voir toutes les fonctionnalités
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
