/**
 * Contenu de la proposition (routes /v2).
 *
 * Ce fichier n'est lu par aucune page du site actuel. Il rassemble ce qui
 * n'existe nulle part aujourd'hui : les douleurs client, les partis pris,
 * les questions fréquentes, le sixième module et la grille tarifaire revue.
 */

import { brand, tint } from "./tokens";

/* ------------------------------------------------------------------ */
/*  Sixième module — Pilotage                                          */
/* ------------------------------------------------------------------ */

/**
 * Cyan-turquoise, sixième couleur de module.
 *
 * Contrastes mesurés, pas supposés : l'accent donne 11,24:1 sur le fond nuit.
 * Le couple de bouton porte l'encre sombre — 11,17:1 et 8,31:1 — là où le
 * blanc tombait à 1,81:1. Même logique que HACCP et Stocks, dont les accents
 * sont eux aussi trop clairs pour du texte blanc.
 *
 * À reporter dans tokens.ts sous `modules.pilotage` le jour de la fusion.
 */
export const pilotageColor = {
  accent: "#22D3EE",
  deep: "#0E7490",
  light: "#67E8F9",
  buttonFrom: "#22D3EE",
  buttonTo: "#06B6D4",
  onButton: "#04070B",
  soft: tint("#22D3EE", 0.16),
  softer: tint("#22D3EE", 0.08),
  border: tint("#22D3EE", 0.18),
} as const;

/* ------------------------------------------------------------------ */
/*  Les huit douleurs client                                           */
/* ------------------------------------------------------------------ */

export type Douleur = {
  dit: string;
  reponse: string;
  module: string;
  couleur: string;
};

export const DOULEURS: Douleur[] = [
  {
    dit: "J'ai déjà trois logiciels qui ne se parlent pas",
    reponse:
      "C'est le problème que nous avons construit Logones pour régler. Les chiffres ne sont pas synchronisés entre des outils : ils sont dans la même base. Une vente met à jour le stock, qui alimente le coût matière, qui nourrit le compte de résultat.",
    module: "Toute la plateforme",
    couleur: brand.orange,
  },
  {
    dit: "Mon WiFi lâche en plein service",
    reponse:
      "L'application fonctionne sans réseau — ce n'est pas un mode dégradé, c'est le fonctionnement normal. Vous continuez d'encaisser, d'envoyer en cuisine et d'imprimer. Au retour d'Internet, tout se resynchronise seul et dans l'ordre.",
    module: "Le socle",
    couleur: brand.orange,
  },
  {
    dit: "Je passe mes dimanches sur des tableaux Excel",
    reponse:
      "Le stock se met à jour à la vente, les factures fournisseurs se lisent au scan, l'inventaire se fait en marchant. Le tableur disparaît, et il n'est pas remplacé par un autre tableur.",
    module: "Stocks",
    couleur: "var(--stocks-bright, #FFC400)",
  },
  {
    dit: "Je ne sais pas si je gagne de l'argent",
    reponse:
      "Compte de résultat mensuel, marge par plat, coût par couvert. Pas en fin d'exercice avec le comptable : le 1er du mois suivant, pendant qu'il reste onze mois pour corriger.",
    module: "Pilotage",
    couleur: pilotageColor.accent,
  },
  {
    dit: "J'ai peur du contrôle sanitaire",
    reponse:
      "Relevés horodatés et nominatifs, checklists signées au moment du geste, traçabilité des lots, documents à échéance. Tout se sort depuis la caisse sans rien préparer — parce que rien n'a été rempli à froid.",
    module: "HACCP",
    couleur: "var(--haccp-bright, #22C55E)",
  },
  {
    dit: "Je paie des commissions sur mes réservations",
    reponse:
      "Widget de réservation à coller sur votre site et vos réseaux, et un site vitrine référencé inclus. La réservation directe, sans intermédiaire et sans commission par couvert.",
    module: "Réservation & acquisition",
    couleur: "var(--resa-bright, #D14343)",
  },
  {
    dit: "Je perds des tables à cause des no-shows",
    reponse:
      "Rappels et reconfirmations automatiques avant le service, empreinte bancaire paramétrable, et une liste d'attente qui relance dès qu'une table se libère. Un désistement à 19 h n'est plus un couvert perdu.",
    module: "Réservation & acquisition",
    couleur: "var(--resa-bright, #D14343)",
  },
  {
    dit: "Je ne sais pas combien de personnel mettre",
    reponse:
      "Coût du personnel rapporté au chiffre d'affaires et au nombre de couverts, heure par heure. Vous voyez le creux du mardi et le coup de feu du samedi, et vous construisez le planning en face.",
    module: "RH",
    couleur: "var(--rh-bright, #A36BFF)",
  },
];

