import Link from "next/link";

type MiniSite = {
  slug: string;
  name: string;
  description: string;
  stack: string;
  status: "live" | "soon";
};

const miniSites: MiniSite[] = [
  {
    slug: "logones",
    name: "Logones — Premium dark",
    description:
      "Site B2B SaaS pour restaurateurs lyonnais. Ambiance \"grand restaurant de la cuisine numérique\" — dark theme ardoise, or, typographies Fraunces + DM Sans, 5 modules colorés.",
    stack: "shadcn/ui · Tailwind v4 · Fraunces + DM Sans · react-hook-form + zod",
    status: "live",
  },
];

export default function RootHome() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">
          Sandbox
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
          Mini-sites de test
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Différents designs et stacks UX/UI explorés en parallèle. Chaque
          mini-site est isolé et possède ses propres composants réutilisables.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {miniSites.map((site) => (
          <li key={site.slug}>
            <Link
              href={`/${site.slug}`}
              className="group block rounded-xl border border-neutral-200 bg-white p-6 transition hover:border-neutral-900 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-neutral-900">
                  {site.name}
                </h2>
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                    site.status === "live"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-neutral-100 text-neutral-500"
                  }`}
                >
                  {site.status === "live" ? "En ligne" : "Bientôt"}
                </span>
              </div>
              <p className="mt-2 text-sm text-neutral-600">{site.description}</p>
              <p className="mt-4 font-mono text-xs text-neutral-500">
                {site.stack}
              </p>
              <p className="mt-4 text-sm font-medium text-neutral-900 group-hover:underline">
                Ouvrir →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
