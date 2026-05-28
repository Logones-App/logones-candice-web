import { ScanLine, FileText, PackageCheck, Check, Camera } from "lucide-react";
import { STOCKS as C } from "./palette";

export function StocksScanBL() {
  return (
    <section
      id="features"
      style={{
        backgroundColor: C.bg,
        paddingBlock: "clamp(48px, 5vw, 72px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1480px" }}>
        <div className="text-center" style={{ marginBottom: "44px" }}>
          <p
            style={{
              color: C.yellow,
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Scan des bons de livraison
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              lineHeight: 1.1,
              fontWeight: 850,
              color: C.text,
              maxWidth: "820px",
              margin: "0 auto 14px",
            }}
          >
            Un BL fournisseur,{" "}
            <span style={{ color: C.yellow }}>trois secondes</span>, vos stocks
            à jour.
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: C.textSubtle,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Photographiez vos bons de livraison à la réception. Logones extrait
            les lignes, les rattache à vos produits et met à jour vos stocks
            sans intervention manuelle.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          <Step
            number="01"
            icon={Camera}
            title="Photo du BL"
            body="À la réception, prenez en photo le bon de livraison avec votre téléphone ou votre tablette."
          />
          <Step
            number="02"
            icon={ScanLine}
            title="Lecture automatique"
            body="L'OCR repère le fournisseur, la date, les lignes produits, quantités et prix unitaires."
            visual={<ScanVisual />}
          />
          <Step
            number="03"
            icon={FileText}
            title="BL importé"
            body="Chaque ligne est rattachée à un produit de votre catalogue. Vous validez les rares écarts."
            visual={<BLVisual />}
          />
          <Step
            number="04"
            icon={PackageCheck}
            title="Stock à jour"
            body="Les quantités sont ajoutées en stock et le coût matière pondéré est recalculé."
            visual={<StockVisual />}
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  icon: Icon,
  title,
  body,
  visual,
}: {
  number: string;
  icon: typeof ScanLine;
  title: string;
  body: string;
  visual?: React.ReactNode;
}) {
  return (
    <article
      className="relative overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(180deg, ${C.card}, rgba(3,7,12,0.98))`,
        border: `1px solid ${C.border}`,
        borderRadius: "16px",
        padding: "22px",
        minHeight: "300px",
      }}
    >
      <div className="flex items-center gap-3" style={{ marginBottom: "14px" }}>
        <span
          style={{
            fontSize: "11px",
            fontWeight: 900,
            color: C.yellow,
            letterSpacing: "0.14em",
          }}
        >
          {number}
        </span>
        <div
          className="flex items-center justify-center rounded-md"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: C.yellowSofter,
            border: `1px solid ${C.border}`,
            color: C.yellow,
          }}
          aria-hidden
        >
          <Icon size={16} strokeWidth={1.85} />
        </div>
      </div>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 850,
          color: C.text,
          marginBottom: "8px",
          lineHeight: 1.25,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "13.5px",
          lineHeight: 1.55,
          color: C.textSubtle,
          marginBottom: visual ? "16px" : 0,
        }}
      >
        {body}
      </p>
      {visual && <div className="mt-auto">{visual}</div>}
    </article>
  );
}

function ScanVisual() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "rgba(2,6,11,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "10px",
        padding: "10px",
        height: "100px",
      }}
    >
      <div className="space-y-1.5">
        {[80, 60, 70, 50].map((w, i) => (
          <div
            key={i}
            className="rounded"
            style={{
              height: "6px",
              width: `${w}%`,
              background: "rgba(255,255,255,0.10)",
            }}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute left-0 right-0"
        style={{
          top: "50%",
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${C.yellow}, transparent)`,
          boxShadow: `0 0 14px ${C.yellow}`,
        }}
        aria-hidden
      />
    </div>
  );
}

function BLVisual() {
  const lines = [
    { label: "Pommes de terre", qty: "10 kg", price: "1,90 €" },
    { label: "Bœuf charolais", qty: "4 kg", price: "18,40 €" },
    { label: "Beurre AOP", qty: "2 kg", price: "11,20 €" },
  ];
  return (
    <div
      style={{
        background: "rgba(2,6,11,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "10px",
        padding: "10px",
        fontSize: "10px",
      }}
    >
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "6px" }}
      >
        <span style={{ color: C.yellow, fontWeight: 800 }}>BL #2487</span>
        <span style={{ color: C.textMuted }}>Métro · 27 mai</span>
      </div>
      <ul className="space-y-1">
        {lines.map((l) => (
          <li
            key={l.label}
            className="flex items-center justify-between"
            style={{
              borderBottom: `1px solid rgba(255,255,255,0.04)`,
              paddingBottom: "3px",
            }}
          >
            <span style={{ color: C.text, fontWeight: 600 }}>{l.label}</span>
            <span
              style={{
                color: C.textMuted,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {l.qty} · {l.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StockVisual() {
  const items = [
    { label: "Pommes de terre", before: 4, after: 14, unit: "kg" },
    { label: "Bœuf charolais", before: 2, after: 6, unit: "kg" },
  ];
  return (
    <div
      style={{
        background: "rgba(2,6,11,0.55)",
        border: `1px solid ${C.borderSoft}`,
        borderRadius: "10px",
        padding: "10px",
      }}
    >
      <p
        style={{
          fontSize: "9.5px",
          fontWeight: 700,
          color: C.textMuted,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "6px",
        }}
      >
        Mise à jour
      </p>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li
            key={it.label}
            className="flex items-center justify-between"
            style={{ fontSize: "10.5px" }}
          >
            <span style={{ color: C.text, fontWeight: 600 }}>{it.label}</span>
            <span
              className="inline-flex items-center gap-1"
              style={{ color: C.yellow, fontWeight: 800 }}
            >
              <Check size={10} strokeWidth={3} />
              <span style={{ color: C.textMuted, fontWeight: 600 }}>
                {it.before}
              </span>
              <span style={{ color: C.yellow }}>→</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {it.after} {it.unit}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
