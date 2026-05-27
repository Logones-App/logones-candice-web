# SITE_SPEC.md — Spécification complète du site vitrine Logones
> Version 1.0 — Mai 2026 | Source de vérité unique pour développement
> Usage : transmettre ce fichier directement à un IDE ou développeur. Aucune décision de design ou de contenu n'est laissée ouverte.

---

## TABLE DES MATIÈRES

1. [Vision & direction créative](#1-vision--direction-créative)
2. [Design System](#2-design-system)
3. [Architecture des pages](#3-architecture-des-pages)
4. [Composants globaux réutilisables](#4-composants-globaux-réutilisables)
5. [Page HOME — spécification pixel-perfect](#5-page-home--spécification-pixel-perfect)
6. [Page MODULES — gabarit et déclinaisons](#6-page-modules--gabarit-et-déclinaisons)
7. [Page PRICING](#7-page-pricing)
8. [Page DÉMO](#8-page-démo)
9. [Page À PROPOS](#9-page-à-propos)
10. [Page BLOG — structure](#10-page-blog--structure)
11. [Pages légales](#11-pages-légales)
12. [SEO & données structurées](#12-seo--données-structurées)
13. [Accessibilité & performances](#13-accessibilité--performances)
14. [Assets visuels — brief image par image](#14-assets-visuels--brief-image-par-image)
15. [RGPD & conformité CNIL](#15-rgpd--conformité-cnil)

---

## 1. VISION & DIRECTION CRÉATIVE

### 1.1 Positionnement de marque

**Phrase fondatrice :** *"Les autres logiciels ont été conçus par des ingénieurs pour des restaurateurs. Logones a été conçu par des restaurateurs pour des restaurateurs — et ça change absolument tout."*

**Ton :** Fondateur-restaurateur authentique. Direct. Concret. Sans jargon SaaS. Comme un pair qui vous parle dans la salle après le service, pas comme un commercial.

**Ce que le site doit communiquer en 5 secondes :**
> Un seul outil. Une seule facture. Caisse certifiée NF525 + stocks + HACCP + RH + réservation — nativement connectés. Fondé à Lyon, par des restaurateurs.

**Ce que le site NE doit PAS être :**
- Une landing page SaaS générique avec des icônes d'interface flottantes
- Une page corporate froide sans humain visible
- Un site qui cache ses prix
- Un site en anglais ou avec des anglicismes non traduits

### 1.2 Direction esthétique

**Concept :** *"Le grand restaurant de la cuisine numérique"* — l'alliance du terroir (authenticité lyonnaise, matériaux chauds, textures) et de la précision moderne (typographie chirurgicale, grille rigoureuse, micro-animations maîtrisées).

**Registre visuel :** Raffinement brasserie lyonnaise rencontrant la clarté d'un SaaS B2B premium. Ni trop "restaurant Instagram", ni trop "startup bleue". La chaleur du métier + la rigueur de l'outil.

**Ce qui rend ce site INOUBLIABLE :** La section Hero avec un fond texturé quasi-photographique (pierre de Bourgogne ou ardoise noire sombre) sur lequel les chiffres du dashboard Logones s'affichent en overlay lumineux — comme si les données du restaurant surgissaient des matériaux bruts de la cuisine.

---

## 2. DESIGN SYSTEM

### 2.1 Palette de couleurs — tokens CSS

```css
:root {
  /* === COULEURS GLOBALES === */
  --color-bg-base:        #0F0E0D;   /* Fond global : noir ardoise chaud */
  --color-bg-surface:     #1A1916;   /* Surfaces : cartes, modales */
  --color-bg-elevated:    #242220;   /* Éléments élevés : navbar scroll, tooltips */
  --color-bg-light:       #F5F2ED;   /* Sections claires (alternance) */
  --color-bg-light-alt:   #EDE9E2;   /* Sections claires secondaires */

  --color-text-primary:   #F0EDE8;   /* Texte principal sur fond sombre */
  --color-text-secondary: #A89F94;   /* Texte secondaire, sous-titres */
  --color-text-muted:     #6B6560;   /* Labels, captions, disclaimers */
  --color-text-dark:      #1A1916;   /* Texte sur sections claires */
  --color-text-dark-sec:  #4A453F;   /* Texte secondaire sur sections claires */

  --color-border:         rgba(240, 237, 232, 0.08);  /* Bordures subtiles sombre */
  --color-border-light:   rgba(26, 25, 22, 0.12);     /* Bordures sur fond clair */

  /* === MODULE CAISSE — BLEU ARDOISE === */
  --caisse-deep:    #0D2B45;
  --caisse-mid:     #1A5276;
  --caisse-bright:  #2E86C1;
  --caisse-accent:  #5DADE2;
  --caisse-glow:    rgba(46, 134, 193, 0.15);

  /* === MODULE HACCP — VERT FORÊT === */
  --haccp-deep:     #0D2B1A;
  --haccp-mid:      #1A6B3C;
  --haccp-bright:   #2D9B5A;
  --haccp-accent:   #4DBF7A;
  --haccp-glow:     rgba(45, 155, 90, 0.15);

  /* === MODULE RH — VIOLET PROFOND === */
  --rh-deep:        #1E1535;
  --rh-mid:         #3B2A6E;
  --rh-bright:      #5B4FBE;
  --rh-accent:      #8B7FE8;
  --rh-glow:        rgba(91, 79, 190, 0.15);

  /* === MODULE RÉSERVATION — CORAIL === */
  --resa-deep:      #3D1F10;
  --resa-mid:       #C0622A;
  --resa-bright:    #E07840;
  --resa-accent:    #F0A070;
  --resa-glow:      rgba(224, 120, 64, 0.15);

  /* === MODULE STOCKS — OCRE NEUTRE === */
  --stocks-deep:    #2A2010;
  --stocks-mid:     #7A6030;
  --stocks-bright:  #B8901A;
  --stocks-accent:  #D4A840;
  --stocks-glow:    rgba(184, 144, 26, 0.15);

  /* === SÉMANTIQUES === */
  --color-success:  #2D9B5A;
  --color-warning:  #D4A840;
  --color-error:    #C0392B;
  --color-info:     #2E86C1;

  /* === OR LOGONES — accent premium global === */
  --gold-light:     #D4A840;
  --gold-mid:       #B8901A;
  --gold-pale:      rgba(212, 168, 64, 0.12);
}
```

### 2.2 Typographie

**Choix typographique :** Deux familles distinctes, contrastées et mémorables.

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  /* DISPLAY — Fraunces : serif optique, chaleureux, mémoire d'établissement */
  --font-display:   'Fraunces', Georgia, serif;

  /* BODY — DM Sans : lisible, moderne, sans fioriture */
  --font-body:      'DM Sans', system-ui, sans-serif;

  /* === ÉCHELLE TYPOGRAPHIQUE === */

  /* Titres display (hero, sections) */
  --text-hero:      clamp(48px, 7vw, 88px);
  --text-hero-lh:   1.05;
  --text-hero-ls:   -0.03em;
  --text-hero-w:    300; /* Fraunces light italic pour le hero */

  --text-h1:        clamp(36px, 5vw, 64px);
  --text-h1-lh:     1.10;
  --text-h1-ls:     -0.025em;
  --text-h1-w:      400;

  --text-h2:        clamp(28px, 3.5vw, 48px);
  --text-h2-lh:     1.15;
  --text-h2-ls:     -0.02em;
  --text-h2-w:      400;

  --text-h3:        clamp(20px, 2.5vw, 32px);
  --text-h3-lh:     1.25;
  --text-h3-ls:     -0.015em;
  --text-h3-w:      600; /* DM Sans semi-bold */

  --text-h4:        clamp(16px, 1.8vw, 22px);
  --text-h4-lh:     1.35;
  --text-h4-ls:     -0.01em;
  --text-h4-w:      600;

  /* Corps */
  --text-lead:      clamp(17px, 1.5vw, 20px);
  --text-lead-lh:   1.65;
  --text-lead-ls:   -0.005em;
  --text-lead-w:    400;

  --text-body:      16px;
  --text-body-lh:   1.7;
  --text-body-ls:   0;
  --text-body-w:    400;

  --text-small:     14px;
  --text-small-lh:  1.6;
  --text-small-ls:  0.01em;
  --text-small-w:   400;

  --text-caption:   12px;
  --text-caption-lh: 1.5;
  --text-caption-ls: 0.02em;
  --text-caption-w: 500;

  --text-label:     11px;
  --text-label-lh:  1.4;
  --text-label-ls:  0.08em;
  --text-label-w:   600;

  /* CTA / boutons */
  --text-btn-lg:    16px;
  --text-btn-md:    15px;
  --text-btn-sm:    13px;
  --text-btn-w:     600;
  --text-btn-ls:    0.01em;
}
```

**Règles d'usage :**
- `Fraunces` : H1, H2, hero, citations, noms de modules, chiffres clés
- `DM Sans` : H3, H4, body, labels, boutons, navigation, formulaires
- L'italic de Fraunces est réservé aux citations et aux mots d'emphase dans les headlines

### 2.3 Système d'espacement

```css
:root {
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32: 128px;
  --space-40: 160px;
  --space-48: 192px;

  /* Sections */
  --section-padding-y:        clamp(64px, 8vw, 120px);
  --section-padding-y-sm:     clamp(48px, 6vw, 80px);
  --section-padding-x:        clamp(20px, 5vw, 80px);
  --container-max:            1280px;
  --container-narrow:         800px;
  --container-wide:           1440px;
}
```

### 2.4 Border radius & Ombres

```css
:root {
  --radius-sm:   6px;
  --radius-md:   12px;
  --radius-lg:   20px;
  --radius-xl:   32px;
  --radius-full: 9999px;

  /* Ombres */
  --shadow-sm:   0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2);
  --shadow-md:   0 4px 12px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2);
  --shadow-lg:   0 12px 40px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3);
  --shadow-xl:   0 24px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4);
  --shadow-glow-gold:  0 0 40px rgba(212, 168, 64, 0.20);
  --shadow-glow-blue:  0 0 40px rgba(46, 134, 193, 0.20);
  --shadow-glow-green: 0 0 40px rgba(45, 155, 90, 0.20);
}
```

### 2.5 Breakpoints

```css
/* Mobile first */
/* xs  : 0 – 374px   → smartphones petits */
/* sm  : 375px        → iPhone standard */
/* md  : 768px        → tablette portrait */
/* lg  : 1024px       → tablette paysage / laptop */
/* xl  : 1280px       → desktop standard */
/* 2xl : 1440px       → desktop large */
/* 3xl : 1920px       → full HD */

:root {
  --bp-sm:  375px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1440px;
}
```

### 2.6 Animations & transitions

```css
:root {
  --ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);

  --duration-fast:   120ms;
  --duration-mid:    240ms;
  --duration-slow:   400ms;
  --duration-enter:  600ms;
}

/* Stagger delay pour listes */
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 80ms; }
.stagger > *:nth-child(3) { animation-delay: 160ms; }
.stagger > *:nth-child(4) { animation-delay: 240ms; }
.stagger > *:nth-child(5) { animation-delay: 320ms; }
```

---

## 3. ARCHITECTURE DES PAGES

### 3.1 Sitemap complet

```
/                          → Home
/modules/caisse            → Module Caisse
/modules/stocks            → Module Stocks
/modules/haccp             → Module HACCP
/modules/rh                → Module RH
/modules/reservation       → Module Réservation
/tarifs                    → Pricing
/demo                      → Demander une démo
/a-propos                  → À propos / Fondateurs
/blog                      → Blog (liste d'articles)
/blog/[slug]               → Article individuel
/cgv                       → Conditions Générales de Vente
/mentions-legales          → Mentions légales
/politique-confidentialite → Politique de confidentialité
/cookies                   → Politique cookies
```

### 3.2 Méta par page

| Page | URL | Meta Title | Meta Description | Objectif conversion |
|---|---|---|---|---|
| Home | `/` | Logones — Logiciel de caisse NF525 tout-en-un pour restaurateurs indépendants | Un seul outil. Caisse NF525 + stocks + HACCP + RH + réservation nativement connectés. Fondé par des restaurateurs lyonnais. Tarifs transparents dès 90€ TTC/mois. | Clic vers Démo ou Tarifs |
| Caisse | `/modules/caisse` | Logiciel de caisse NF525 certifié pour restaurant indépendant — Logones | Caisse certifiée NF525, TVA multi-taux par client, plan de salle dynamique, calcul de marge en temps réel. Aucune surprise contractuelle. | Clic Démo |
| Stocks | `/modules/stocks` | Gestion des stocks restaurant : scan BL fournisseur et marge en temps réel — Logones | Scan du bon de livraison fournisseur → mise à jour automatique du stock → recalcul de la marge. Natif, zéro saisie double. | Clic Démo |
| HACCP | `/modules/haccp` | Module HACCP proactif avec veille réglementaire — Logones | Tableau de bord de complétude HACCP, alertes proactives avant inspection, conforme règlement CE 852/2004. Le seul HACCP intégré à une caisse NF525. | Clic Démo |
| RH | `/modules/rh` | Module RH restaurant conforme CCN HCR — Logones | Planning, pointeuse, contrats CDI/CDD/CDDU, conformité CCN HCR IDCC 1979, alerte DPAE automatique. Inclus dans Premium, sans supplément par employé. | Clic Démo |
| Réservation | `/modules/reservation` | Module réservation restaurant connecté à la caisse — Logones | Plans de salle dynamiques liés aux réservations, synchronisation temps réel avec les stocks. Aucun abonnement réservation séparé. | Clic Démo |
| Tarifs | `/tarifs` | Tarifs Logones — Starter 90€ · Pro 169€ · Premium 300€ TTC/mois | Tarification transparente, affichée publiquement. Comparez votre pile actuelle vs Logones. Calculateur interactif inclus. | Conversion directe ou Démo |
| Démo | `/demo` | Demander une démo Logones — Logiciel restaurant tout-en-un | Réservez une démonstration personnalisée avec l'équipe Logones. 30 minutes. Sans engagement. Pour restaurants de 30 à 100 couverts en Auvergne-Rhône-Alpes. | Soumission formulaire |
| À propos | `/a-propos` | Notre histoire — Logones, fondé par des restaurateurs lyonnais | Logones est né d'une frustration réelle : 6 abonnements qui ne se parlaient pas, 255€/mois de pile fragmentée, aucun outil conçu pour les indépendants. | Confiance → Démo |
| Blog | `/blog` | Blog Logones — Veille réglementaire CHR, gestion restaurant, NF525 | Actualités réglementaires, guides pratiques et analyses pour restaurateurs indépendants. Par des gens du métier. | SEO → trafic → Démo |

---

## 4. COMPOSANTS GLOBAUX RÉUTILISABLES

### 4.1 NAVBAR

**Comportement :**
- Position : `fixed`, top: 0, left: 0, right: 0, z-index: 1000
- État initial (Hero visible) : fond `transparent`, bordure basse `none`
- État scroll > 80px : fond `var(--color-bg-elevated)` avec `backdrop-filter: blur(20px)`, bordure basse `1px solid var(--color-border)`
- Transition : `background 300ms var(--ease-out-expo), border-color 300ms`

**Dimensions :**
- Hauteur desktop : 72px
- Hauteur mobile : 60px
- Padding horizontal : `var(--section-padding-x)`
- Max-width container : 1280px, centré

**Structure HTML desktop (gauche → droite) :**

```
[LOGO Logones] ←————————————————→ [Nav links] [CTA buttons]

Logo :
  - Largeur : 130px
  - Fichier : /assets/logo/logones-logo-light.svg (version fond sombre)
  - Fichier : /assets/logo/logones-logo-dark.svg (version fond clair)
  - Alt : "Logones — Logiciel de caisse restaurant"

Nav links (DM Sans 500, 15px, letter-spacing 0.01em) :
  - "Modules" → dropdown (voir ci-dessous)
  - "Tarifs" → /tarifs
  - "Blog" → /blog
  - "À propos" → /a-propos
  - Couleur : var(--color-text-secondary)
  - Hover : var(--color-text-primary) + soulignement doré 2px

CTA buttons :
  - Primaire : "Voir une démo" → /demo
    background: var(--gold-light)
    color: var(--color-bg-base)
    padding: 10px 22px
    border-radius: var(--radius-full)
    font: DM Sans 600, 14px
    hover: brightness(1.1) + shadow-glow-gold
  - (Pas de CTA secondaire en navbar pour ne pas diluer)
```

**Dropdown "Modules" :**
- Apparition : fade + translateY(-8px) → translateY(0), 200ms
- Fond : `var(--color-bg-elevated)`, border-radius: 16px, shadow-lg
- Padding : 16px
- Largeur : 340px
- 5 lignes, chacune :
  - Icône module (24×24, couleur du module)
  - Nom en DM Sans 500 15px
  - Sous-label en DM Sans 400 13px `var(--color-text-secondary)`

```
[Icône bleu]   Caisse NF525           Certifiée, TVA multi-taux
[Icône vert]   HACCP proactif         Veille réglementaire intégrée
[Icône violet] Ressources Humaines    Conforme CCN HCR
[Icône corail] Réservation            Synchronisée avec la caisse
[Icône ocre]   Gestion des stocks     Scan BL, marge en temps réel
```

**Mobile hamburger (≤ 768px) :**
- Bouton hamburger : 44×44px, top-right
- Menu : plein écran, fond `var(--color-bg-surface)`, slide depuis la droite
- Liens empilés, 24px de hauteur de ligne, padding-y 16px par item
- CTA "Voir une démo" pleine largeur en bas du menu

---

### 4.2 FOOTER

**Dimensions :**
- Fond : `var(--color-bg-surface)`
- Padding-top : 64px, Padding-bottom : 40px
- Bordure haut : `1px solid var(--color-border)`

**Structure — 4 colonnes (desktop) :**

```
Colonne 1 (30%) — Identité
  Logo Logones (version light, 120px)
  Paragraphe 60 mots max :
  "Logones est un logiciel de gestion tout-en-un pour restaurateurs
   indépendants, fondé à Lyon. Caisse NF525 + stocks + HACCP + RH
   + réservation dans un seul outil. Aucun frais caché. Aucune API tierce."
  Réseaux sociaux : LinkedIn, Instagram (icônes 20×20, gap 12px)

Colonne 2 (20%) — Produit
  Label "MODULES" (text-label, gold)
  Caisse NF525
  Gestion des stocks
  HACCP proactif
  Ressources Humaines
  Réservation

Colonne 3 (20%) — Entreprise
  Label "ENTREPRISE" (text-label, gold)
  Tarifs
  À propos
  Blog
  Demander une démo
  Support (lien mailto)

Colonne 4 (30%) — Légal & contact
  Label "LÉGAL" (text-label, gold)
  Mentions légales
  CGV
  Politique de confidentialité
  Cookies
  ——
  Adresse : SASU Logones
  c/o La Plank des Gones
  Lyon (69), France
  SIRET : [à compléter par Philippe]
  contact@logones.fr
```

**Barre basse :**
- Séparateur `1px solid var(--color-border)`
- Padding-y : 20px
- Texte gauche : `© 2026 Logones — SASU au capital de [X]€ — RCS Lyon [SIRET]`
- Texte droite : `NF525 • CCN HCR • RGPD`
- Font : DM Sans 400, 12px, `var(--color-text-muted)`

---

### 4.3 BOUTONS — système complet

```css
/* Bouton primaire — Or / CTA principal */
.btn-primary {
  background:      var(--gold-light);
  color:           var(--color-bg-base);
  font-family:     var(--font-body);
  font-size:       var(--text-btn-lg);
  font-weight:     var(--text-btn-w);
  letter-spacing:  var(--text-btn-ls);
  padding:         14px 32px;
  border-radius:   var(--radius-full);
  border:          none;
  cursor:          pointer;
  transition:      transform var(--duration-fast) var(--ease-spring),
                   box-shadow var(--duration-mid) var(--ease-out-expo);
}
.btn-primary:hover {
  transform:   translateY(-2px);
  box-shadow:  var(--shadow-glow-gold);
}
.btn-primary:active {
  transform: translateY(0);
}

/* Bouton secondaire — Outline */
.btn-secondary {
  background:    transparent;
  color:         var(--color-text-primary);
  border:        1px solid var(--color-border);
  /* Même dimensions que primaire */
  transition:    border-color var(--duration-fast),
                 color var(--duration-fast);
}
.btn-secondary:hover {
  border-color: var(--gold-light);
  color:        var(--gold-light);
}

/* Bouton ghost — fond clair */
.btn-ghost-dark {
  background:  transparent;
  color:       var(--color-text-dark);
  border:      1.5px solid var(--color-border-light);
}
.btn-ghost-dark:hover {
  background:  var(--color-bg-light-alt);
}

/* Bouton module — teinté par module */
.btn-module {
  /* Recevoir --module-color et --module-glow en var personnalisées */
  background:  color-mix(in srgb, var(--module-color) 15%, transparent);
  color:       var(--module-color);
  border:      1px solid color-mix(in srgb, var(--module-color) 30%, transparent);
}
.btn-module:hover {
  background: color-mix(in srgb, var(--module-color) 25%, transparent);
  box-shadow: 0 0 20px var(--module-glow);
}
```

---

### 4.4 CARD MODULE — composant réutilisable

```
Dimensions : 320px × auto (min 200px)
Fond : var(--color-bg-surface)
Border : 1px solid var(--color-border)
Border-radius : var(--radius-lg)
Padding : 28px
Transition hover : border-color → module color, translateY(-4px)

Structure interne :
  [Icône module 40×40px, couleur module]    — margin-bottom: 20px
  [Label module — text-label, couleur module, uppercase]  — margin-bottom: 8px
  [Titre H3 — Fraunces 400, 22px]           — margin-bottom: 12px
  [Description — DM Sans 400, 15px, text-secondary, 3 lignes max]
  [Séparateur 1px, margin-y 20px]
  [3 bullet points — icône check (couleur module), DM Sans 400 14px]
  [Lien "En savoir plus →" — couleur module, 14px 500]
```

---

### 4.5 FORMULAIRE DÉMO — composant

```
Champs (tous obligatoires sauf téléphone) :
  - Prénom + Nom (2 colonnes sur desktop, 1 sur mobile)
  - Email professionnel
  - Téléphone (optionnel)
  - Nom du restaurant
  - Ville
  - Nombre de couverts (select : Moins de 30 / 30-50 / 50-80 / 80-100 / Plus de 100)
  - Modules qui m'intéressent (checkboxes : Caisse, Stocks, HACCP, RH, Réservation)
  - Message libre (optionnel, 4 lignes)
  - Checkbox RGPD : "J'accepte que mes données soient utilisées pour traiter ma demande de démo,
    conformément à notre politique de confidentialité. Ces données ne seront jamais revendues."

CTA submit : "Demander ma démo gratuite"
  Style : btn-primary, pleine largeur

Texte sous le formulaire (DM Sans 400 13px, text-muted) :
  "Réponse sous 24h ouvrées. Démo en visio ou sur site à Lyon.
   Sans engagement. Disponibilité 7j/7 pour s'adapter à vos horaires de service."

Après soumission :
  Animation de confirmation : checkmark animé (SVG, couleur gold)
  Message : "Votre demande a bien été reçue. Nous vous recontactons sous 24h ouvrées
  pour convenir d'un créneau. Si votre service du soir ne vous laisse pas de temps libre,
  on s'adapte — même le dimanche matin."
```

---

### 4.6 BANNIÈRE COOKIES (RGPD/CNIL)

**Conformité :** Délibération CNIL n°2020-091 du 17 septembre 2020 + recommandation CNIL 2022.

```
Position : fixed, bottom: 0, left: 0, right: 0
z-index : 9999
Fond : var(--color-bg-elevated), backdrop-blur(20px)
Bordure haut : 1px solid var(--color-border)
Padding : 20px var(--section-padding-x)
Animation : slide-up depuis bottom: -100px, durée 400ms

Contenu :
  Texte (gauche, 60% largeur) :
  "Nous utilisons des cookies pour mesurer l'audience de notre site (analyse),
   améliorer votre navigation et mémoriser vos préférences. Aucun cookie publicitaire.
   Vous pouvez accepter, refuser ou personnaliser vos choix à tout moment."

  Boutons (droite, gap 12px) :
  - "Tout refuser" (btn-secondary, compact)
  - "Personnaliser" (btn-ghost-dark, compact)
  - "Tout accepter" (btn-primary, compact)

  Lien "Politique cookies" → /cookies (text-muted, 12px, soulignement)

RÈGLE CRITIQUE : les boutons "Accepter" et "Refuser" ont une proéminence visuelle IDENTIQUE
(pas de dark pattern — conforme recommandation CNIL).
```

---

## 5. PAGE HOME — SPÉCIFICATION PIXEL-PERFECT

### SECTION 1 — HERO

**Dimensions :**
- Hauteur desktop : 100vh (min 700px, max 1000px)
- Hauteur mobile : 100svh (min 600px)

**Fond :**
- Image de texture : `/assets/textures/ardoise-logones.jpg`
  - Description : photographie macro d'une ardoise naturelle noire-bleue légèrement humide, éclairage rasant latéral droit, quelques reflets minéraux, aucun texte visible. 1920×1080px minimum, format WebP.
  - `object-fit: cover`, `object-position: center`
  - Overlay : `linear-gradient(160deg, rgba(15,14,13,0.75) 0%, rgba(15,14,13,0.55) 50%, rgba(15,14,13,0.80) 100%)`
  - Second overlay basse : `linear-gradient(to bottom, transparent 60%, var(--color-bg-base) 100%)`

**Grain de texture (CSS) :**
```css
.hero::after {
  content: '';
  position: absolute; inset: 0;
  background-image: url('/assets/textures/grain.png');
  opacity: 0.04;
  pointer-events: none;
}
```

**Positionnement du contenu :**
- Centré verticalement via flexbox column
- Padding-top : 72px (hauteur navbar)
- Padding-x : `var(--section-padding-x)`
- Max-width container : 1000px, centré

**Contenu — structure de haut en bas :**

```
[Badge NF525]
  → Pill component
  → Fond : rgba(46, 134, 193, 0.15), border: 1px solid rgba(93, 173, 226, 0.30)
  → Icône : bouclier 16×16px (couleur --caisse-accent)
  → Texte : DM Sans 500, 13px, --caisse-accent
  → "Logiciel de caisse certifié NF525 • Lyon, Auvergne-Rhône-Alpes"
  → Padding : 6px 16px, border-radius: full
  → Margin-bottom : 32px

[H1 — titre principal]
  → Font : Fraunces 300 italic, clamp(48px, 7vw, 88px)
  → Color : var(--color-text-primary)
  → Letter-spacing : -0.03em
  → Line-height : 1.05
  → Max-width : 900px
  → Texte :
    "Le seul logiciel conçu
     par des restaurateurs
     pour des restaurateurs."
  → Mise en forme : "restaurateurs" (3e ligne) en Fraunces 600, non-italic, couleur --gold-light
  → Margin-bottom : 28px

[Sous-titre lead]
  → Font : DM Sans 400, clamp(17px, 1.5vw, 20px)
  → Color : var(--color-text-secondary)
  → Line-height : 1.65
  → Max-width : 600px
  → Texte :
    "Caisse NF525, stocks, HACCP, RH et réservation dans un seul outil
     nativement connecté. Fini les 4 abonnements qui ne se parlent pas.
     Dès 90 € TTC / mois, prix affichés sans surprise."
  → Margin-bottom : 40px

[Groupe CTA]
  → Display : flex, align-items: center, gap: 16px
  → Mobile : flex-col, pleine largeur
  
  CTA primaire : "Voir une démo — 30 min, sans engagement"
    → btn-primary, padding 16px 36px
    → Icône flèche-droite 16px à droite
  
  CTA secondaire : "Voir les tarifs"
    → btn-secondary
    → Icône étiquette-prix 16px

  [Social proof inline]
    → "Déjà utilisé par 3 restaurants lyonnais en beta"
    → DM Sans 400, 13px, var(--color-text-muted)
    → Dot séparateur doré
  → Margin-bottom : 64px

[Dashboard preview — élément hero signature]
  → Composant : mockup d'écran d'application flottant
  → Dimensions : 860px × 420px (desktop), 100% width (mobile, ratio maintenu)
  → Fond du mockup : var(--color-bg-surface), border-radius: 16px
  → Shadow : var(--shadow-xl) + glow doré subtil
  → Bordure : 1px solid var(--color-border)
  → Contenu : screenshot / illustration du dashboard Logones montrant simultanément
    4 widgets en grille 2×2 :
    - Widget "CA du jour" avec chiffre (ex: 2 847 €) et courbe sparkline bleue
    - Widget "Food cost en temps réel" (ex: 31,4%) avec alerte verte
    - Widget "HACCP — 12 relevés aujourd'hui" badge vert
    - Widget "3 réservations ce soir" avec plan de salle miniature
  → Fichier : /assets/mockups/hero-dashboard.png (voir section 14 pour brief complet)
  → Animation : apparition avec translateY(24px) → 0 + opacity 0→1, delay 400ms, duration 600ms
  → Sur mobile : version simplifiée 1 colonne, 2 widgets visible + scroll hint
```

**Animations Hero (séquence au chargement) :**
```
0ms    : Badge fade in + slide-up (80ms)
120ms  : H1 line 1 fade in + slide-up
240ms  : H1 line 2
360ms  : H1 line 3 (dorée)
480ms  : Sous-titre
600ms  : Groupe CTA
800ms  : Dashboard mockup (slide-up + fade, 600ms)
```

---

### SECTION 2 — BARRE DE VÉRITÉ (social proof & différenciateur)

**Dimensions :**
- Padding-y : 32px
- Fond : `var(--color-bg-surface)`
- Bordure haut et bas : `1px solid var(--color-border)`

**Contenu — 5 éléments en ligne (desktop), 2×3 grid (mobile) :**

```
Format de chaque item : [Chiffre/Label] + [Description]

Item 1 :
  Valeur : "NF525"
  Desc   : "Certifié (audit en cours)"
  Font valeur : Fraunces 600, 28px, --caisse-accent

Item 2 :
  Valeur : "5 modules"
  Desc   : "Nativement connectés"
  Font valeur : Fraunces 600, 28px, --gold-light

Item 3 :
  Valeur : "1 facture"
  Desc   : "Un seul abonnement"
  Font valeur : Fraunces 600, 28px, --gold-light

Item 4 :
  Valeur : "Prix publics"
  Desc   : "Affichés sans démo forcée"
  Font valeur : Fraunces 600, 28px, --haccp-accent

Item 5 :
  Valeur : "Lyon"
  Desc   : "Équipe locale, support en service"
  Font valeur : Fraunces 600, 28px, --resa-accent

Séparateurs : trait vertical 1px var(--color-border) entre chaque item (desktop)
Desc : DM Sans 400, 13px, var(--color-text-secondary)
Centrage : chaque item text-align: center
```

---

### SECTION 3 — LE PROBLÈME (fond clair)

**Dimensions :**
- Fond : `var(--color-bg-light)`
- Padding-y : `var(--section-padding-y)`
- Color du texte : `var(--color-text-dark)`

**Contenu :**

```
[Label section]
  "LA RÉALITÉ DU MARCHÉ"
  DM Sans 600, 11px, letter-spacing 0.08em, --caisse-mid

[H2]
  "255 € par mois pour 4 outils qui ne se parlent pas."
  Fraunces 400, clamp(28px, 3.5vw, 48px)
  Color : var(--color-text-dark)
  Max-width : 700px

[Lead]
  "C'est ce que paie en moyenne un restaurateur indépendant aujourd'hui.
   Une caisse. Un HACCP. Un logiciel RH. Un outil de réservation.
   Quatre contrats. Quatre SAV. Quatre mots de passe.
   Et zéro communication entre eux."
  DM Sans 400, 18px, var(--color-text-dark-sec), max-width 640px
  Margin-bottom : 48px

[Visualisation de la pile fragmentée]
  → Composant "Pile vs Logones" — 2 colonnes
  
  COLONNE GAUCHE — "Votre pile aujourd'hui"
    Titre : DM Sans 600, 16px, --color-text-dark
    4 cards empilées avec flèche brisée entre elles :
    
    Card 1 : Caisse (logo générique)     ~70 €/mois
    Card 2 : HACCP (logo générique)      ~40 €/mois
    Card 3 : RH / planning              ~75 €/mois
    Card 4 : Réservation               ~80 €/mois
    ————————————————————————
    Total visible : "~265 €/mois — 4 contrats"
    
    Badge sous le total : "❌ Aucune donnée partagée entre les outils"
    
    Style des cards : fond blanc, border 1px solid #E0D9D0,
    border-radius 10px, shadow-sm, padding 16px, gap 8px entre elles
    Les flèches entre les cards : tirets rouges ⚡ "Pas de connexion"
    
  FLÈCHE CENTRALE :
    Icône → Logones (logo), texte "vs"
    
  COLONNE DROITE — "Avec Logones"
    Titre : DM Sans 600, 16px, --gold-mid
    1 seule card englobant tous les modules
    
    Fond : var(--color-bg-base), border: 1px solid var(--gold-light)
    Border-radius : 16px, padding : 24px
    Shadow : var(--shadow-glow-gold)
    
    5 lignes de modules, chacun avec icône couleur module + check vert :
    ✓ Caisse NF525         [icône bleu]
    ✓ Stocks               [icône ocre]
    ✓ HACCP proactif       [icône vert]
    ✓ RH / planning        [icône violet]
    ✓ Réservation          [icône corail]
    ————————————————————————
    "À partir de 90 €/mois TTC"
    Fraunces 600, 22px, --gold-light
    
    Badge : "✓ Tout connecté nativement"
    Fond vert, DM Sans 600, 12px

[CTA sous le bloc]
  "Calculer ce que me coûte ma pile actuelle"
  → btn-primary mais version sombre (fond var(--color-text-dark), texte --color-bg-light)
  → Lien vers /tarifs (section simulateur)
```

---

### SECTION 4 — LES 5 MODULES (fond sombre)

**Dimensions :**
- Fond : `var(--color-bg-base)`
- Padding-y : `var(--section-padding-y)`

**Contenu :**

```
[Label]
  "UN SEUL OUTIL, CINQ MODULES NATIFS"
  DM Sans 600, 11px, --gold-light, letter-spacing 0.08em

[H2]
  "Tout ce dont votre restaurant a besoin.
   Tout au même endroit."
  Fraunces 400, centré, clamp(28px, 3.5vw, 48px)
  Margin-bottom : 64px

[Grille de 5 modules]
  Layout desktop : grille asymétrique
    - Ligne 1 : 3 cartes (Caisse, Stocks, HACCP) — 3 colonnes égales
    - Ligne 2 : 2 cartes centrées (RH, Réservation) — 2 colonnes
  Layout tablet (768-1024) : 2 colonnes
  Layout mobile : 1 colonne

  GAP : 16px (desktop), 12px (mobile)
```

**Carte Module Caisse :**
```
Border-color au hover : --caisse-bright
Icône : caisse enregistreuse stylisée (SVG, 40×40, --caisse-accent)
Label module : "CAISSE NF525" (--caisse-accent)
Titre : "La caisse qui connaît votre restaurant."
Description : "Certifiée NF525, elle gère nativement la TVA
multi-taux par client à la même table, les plans de salle dynamiques
et calcule vos marges en temps réel pendant le service."
Bullets :
  ✓ TVA individualisée par client (même table)
  ✓ Plan de salle relié aux réservations
  ✓ Calcul de marge sur composants en direct
```

**Carte Module Stocks :**
```
Icône : boîte de stockage / entrepôt (SVG, 40×40, --stocks-accent)
Label : "GESTION DES STOCKS" (--stocks-accent)
Titre : "Votre food cost. En temps réel. Sans ressaisie."
Description : "Scannez votre bon de livraison fournisseur. Le stock
se met à jour. La marge se recalcule. Immédiatement. Sans toucher à rien."
Bullets :
  ✓ Scan BL → stock automatique
  ✓ Alerte dérive food cost configurable
  ✓ Fiche technique par plat, coût à la portion
```

**Carte Module HACCP :**
```
Icône : bouclier + thermomètre (SVG, 40×40, --haccp-accent)
Label : "HACCP PROACTIF" (--haccp-accent)
Titre : "L'hygiène anticipée, pas subie."
Description : "Tableau de bord de complétude HACCP conforme au règlement
CE 852/2004. Alertes proactives avant vos échéances réglementaires —
pas après une mise en demeure."
Bullets :
  ✓ Veille réglementaire automatique intégrée
  ✓ Tableau de bord de complétude HACCP
  ✓ Historique horodaté exportable
```

**Carte Module RH :**
```
Icône : équipe / planning (SVG, 40×40, --rh-accent)
Label : "RESSOURCES HUMAINES" (--rh-accent)
Titre : "La paie et les plannings conformes CCN HCR."
Description : "Planning hebdomadaire, pointeuse intégrée, gestion CDI/CDD/CDDU,
alerte DPAE automatique. Conforme à la Convention Collective HCR IDCC 1979.
Aucun supplément par salarié — inclus dans le tier Premium."
Bullets :
  ✓ Conformité CCN HCR IDCC 1979
  ✓ Alerte DPAE à chaque contrat
  ✓ Ratio masse salariale / CA en temps réel
Note légale (12px muted) :
  "* Pour toute question de paie spécifique, consultez votre expert-comptable."
```

**Carte Module Réservation :**
```
Icône : calendrier + plan de salle (SVG, 40×40, --resa-accent)
Label : "RÉSERVATION" (--resa-accent)
Titre : "Vos réservations et votre salle, enfin synchronisées."
Description : "Plans de salle dynamiques mis à jour en temps réel selon les
réservations. Synchronisation native avec les stocks et la caisse.
Aucun abonnement réservation séparé."
Bullets :
  ✓ Plan de salle dynamique temps réel
  ✓ Widget réservation intégrable sur votre site
  ✓ Synchronisation automatique stocks ↔ réservation
```

---

### SECTION 5 — ARGUMENT CLÉ / CITATION FONDATEUR

**Dimensions :**
- Fond : `var(--color-bg-surface)`
- Padding-y : `var(--section-padding-y)`
- Bordure gauche décorative : `4px solid var(--gold-light)`

**Contenu (centré, max-width 760px) :**

```
[Guillemet décoratif]
  Caractère " (gros guillemet)
  Fraunces 600 italic, 120px, color: var(--gold-pale)
  Position : absolute, top: -20px, left: -20px

[Citation]
  "J'ai tenu un restaurant. J'ai utilisé 6 logiciels différents.
   Certains étaient bons chacun dans leur coin — mais aucun ne savait
   ce que faisait le voisin. J'ai construit Logones pour ne plus jamais
   avoir à ressaisir une donnée qui existait déjà ailleurs."
  Font : Fraunces 300 italic, clamp(22px, 2.5vw, 32px)
  Color : var(--color-text-primary)
  Line-height : 1.4

[Signature]
  Photo fondateur (ronde, 48×48px) + Nom Prénom + "Co-fondateur, Logones"
  DM Sans 500, 15px
  Margin-top : 32px

[CTA]
  "Notre histoire" → /a-propos
  Style : lien texte avec flèche, couleur --gold-light
```

---

### SECTION 6 — TARIFICATION (aperçu)

**Dimensions :**
- Fond : `var(--color-bg-light)`
- Padding-y : `var(--section-padding-y)`

**Contenu :**

```
[Label]
  "TARIFICATION TRANSPARENTE"
  DM Sans 600, 11px, letter-spacing 0.08em, --gold-mid

[H2]
  "Les prix affichés. Avant votre premier appel."
  Fraunces 400, centré

[Sous-texte]
  "13 logiciels sur 15 dans notre secteur cachent leurs prix derrière
   un formulaire de contact. Nous faisons le choix inverse."
  DM Sans 400, 16px, var(--color-text-dark-sec), centré, max-width 520px
  Margin-bottom : 56px

[Grille 3 plans]
  Layout : 3 colonnes égales, gap 20px
  Plan central (Pro) : légèrement surélevé + badge "Le plus choisi"

  PLAN STARTER
    Fond : white, border: 1px solid var(--color-border-light)
    Border-radius : var(--radius-lg), padding: 32px
    Label : "STARTER"
    Prix : "90 €" Fraunces 600, 48px, var(--color-text-dark) + "/mois TTC" DM Sans 400, 16px
    Sous-prix : "Sans matériel. Contrat 2 ans."
    Séparateur
    Modules inclus :
      ✓ Caisse NF525
      ✓ Gestion des stocks de base
      ✗ HACCP (grisé)
      ✗ RH (grisé)
      ✗ Réservation (grisé)
    CTA : "Demander une démo" (btn-ghost-dark)

  PLAN PRO
    Fond : var(--color-bg-base), border: 2px solid var(--gold-light)
    Shadow : var(--shadow-glow-gold)
    Transform : translateY(-12px) (légèrement surélevé)
    Badge en haut : "LE PLUS CHOISI"
      Fond: --gold-light, texte: --color-bg-base, DM Sans 600, 11px
      Position : absolute top: -14px, centré horizontalement
    Label : "PRO"
    Prix : "169 €" Fraunces 600, 48px, --gold-light + "/mois TTC"
    Modules inclus :
      ✓ Caisse NF525
      ✓ Gestion des stocks complète
      ✓ HACCP proactif
      ✗ RH (grisé)
      ✓ Réservation
    CTA : "Demander une démo" (btn-primary)

  PLAN PREMIUM
    Fond : var(--color-bg-surface), border: 1px solid var(--color-border)
    Label : "PREMIUM"
    Prix : "300 €" Fraunces 600, 48px, var(--color-text-primary) + "/mois TTC"
    Modules inclus :
      ✓ Caisse NF525
      ✓ Stocks complets
      ✓ HACCP proactif + veille réglementaire
      ✓ RH / planning CCN HCR
      ✓ Réservation
    CTA : "Demander une démo" (btn-secondary)

[Note légale sous la grille]
  "Tous les prix sont TTC, conformément à l'article L112-1 du Code de la consommation.
   Location matériel dès 1 200 € HT/an. Pour la partie comptable de votre gestion,
   nous vous recommandons de consulter votre expert-comptable."
  DM Sans 400, 12px, var(--color-text-dark-sec), centré, italic

[CTA vers la page complète]
  "Voir tous les détails, comparer les modules et simuler votre coût"
  → btn-primary dark, centré
  → Icône calculatrice 16px
```

---

### SECTION 7 — PREUVES & TESTIMONIALS

**Dimensions :**
- Fond : `var(--color-bg-base)`
- Padding-y : `var(--section-padding-y)`

**Contenu :**

```
[Label]
  "CE QUE DIT LE TERRAIN"

[H2]
  "Les premiers restaurateurs qui l'ont testé."
  Max-width 600px

[Grille 3 testimonials]
  Layout : 3 colonnes (desktop), 1 colonne (mobile)
  Chaque card :
    Fond : var(--color-bg-surface), border: 1px solid var(--color-border)
    Border-radius : var(--radius-md), padding : 28px
    
    [Étoiles] : 5 étoiles dorées, 16px
    [Citation] : DM Sans 400, 15px italic, var(--color-text-secondary), 4 lignes max
    [Auteur] :
      Photo ronde 40×40px + Prénom + "Nom du restaurant, Ville"
      DM Sans 500, 14px

  Testimonial 1 (Le Loup Pendu) :
    "Avant Logones, je fermais à 23h et je ressaisissais mes BL fournisseurs
     jusqu'à minuit et demi. Maintenant je scanne et c'est fait. Mes marges,
     je les vois en direct pendant le service — pour la première fois en 12 ans."
    — Prénom, Le Loup Pendu, Lyon

  Testimonial 2 (Sauf Imprévu) :
    "La partie HACCP est la première chose que mes équipes ont adoptée
     sans formation forcée. Les alertes arrivent avant que j'aie le temps
     de louper quelque chose. C'est exactement ce qu'on cherchait."
    — Prénom, Sauf Imprévu, Lyon

  Testimonial 3 (Beta restaurant Cannes) :
    "Ce qui m'a convaincu, c'est que les gens qui m'ont présenté le logiciel
     avaient vraiment tenu un restaurant. Ils savaient de quoi je parlais
     avant même que j'aie fini ma phrase."
    — Prénom, Restaurant, Cannes

[Note de honnêteté éditoriale]
  "Logones est actuellement en phase beta avec 3 restaurants partenaires.
   La certification NF525 est en cours d'audit. Lancement commercial : juillet 2026."
  DM Sans 400, 13px, var(--color-text-muted), centré, italic
```

---

### SECTION 8 — SIMULATEUR PILE LOGICIELLE

**Dimensions :**
- Fond : `var(--color-bg-surface)`
- Padding-y : `var(--section-padding-y)`
- Border-radius sur le container intérieur

**Contenu :**

```
[Label]
  "CALCULATEUR INTERACTIF"

[H2]
  "Combien vous coûte vraiment votre pile actuelle ?"

[Description]
  "Entrez les outils que vous utilisez aujourd'hui.
   Nous calculons le coût total sur 24 mois — frais cachés inclus."

[Interface du simulateur]
  Section "Vos outils actuels" :
    5 lignes toggleables :
    - Logiciel de caisse      [toggle ON/OFF] [champ prix/mois : input number, €]
    - Logiciel HACCP          [toggle ON/OFF] [champ prix/mois]
    - Logiciel RH / planning  [toggle ON/OFF] [champ prix/mois]
    - Outil réservation       [toggle ON/OFF] [champ prix/mois]
    - Autres abonnements      [toggle ON/OFF] [champ prix/mois]
    
    Pré-rempli avec valeurs moyennes marché (modifiables) :
    Caisse 70€, HACCP 40€, RH 75€, Réservation 80€, Autres 0€

  Résultat dynamique (mise à jour en temps réel) :
    "Votre pile actuelle sur 24 mois"
    [Grand chiffre] ex : "6 360 €"
    Fraunces 600, 56px, var(--color-text-primary)

    "vs Logones Premium sur 24 mois"
    [Grand chiffre] "7 200 €"
    Fraunces 600, 56px, var(--gold-light)

    [Badge différence] :
    Si pile < Logones : "Logones coûte X € de plus — mais un seul outil, une seule facture."
    Si pile > Logones : "Vous économisez X € sur 24 mois avec Logones."
    Si pile ≈ Logones : "À budget équivalent — mais un seul outil vs 4 abonnements séparés."

[Note obligatoire]
  "Ce comparatif est indicatif et basé sur des prix moyens du marché observés en 2026.
   Il ne constitue pas un conseil comptable. Pour une analyse précise de votre situation,
   consultez votre expert-comptable."
  DM Sans 400, 12px, var(--color-text-muted), italic

[CTA]
  "Je veux voir la démo" → /demo (btn-primary)
  "Voir les tarifs détaillés" → /tarifs (lien texte gold)
```

---

### SECTION 9 — NF525 / CONFORMITÉ RÉGLEMENTAIRE

**Dimensions :**
- Fond : `var(--color-bg-light)`
- Padding-y : `var(--section-padding-y-sm)`

**Contenu :**

```
[Layout : 2 colonnes 50/50]

COLONNE GAUCHE — Texte
  [Label] "CERTIFICATION NF525"
  [H3] "Votre logiciel de caisse est-il encore légal ?"
  [Texte]
    "Depuis la loi de finances 2016 (art. 286 bis du CGI), tout assujetti
     à la TVA utilisant un logiciel de caisse doit détenir une attestation
     de conformité. Les logiciels non conformes exposent leur utilisateur
     à une amende de 7 500 € (art. 1770 duodecies du CGI).
     
     Logones est en cours de certification NF525 auprès de l'organisme
     certificateur. L'audit est financé et planifié. Résultat attendu : juillet 2026."
  
  [CTA] "Vérifier la liste officielle AFNOR/Infocert"
    → lien externe vers https://www.infocert.org (s'ouvre dans nouvel onglet)
    → Style : lien texte avec icône lien externe, couleur --caisse-accent
  
  [Note] "Pour toute question sur vos obligations fiscales,
          consultez votre expert-comptable."

COLONNE DROITE — Visuel
  Illustration : bouclier stylisé avec sigle "NF525" intégré
  Fond : cercle --caisse-glow, shadow-glow-blue
  Taille : 200×200px centré dans la colonne
  Fichier : /assets/illustrations/nf525-shield.svg (voir section 14)
```

---

### SECTION 10 — ZONE GÉOGRAPHIQUE & ANCRAGE LOCAL

**Dimensions :**
- Fond : `var(--color-bg-base)`
- Padding-y : `var(--section-padding-y-sm)`

**Contenu :**

```
[Layout : texte gauche (50%), carte droite (50%)]

TEXTE :
  [Label] "PRÉSENCE LOCALE"
  [H3] "Fondé à Lyon. Pour les restaurants lyonnais d'abord."
  [Texte]
    "Logones démarre là où ses fondateurs ont exercé le métier :
     Lyon et la métropole. Puis l'Auvergne-Rhône-Alpes.
     Nous connaissons les bouchons lyonnais, les guinguettes du bord de Saône
     et les établissements de montagne. Votre marché, c'est le nôtre.
     
     Démos disponibles sur site à Lyon et en visio partout en AURA."
  
  [Liste] :
    📍 Démo sur site à Lyon (intramuros + métropole)
    📍 Démo visio pour le reste de l'AURA
    📞 Support pendant vos heures de service

CARTE :
  Illustration minimaliste de la région AURA avec point lumineux sur Lyon
  Style : dark map, lignes blanches fines, point doré sur Lyon
  Fichier : /assets/illustrations/carte-aura.svg (voir section 14)
```

---

### SECTION 11 — CTA FINALE (avant footer)

**Dimensions :**
- Fond : gradient `linear-gradient(135deg, var(--color-bg-surface) 0%, var(--haccp-deep) 100%)`
- Padding-y : `var(--section-padding-y)`
- Texture grain overlay (opacity 0.03)

**Contenu (centré) :**

```
[H2]
  "Votre prochain service mérite un meilleur outil."
  Fraunces 400 italic, centré, max-width 700px

[Sous-titre]
  "30 minutes de démo. Vous repartez avec les réponses à toutes vos questions —
   et un comparatif honnête avec ce que vous utilisez aujourd'hui."
  DM Sans 400, 18px, var(--color-text-secondary), centré

[Groupe CTA]
  CTA primaire : "Réserver une démo gratuite" → /demo (btn-primary, large)
  CTA secondaire : "Voir les tarifs" → /tarifs (btn-secondary)
  
  [Micro-réassurance]
  "✓ Sans engagement  ·  ✓ 30 minutes  ·  ✓ Disponible 7j/7"
  DM Sans 400, 13px, var(--color-text-muted)
```

---

## 6. PAGE MODULES — GABARIT ET DÉCLINAISONS

### 6.1 Gabarit page module (structure commune)

Toutes les pages `/modules/[slug]` partagent ce gabarit :

```
SECTION HERO MODULE (min-height: 60vh)
  Fond : gradient depuis --[module]-deep vers var(--color-bg-base)
  Badge module en haut (label + icône couleur module)
  H1 : accroche spécifique au module (Fraunces italic)
  Lead : bénéfice central (2-3 phrases)
  CTA primaire + CTA secondaire

SECTION PROBLÈME SPÉCIFIQUE
  "Ce que votre outil actuel ne fait pas" — 3 points douleur

SECTION FONCTIONNALITÉS DÉTAILLÉES
  Grille 2 colonnes : illustration/screen gauche, texte droite
  Alternance gauche/droite sur le scroll
  3-5 fonctionnalités

SECTION DIFFÉRENCIATEUR UNIQUE
  La fonctionnalité que personne d'autre ne fait
  Mise en valeur visuelle forte (fond coloré module)

SECTION CONFORMITÉ LÉGALE (si pertinent)
  Sources légales citées (NF525, CCN HCR, CE 852/2004)
  Disclaimer expert-comptable si fiscal/comptable

SECTION CTA
  Même gabarit que section 11 de la Home
```

### 6.2 Spécificités page Caisse

```
H1 : "La caisse qui connaît vraiment votre restaurant."
Couleur dominante : --caisse-bright (#2E86C1)

Fonctionnalité signature à mettre en avant :
  "TVA individualisée par client à la même table"
  
  Encadré spécial :
  Fond : --caisse-glow, border: 1px solid --caisse-accent
  
  Texte :
  "En France, un client qui commande avec alcool et un client qui commande
   sans alcool à la même table ne paient pas le même taux de TVA.
   La quasi-totalité des logiciels de caisse gèrent la TVA par table — pas par client.
   Logones la gère par client. C'est une différence fiscale, pas une option."
  
  Source : "Article 279 du CGI — taux réduit 10% boissons sans alcool,
  taux normal 20% boissons alcoolisées (hors exception)"
  
  Disclaimer obligatoire :
  "Pour votre situation fiscale spécifique, consultez votre expert-comptable."
```

### 6.3 Spécificités page HACCP

```
H1 : "L'hygiène alimentaire qui vous alerte avant — pas après."
Couleur dominante : --haccp-bright (#2D9B5A)

ATTENTION — nomenclature obligatoire :
Utiliser systématiquement : "Tableau de bord de complétude HACCP"
Ne JAMAIS utiliser : "simulateur d'inspection DDPP" (risque de responsabilité civile)

Conformité légale à citer :
  Règlement CE n°852/2004 du 29 avril 2004 relatif à l'hygiène des denrées alimentaires
  Article L233-1 du Code rural et de la pêche maritime (inspections sanitaires)

Fonctionnalité signature :
  "Veille réglementaire proactive automatique"
  "Logones surveille les évolutions réglementaires HACCP et vous alerte
   avant vos échéances — sans que vous ayez à surveiller le Journal Officiel."
```

### 6.4 Spécificités page RH

```
H1 : "Les plannings et la paie sans risque juridique."
Couleur dominante : --rh-bright (#5B4FBE)

Conformité légale à citer :
  CCN HCR IDCC 1979 (Convention Collective Nationale des Hôtels-Cafés-Restaurants)
  Article L3243-2 du Code du travail (bulletin de paie dématérialisé)
  Article R4121-1 du Code du travail (DUERP)
  DPAE (Déclaration Préalable À l'Embauche) : amende 1 625 € par salarié si manquante

Tableau des risques (référence doc module RH) :
  | Non-conformité | Risque | Montant |
  Reproduire tableau de la section 1.3 du document module_rh.md

Disclaimer OBLIGATOIRE en bas de page :
  "Les informations présentées sur cette page ont un caractère informatif général.
   Elles ne constituent pas un conseil juridique ou comptable.
   Pour la gestion de vos obligations sociales et fiscales, consultez votre
   expert-comptable inscrit à l'Ordre ou votre conseiller juridique."

Pricing RH :
  "Le module RH est inclus dans le tier Premium (300 € TTC/mois).
   Aucun supplément par salarié. Peu importe la taille de votre équipe."
```

---

## 7. PAGE PRICING

### Structure complète `/tarifs`

```
HERO PRICING
  H1 : "Nos tarifs. Affichés. Avant votre premier appel."
  Lead : "13 logiciels sur 15 dans notre secteur cachent leurs prix
  derrière un formulaire. Nous faisons le choix de la transparence."

SECTION — GRILLE TARIFAIRE COMPLÈTE
  [Reprendre la grille de la section 6 de la Home — version étendue]
  
  Tableau détaillé par fonctionnalité × 3 plans :
  
  | Fonctionnalité                          | Starter | Pro  | Premium |
  |-----------------------------------------|---------|------|---------|
  | Caisse NF525                            | ✓       | ✓    | ✓       |
  | Plan de salle dynamique                 | ✓       | ✓    | ✓       |
  | TVA multi-taux par client               | ✓       | ✓    | ✓       |
  | Stocks — suivi de base                  | ✓       | ✓    | ✓       |
  | Scan BL fournisseur → stock auto        | ✗       | ✓    | ✓       |
  | Calcul marge sur composants             | ✗       | ✓    | ✓       |
  | Alertes dérive food cost                | ✗       | ✓    | ✓       |
  | HACCP — tableau de bord complétude      | ✗       | ✓    | ✓       |
  | HACCP — veille réglementaire proactive  | ✗       | ✗    | ✓       |
  | Réservation — widget site internet      | ✗       | ✓    | ✓       |
  | Réservation → plan de salle → stocks    | ✗       | ✓    | ✓       |
  | Module RH — planning + pointeuse        | ✗       | ✗    | ✓       |
  | Conformité CCN HCR IDCC 1979            | ✗       | ✗    | ✓       |
  | Alerte DPAE automatique                 | ✗       | ✗    | ✓       |
  | Export paie expert-comptable CHR        | ✗       | ✗    | ✓       |
  | Support aux heures de service           | ✓       | ✓    | ✓       |
  | Onboarding sur site (région lyonnaise)  | ✓       | ✓    | ✓       |

SECTION — SIMULATEUR (version complète)
  [Reprendre le composant simulateur de la section 8 Home — version étendue]
  Ajouter : champ durée (12/24 mois), champ nombre de salariés (pour calcul RH vs Combo)

SECTION — FAQ PRICING
  Q : "Pourquoi un contrat 2 ans ?"
  R : "Parce que déployer un logiciel de caisse dans un restaurant prend du temps.
       Un onboarding sérieux, une formation équipe, une migration de données.
       Nous préférons un engagement clair plutôt que des frais cachés de résiliation."
  
  Q : "Puis-je résilier avant la fin du contrat ?"
  R : "Les conditions de résiliation sont dans nos CGV, en ligne avant votre premier appel.
       Vos données vous appartiennent et sont exportables dans un format standard sans frais."
  
  Q : "Le matériel est-il inclus ?"
  R : "Non. Le matériel (terminal tactile, imprimante de tickets) est disponible en location
       dès 1 200 € HT/an via notre partenaire matériel. Il peut aussi être acheté séparément."
  
  Q : "Logones est-il compatible avec mon TPE bancaire actuel ?"
  R : "Nous supportons les principaux terminaux de paiement du marché.
       Cette question est traitée lors de la démo en fonction de votre configuration."

NOTE LÉGALE OBLIGATOIRE EN BAS DE PAGE :
  "Tous les prix affichés sont TTC, conformément à l'article L112-1 du Code de la consommation.
   Les prix HT sont disponibles sur demande pour les professionnels assujettis à la TVA.
   Les informations tarifaires de cette page ne constituent pas un devis au sens du Code civil.
   Un devis contractuel est fourni avant toute signature. Pour la déductibilité de votre
   abonnement logiciel, consultez votre expert-comptable."
```

---

## 8. PAGE DÉMO

```
Layout : 2 colonnes (60% formulaire / 40% réassurance) — desktop
         1 colonne — mobile (réassurance au-dessus du formulaire)

COLONNE RÉASSURANCE (droite) :
  H3 : "Ce qui se passe lors de la démo"
  
  Timeline en 3 étapes :
  1. "On écoute votre restaurant" (10 min)
     "Vous nous parlez de vos outils actuels, de vos problèmes quotidiens,
      de la taille de votre équipe. Pas de script — une vraie conversation."
  2. "On vous montre ce qui vous concerne" (15 min)
     "Pas une démo générique. On vous montre les modules qui répondent
      à vos problèmes spécifiques — dans l'interface réelle."
  3. "On répond à toutes vos questions" (5 min)
     "Y compris les questions qu'on préférerait esquiver.
      Tarifs, contrat, délais, limites actuelles du produit."
  
  Bloc réassurance :
  ✓ Aucun argument de vente sous pression
  ✓ Disponible du mardi au dimanche, 9h-14h et 19h-22h
  ✓ En visio ou sur site à Lyon (intramuros + métropole)
  ✓ Vous repartez avec un comparatif personnalisé

COLONNE FORMULAIRE (gauche) :
  [Formulaire démo — voir section 4.5]
```

---

## 9. PAGE À PROPOS

```
SECTION HERO À PROPOS
  H1 : "Nous avons cherché ce logiciel. Il n'existait pas."
  Lead : "Logones est né d'une frustration réelle : 6 abonnements,
  4 SAV différents, des données qui ne se parlaient pas. Et une conviction —
  que les restaurateurs méritaient un outil conçu par des gens du métier."

SECTION HISTOIRE
  [Texte long fondateur, 3-4 paragraphes, ton authentique]
  
  Paragraphe 1 — Le constat :
  "J'ai tenu un restaurant. J'ai connu les fins de service où l'on ressaisit
   les bons de livraison du jour dans un tableur Excel à 23h30. Les contrôles
   HACCP où l'on cherche frénétiquement les relevés de température dans un
   classeur papier. Les plannings que personne ne comprend parce qu'ils sont
   sur une application qui ne sait pas ce qu'il y a dans les frigos."

  Paragraphe 2 — La décision :
  "On aurait pu assembler les meilleurs outils du marché. On a regardé.
   Il y avait des bons outils de caisse. De bons outils HACCP. De bons outils RH.
   Mais aucun qui se parlait. Et le coût total de la pile — sans frais cachés —
   dépassait systématiquement ce que les restaurateurs avaient anticipé à la signature."

  Paragraphe 3 — Le choix de la transparence :
  "Logones affiche ses prix. Avant votre premier appel. Parce que si votre
   concurrent n'affiche pas ses prix, c'est qu'il y a quelque chose à cacher.
   Nos CGV sont en ligne. Nos conditions de résiliation aussi. Ce n'est pas
   une vertu — c'est un choix commercial. La confiance se construit avant la signature."

SECTION ÉQUIPE
  Candice — Co-fondatrice, Produit & Marketing
    Photo, titre, courte bio (3 lignes), LinkedIn
  Philippe — Co-fondateur, Développement
    Photo, titre, courte bio (3 lignes), LinkedIn

SECTION VALEURS (3 colonnes)
  "La vérité sur nos prix"
  "Le support pendant vos services"
  "Les données qui vous appartiennent"

SECTION NF525 & CERTIFICATION
  État actuel honnête :
  "La certification NF525 est en cours d'audit. Elle sera obtenue avant le lancement
   commercial de juillet 2026. Nous ne vous vendrons pas un logiciel non certifié."
```

---

## 10. PAGE BLOG — STRUCTURE

```
LAYOUT LISTE ARTICLES
  H1 : "Veille réglementaire et gestion restaurant"
  Lead : "Des informations concrètes pour les restaurateurs indépendants.
          Réglementation, gestion financière, outils. Par des gens du métier."

  Catégories :
  [Toutes] [Réglementation] [Gestion financière] [Outils & logiciels] [RH & équipe] [HACCP]

  Grille d'articles :
  Layout : 3 colonnes desktop, 2 tablet, 1 mobile
  
  Chaque card article :
    Image de couverture (16:9, 400px × 225px)
    Catégorie (label coloré selon catégorie)
    Titre H3 (Fraunces 400, 20px)
    Extrait (DM Sans 400, 14px, 2 lignes)
    Date + temps de lecture
    Auteur (initiales + nom)

LAYOUT ARTICLE INDIVIDUEL
  Max-width corps : 720px, centré
  
  Header article :
    Catégorie + date
    H1 (Fraunces 400, clamp 32px-48px)
    Lead (DM Sans 400, 18px, italic)
    Auteur + date + temps de lecture
    Image de couverture pleine largeur (ratio 16:9)
  
  Corps :
    H2 : Fraunces 600, 28px
    H3 : DM Sans 600, 20px
    Body : DM Sans 400, 17px, line-height 1.75
    Blocs "À retenir" : fond --gold-pale, border-left 4px --gold-light
    Citations légales : fond --caisse-glow, monospace, 14px
  
  Disclaimer de bas d'article (pour tout contenu fiscal ou comptable) :
    Fond : var(--color-bg-light), border-radius var(--radius-md), padding 20px
    Texte :
    "⚠️ Les informations fiscales et réglementaires présentées dans cet article
     ont un caractère informatif général. Elles ne constituent pas un conseil
     comptable ou juridique. Pour toute question relative à votre situation
     personnelle, consultez votre expert-comptable inscrit à l'Ordre des
     experts-comptables (ordonnance du 19 septembre 1945)."
  
  Barre latérale (sticky, desktop) :
    Table des matières
    CTA démo compact
    Articles connexes (3)
```

**5 premiers articles à produire (par ordre de priorité SEO + stratégie) :**

| # | Titre | Catégorie | Mot-clé cible | Priorité |
|---|---|---|---|---|
| 1 | Votre logiciel de caisse est-il certifié NF525 ? Comment vérifier en 2026 | Réglementation | logiciel caisse nf525 | 🔴 Immédiat |
| 2 | Combien coûte vraiment la gestion logicielle d'un restaurant indépendant en 2026 | Gestion financière | coût logiciel restaurant | 🔴 Immédiat |
| 3 | HACCP proactif vs HACCP réactif : ce que votre logiciel ne vous dira pas avant l'inspection | HACCP | logiciel haccp restaurant | 🟡 Semaine 2 |
| 4 | TVA multi-taux en restauration : la règle que 80% des restaurateurs ignorent | Réglementation | tva restauration multi-taux | 🟡 Semaine 2 |
| 5 | Les 5 erreurs RH qui coûtent le plus cher aux restaurateurs indépendants | RH & équipe | droit social restauration | 🟢 Mois 1 |

---

## 11. PAGES LÉGALES

### 11.1 Mentions légales (`/mentions-legales`)

```
Contenu obligatoire (art. 6 loi n°2004-575 du 21 juin 2004 - LCEN) :

1. Identification de l'éditeur :
   Raison sociale : Logones SAS [compléter forme exacte]
   Forme juridique : SASU
   Capital social : [à compléter par Philippe/Cabinet Expeo]
   Siège social : [adresse Lyon]
   RCS Lyon : [numéro]
   SIRET : [numéro]
   TVA intracommunautaire : FR[numéro]
   
   Représentant légal : [Prénom Nom], en qualité de Président

2. Éditeur et directeur de la publication :
   [Prénom Nom Candice]
   contact@logones.fr

3. Hébergeur :
   [Nom de l'hébergeur — à compléter]
   [Adresse]
   [Numéro de téléphone]

4. Propriété intellectuelle :
   "L'ensemble du contenu de ce site (textes, images, logotypes, structure)
    est la propriété exclusive de Logones SASU et est protégé par les lois
    françaises et internationales sur la propriété intellectuelle."

5. Cookies et données personnelles :
   Renvoi vers /politique-confidentialite et /cookies

6. Liens vers :
   Médiateur de la consommation (art. L612-1 Code de la consommation) :
   [Coordonnées du médiateur]
```

### 11.2 Structure CGV (`/cgv`)

```
Sections obligatoires :

1. Objet et champ d'application
2. Description des services (avec référence aux 3 tiers et leurs prix TTC)
3. Prix et modalités de paiement
   - Mention "prix TTC, TVA au taux en vigueur"
   - Périodicité de facturation (mensuel)
4. Durée du contrat (2 ans, conditions de renouvellement)
5. CONDITIONS DE RÉSILIATION (section critique — à détailler précisément)
   - Préavis requis
   - Format de la demande
   - Portabilité des données garantie sans frais
   - Format d'export
6. Responsabilité et limitations
7. Données personnelles (RGPD)
8. Loi applicable et juridiction compétente (Lyon)
9. Médiation des litiges (art. L612-1 Code de la consommation)
```

---

## 12. SEO & DONNÉES STRUCTURÉES

### 12.1 JSON-LD — Page Home

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Logones",
  "description": "Logiciel de caisse NF525 tout-en-un pour restaurateurs indépendants. Caisse + stocks + HACCP + RH + réservation nativement connectés.",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter",
      "price": "90",
      "priceCurrency": "EUR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "90",
        "priceCurrency": "EUR",
        "unitText": "mois"
      }
    },
    {
      "@type": "Offer",
      "name": "Pro",
      "price": "169",
      "priceCurrency": "EUR"
    },
    {
      "@type": "Offer",
      "name": "Premium",
      "price": "300",
      "priceCurrency": "EUR"
    }
  ],
  "provider": {
    "@type": "LocalBusiness",
    "name": "Logones",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon",
      "addressRegion": "Auvergne-Rhône-Alpes",
      "addressCountry": "FR"
    }
  }
}
```

### 12.2 JSON-LD — FAQ Page Pricing

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Pourquoi un contrat de 2 ans pour Logones ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Parce que déployer un logiciel de caisse dans un restaurant prend du temps. Un onboarding sérieux, une formation équipe, une migration de données. Nous préférons un engagement clair plutôt que des frais cachés de résiliation."
      }
    },
    {
      "@type": "Question",
      "name": "Le matériel est-il inclus dans le prix Logones ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non. Le matériel est disponible en location dès 1 200 € HT/an. Il peut aussi être acheté séparément."
      }
    }
  ]
}
```

### 12.3 Open Graph (toutes les pages)

```html
<!-- Home -->
<meta property="og:title" content="Logones — Logiciel de caisse NF525 tout-en-un pour restaurateurs" />
<meta property="og:description" content="Caisse NF525 + stocks + HACCP + RH + réservation nativement connectés. Fondé par des restaurateurs lyonnais. Dès 90 € TTC/mois." />
<meta property="og:image" content="https://logones.fr/assets/og/og-home.jpg" />
<!-- og:image dimensions : 1200×630px -->
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Logones — Logiciel restaurant tout-en-un" />
<meta name="twitter:image" content="https://logones.fr/assets/og/og-home.jpg" />
```

### 12.4 Structure de heading par page

```
Home :
  H1 : "Le seul logiciel conçu par des restaurateurs pour des restaurateurs."
  H2 : "255 € par mois pour 4 outils qui ne se parlent pas."
  H2 : "Tout ce dont votre restaurant a besoin. Tout au même endroit."
  H2 : "Les prix affichés. Avant votre premier appel."
  H2 : "Les premiers restaurateurs qui l'ont testé."
  H2 : "Combien vous coûte vraiment votre pile actuelle ?"
  H2 : "Votre prochain service mérite un meilleur outil."

Tarifs :
  H1 : "Nos tarifs. Affichés. Avant votre premier appel."
  H2 : "Comparer les fonctionnalités"
  H2 : "Simulez votre économie"
  H2 : "Questions fréquentes"

Module Caisse :
  H1 : "La caisse qui connaît vraiment votre restaurant."
  H2 : [Fonctionnalité 1]
  H2 : [Fonctionnalité 2]
  H2 : "Certification NF525 — vos obligations légales"
```

---

## 13. ACCESSIBILITÉ & PERFORMANCES

### 13.1 WCAG 2.1 niveau AA — exigences minimales

```
Contrastes couleur :
  Texte normal (< 18pt) : ratio minimum 4.5:1
  Texte grand (≥ 18pt) : ratio minimum 3:1
  
  Vérifications obligatoires :
  var(--color-text-secondary) #A89F94 sur --color-bg-base #0F0E0D : calculer
  var(--color-text-primary)   #F0EDE8 sur --color-bg-base #0F0E0D : ✓ (ratio ~16:1)
  var(--gold-light)           #D4A840 sur --color-bg-base #0F0E0D : calculer
  var(--color-text-dark)      #1A1916 sur --color-bg-light #F5F2ED : ✓ (ratio ~14:1)

Focus visible :
  Tous les éléments interactifs ont un outline visible au focus
  outline: 2px solid var(--gold-light); outline-offset: 3px;

Attributs ARIA :
  Navigation principale : role="navigation" aria-label="Navigation principale"
  Dropdown modules : aria-haspopup="true" aria-expanded="false/true"
  Formulaire démo : aria-required, aria-describedby pour les erreurs
  Bannière cookies : role="dialog" aria-labelledby aria-live="polite"

Images :
  Toutes les images ont un alt descriptif
  Images décoratives : alt="" (vide)
  Icônes standalone : aria-label sur l'élément parent
```

### 13.2 Performances cibles

```
Core Web Vitals cibles :
  LCP (Largest Contentful Paint) : < 2.5s
  FID (First Input Delay)        : < 100ms
  CLS (Cumulative Layout Shift)  : < 0.1

Techniques obligatoires :
  - Images hero en WebP, avec fallback JPEG
  - font-display: swap pour les Google Fonts
  - Préchargement des polices critiques :
    <link rel="preload" href="fraunces-300-italic.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="dm-sans-400.woff2" as="font" type="font/woff2" crossorigin>
  - Lazy loading sur toutes les images hors viewport
  - CSS critique inline dans le <head>
  - Defer sur les scripts non-critiques
  - Compression gzip/brotli activée côté serveur
  - Cache-Control adapté par type d'asset
```

---

## 14. ASSETS VISUELS — BRIEF IMAGE PAR IMAGE

### 14.1 Textures & fonds

**ASSET : `/assets/textures/ardoise-logones.jpg`**
```
Type    : Photographie macro
Sujet   : Surface d'ardoise naturelle bleue-noire
Détail  : Éclairage rasant depuis la droite, légère humidité créant quelques reflets
          irisés, texture minérale visible, aucun texte ni élément identifiable
Palette : Noirs profonds (#0A0A0C), bleus-gris (#1A2030), reflets silver (#3A4050)
Format  : JPEG + WebP, 1920×1080px minimum, 300dpi
Usage   : Fond Hero page Home
Nom     : ardoise-logones.jpg / ardoise-logones.webp
```

**ASSET : `/assets/textures/grain.png`**
```
Type    : Texture bruit numérique
Sujet   : Grain photographique monochrome, taille moyenne des grains ~1-2px
Palette : Niveaux de gris, opacity en CSS 0.04
Format  : PNG transparent, 400×400px tileable
Usage   : Overlay sur sections sombres
```

**ASSET : `/assets/textures/pierre-claire.jpg`**
```
Type    : Photographie macro
Sujet   : Pierre calcaire claire (blanc-crème, beige chaud), texture légèrement
          granuleuse, éclairage doux et diffus, aucun ombre dure
Palette : Blancs chauds (#F5F2ED), crèmes (#EDE9E2), reflets dorés très subtils
Format  : JPEG + WebP, 1920×600px
Usage   : Fond sections claires (sections 3, 6, 10 de la Home)
```

### 14.2 Mockups & interfaces

**ASSET : `/assets/mockups/hero-dashboard.png`**
```
Type    : Illustration UI / mockup d'interface
Sujet   : Dashboard Logones avec 4 widgets en grille 2×2
Style   : Interface réaliste, dark theme (fond #1A1916), typographie DM Sans

Widget 1 (haut gauche — Caisse) :
  Label "CA aujourd'hui" en DM Sans 500, 12px, #A89F94
  Valeur "2 847 €" en Fraunces 600, 36px, #F0EDE8
  Sous-valeur "+ 12% vs hier" en DM Sans 500, 13px, #2D9B5A
  Sparkline courbe bleue (--caisse-accent) sur les 7 derniers jours

Widget 2 (haut droite — Stocks/Marge) :
  Label "Food cost en temps réel" en DM Sans 500, 12px, #A89F94
  Valeur "31,4 %" en Fraunces 600, 36px, #F0EDE8
  Badge "Objectif 32% ✓" fond vert clair, DM Sans 500, 12px

Widget 3 (bas gauche — HACCP) :
  Label "HACCP — aujourd'hui" en DM Sans 500, 12px, #A89F94
  Valeur "12 relevés" Fraunces 600, 28px, #F0EDE8
  Barre de progression verte "Complétude 100%"
  Badge "✓ Conforme" fond --haccp-bright

Widget 4 (bas droite — Réservations) :
  Label "Réservations ce soir" en DM Sans 500, 12px, #A89F94
  Valeur "3 tables" Fraunces 600, 28px, #F0EDE8
  Plan de salle miniature (8 tables, 3 colorées en --resa-accent)

Dimensions finales : 1720×840px (@2x pour retina), fond transparent
Format : PNG avec transparence OU fond #1A1916 avec border-radius 20px
```

**ASSET : `/assets/mockups/caisse-interface.png`**
```
Type    : Mockup interface caisse
Sujet   : Écran de prise de commande Logones, vue tablette
Éléments visibles :
  - Plan de salle avec 3 tables actives, 2 inactives
  - Table sélectionnée avec commande en cours
  - Affichage TVA multi-taux par client : 2 sous-totaux visibles
  - Bouton "Encaisser" en --caisse-bright
Style   : Interface sombre, propre, typographie lisible
Format  : PNG, 1200×800px
```

### 14.3 Illustrations SVG

**ASSET : `/assets/illustrations/nf525-shield.svg`**
```
Type    : Illustration vectorielle
Sujet   : Bouclier stylisé géométrique avec sigle "NF525" intégré
Style   : Minimal, trait propre, 2 couleurs max : --caisse-bright + --caisse-accent
Éléments :
  - Forme bouclier : contour 2px --caisse-accent sur fond --caisse-glow
  - Texte "NF525" au centre : DM Sans 700, proportion 40% du bouclier
  - Étoile ou checkmark en bas : 16px, --caisse-accent
Dimensions : 200×200px viewBox "0 0 200 200"
```

**ASSET : `/assets/illustrations/modules-connected.svg`**
```
Type    : Schéma de connexion
Sujet   : 5 modules Logones connectés entre eux par des lignes animées
Style   : Cercles de 60px chacun avec icône centrale + couleur module
          Lignes de connexion entre tous les modules, style tiret animé
          (stroke-dasharray animé en CSS)
Modules :
  Caisse (bleu, haut-centre) → Stocks (ocre, droite) → HACCP (vert, bas-droite)
  → RH (violet, bas-gauche) → Réservation (corail, gauche)
  → lignes croisées vers tous les autres
Animation : les lignes "circulent" avec stroke-dashoffset animé
Dimensions : 500×400px viewBox
```

**ASSET : `/assets/illustrations/carte-aura.svg`**
```
Type    : Carte géographique simplifiée
Sujet   : Région Auvergne-Rhône-Alpes avec point lumineux sur Lyon
Style   :
  Fond : transparent
  Contour régional : trait 1.5px #3A4050 (couleur neutre sombre)
  Remplissage régional : #1A2030 (bleu-gris très sombre)
  Départements : séparations fines 0.5px #2A3040
  Point Lyon : cercle 12px --gold-light avec halo animé (pulse CSS)
    + label "Lyon" DM Sans 600, 14px, --gold-light
  Points secondaires (Grenoble, Saint-Étienne, Clermont, Chambéry) :
    cercles 6px #A89F94 + labels DM Sans 400, 11px, #6B6560
Dimensions : 400×480px viewBox (ratio portrait)
```

### 14.4 Icônes modules

Les 5 icônes modules doivent être des SVG cohérents visuellement (même style de trait, même épaisseur 2px, même rondeur des coins) :

**Style commun :**
- Trait : 2px strokeWidth, strokeLinecap: round, strokeLinejoin: round
- Pas de remplissage (outline only)
- viewBox : "0 0 24 24"
- Fichiers : `/assets/icons/module-[nom].svg`

```
module-caisse.svg     : forme de caisse enregistreuse stylisée
                        (écran rectangle + clavier + tiroir)

module-stocks.svg     : boîte de rangement vue de face
                        (cube avec couvercle ouvert + flèche descendante)

module-haccp.svg      : bouclier + thermomètre intégré
                        (bouclier arrondi + trait thermomètre centré)

module-rh.svg         : deux silhouettes humaines + calendrier en arrière
                        (formes simplifiées, grille calendrier visible)

module-reservation.svg: calendrier + épingle de localisation
                        (calendrier standard + pin géolocalisation droite)
```

### 14.5 Images Open Graph

**ASSET : `/assets/og/og-home.jpg`**
```
Dimensions : 1200×630px
Fond       : --color-bg-base (#0F0E0D) avec texture ardoise subtile
Contenu    :
  Logo Logones centré (haut), blanc, 160px
  H1 partiel "Conçu par des restaurateurs" Fraunces 300 italic, 52px, blanc
  Sous-ligne "pour des restaurateurs." Fraunces 600, 52px, --gold-light
  Badge NF525 (bas gauche) + "Lyon · AURA" (bas droite) DM Sans 400, 14px
Format     : JPEG qualité 90
```

---

## 15. RGPD & CONFORMITÉ CNIL

### 15.1 Registre des traitements (résumé pour le site)

```
Traitements de données via le site :

1. FORMULAIRE DÉMO
   Finalité : traitement des demandes de démonstration
   Base légale : exécution de mesures précontractuelles (art. 6.1.b RGPD)
   Données : nom, email, tel (opt), restaurant, ville, couverts, modules
   Durée : 3 ans à compter du dernier contact ou de la fin du contrat
   Sous-traitants : [hébergeur email / CRM — à lister]

2. ANALYTICS
   Finalité : mesure d'audience du site
   Base légale : consentement (art. 6.1.a RGPD)
   Outil recommandé : Matomo auto-hébergé (pas de transfert hors UE)
   Ou : Plausible Analytics (données anonymisées, exemption CNIL possible)
   Durée de conservation : 13 mois maximum (recommandation CNIL)
   
   NOTE : si Matomo auto-hébergé avec anonymisation IP, exemption possible
   de recueil du consentement selon délibération CNIL 2023

3. COOKIES TECHNIQUES
   Finalité : fonctionnement du site (session, préférences langue)
   Base légale : intérêt légitime / nécessité technique
   Exemptés de consentement selon art. 82 loi Informatique et Libertés

4. NEWSLETTER (si activée)
   Finalité : communication commerciale
   Base légale : consentement (art. 6.1.a RGPD)
   Double opt-in obligatoire (recommandation CNIL)
```

### 15.2 Droits des personnes (mentions obligatoires)

```
À intégrer dans la politique de confidentialité (/politique-confidentialite) :

"Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n°78-17
du 6 janvier 1978 modifiée (loi Informatique et Libertés), vous disposez :
  - d'un droit d'accès à vos données (art. 15 RGPD)
  - d'un droit de rectification (art. 16 RGPD)
  - d'un droit à l'effacement (art. 17 RGPD)
  - d'un droit à la limitation du traitement (art. 18 RGPD)
  - d'un droit à la portabilité (art. 20 RGPD)
  - d'un droit d'opposition (art. 21 RGPD)

Pour exercer ces droits : contact@logones.fr
Vous pouvez également introduire une réclamation auprès de la CNIL :
www.cnil.fr ou CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07"
```

---

## ANNEXE A — DÉCLARATION DE NON-USAGE

Les formulations suivantes sont **interdites** dans l'ensemble du site :

| Formulation interdite | Formulation correcte | Raison |
|---|---|---|
| "Simulateur d'inspection DDPP" | "Tableau de bord de complétude HACCP" | Risque de responsabilité civile (fausse promesse de résultat d'inspection) |
| "Certification NF525 obtenue" | "Certification NF525 en cours d'audit" | Réalité au 01/07/2026 |
| "Conseil fiscal" ou "conseil comptable" | Information + disclaimer vers expert-comptable | Monopole Ordre des experts-comptables (ordonnance 19/09/1945) |
| Prix HT sans précision | Prix TTC avec mention "dont TVA X%" | Art. L112-1 Code de la consommation |
| Simuler, prédire un résultat d'inspection | Mesurer la complétude des enregistrements | Précision légale |

---

## ANNEXE B — CHECKLIST DE MISE EN LIGNE

**Avant le premier commit :**
- [ ] Tous les prix affichés en TTC
- [ ] Disclaimer expert-comptable présent sur chaque page mentionnant fiscal/comptable
- [ ] "Tableau de bord de complétude HACCP" vérifié partout (aucune mention "simulateur DDPP")
- [ ] Bannière cookies conforme CNIL (bouton refus aussi visible que bouton accepter)
- [ ] Mentions légales complètes (SIRET, RCS, capital, hébergeur)
- [ ] CGV en ligne, accessible depuis le footer
- [ ] Lien médiateur de la consommation dans CGV et mentions légales
- [ ] robots.txt : bloquer /demo/confirmation, /admin
- [ ] sitemap.xml généré et soumis à Google Search Console
- [ ] Google Search Console + Matomo/Plausible configurés
- [ ] Formulaire démo testé complet (soumission → email confirmation → notification équipe)
- [ ] Version mobile testée sur : iPhone SE (375px), iPhone 14 (390px), iPad (768px)
- [ ] Contraste WCAG AA vérifié sur les éléments critiques
- [ ] LCP < 2.5s mesuré via Lighthouse
- [ ] Toutes les balises OG et meta description renseignées
- [ ] Liens internes entre les pages modules vérifiés
- [ ] Données structurées JSON-LD validées via l'outil de test Google

---

*Document produit par analyse stratégique — Logones, Mai 2026*
*Usage : interne, transmission à développeur ou IDE. Confidentiel.*
*Ce document sera mis à jour à chaque évolution majeure du produit ou de la réglementation applicable.*
