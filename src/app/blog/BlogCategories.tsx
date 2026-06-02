import Link from "next/link";
import {
  TrendingUp,
  ChefHat,
  CalendarDays,
  ShieldCheck,
  CalendarCheck,
  Megaphone,
  Scale,
  Monitor,
  Building2,
} from "lucide-react";
import { BLOG as C } from "./palette";
import { getThemesWithArticles } from "./lib/articles";

const categories = [
  { icon: TrendingUp, label: "Rentabilité", theme: "rentabilite" },
  { icon: ChefHat, label: "Food cost", theme: "food-cost" },
  { icon: CalendarDays, label: "RH & planning", theme: "rh-planning" },
  { icon: ShieldCheck, label: "HACCP", theme: "haccp" },
  { icon: CalendarCheck, label: "Réservation", theme: "reservation" },
  { icon: Megaphone, label: "Marketing restaurant", theme: "marketing-restaurant" },
  { icon: Scale, label: "Réglementation CHR", theme: "reglementation-chr" },
  { icon: Monitor, label: "Logiciel de caisse", theme: "logiciel-caisse" },
  { icon: Building2, label: "Pilotage multi-sites", theme: "pilotage-multi-sites" },
];

export function BlogCategories() {
  const themesWithArticles = getThemesWithArticles();
  return (
    <section
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 6vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 34px)",
            lineHeight: 1.1,
            fontWeight: 850,
            color: C.text,
            marginBottom: "28px",
          }}
        >
          Explorez par thème
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
          {categories.map((cat) => {
            const hasArticles = themesWithArticles.has(cat.theme);
            const cardClass =
              "group flex flex-col items-center gap-2.5 rounded-lg border border-[rgba(7,17,31,0.10)] text-center transition-colors hover:border-[#FF6A1A]";
            const cardStyle = {
              background: C.card,
              borderRadius: "8px",
              padding: "18px 10px",
              cursor: "pointer",
            } as const;
            const inner = (
              <>
                <span
                  className="flex items-center justify-center rounded-lg transition-colors"
                  style={{
                    width: "40px",
                    height: "40px",
                    background: C.orangeSoft,
                    color: C.orange,
                  }}
                  aria-hidden
                >
                  <cat.icon size={19} strokeWidth={1.8} />
                </span>
                <span
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 600,
                    color: C.text,
                    lineHeight: 1.25,
                  }}
                >
                  {cat.label}
                </span>
              </>
            );

            return hasArticles ? (
              <Link
                key={cat.label}
                href={`/blog/${cat.theme}`}
                className={cardClass}
                style={cardStyle}
              >
                {inner}
              </Link>
            ) : (
              <button
                key={cat.label}
                type="button"
                className={cardClass}
                style={cardStyle}
                aria-disabled="true"
              >
                {inner}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
