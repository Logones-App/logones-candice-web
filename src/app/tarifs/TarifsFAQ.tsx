import { TARIFS as C } from "./palette";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const faq = [
  {
    q: "Le matériel est-il inclus ?",
    a: "Non. Les tarifs affichés concernent uniquement le logiciel. Le matériel (TPE, imprimantes, tablettes, tiroirs-caisses, bornes) est proposé séparément, à la vente ou à la location selon vos besoins.",
  },
  {
    q: "Puis-je utiliser mon matériel actuel ?",
    a: "Dans la plupart des cas, oui. Logones est compatible avec une large gamme de tablettes, imprimantes thermiques et tiroirs-caisses standards. Nous validons votre matériel actuel lors de la démo.",
  },
  {
    q: "Pourquoi vos tarifs sont-ils si clairs ?",
    a: "Parce que la plupart des éditeurs CHR jouent sur l'opacité : pourcentages, commissions, modules optionnels, prix variables selon la taille. Nous préférons annoncer un prix unique par établissement et le tenir.",
  },
  {
    q: "Pourquoi Logones ne facture-t-il pas par salarié ?",
    a: "Embaucher ne doit pas augmenter votre facture logicielle. Vos plannings, votre HACCP, votre caisse fonctionnent sans surcoût quand votre équipe grandit. Le prix est lié à l'établissement, pas aux gens.",
  },
  {
    q: "Puis-je résilier avant la fin du contrat ?",
    a: "L'engagement de 24 mois est notre standard. La résiliation reste possible avec préavis dans les conditions définies par nos CGV. Vos données vous appartiennent et sont exportables sans frais.",
  },
  {
    q: "Le logiciel est-il compatible avec mon TPE actuel ?",
    a: "Nous prenons en charge les principaux terminaux de paiement du marché. La compatibilité de votre TPE est validée lors de la démo, en fonction de votre acquéreur monétique.",
  },
  {
    q: "Y a-t-il une commission sur les réservations ?",
    a: "Non. Le module Réservation est inclus dans Premium sans commission ni frais à la couverture. Contrairement aux plateformes externes, vos réservations ne prélèvent pas votre chiffre d'affaires.",
  },
  {
    q: "À qui s'adressent vos offres ?",
    a: "Aux restaurateurs indépendants et aux petits groupes (multi-sites) qui veulent un outil unique, sans empiler les abonnements. Nos clients sont des bouchons, bistrots, brasseries et restaurants de service midi+soir.",
  },
];

export function TarifsFAQ() {
  return (
    <section
      style={{
        backgroundColor: C.bgDark,
        paddingBlock: "clamp(56px, 6vw, 80px)",
        paddingInline: "clamp(20px, 3vw, 40px)",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p
              style={{
                color: C.orange,
                fontSize: "12px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              Questions fréquentes
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3.6vw, 40px)",
                lineHeight: 1.1,
                fontWeight: 850,
                color: C.textOnDark,
                marginBottom: "16px",
              }}
            >
              Tout ce que vous nous demandez{" "}
              <span style={{ color: C.orange }}>régulièrement.</span>
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.6,
                color: C.textOnDarkSubtle,
                maxWidth: "420px",
              }}
            >
              Une question qui n&apos;est pas dans la liste ? Nous y répondons
              avec plaisir lors de la démo, sans engagement.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b"
                style={{ borderColor: C.borderOnDarkSoft }}
              >
                <AccordionTrigger
                  className="py-5 text-left hover:no-underline"
                  style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: C.textOnDark,
                  }}
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.65,
                    color: C.textOnDarkSubtle,
                  }}
                >
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
