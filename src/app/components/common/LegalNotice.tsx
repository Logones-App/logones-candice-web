import { Info } from "lucide-react";
import { cn } from "../../lib/utils";

export function LegalNotice({
  children,
  tone = "dark",
  className,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <aside
      className={cn(
        "rounded-xl border p-4 text-[13px] leading-relaxed",
        tone === "dark"
          ? "border-border bg-bg-surface/60 text-text-muted"
          : "border-border-light bg-bg-light-alt text-text-dark-sec",
        className,
      )}
    >
      <div className="flex gap-3">
        <Info
          className={cn(
            "mt-0.5 h-4 w-4 shrink-0",
            tone === "dark" ? "text-text-secondary" : "text-text-dark-sec",
          )}
          aria-hidden
        />
        <div>{children}</div>
      </div>
    </aside>
  );
}
