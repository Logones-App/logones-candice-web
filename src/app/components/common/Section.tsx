import { cn } from "../../lib/utils";

type SectionProps = {
  id?: string;
  tone?: "dark" | "surface" | "light" | "haccp-gradient";
  size?: "default" | "compact";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const toneClasses: Record<NonNullable<SectionProps["tone"]>, string> = {
  dark: "bg-bg-base text-text-primary",
  surface: "bg-bg-surface text-text-primary",
  light: "pierre-claire-bg text-text-dark",
  "haccp-gradient":
    "bg-[linear-gradient(135deg,var(--color-bg-surface)_0%,var(--haccp-deep)_100%)] text-text-primary",
};

export function Section({
  id,
  tone = "dark",
  size = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        size === "default"
          ? "py-[clamp(64px,8vw,120px)]"
          : "py-[clamp(48px,6vw,80px)]",
        toneClasses[tone],
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({
  children,
  tone = "dark",
  color = "gold",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  color?: "gold" | "caisse" | "haccp" | "rh" | "resa" | "stocks";
}) {
  const colorClasses = {
    gold: "text-gold-light",
    caisse: "text-caisse-accent",
    haccp: "text-haccp-accent",
    rh: "text-rh-accent",
    resa: "text-resa-accent",
    stocks: "text-stocks-accent",
  };
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.08em]",
        tone === "light" ? "" : "",
        colorClasses[color],
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  tone = "dark",
  align = "left",
  display = "fraunces",
  size = "h2",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  display?: "fraunces" | "sans";
  size?: "h2" | "h3";
}) {
  return (
    <h2
      className={cn(
        "mt-3 text-balance font-normal leading-[1.15] tracking-[-0.02em]",
        size === "h2"
          ? "text-[clamp(28px,3.5vw,48px)]"
          : "text-[clamp(20px,2.5vw,32px)] font-semibold",
        display === "fraunces" && "font-sans",
        align === "center" && "text-center",
        tone === "light" ? "text-text-dark" : "text-text-primary",
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  tone = "dark",
  align = "left",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-5 max-w-[640px] text-[clamp(16px,1.5vw,18px)] leading-[1.65]",
        tone === "light" ? "text-text-dark-sec" : "text-text-secondary",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {children}
    </p>
  );
}
