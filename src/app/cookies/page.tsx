import type { Metadata } from "next";
import { LegalPageShell } from "../components/common/LegalPageShell";

export const metadata: Metadata = {
  title: "Politique cookies",
  description: "Liste des cookies utilisés sur logones.fr et gestion du consentement.",
};

const cookies = [
  {
    name: "[à compléter — session]",
    purpose: "Maintien de la session utilisateur",
    duration: "Session",
    category: "Strictement nécessaire",
  },
  {
    name: "[à compléter — analytics]",
    purpose: "Mesure d'audience anonymisée (Matomo / Plausible)",
    duration: "13 mois maximum",
    category: "Analytique — consentement requis",
  },
];

export default function CookiesPage() {
  return (
    <LegalPageShell title="Politique cookies" lastUpdated="à compléter">
      <p>
        Le site logones.fr utilise des cookies. Vous pouvez à tout moment
        retirer votre consentement via la bannière en bas de page. Cette page
        sera complétée par la liste exhaustive des cookies effectivement
        déposés une fois la solution d&apos;analytique finalement choisie.
      </p>

      <h2>Cookies utilisés</h2>
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-left text-xs">
          <thead className="bg-bg-surface">
            <tr>
              <th className="p-3 font-semibold text-text-primary">Cookie</th>
              <th className="p-3 font-semibold text-text-primary">Finalité</th>
              <th className="p-3 font-semibold text-text-primary">Durée</th>
              <th className="p-3 font-semibold text-text-primary">Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {cookies.map((c) => (
              <tr key={c.name} className="border-t border-border">
                <td className="p-3 font-mono text-text-secondary">{c.name}</td>
                <td className="p-3 text-text-secondary">{c.purpose}</td>
                <td className="p-3 text-text-secondary">{c.duration}</td>
                <td className="p-3 text-text-secondary">{c.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-text-muted">
        Conforme à la Délibération CNIL n°2020-091 du 17 septembre 2020. Les
        boutons « Accepter », « Refuser » et « Personnaliser » de la bannière
        ont une proéminence visuelle identique (pas de dark pattern).
      </p>
    </LegalPageShell>
  );
}
