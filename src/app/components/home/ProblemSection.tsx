import { FileSpreadsheet, AlarmClock, EyeOff } from "lucide-react";
import { Section, SectionLabel, SectionTitle } from "../common/Section";
import { PhotoSlot } from "../common/PhotoSlot";

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Quatre outils. Aucune connexion.",
    body: "Caisse, HACCP, RH, réservations — autant de logiciels qui ne se parlent pas. Vous ressaisissez les mêmes chiffres trois fois par jour, à 23 h après le service.",
  },
  {
    icon: EyeOff,
    title: "Vous pilotez à l'aveugle.",
    body: "Votre food cost, vous le découvrez en fin de mois quand l'expert-comptable arrive. Votre masse salariale, en juillet. Pendant ce temps, la marge fuit.",
  },
  {
    icon: AlarmClock,
    title: "Le stress finit par déborder.",
    body: "Excel, papiers, captures d'écran, post-it sur la porte du frigo. Vos équipes perdent la main, vous perdez le sommeil — et personne ne voit ce qui pourrait vous sauver demain.",
  },
];

export function ProblemSection() {
  return (
    <Section tone="dark">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <PhotoSlot
            src="/images/Gemini_Generated_Image_3pri453pri453pri (1).png"
            alt="Restaurateur seul après service, papiers et tableur Excel sur la table, expression concentrée et fatiguée."
            ratio="4/3"
            rounded="3xl"
            className="shadow-[0_30px_90px_-30px_rgba(0,0,0,0.7)]"
          />
        </div>

        <div className="order-1 lg:order-2">
          <SectionLabel color="gold">La réalité du métier</SectionLabel>
          <SectionTitle>
            255 € par mois pour quatre outils qui ne se parlent pas.
          </SectionTitle>
          <p className="mt-5 max-w-[560px] text-[clamp(16px,1.5vw,18px)] leading-[1.7] text-text-secondary">
            C&apos;est la moyenne d&apos;un restaurant indépendant aujourd&apos;hui.
            Quatre contrats, quatre SAV, quatre mots de passe. Et zéro vision
            d&apos;ensemble sur ce qui se passe vraiment dans votre salle.
          </p>

          <ul className="mt-10 space-y-6">
            {pains.map((pain) => (
              <li
                key={pain.title}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gold-light/20 bg-gold-pale">
                  <pain.icon
                    className="h-5 w-5 text-gold-light"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-text-primary">
                    {pain.title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.65] text-text-secondary">
                    {pain.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