/* ------------------------------------------------------------------ */
/*  Les six forces                                                     */
/* ------------------------------------------------------------------ */

export const FORCES: { titre: string; texte: string }[] = [
  {
    titre: "Une seule base de données",
    texte:
      "Pas de passerelle, pas d'export, pas de synchronisation nocturne qui échoue. Une vente écrite une fois est lue partout : en stock, en marge, en compte de résultat. C'est ce qui rend le pilotage possible.",
  },
  {
    titre: "Pensé pour fonctionner sans réseau",
    texte:
      "Le hors-ligne n'est pas un filet de sécurité ajouté après coup. L'application travaille en local et se synchronise quand elle peut. Une coupure de box ne change rien à votre service.",
  },
  {
    titre: "Tout est natif, rien n'est sous-traité",
    texte:
      "HACCP, plannings, stocks, réservation, site vitrine : tout est développé et maintenu par nous. Un seul support, une seule équipe, personne à qui vous renvoyer quand ça coince.",
  },
  {
    titre: "Vos données restent en France",
    texte:
      "Hébergement français, RGPD, export dans des formats ouverts à tout moment. Si vous partez un jour, vous partez avec vos données.",
  },
  {
    titre: "Écrit par des gens qui ont fait le service",
    texte:
      "Les fondateurs sont restaurateurs. Cela s'entend dans les détails : le bouton qu'on trouve les mains pleines, l'écran lisible sous une lampe chaude, la clôture qui ne demande rien à 1 h du matin.",
  },
  {
    titre: "Un prix qui ne bouge pas avec vous",
    texte:
      "Pas de facturation au salarié, pas de commission au couvert, pas de palier à franchir pour recevoir une mise à jour. Vous embauchez, vous remplissez votre salle : votre facture reste la même.",
  },
];

/* ------------------------------------------------------------------ */
/*  Parti pris et questions fréquentes, par module                     */
/* ------------------------------------------------------------------ */

export type ModuleExtra = {
  partiPris: { titre: string; texte: string };
  faq: { q: string; r: string }[];
};

