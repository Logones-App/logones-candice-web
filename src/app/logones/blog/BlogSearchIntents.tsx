import Link from "next/link";
import {
  ArrowRight,
  CalendarX,
  TrendingDown,
  Users,
  ShieldAlert,
  LayoutDashboard,
} from "lucide-react";
import { BLOG as C } from "./palette";

const intents = [
  {
    icon: CalendarX,
    title: "Réduire le no-show",
    body: "Des stratégies simples pour remplir votre salle et sécuriser vos réservations.",
  },
  {
    icon: TrendingDown,
    title: "Réduire le food cost",
    body: "Techniques, outils et bonnes pratiques pour augmenter vos marges.",
  },
  {
    icon: Users,
    title: "Maîtriser la masse salariale",
    body: "Planning, heures sup, rentabilité : reprenez le contrôle sur vos coûts RH.",
  },
  {
    icon: ShieldAlert,
    title: "Éviter les erreurs et les sanctions",
    body: "Réglementation, HACCP, contrôles : soyez toujours en conformité.",
  },
  {
    icon: LayoutDashboard,
    title: "Piloter plusieurs établissements",
    body: "Consolidation, reporting, tableaux de bord : gérez votre groupe efficacement.",
  },
];

export function BlogSearchIntents() {
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1320px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 34px)",
            lineHeight: 1.1,
            fontWeight: 850,
            color: C.text,
            marginBottom: "28px",
          }}
        >
          Ce que les restaurateurs recherchent vraiment
        </h2>

        <div
          className="grid gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-5"
          style={{
            background: C.border,
            border: `1px solid ${C.border}`,
            borderRadius: "12px",
          }}
        >
          {intents.map((it) => (
            <div
              key={it.title}
              className="group flex flex-col"
              style={{ background: C.card, padding: "24px" }}
            >
              <span
                className="flex items-center justify-center rounded-xl"
                style={{
                  width: "44px",
                  height: "44px",
                  background: C.orangeSoft,
                  color: C.orange,
                  marginBottom: "16px",
                }}
                aria-hidden
              >
                <it.icon size={20} strokeWidth={1.85} />
              </span>
              <h3
                style={{
                  fontSize: "15.5px",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  color: C.text,
                  marginBottom: "10px",
                }}
              >
                {it.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: 1.55,
                  color: C.textSubtle,
                  marginBottom: "18px",
                }}
              >
                {it.body}
              </p>
              <Link
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-1.5 transition-transform hover:translate-x-0.5"
                style={{ fontSize: "13px", fontWeight: 800, color: C.orange }}
              >
                Voir les articles
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
