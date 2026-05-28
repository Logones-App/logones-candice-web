import Image from "next/image";
import {
  Lightning,
  ColumnsPlusRight,
  ReceiptX,
  Calculator,
  SquaresFour,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: Lightning,
    title: "Encaissement ultra rapide",
    body: "Interface intuitive et tactile pour aller à l'essentiel, même en plein rush.",
  },
  {
    icon: ColumnsPlusRight,
    title: "Division réelle des produits",
    body: "Chaque client paie exactement ce qu'il a consommé. Simple et équitable.",
  },
  {
    icon: ReceiptX,
    title: "Notes et tickets personnalisés",
    body: "Ajoutez vos mentions légales, logos et messages clients.",
  },
  {
    icon: Calculator,
    title: "Ventilation TVA par client",
    body: "Calcul automatique et affichage détaillé de la TVA correspondant à chaque client.",
  },
  {
    icon: SquaresFour,
    title: "Gestion des tables simplifiée",
    body: "Transférez, fusionnez, divisez ou déplacez vos tables en un clic.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé et certifié",
    body: "Conforme à la réglementation et en cours de certification NF525.",
  },
];

export function CaisseFeatureHero() {
  return (
    <section className="relative isolate overflow-hidden pt-[120px] pb-20 sm:pt-[140px] sm:pb-28">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/Gemini_Generated_Image_ncqoypncqoypncqo.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Diagonal overlay: dense left, lighter right (reveal POS screen on the right) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(15,14,13,0.94) 0%, rgba(15,42,77,0.90) 35%, rgba(15,42,77,0.50) 60%, rgba(15,42,77,0.30) 100%)",
        }}
        aria-hidden
      />
      {/* Bottom fade into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-32"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #02060B 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="max-w-[660px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caisse-accent">
            Module Encaissement
          </p>

          <h1
            className="mt-4 text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.02em] text-text-primary"
            style={{
              fontWeight: 850,
              textShadow: "0 2px 30px rgba(0,0,0,0.6)",
            }}
          >
            Un encaissement
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--caisse-accent), var(--caisse-bright))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              rapide, fluide
            </span>{" "}
            et fiable.
          </h1>

          <p
            className="mt-6 max-w-[560px] text-[clamp(16px,1.5vw,19px)] leading-[1.65] text-text-primary/90"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
          >
            Pensé pour le rythme des restaurants, notre caisse vous fait gagner
            un temps précieux à chaque service.
          </p>

          {/* 6 Features in 2 cols */}
          <ul id="features" className="mt-10 grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-caisse-bright/30 bg-caisse-deep/60 backdrop-blur-md">
                  <f.icon
                    size={22}
                    weight="duotone"
                    className="text-caisse-accent"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3
                    className="text-[15px] font-semibold leading-tight text-text-primary"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="mt-1 text-[13px] leading-[1.55] text-text-primary/80"
                    style={{ textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
                  >
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
