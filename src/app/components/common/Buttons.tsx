import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

type Common = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  className?: string;
  size?: "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-all duration-150 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-gold-light";

const sizeMap = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

function renderInner(
  children: React.ReactNode,
  showArrow?: boolean,
) {
  return (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" aria-hidden />}
    </>
  );
}

export function ButtonPrimary({
  children,
  href,
  type = "button",
  className,
  size = "md",
  onClick,
  disabled,
  showArrow,
}: Common) {
  const classes = cn(
    base,
    sizeMap[size],
    "bg-gold-light text-bg-base hover:-translate-y-[2px] hover:brightness-110 hover:shadow-glow-gold active:translate-y-0",
    className,
  );
  if (href)
    return (
      <Link href={href} className={classes}>
        {renderInner(children, showArrow)}
      </Link>
    );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {renderInner(children, showArrow)}
    </button>
  );
}

export function ButtonSecondary({
  children,
  href,
  type = "button",
  className,
  size = "md",
  onClick,
  disabled,
  showArrow,
}: Common) {
  const classes = cn(
    base,
    sizeMap[size],
    "border border-border bg-transparent text-text-primary hover:border-gold-light hover:text-gold-light",
    className,
  );
  if (href)
    return (
      <Link href={href} className={classes}>
        {renderInner(children, showArrow)}
      </Link>
    );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {renderInner(children, showArrow)}
    </button>
  );
}

export function ButtonGhostDark({
  children,
  href,
  className,
  size = "md",
  onClick,
  showArrow,
}: Common) {
  const classes = cn(
    base,
    sizeMap[size],
    "border border-[color:var(--color-border-light)] bg-transparent text-text-dark hover:bg-bg-light-alt",
    className,
  );
  if (href)
    return (
      <Link href={href} className={classes}>
        {renderInner(children, showArrow)}
      </Link>
    );
  return (
    <button type="button" onClick={onClick} className={classes}>
      {renderInner(children, showArrow)}
    </button>
  );
}
