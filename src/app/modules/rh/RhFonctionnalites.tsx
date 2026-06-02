import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  Fingerprint,
  FileSignature,
  MessageSquare,
  FileSpreadsheet,
  Info,
} from "lucide-react";
import { RH as C } from "./palette";

const features: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: CalendarClock,
    title: "Plannings intelligents",
    body: "Créez vos plannings en quelques clics. Contraintes, compétences, disponibilités : tout est pris en compte.",
  },
  {
    icon: Fingerprint,
    title: "Pointage fiable",
    body: "Pointage via mobile, tablette ou borne. Données horodatées et sécurisées, en temps réel.",
  },
  {
    icon: FileSignature,
    title: "Contrats & documents",
    body: "Centralisez contrats, avenants, visites médicales et échéances. Alertes automatiques.",
  },
  {
    icon: MessageSquare,
    title: "Demandes & échanges",
    body: "Congés, disponibilités, échanges de shifts : tout se fait simplement depuis l'app, avec validation.",
  },
  {
    icon: FileSpreadsheet,
    title: "Rapports prêts pour l'expert-comptable",
    body: "Exports complets et paramétrables : heures, absences, HS, primes, etc. Zéro ressaisie, zéro erreur.",
  },
];

export function RhFonctionnalites() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(28px, 4vw, 48px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1280px" }}
      >
        <div className="text-center" style={{ marginBottom: "36px" }}>
          <p
            style={{
              color: C.violet,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Fonctionnalités terrain
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 3.8vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            Planning, pointage et contrats{" "}
            <span style={{ color: C.violet }}>réunis.</span>
          </h2>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f) => (
            <li
              key={f.title}
              className="relative flex flex-col overflow-hidden"
              style={{
                background: `linear-gradient(180deg, ${C.card}, rgba(2,6,11,0.92))`,
                border: `1px solid ${C.border}`,
                borderRadius: "16px",
                padding: "24px",
                minHeight: "240px",
                boxShadow:
                  "0 18px 45px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Internal corner glow */}
              <div
                className="pointer-events-none absolute"
                style={{
                  top: "-60px",
                  right: "-60px",
                  width: "140px",
                  height: "140px",
                  background:
                    "radial-gradient(circle, rgba(163,107,255,0.18), transparent 65%)",
                }}
                aria-hidden
              />

              <div className="relative">
                <div
                  className="flex items-center justify-center rounded-2xl"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: C.violetSofter,
                    border: `1px solid ${C.border}`,
                    color: C.violet,
                    marginBottom: "16px",
                  }}
                  aria-hidden
                >
                  <f.icon size={20} strokeWidth={1.8} />
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 850,
                    color: C.text,
                    lineHeight: 1.2,
                    marginBottom: "10px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: C.textSubtle,
                  }}
                >
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Info banner — Logones ne fait pas la paie */}
        <div
          className="mt-8 flex items-start gap-3"
          style={{
            background: "rgba(163,107,255,0.08)",
            border: `1px solid ${C.border}`,
            borderRadius: "14px",
            padding: "18px 22px",
          }}
        >
          <span
            className="flex items-center justify-center rounded-full"
            style={{
              width: "32px",
              height: "32px",
              backgroundColor: C.violetSofter,
              border: `1px solid ${C.border}`,
              color: C.violet,
              flexShrink: 0,
            }}
            aria-hidden
          >
            <Info size={16} strokeWidth={2} />
          </span>
          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.84)",
              fontWeight: 500,
            }}
          >
            <strong style={{ color: C.text }}>Nous ne faisons pas la paie.</strong>{" "}
            Nous vous fournissons toutes les données fiables et conformes pour
            que votre expert-comptable édite vos bulletins de paie.
          </p>
        </div>
      </div>
    </section>
  );
}
