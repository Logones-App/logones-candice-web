/**
 * Les trois démonstrations de chaque module.
 *
 * Une fonction ne se démontre pas : une situation se raconte. « Division
 * avancée avec conservation des parts restantes » ne dit rien à personne ;
 * « trois partent, deux restent et recommandent » se comprend d'un coup.
 *
 * Trois par module, pas plus. C'est l'arbitrage le plus important du site :
 * ces trois-là décident de ce qu'un prospect retiendra.
 *
 * Le niveau de preuve suit la nature de la fonction :
 *   ecran    — on montre l'interface, annotée
 *   geste    — on montre la séquence, en trois temps
 *   garantie — rien à montrer, tout à affirmer précisément
 */

export type Preuve =
  | { type: "ecran"; entete: string; lignes: [string, string][]; total?: [string, string]; pied?: string }
  | { type: "geste"; etapes: { t: string; d: string }[] }
  | { type: "garantie"; points: { t: string; d: string }[] };

export type Demo = {
  situation: string;
  recit: string;
  cle: string;
  preuve: Preuve;
};

export const DEMOS: Record<string, Demo[]> = {
  /* ============================== CAISSE ============================== */
  caisse: [
    {
      situation: "Table de six, trois qui boivent du vin et trois qui n'en boivent pas",
      recit:
        "Ils ne paient pas le même taux de TVA. La quasi-totalité des caisses ventile par table : le taux est moyenné, et votre déclaration est fausse. Ici, chaque produit est attribué à un client, et la TVA suit le client.",
      cle: "TVA ventilée par client, à la même table",
      preuve: {
        type: "ecran",
        entete: "Table 8 · 6 couverts",
        lignes: [
          ["Clients 1 à 3 — dont 2 bouteilles", "TVA 20 % sur les alcools"],
          ["Clients 4 à 6 — sans alcool", "TVA 10 % sur la totalité"],
          ["Plats et entrées, les six", "TVA 10 %"],
        ],
        total: ["Ventilation", "automatique, par client"],
        pied: "Aucune répartition au prorata. Chaque ligne porte le taux du produit réellement consommé.",
      },
    },
    {
      situation: "20 h 30, un vendredi, la box tombe",
      recit:
        "C'est le seul moment où l'on mesure vraiment ce qu'on a acheté. L'application travaille en local par conception : les appareils continuent de se parler sur votre réseau, sans passer par Internet.",
      cle: "Le service ne s'arrête pas, et rien ne se ressaisit",
      preuve: {
        type: "geste",
        etapes: [
          { t: "20 h 30 — la coupure", d: "Aucun message d'erreur, aucun écran bloqué. On encaisse, on imprime, la commande part en cuisine." },
          { t: "20 h 45 — la file se remplit", d: "Réservations en ligne et e-mails attendent leur tour. Conservés, pas perdus." },
          { t: "20 h 52 — le retour", d: "Tout remonte seul, dans l'ordre chronologique. Aucun doublon, aucune manipulation. Personne dans l'équipe n'a rien eu à faire." },
        ],
      },
    },
    {
      situation: "Un contrôle se présente un mardi matin",
      recit:
        "Un contrôle ne se prépare pas : il se produit. Ce qu'on vous demandera existe déjà, et se sort en un geste — parce que rien n'a été rempli après coup.",
      cle: "Ce qu'on vous demande, et où c'est",
      preuve: {
        type: "garantie",
        points: [
          { t: "L'attestation de conformité", d: "Article 286 du CGI. Remise à la signature, et téléchargeable depuis votre espace, à jour de votre version." },
          { t: "Les clôtures", d: "Journalières, mensuelles, annuelles. Exportables sur la période demandée." },
          { t: "Le journal des événements", d: "Ouvertures de tiroir, annulations, remises, changements de prix. Horodaté, nominatif, ineffaçable." },
          { t: "Les archives fiscales", d: "Stockage inaltérable, consultables et vérifiables en ligne sans nous appeler." },
        ],
      },
    },
  ],

  /* ============================== STOCKS ============================== */
  stocks: [
    {
      situation: "Le poissonnier repart, vous avez le bon en main",
      recit:
        "C'est là que la soirée du dimanche se joue. Vous photographiez le bon : les lignes, les quantités et les prix sont extraits, rapprochés de votre commande, et les écarts vous sont présentés.",
      cle: "Trente secondes à la réception, au lieu de trois heures le dimanche",
      preuve: {
        type: "ecran",
        entete: "Métro · 27 mai · scanné",
        lignes: [
          ["Pommes de terre — 25 kg", "34,75 €"],
          ["Bœuf charolais — 8 kg", "192,40 €"],
          ["Beurre AOP — 6 kg", "68,10 €"],
        ],
        total: ["Bon de livraison", "295,25 €"],
        pied: "3 lignes extraites · 1 écart de prix signalé · lots et DLC enregistrés · stock à jour",
      },
    },
    {
      situation: "« Il me reste combien de quenelles ? »",
      recit:
        "La question se pose dix fois par service, et la réponse n'est jamais dans le stock : elle est dans les ingrédients. Logones la calcule depuis les composants réellement disponibles, et bloque la survente en temps réel.",
      cle: "La disponibilité se déduit des composants, pas d'un compteur",
      preuve: {
        type: "ecran",
        entete: "Quenelle de brochet · disponibilité",
        lignes: [
          ["Brochet — 2,4 kg en stock", "→ 32 portions"],
          ["Crème — 4 L", "→ 80 portions"],
          ["Sauce Nantua — 1,1 L", "→ 18 portions"],
        ],
        total: ["Vous pouvez produire", "18 quenelles"],
        pied: "Le composant le plus contraint fixe la limite. Au 19ᵉ, le plat se bloque à la vente.",
      },
    },
    {
      situation: "Le beurre a pris 18 % ce mois-ci",
      recit:
        "Sur une carte de trente plats, lesquels basculent ? Sans fiche technique à jour, personne ne le sait — et on s'en aperçoit au bilan. Ici, le nouveau prix d'achat recalcule seul chaque plat concerné.",
      cle: "Un prix qui bouge, et la marge de chaque plat suit",
      preuve: {
        type: "ecran",
        entete: "Impact du prix d'achat · beurre AOP",
        lignes: [
          ["Quenelle de brochet", "71,2 % → 68,4 %"],
          ["Tablier de sapeur", "66,8 % → 61,3 %"],
          ["Praline tarte", "74,1 % → 66,9 %"],
        ],
        total: ["Alerte de dérive", "3 plats sous votre seuil"],
        pied: "Recalcul au moment de la réception du bon. Vous décidez avant le prochain service, pas au bilan.",
      },
    },
  ],

  /* =============================== HACCP ============================== */
  haccp: [
    {
      situation: "17 h, la mise en place commence",
      recit:
        "Le classeur rempli le vendredi pour la semaine entière, tout le monde le connaît. Ici le relevé se fait en passant devant le poste, il porte l'heure et le nom, et il ne peut pas être antidaté.",
      cle: "Trois minutes en marchant, au lieu du classeur du vendredi",
      preuve: {
        type: "geste",
        etapes: [
          { t: "Le parcours guidé", d: "L'application vous fait passer poste par poste, dans l'ordre de la cuisine. Rien à chercher." },
          { t: "Le relevé", d: "Chambres froides, vitrines, huiles de friture. Saisi au doigt ou lu par sonde connectée." },
          { t: "La signature", d: "Horodatée, nominative, inaltérable. Un relevé oublié reste marqué comme oublié." },
        ],
      },
    },
    {
      situation: "On ouvre un bocal de sauce le mardi",
      recit:
        "La DLC du fabricant ne vaut plus rien : c'est la durée de vie secondaire qui compte, et elle dépend de votre grille. Elle se calcule et s'imprime, sans que personne ait à faire le calcul de tête.",
      cle: "L'étiquette d'ouverture, calculée depuis votre grille",
      preuve: {
        type: "ecran",
        entete: "Étiquette d'ouverture",
        lignes: [
          ["Produit", "Sauce Nantua"],
          ["Ouvert le", "mardi 12, 17 h 20"],
          ["Grille de durée de vie", "3 jours après ouverture"],
          ["Ouvert par", "Marion L."],
        ],
        total: ["À consommer avant le", "vendredi 15"],
        pied: "Imprimée depuis la caisse ou sur étiqueteuse dédiée. Le lot reste tracé de la réception à l'assiette.",
      },
    },
    {
      situation: "La DDPP est dans votre cuisine",
      recit:
        "Le dossier ne se prépare pas : il existe déjà. Relevés sur la période, checklists signées, traçabilité des lots, plan de maîtrise sanitaire et documents à échéance sortent en un fichier.",
      cle: "Le dossier de contrôle, exporté en un geste",
      preuve: {
        type: "garantie",
        points: [
          { t: "Les relevés sur la période", d: "Températures, huiles, refroidissements. Horodatés et nominatifs." },
          { t: "Les checklists signées", d: "Par poste, quotidiennes et hebdomadaires, selon votre plan de maîtrise sanitaire." },
          { t: "La traçabilité d'un lot", d: "De la réception à l'assiette, avec la photo du bon de livraison." },
          { t: "Les documents à échéance", d: "Formations et attestations d'hygiène de l'équipe, avec leurs dates." },
        ],
      },
    },
  ],

  /* ================================ RH ================================ */
  rh: [
    {
      situation: "Lundi matin, il faut faire le planning de la semaine",
      recit:
        "On met du monde au jugé, et on découvre le coût en fin de mois. Ici le planning se construit face au chiffre d'affaires prévu : vous voyez le ratio bouger pendant que vous placez les équipes.",
      cle: "Le planning se construit face au chiffre d'affaires prévu",
      preuve: {
        type: "ecran",
        entete: "Semaine du 3 au 9 août",
        lignes: [
          ["Service midi — 4 personnes", "32 h"],
          ["Service soir — 6 personnes", "54 h"],
          ["Cuisine", "48 h"],
        ],
        total: ["Masse salariale / CA prévu", "33,8 %"],
        pied: "Objectif 34 % · écart −0,2 pt. Le ratio se recalcule à chaque personne ajoutée ou retirée.",
      },
    },
    {
      situation: "Fin de mois, il faut compter les heures",
      recit:
        "De mémoire, avec les discussions que ça provoque — et souvent au détriment de quelqu'un. Le pointage se fait sur la caisse au code PIN : ce sont les heures réelles, pas celles dont on se souvient.",
      cle: "Heures pointées contre heures prévues, sans badgeuse à installer",
      preuve: {
        type: "geste",
        etapes: [
          { t: "À l'arrivée", d: "Code PIN sur la caisse. Aucun badge à distribuer, aucune feuille à signer." },
          { t: "Pendant le mois", d: "Chacun voit ses heures dans l'application employé. Les écarts se discutent au fil de l'eau, pas le 30." },
          { t: "À la clôture", d: "Les éléments variables partent au gestionnaire de paie. Nous ne faisons pas la paie : nous la préparons." },
        ],
      },
    },
    {
      situation: "Le samedi soir vous coûte combien, exactement ?",
      recit:
        "Le ratio annuel calculé par le comptable ne vous dit pas quel service perd de l'argent. Le coût du personnel est rapporté au chiffre d'affaires et aux couverts, service par service.",
      cle: "Le coût du personnel, service par service",
      preuve: {
        type: "ecran",
        entete: "Coût par service · semaine 32",
        lignes: [
          ["Mardi midi — 38 couverts", "412 € · 27,4 %"],
          ["Samedi soir — 96 couverts", "690 € · 19,1 %"],
          ["Dimanche midi — 41 couverts", "598 € · 38,2 %"],
        ],
        total: ["Le service à surveiller", "dimanche midi"],
        pied: "Même équipe, moitié moins de couverts. C'est là que se décide une fermeture ou un ajustement d'effectif.",
      },
    },
  ],

  /* =========================== RÉSERVATION ============================ */
  reservation: [
    {
      situation: "21 h 05, une table de six annule",
      recit:
        "Un vendredi, c'est un service perdu qu'on ne rattrape pas — sauf si quelqu'un attend. La liste d'attente relance automatiquement dès que le créneau se libère.",
      cle: "Un désistement à 21 h 05, la table reprise à 21 h 20",
      preuve: {
        type: "geste",
        etapes: [
          { t: "21 h 05 — l'annulation", d: "La table de six se libère. Le créneau redevient disponible dans la seconde." },
          { t: "21 h 06 — la relance", d: "Les trois demandes en attente sur ce créneau sont notifiées, dans l'ordre d'arrivée." },
          { t: "21 h 20 — la table est reprise", d: "Six couverts sauvés. Personne n'a passé un coup de fil." },
        ],
      },
    },
    {
      situation: "Vous voulez une empreinte, sans payer pour ça",
      recit:
        "L'empreinte bancaire protège les gros services. Nous ne prenons une part que le jour où elle est réellement débitée — c'est-à-dire le jour où elle vous a évité une perte.",
      cle: "5 % uniquement sur l'empreinte encaissée",
      preuve: {
        type: "garantie",
        points: [
          { t: "Tant que personne ne fait défaut", d: "Vous ne payez rien. Aucune commission par couvert, aucun abonnement supplémentaire." },
          { t: "Quand une empreinte est débitée", d: "5 % du montant encaissé, via Stripe. Sur une somme que vous auriez perdue." },
          { t: "Vous fixez les règles", d: "Montant, délai, conditions d'annulation, à partir de combien de couverts." },
        ],
      },
    },
    {
      situation: "Vous changez le plat du jour à 11 h 30",
      recit:
        "Sur un site fait il y a quatre ans, la carte est un PDF que personne ne remet à jour. Ici elle est générée depuis la caisse : il n'existe pas de deuxième endroit où la modifier, donc pas d'endroit où l'oublier.",
      cle: "La carte en ligne ne peut pas être fausse",
      preuve: {
        type: "ecran",
        entete: "Carte en ligne · mise à jour",
        lignes: [
          ["Plat du jour modifié en caisse", "11 h 30"],
          ["Site vitrine", "à jour à 11 h 30"],
          ["Carte QR à table", "à jour à 11 h 30"],
          ["Menu multilingue", "à jour à 11 h 30"],
        ],
        total: ["Endroits à modifier", "un seul"],
        pied: "Prix, disponibilité, allergènes et origine suivent la même source : votre caisse.",
      },
    },
  ],

  /* ============================== LE SOCLE ============================ */
  socle: [
    {
      situation: "La box tombe. Que se passe-t-il exactement ?",
      recit:
        "La plupart des logiciels de caisse s'arrêtent avec Internet. Le nôtre est construit dans l'autre sens : il travaille en local et se synchronise quand il peut. Voici, précisément, ce qui continue et ce qui attend.",
      cle: "Ce n'est pas un mode dégradé. C'est le fonctionnement normal.",
      preuve: {
        type: "ecran",
        entete: "Pendant la coupure",
        lignes: [
          ["Encaissement, tickets, cuisine", "continuent"],
          ["Relevés HACCP, clôture", "continuent"],
          ["Réservations en ligne, e-mails", "mis en file"],
          ["Remontée vers les autres adresses", "mise en file"],
        ],
        total: ["Au retour du réseau", "tout remonte seul"],
        pied: "Dans l'ordre chronologique, sans doublon et sans manipulation. Les appareils n'ont jamais eu besoin d'Internet pour se parler entre eux.",
      },
    },
    {
      situation: "Un extra arrive pour le week-end",
      recit:
        "Il doit pouvoir encaisser, sans pouvoir annuler une ligne, offrir un plat ou consulter le chiffre d'affaires. Les droits se règlent par personne, pas par catégorie, et chaque geste reste attribué.",
      cle: "Un extra n'a pas les mêmes accès qu'un responsable de salle",
      preuve: {
        type: "garantie",
        points: [
          { t: "Connexion par code PIN", d: "Personnel, en deux secondes, sans badge à distribuer ni compte partagé." },
          { t: "Droits fins par employé et par module", d: "Annuler, offrir, ouvrir le tiroir, voir les chiffres : chaque permission se donne séparément." },
          { t: "Chaque geste porte un nom", d: "Un écart de caisse se comprend sans avoir à accuser toute l'équipe." },
          { t: "Modules activés par appareil", d: "La tablette de salle n'ouvre pas les mêmes écrans que le poste du bureau." },
        ],
      },
    },
    {
      situation: "Vous ouvrez une deuxième adresse",
      recit:
        "Ajouter un établissement ne doit pas être un projet informatique. Les appareils se découvrent seuls sur le réseau local, la console gère les postes et les modules, et les chiffres se consolident.",
      cle: "Pas de serveur à installer, pas d'informaticien à appeler",
      preuve: {
        type: "geste",
        etapes: [
          { t: "Les appareils se coordonnent seuls", d: "Un poste maître, les autres reliés. Aucune machine à héberger dans un placard." },
          { t: "La console fait le reste", d: "Appareils, sièges et modules activés, établissement par établissement." },
          { t: "Les chiffres se consolident", d: "Chaque adresse reste comparable aux autres, sur des ratios calculés de la même façon." },
        ],
      },
    },
  ],

  /* ============================= PILOTAGE ============================= */
  pilotage: [
    {
      situation: "Le 1er du mois, à 8 h",
      recit:
        "La rentabilité arrive d'habitude avec le bilan, onze mois après les décisions qui l'ont fabriquée. Logones ne calcule pas votre résultat : il l'assemble depuis des données qu'il possède déjà.",
      cle: "Votre compte de résultat, sans rien ressaisir",
      preuve: {
        type: "ecran",
        entete: "Compte de résultat · juillet 2026",
        lignes: [
          ["Chiffre d'affaires HT", "84 320 €"],
          ["Coût matière — depuis les stocks", "− 24 890 € · 29,5 %"],
          ["Masse salariale — depuis les plannings", "− 28 640 € · 34,0 %"],
          ["Charges fixes — saisies une fois", "− 19 200 €"],
        ],
        total: ["Résultat", "11 590 €"],
        pied: "Trois des quatre lignes viennent d'autres modules. Rien n'est saisi deux fois, donc rien ne peut diverger.",
      },
    },
    {
      situation: "Votre plat vedette rapporte-t-il de l'argent ?",
      recit:
        "Celui qui sort le plus n'est pas toujours celui qui porte le résultat. Le classement par contribution croise le volume et la marge réelle — et il réserve souvent une surprise.",
      cle: "Le plat qui sort le plus n'est pas celui qui rapporte",
      preuve: {
        type: "ecran",
        entete: "Contribution au résultat · juillet",
        lignes: [
          ["Quenelle de brochet — 214 vendues", "+ 2 840 €"],
          ["Bavette échalote — 186 vendues", "+ 2 190 €"],
          ["Salade lyonnaise — 97 vendues", "+ 1 470 €"],
          ["Tablier de sapeur — 203 vendues", "+ 310 €"],
        ],
        total: ["Le piège", "3ᵉ en volume, dernier en résultat"],
        pied: "Le tablier de sapeur sort presque autant que la quenelle et rapporte neuf fois moins. C'est la carte qu'il faut revoir, pas le service.",
      },
    },
    {
      situation: "Mardi soir, salle vide. Faut-il s'inquiéter ?",
      recit:
        "Un mauvais service et un service sous la pluie ne se corrigent pas de la même façon. La météo est rapprochée de vos ventes, ce qu'aucun tableau de bord de caisse ne fait.",
      cle: "Distinguer un mauvais service d'un mauvais temps",
      preuve: {
        type: "ecran",
        entete: "Corrélation météo · ventes",
        lignes: [
          ["Mardi 12 — pluie, 14 °C", "38 couverts"],
          ["Mardi 19 — pluie, 13 °C", "41 couverts"],
          ["Mardi 26 — beau, 24 °C", "76 couverts"],
        ],
        total: ["Écart expliqué", "la terrasse, pas le service"],
        pied: "Sans cette lecture, on change la carte ou l'équipe. Avec, on ajuste les achats et le planning des mardis pluvieux.",
      },
    },
  ],
};
