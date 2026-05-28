import { Info, Quote as QuoteIcon } from "lucide-react";
import { BLOG as C } from "../palette";

/* Largeur de lecture confortable, partagée par tous les blocs de prose. */
const MEASURE = "720px";

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        maxWidth: MEASURE,
        fontSize: "20px",
        lineHeight: 1.6,
        fontWeight: 500,
        color: C.text,
        marginBottom: "28px",
      }}
    >
      {children}
    </p>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        maxWidth: MEASURE,
        fontSize: "clamp(24px, 3vw, 30px)",
        lineHeight: 1.2,
        fontWeight: 850,
        color: C.text,
        letterSpacing: "-0.01em",
        marginTop: "48px",
        marginBottom: "16px",
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        maxWidth: MEASURE,
        fontSize: "19px",
        lineHeight: 1.3,
        fontWeight: 800,
        color: C.text,
        marginTop: "32px",
        marginBottom: "12px",
      }}
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        maxWidth: MEASURE,
        fontSize: "16.5px",
        lineHeight: 1.75,
        color: C.textSubtle,
        marginBottom: "20px",
      }}
    >
      {children}
    </p>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong style={{ color: C.text, fontWeight: 700 }}>{children}</strong>;
}

export function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul
      style={{
        maxWidth: MEASURE,
        marginBottom: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {children}
    </ul>
  );
}

export function LI({ children }: { children: React.ReactNode }) {
  return (
    <li
      className="flex items-start gap-3"
      style={{ fontSize: "16px", lineHeight: 1.65, color: C.textSubtle }}
    >
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "999px",
          background: C.orange,
          marginTop: "11px",
          flexShrink: 0,
        }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        maxWidth: MEASURE,
        background: C.orangeSoft,
        border: `1px solid ${C.orangeBorder}`,
        borderRadius: "14px",
        padding: "22px 24px",
        marginBlock: "32px",
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="flex items-center justify-center rounded-lg"
          style={{
            width: "34px",
            height: "34px",
            background: C.orange,
            color: "#FFFFFF",
            flexShrink: 0,
          }}
          aria-hidden
        >
          <Info size={18} strokeWidth={2.2} />
        </span>
        <div>
          {title && (
            <p
              style={{
                fontSize: "15px",
                fontWeight: 800,
                color: C.text,
                marginBottom: "6px",
              }}
            >
              {title}
            </p>
          )}
          <div
            style={{
              fontSize: "15px",
              lineHeight: 1.65,
              color: C.text,
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        maxWidth: MEASURE,
        background: C.bgDark,
        borderRadius: "16px",
        padding: "28px 32px",
        marginBlock: "32px",
      }}
    >
      <p
        style={{
          fontSize: "clamp(40px, 6vw, 56px)",
          fontWeight: 850,
          color: C.orange,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          marginBottom: "10px",
        }}
      >
        {value}
      </p>
      <p style={{ fontSize: "15px", lineHeight: 1.55, color: C.textOnDarkSubtle }}>
        {label}
      </p>
    </div>
  );
}

export function Quote({
  children,
  cite,
}: {
  children: React.ReactNode;
  cite?: string;
}) {
  return (
    <figure
      style={{
        maxWidth: MEASURE,
        borderLeft: `3px solid ${C.orange}`,
        paddingLeft: "24px",
        marginBlock: "32px",
      }}
    >
      <QuoteIcon
        size={22}
        strokeWidth={2}
        style={{ color: C.orange, marginBottom: "10px" }}
        aria-hidden
      />
      <blockquote
        style={{
          fontSize: "20px",
          lineHeight: 1.5,
          fontWeight: 600,
          fontStyle: "italic",
          color: C.text,
        }}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption
          style={{ fontSize: "13.5px", color: C.textMuted, marginTop: "10px" }}
        >
          — {cite}
        </figcaption>
      )}
    </figure>
  );
}
