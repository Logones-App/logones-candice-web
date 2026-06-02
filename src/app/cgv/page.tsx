import type { Metadata } from "next";
import { LegalPageShell } from "../components/common/LegalPageShell";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente applicables aux abonnements Logones.",
};

const sections = [
  "Objet et champ d'application",
  "Description des services (3 tiers et prix TTC)",
  "Prix et modalités de paiement (mensuel, TVA en vigueur)",
  "Durée du contrat (2 ans) et conditions de renouvellement",
  "Conditions de résiliation (préavis, format, portabilité des données)",
  "Responsabilité et limitations",
  "Données personnelles (RGPD)",
  "Loi applicable et juridiction compétente (Lyon, droit français)",
  "Médiation des litiges (art. L612-1 Code de la consommation)",
];

export default function CgvPage() {
  return (
    <LegalPageShell
      title="Conditions générales de vente"
      lastUpdated="à compléter"
    >
      <p>
        Les présentes Conditions Générales de Vente (CGV) régissent la
        souscription aux services Logones. Elles doivent être validées par un
        avocat spécialisé en droit des contrats SaaS ou par le Cabinet Expeo
        avant tout usage commercial.
      </p>

      <h2>Sections à rédiger</h2>
      <ol className="list-decimal space-y-2 pl-5">
        {sections.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <h2>Portabilité des données — engagement</h2>
      <p>
        Quel que soit le motif de résiliation, vos données vous appartiennent et
        sont exportables au format standard sans frais, dans un délai
        raisonnable après la fin du contrat.
      </p>

      <p className="text-xs text-text-muted">
        Document à rédiger conformément aux articles L.441-1 et suivants du Code
        de commerce, applicables aux relations B2B.
      </p>
    </LegalPageShell>
  );
}
