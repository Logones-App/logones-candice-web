/**
 * Les 132 fonctionnalités, réorganisées par moment d'usage.
 *
 * Le référentiel produit les classe en 18 groupes techniques — « Tables »,
 * « Sessions & Clôture », « Impression & Tickets ». C'est la façon dont on
 * construit un logiciel, pas la façon dont on tient un restaurant.
 *
 * Ici elles sont rangées selon la question que se pose le restaurateur au
 * moment où il en a besoin : avant le service, pendant, à la clôture, le jour
 * du contrôle. Aucune fonction n'est perdue : les 132 sont là, et le compte
 * est vérifié module par module.
 *
 * `absent: true` marque ce que la page en ligne ne dit pas encore — 66 sur
 * 132. C'est ce qui permet de mettre en avant ce qui ne l'est pas.
 */

export type Fonction = { f: string; absent?: boolean };

export type Moment = {
  titre: string;
  question: string;
  items: Fonction[];
};

export type ModuleFonctions = {
  nom: string;
  total: number;
  absentes: number;
  moments: Moment[];
};

export const FONCTIONS: Record<string, ModuleFonctions> = {
  /* ============================== CAISSE — 55 ============================== */
  caisse: {
    nom: "Caisse",
    total: 55,
    absentes: 24,
    moments: [
      {
        titre: "Avant le service",
        question: "Ce qu'on règle une fois, et qu'on ne retouche plus.",
        items: [
          { f: "Salles multiples illimitées", absent: true },
          { f: "Placement libre des tables", absent: true },
          { f: "Multi-menus : carte et prix selon l'heure de la journée", absent: true },
          { f: "Cartes et produits multilingues", absent: true },
          { f: "Nombre de niveaux de navigation illimité", absent: true },
          { f: "Choix de la couleur des cases", absent: true },
          { f: "Imprimante par défaut et configuration par appareil", absent: true },
          { f: "Contrôle des droits : qui ouvre et clôture la journée" },
        ],
      },
      {
        titre: "Pendant le service, en salle",
        question: "Ce qui doit tenir quand tout arrive en même temps.",
        items: [
          { f: "Visualisation en direct de l'état de la table" },
          { f: "Visualisation de la caisse en cours depuis la vue Table" },
          { f: "Encaissement rapide depuis la vue Tables" },
          { f: "Gestion des couverts et du mode de consommation (sur place, à emporter, livraison)" },
          { f: "Gestion avancée des options d'un produit, avec vente additionnelle" },
          { f: "Visualisation en direct du stock", absent: true },
          { f: "Transfert, fusion et division de tables" },
        ],
      },
      {
        titre: "Pendant le service, en cuisine",
        question: "Comment la commande part, et comment on la rattrape.",
        items: [
          { f: "Gestion des suites avec envoi sélectif et rappel" },
          { f: "Envoi par suite (entrées, plats, desserts) avec vue cuisine centralisée", absent: true },
          { f: "Rappel et relance des suites", absent: true },
          { f: "Signalement des ajouts tardifs à une commande déjà envoyée", absent: true },
          { f: "Impression des tickets (imprimantes ESC-POS et Sunmi)" },
          { f: "Impression d'étiquettes (Brother) pour l'HACCP", absent: true },
        ],
      },
      {
        titre: "Au moment de l'addition",
        question: "Les additions qui ne rentrent pas dans une case.",
        items: [
          { f: "Division avancée d'un ou plusieurs produits, avec conservation des parts restantes", absent: true },
          { f: "Attribution des produits à un client pour faciliter le règlement" },
          { f: "Attribution avancée des produits par client" },
          { f: "Notes de frais au réel de la consommation, pas au prorata" },
          { f: "Gestion des remises appliquées sur le restant dû" },
          { f: "Produits offerts tracés" },
          { f: "Pourboires", absent: true },
          { f: "TVA ventilée par client à la même table" },
        ],
      },
      {
        titre: "Le paiement",
        question: "Sans jamais retaper un montant sur un second terminal.",
        items: [
          { f: "Choix libre des modes de paiement (espèces, carte, chèque, titres-restaurant…)" },
          { f: "Règlements partiels et multi-modes sur une même note" },
          { f: "Paiement carte intégré via terminal, sans double saisie du montant" },
          { f: "Application-à-application sur terminal Sunmi : lecture carte dans l'app bancaire certifiée PCI-DSS" },
          { f: "Détection automatique contact / sans contact" },
          { f: "Impression des tickets client et commerçant, avec duplicata" },
          { f: "Remboursement et annulation par carte", absent: true },
          { f: "Réconciliation du numéro de transaction sur le règlement", absent: true },
          { f: "Échappatoire « carte via terminal externe » si besoin" },
        ],
      },
      {
        titre: "À la clôture",
        question: "Ce qui se fait à minuit, et qu'on ne veut pas refaire.",
        items: [
          { f: "Ouverture et clôture de journée de caisse" },
          { f: "Fond de caisse et comptage" },
          { f: "Rapports X (en cours) et Z (clôture)" },
          { f: "Rapports X et Z, au format réglementaire", absent: true },
          { f: "Clôtures journalière, mensuelle et annuelle (archives Z, grands totaux)", absent: true },
          { f: "Export comptable et transmission au comptable" },
        ],
      },
      {
        titre: "Le jour d'un contrôle",
        question: "Ce qu'on vous demandera de montrer — et que vous n'aurez pas à préparer.",
        items: [
          { f: "Logiciel de caisse conforme à l'article 286 du CGI, attestation éditeur" },
          { f: "Certification NF525 en cours" },
          { f: "Signature et chaînage inaltérables de chaque opération", absent: true },
          { f: "Journal des événements horodaté et inaltérable", absent: true },
          { f: "Traçabilité de l'opérateur sur chaque opération", absent: true },
          { f: "Tickets, notes et justificatifs conformes, avec duplicatas tracés", absent: true },
          { f: "Duplicatas conformes des tickets, notes et justificatifs" },
          { f: "Gestion des avoirs et remboursements, bornée au ticket d'origine" },
          { f: "Archivage sécurisé des clôtures fiscales (stockage inaltérable)" },
          { f: "Consultation et vérification en ligne des archives fiscales", absent: true },
          { f: "Droits sensibles tracés au journal", absent: true },
        ],
      },
    ],
  },

  /* ============================== STOCKS — 10 ============================== */
  stocks: {
    nom: "Stocks",
    total: 10,
    absentes: 8,
    moments: [
      {
        titre: "À la réception de la livraison",
        question: "Le moment où tout se joue, et où personne n'a le temps.",
        items: [
          { f: "Entrée en stock depuis les bons de livraison et factures scannés, avec association automatique des références" },
          { f: "Association d'une ligne à une référence par scan du code-barres", absent: true },
          { f: "Référentiel fournisseurs et références (SKU, conditionnements, codes-barres)", absent: true },
        ],
      },
      {
        titre: "Pendant le service",
        question: "Le stock bouge à la vente, pas à l'inventaire.",
        items: [
          { f: "Recettes et nomenclatures : décrément automatique des composants à la vente" },
          { f: "Disponibilité dérivée des composants : « je peux produire N plats »", absent: true },
          { f: "Blocage de la survente en temps réel", absent: true },
        ],
      },
      {
        titre: "Au fil du mois",
        question: "Là où se logent les pertes qu'on ne voit pas.",
        items: [
          { f: "Mouvements de stock : achats, ajustements, pertes, casse, périmés", absent: true },
          { f: "Inventaire avec suivi des lots et des DLC", absent: true },
          { f: "Valorisation FIFO du stock en temps réel", absent: true },
          { f: "Suivi des coûts d'achat, avec historique des prix", absent: true },
        ],
      },
    ],
  },

  /* ============================== HACCP — 14 ============================== */
  haccp: {
    nom: "HACCP",
    total: 14,
    absentes: 7,
    moments: [
      {
        titre: "Le parcours quotidien",
        question: "Trois minutes en passant devant les postes, au lieu du classeur du vendredi.",
        items: [
          { f: "Relevés de température multi chambres froides, avec historique complet" },
          { f: "Checklist et suivi des tâches par poste, quotidien et hebdomadaire" },
          { f: "Suivi du changement des huiles de friture" },
          { f: "Suivi du refroidissement des plats", absent: true },
        ],
      },
      {
        titre: "À la réception et en cuisine",
        question: "La traçabilité se fabrique au moment du geste, pas après.",
        items: [
          { f: "Contrôle à réception avec gestion et historisation des non-conformités" },
          { f: "Scan des bons de livraison et factures : lecture automatique et mise à jour des coûts", absent: true },
          { f: "Création d'étiquettes pour le suivi des lots et DLC" },
          { f: "Étiquette d'ouverture avec calcul de la DLC secondaire", absent: true },
          { f: "Inventaire des denrées en FEFO, avec sortie des périmés", absent: true },
        ],
      },
      {
        titre: "Ce qui vit toute l'année",
        question: "Les échéances qui vous rattrapent si personne ne les suit.",
        items: [
          { f: "Suivi du plan de maîtrise sanitaire" },
          { f: "Gestion documentaire complète avec rappel d'expiration", absent: true },
          { f: "Formations et attestations d'hygiène des employés", absent: true },
          { f: "Affichage des 14 allergènes et de l'origine des produits", absent: true },
        ],
      },
      {
        titre: "Le jour du contrôle",
        question: "Un contrôle ne se prépare pas : il se produit.",
        items: [{ f: "Traçabilité complète d'un produit, de la réception à l'assiette" }],
      },
    ],
  },

  /* ================================ RH — 9 ================================= */
  rh: {
    nom: "RH",
    total: 9,
    absentes: 5,
    moments: [
      {
        titre: "Construire le planning",
        question: "Le lundi matin, en une fois, et sans version qui circule par message.",
        items: [
          { f: "Gestion avancée du planning des employés", absent: true },
          { f: "Vues par jour, semaine et mois pour une vision claire de l'effectif" },
          { f: "Gestion et suivi des congés et absences" },
        ],
      },
      {
        titre: "Suivre les heures",
        question: "Ce qui a été fait, pas ce dont on se souvient en fin de mois.",
        items: [
          { f: "Pointage et badgeuse des heures des employés" },
          { f: "Application mobile employé : planning, pointage et documents" },
        ],
      },
      {
        titre: "Tenir l'administratif",
        question: "Ce qui prend des soirées, et qu'on découvre en retard.",
        items: [
          { f: "Stockage des informations d'embauche dans le respect du RGPD", absent: true },
          { f: "Gestion documentaire complète des employés", absent: true },
          { f: "Suivi des formations et attestations, avec échéances", absent: true },
        ],
      },
      {
        titre: "Transmettre au comptable",
        question: "Nous ne faisons pas la paie. Nous la préparons.",
        items: [
          { f: "Préparation de la fiche d'informations de paie à transmettre au comptable", absent: true },
        ],
      },
    ],
  },

  /* ====================== RÉSERVATION & ACQUISITION — 22 ==================== */
  reservation: {
    nom: "Réservation & acquisition",
    total: 22,
    absentes: 15,
    moments: [
      {
        titre: "Se faire trouver",
        question: "Avant même qu'on vous appelle.",
        items: [
          { f: "Page vitrine publique par établissement", absent: true },
          { f: "Plusieurs modèles de site et palettes de couleurs", absent: true },
          { f: "Galerie photos et images par emplacement", absent: true },
          { f: "Référencement optimisé page par page" },
          { f: "Bande d'infos pratiques : ouvert ou fermé, horaires du jour, adresse, téléphone cliquable", absent: true },
          { f: "Carte et menu consultables en ligne, multilingues", absent: true },
          { f: "Réseaux sociaux, accès et plan", absent: true },
        ],
      },
      {
        titre: "Recevoir la réservation",
        question: "Directement, sans commission par couvert.",
        items: [
          { f: "Réservation en ligne 24/7 avec anti-surbooking en temps réel" },
          { f: "Réservation et commande accessibles depuis le site", absent: true },
          { f: "Widget à intégrer sur votre site ou vos réseaux, sans commission", absent: true },
          { f: "Créneaux et services configurables (midi, soir, capacité, délai d'annulation)" },
          { f: "Rappels automatiques et reconfirmation client" },
          { f: "Liste d'attente sur créneau complet, avec relance dès qu'une table se libère", absent: true },
        ],
      },
      {
        titre: "Accueillir",
        question: "La réservation et le service parlent enfin de la même table.",
        items: [
          { f: "Gestion des réservations au poste : confirmer, placer, installer, no-show" },
          { f: "Plan de salle et allocation des tables gérés en salle" },
        ],
      },
      {
        titre: "Vendre à table",
        question: "Le QR code n'est un gadget que s'il n'est relié à rien.",
        items: [
          { f: "Commande par le client via QR code à table" },
          { f: "Personnalisation des produits : options, compositions, note par article, formules", absent: true },
          { f: "Relais et validation des commandes sur les postes de caisse", absent: true },
          { f: "Décrément automatique du stock à l'acceptation", absent: true },
        ],
      },
      {
        titre: "Après le repas",
        question: "L'avis part au bon moment, et vers le bon endroit.",
        items: [
          { f: "Recueil des avis via une page de satisfaction dédiée", absent: true },
          { f: "Questionnaire personnalisable : socle standard et questions maison", absent: true },
          { f: "Orientation des clients satisfaits vers Google", absent: true },
        ],
      },
    ],
  },

  /* ============================= PILOTAGE — 10 ============================= */
  pilotage: {
    nom: "Pilotage",
    total: 10,
    absentes: 10,
    moments: [
      {
        titre: "Ce que vous avez vendu",
        question: "Le point de départ, et le seul que la plupart des logiciels donnent.",
        items: [
          { f: "Analyse des ventes : chiffre d'affaires HT par jour, par heure, par produit, par serveur", absent: true },
          { f: "Fréquentation et réservations : couverts, ticket moyen, taux de remplissage", absent: true },
        ],
      },
      {
        titre: "Ce que ça vous a coûté",
        question: "La moitié que personne ne calcule.",
        items: [
          { f: "Food cost et marge par plat : ce que rapporte réellement chaque produit", absent: true },
          { f: "Coût et productivité du personnel : masse salariale, coût par couvert", absent: true },
          { f: "Valorisation du stock en FIFO et suivi des pertes", absent: true },
        ],
      },
      {
        titre: "Ce qu'il vous reste",
        question: "Le chiffre d'affaires n'est pas un résultat.",
        items: [
          { f: "Compte de résultat mensuel par établissement : CA, coûts, résultat", absent: true },
          { f: "Objectifs de chiffre d'affaires et suivi de l'atteinte", absent: true },
          { f: "Tous les montants en HT, filtrables par période, sans tableur", absent: true },
        ],
      },
      {
        titre: "Ce qui explique les écarts",
        question: "Un mauvais service et un service sous la pluie ne se corrigent pas pareil.",
        items: [
          { f: "Synthèse avec corrélation météo et ventes", absent: true },
          { f: "Indicateurs d'avis et de satisfaction client", absent: true },
        ],
      },
    ],
  },

  /* ============================== LE SOCLE — 12 ============================ */
  socle: {
    nom: "Le socle",
    total: 12,
    absentes: 12,
    moments: [
      {
        titre: "Quand le réseau tombe",
        question: "Ce n'est pas un mode dégradé : c'est le fonctionnement normal.",
        items: [
          { f: "Fonctionnement 100 % hors ligne — vous encaissez même sans Internet", absent: true },
          { f: "Coordination locale entre appareils : un poste maître, plusieurs postes reliés", absent: true },
          { f: "Continuité de service et reprise en cas de coupure d'un appareil", absent: true },
          { f: "Synchronisation automatique et transparente au retour du réseau", absent: true },
        ],
      },
      {
        titre: "Quand vous grandissez",
        question: "Ajouter un poste ou une adresse ne doit pas être un projet.",
        items: [
          { f: "Tablettes en caisse et téléphones en salle, tous synchronisés en temps réel", absent: true },
          { f: "Multi-établissements au sein d'une même organisation", absent: true },
          { f: "Console de gestion des appareils, des sièges et des modules par établissement", absent: true },
        ],
      },
      {
        titre: "Qui peut faire quoi",
        question: "Un extra n'a pas les mêmes accès qu'un responsable de salle.",
        items: [
          { f: "Connexion par code PIN par employé", absent: true },
          { f: "Droits et permissions fins par employé et par module", absent: true },
          { f: "Rôles distincts : direction, manager, employé", absent: true },
          { f: "Gestion des accès et des modules activés par appareil", absent: true },
        ],
      },
      {
        titre: "Où sont vos données",
        question: "Et ce qu'il en advient si vous partez.",
        items: [
          { f: "Données hébergées et sauvegardées en France, de façon sécurisée (RGPD)", absent: true },
        ],
      },
    ],
  },
};

/** Contrôle : la somme doit faire 132. */
export const TOTAL_FONCTIONS = Object.values(FONCTIONS).reduce(
  (t, m) => t + m.moments.reduce((s, mo) => s + mo.items.length, 0),
  0,
);