export const MODULE_EXTRAS: Record<string, ModuleExtra> = {
  caisse: {
    partiPris: {
      titre: "La conformité n'est pas un module à part",
      texte:
        "Clôtures, journal des événements, archivage et export comptable sont dans la caisse, pas dans une option à activer. Le jour d'un contrôle, tout est déjà là — vous n'avez rien préparé, parce qu'il n'y avait rien à préparer.",
    },
    faq: [
      {
        q: "La caisse fonctionne-t-elle vraiment sans Internet ?",
        r: "Oui, et ce n'est pas un mode dégradé. L'application travaille en local par conception : encaissement, envoi en cuisine, impression et clôture continuent. Les appareils se coordonnent sur votre réseau, sans passer par Internet. Au retour du réseau, tout remonte seul et dans l'ordre.",
      },
      {
        q: "Faut-il un terminal de paiement séparé ?",
        r: "Non. Le paiement carte se fait depuis la caisse, la lecture s'effectuant dans l'application bancaire certifiée PCI-DSS embarquée sur le terminal. Le montant n'est jamais retapé. Si vous tenez à votre terminal actuel, un mode « carte via terminal externe » reste disponible.",
      },
      {
        q: "Mon comptable pourra-t-il récupérer mes données ?",
        r: "Oui. L'export comptable est produit à chaque clôture, dans un format que votre expert-comptable importe directement. Il n'y a pas de reprise à faire en fin d'exercice.",
      },
      {
        q: "Combien de postes puis-je connecter ?",
        r: "Autant que nécessaire. Caisses, terminaux mobiles, écrans de cuisine et tablettes se coordonnent en local, sans serveur à installer et sans changer d'offre.",
      },
    ],
  },
  stocks: {
    partiPris: {
      titre: "Le stock bouge à la vente, pas à l'inventaire",
      texte:
        "Chaque plat vendu décrémente ses ingrédients au moment où il est encaissé. Votre stock théorique est juste en permanence, et l'inventaire physique ne sert plus qu'à mesurer l'écart — au lieu de tout reconstruire un dimanche.",
    },
    faq: [
      {
        q: "Comment fonctionne la lecture des bons de livraison ?",
        r: "Vous photographiez le bon. Les lignes, quantités et prix sont extraits puis rapprochés de votre commande. Vous validez les écarts éventuels, et le stock est mis à jour avec les lots et les DLC.",
      },
      {
        q: "Dois-je saisir toutes mes fiches techniques ?",
        r: "Nous reprenons votre carte à la mise en service. Les fiches se construisent ensuite au fil de l'eau, et le coût matière se calcule dès qu'une fiche est complète.",
      },
      {
        q: "Et si je vends au poids ou en vrac ?",
        r: "Les unités sont libres : pièce, kilo, litre, portion. Une recette peut mélanger les unités sans conversion manuelle.",
      },
      {
        q: "L'inventaire physique reste-t-il nécessaire ?",
        r: "Il reste utile, mais il change de rôle. Comme le stock théorique est tenu à jour à la vente, l'inventaire sert à mesurer l'écart — donc à repérer les pertes, la casse ou les erreurs de portionnage.",
      },
    ],
  },
  haccp: {
    partiPris: {
      titre: "Prouvable le jour même, pas reconstitué après",
      texte:
        "Chaque relevé porte l'heure, la personne et l'appareil. Ce n'est pas un registre qu'on remplit à froid le vendredi : c'est une trace qui se crée au moment du geste, et qu'on ne peut pas antidater. C'est toute la différence entre un classeur et une preuve.",
    },
    faq: [
      {
        q: "Faut-il acheter des sondes connectées ?",
        r: "Ce n'est pas obligatoire. Les relevés peuvent être saisis depuis le terminal, avec horodatage et signature. Les sondes automatisent les enceintes froides et déclenchent une alerte en cas de dépassement — c'est un confort, pas un prérequis.",
      },
      {
        q: "Que contient le dossier exporté ?",
        r: "Relevés de température sur la période, checklists signées, traçabilité des lots, plan de maîtrise sanitaire et documents à échéance. Le tout daté, nominatif, en un fichier.",
      },
      {
        q: "Peut-on antidater un relevé ?",
        r: "Non, et c'est volontaire. L'horodatage est celui du geste. Un relevé oublié reste marqué comme oublié — c'est ce qui fait la valeur de la preuve.",
      },
      {
        q: "Comment fonctionne la veille réglementaire ?",
        r: "Quand un texte modifie une obligation, le plan de maîtrise sanitaire est mis à jour et vous êtes prévenu. Vous n'avez pas à surveiller le Journal officiel ni à attendre le passage du vétérinaire officiel.",
      },
    ],
  },
  rh: {
    partiPris: {
      titre: "Prix fixe, quel que soit votre effectif",
      texte:
        "Que vous soyez cinq ou trente-cinq, le module coûte la même chose. Vous n'êtes pas pénalisé quand vous embauchez, un extra sur un week-end ne change pas votre facture, et vous n'avez pas à arbitrer entre bien staffer et payer moins cher votre logiciel.",
    },
    faq: [
      {
        q: "Le pointage remplace-t-il une badgeuse ?",
        r: "Oui. Chaque employé pointe sur la caisse avec son code PIN, à l'arrivée et au départ. Les heures réelles sont horodatées et comparées aux heures prévues au planning.",
      },
      {
        q: "Le module fait-il la paie ?",
        r: "Non, et nous le disons franchement. Il produit la pré-paie : heures travaillées, absences, majorations, éléments variables. Ce fichier s'exporte vers votre gestionnaire de paie, qui édite les bulletins.",
      },
      {
        q: "Le tarif change-t-il selon le nombre de salariés ?",
        r: "Non. C'est un forfait par établissement. Un extra, un saisonnier ou une équipe qui double en été ne modifient pas votre facture.",
      },
      {
        q: "Les employés ont-ils accès à leurs données ?",
        r: "Oui, via l'application employé : planning, heures pointées, congés posés et documents. Chacun ne voit que les siennes.",
      },
    ],
  },
  reservation: {
    partiPris: {
      titre: "Votre carte en ligne ne peut pas être fausse",
      texte:
        "Elle est générée depuis la caisse. Quand vous changez un prix ou retirez un plat du jour, le site suit dans la seconde. Il n'y a pas de deuxième endroit où le mettre à jour — donc pas d'endroit où l'oublier.",
    },
    faq: [
      {
        q: "Faut-il que j'aie déjà un site ?",
        r: "Non. Le site vitrine est inclus et référencé. Si vous en avez déjà un, le widget de réservation s'y colle en une ligne, et la carte peut s'y afficher en se mettant à jour depuis la caisse.",
      },
      {
        q: "Y a-t-il une commission par couvert ?",
        r: "Aucune. La réservation est directe, entre votre client et vous. Seule l'empreinte bancaire réellement encaissée supporte une commission de 5 %, via Stripe — c'est-à-dire uniquement le jour où elle vous a évité une perte.",
      },
      {
        q: "Comment les no-shows sont-ils traités ?",
        r: "Par des rappels et des demandes de reconfirmation avant le service, par une empreinte bancaire paramétrable selon vos règles, et par une liste d'attente qui relance dès qu'une table se libère.",
      },
      {
        q: "La commande à table par QR nécessite-t-elle une application ?",
        r: "Non. Le client scanne, la carte s'ouvre dans son navigateur, il commande et peut payer. Rien à installer.",
      },
    ],
  },
  pilotage: {
    partiPris: {
      titre: "Il ne calcule pas, il assemble",
      texte:
        "Les ventes viennent de la caisse, le coût matière des stocks, la masse salariale des plannings. Rien n'est saisi une deuxième fois, donc rien ne peut diverger. C'est ce que permet une base unique — et rien d'autre ne le permet.",
    },
    faq: [
      {
        q: "D'où viennent les chiffres du compte de résultat ?",
        r: "Des autres modules. Les ventes de la caisse, le coût matière des stocks, la masse salariale des plannings. Vous ne saisissez que vos charges fixes, une fois : loyer, assurances, abonnements.",
      },
      {
        q: "Faut-il les modules Stocks et RH ?",
        r: "Le module fonctionne seul, mais il donne alors le chiffre d'affaires et les charges saisies. Le coût matière automatique demande Stocks, la masse salariale automatique demande RH. C'est pourquoi ils sont réunis dans le même pack.",
      },
      {
        q: "Cela remplace-t-il mon expert-comptable ?",
        r: "Non, et ce n'est pas le but. Il produit les comptes officiels ; Logones vous donne le pilotage mensuel entre deux bilans, pour décider pendant qu'il est encore temps.",
      },
      {
        q: "Et si j'ai plusieurs établissements ?",
        r: "Les chiffres se consolident, et chaque établissement reste comparable aux autres sur les mêmes ratios, calculés de la même façon partout.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Grille tarifaire proposée                                          */
/* ------------------------------------------------------------------ */

export type ModuleTarif = {
  id: string;
  nom: string;
  resume: string;
  prixHT: number;
  couleur: string;
  href: string;
};

export const MODULES_TARIF: ModuleTarif[] = [
  { id: "caisse", nom: "Caisse", resume: "Encaissement, commande, cuisine, clôture", prixHT: 89, couleur: "var(--caisse-bright, #147CFF)", href: "/v2/modules/caisse" },
  { id: "stocks", nom: "Stocks", resume: "Inventaire, lots, DLC, recettes, food cost", prixHT: 89, couleur: "var(--stocks-bright, #FFC400)", href: "/v2/modules/stocks" },
  { id: "haccp", nom: "HACCP", resume: "Températures, checklists, traçabilité, DLC", prixHT: 49, couleur: "var(--haccp-bright, #22C55E)", href: "/v2/modules/haccp" },
  { id: "rh", nom: "RH", resume: "Planning, pointage, congés, pré-paie", prixHT: 79, couleur: "var(--rh-bright, #A36BFF)", href: "/v2/modules/rh" },
  { id: "reservation", nom: "Réservation & acquisition", resume: "Réservation, site vitrine, avis, QR à table", prixHT: 99, couleur: "var(--resa-bright, #D14343)", href: "/v2/modules/reservation" },
  { id: "pilotage", nom: "Pilotage", resume: "Compte de résultat, marge par plat, objectifs", prixHT: 79, couleur: pilotageColor.accent, href: "/v2/modules/pilotage" },
];

/* ------------------------------------------------------------------ */
/*  Routes qui existent en deux versions                               */
/* ------------------------------------------------------------------ */

/**
 * Pages ayant une jumelle sous /v2.
 *
 * Sert à deux choses : garder la navigation à l'intérieur de la proposition,
 * et savoir si la bascule « version actuelle » a une destination. Une page
 * absente de cette liste — /demo, /blog, /a-propos, les pages légales —
 * reste volontairement partagée entre les deux versions.
 *
 * ⚠ À compléter en même temps qu'on ajoute une page à /v2.
 */
export const ROUTES_JUMELLES: readonly string[] = [
  "/",
  "/tarifs",
  "/modules/caisse",
  "/modules/stocks",
  "/modules/haccp",
  "/modules/rh",
  "/modules/reservation",
];

/** `/v2/tarifs` → `/tarifs`, `/v2` → `/`. Renvoie null si la page n'existe qu'en V2. */
export function versionActuelle(cheminV2: string): string | null {
  const nu = cheminV2 === "/v2" ? "/" : cheminV2.replace(/^\/v2/, "");
  return ROUTES_JUMELLES.includes(nu) ? nu : null;
}

export const PACKS = [
  { nom: "Essentiel", prixHT: 89, modules: ["caisse"] },
  { nom: "Gestion", prixHT: 249, modules: ["caisse", "stocks", "haccp", "pilotage"] },
  { nom: "Complet", prixHT: 379, modules: MODULES_TARIF.map((m) => m.id) },
];
