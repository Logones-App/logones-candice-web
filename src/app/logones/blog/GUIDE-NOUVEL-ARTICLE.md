# Guide — Créer un nouvel article de blog

> Quand l'utilisateur dit **« on crée un nouvel article »**, suivre ce guide.
> Il décrit (1) les infos à demander et (2) les étapes d'implémentation.

---

## 1. Infos à demander à l'utilisateur

Poser ces questions (en une fois) :

1. **Thème** — parmi les 9 (voir tableau plus bas). Détermine l'URL et la page thème.
2. **Titre** de l'article.
3. **Corps du texte** — brut suffit, on met en forme avec les primitives `Prose`.
   L'utilisateur peut aussi donner juste un **angle + points clés** → on rédige le brouillon.
4. **Date/heure de publication** — ex. « 15 juin 2026 à 9h ». Ou **« brouillon »** si pas encore décidé.
5. *(optionnel)* **Extrait** court (sinon on le rédige), **temps de lecture** (sinon on estime),
   **image de couverture** (sinon on choisit parmi `/public/images`).

L'**auteur** par défaut est `"L'équipe Logones"` sauf indication contraire.

---

## 2. Thèmes disponibles (slug → libellé)

| Slug (URL)              | Libellé              |
| ----------------------- | -------------------- |
| `rentabilite`           | Rentabilité          |
| `food-cost`             | Food cost            |
| `rh-planning`           | RH & planning        |
| `haccp`                 | HACCP                |
| `reservation`           | Réservation          |
| `marketing-restaurant`  | Marketing restaurant |
| `reglementation-chr`    | Réglementation CHR   |
| `logiciel-caisse`       | Logiciel de caisse   |
| `pilotage-multi-sites`  | Pilotage multi-sites |

Source de vérité : `THEME_LABELS` dans `lib/articles.ts`.

**Slug d'article** : kebab-case, sans accent, riche en mots-clés.
Ex. `cout-cache-logiciel-restaurant`.

---

## 3. Étapes d'implémentation

### Étape A — Créer le fichier de contenu

`src/app/logones/blog/content/<theme>/<slug>.tsx`

```tsx
import { Lead, H2, H3, P, Strong, UL, LI, Callout, Stat, Quote } from "../../components/Prose";

export function MonArticleBody() {
  return (
    <>
      <Lead>Paragraphe d'introduction (plus grand).</Lead>
      <H2>Une section</H2>
      <P>Un paragraphe. <Strong>Texte important.</Strong></P>
      <UL>
        <LI>Point de liste</LI>
      </UL>
      <Callout title="À retenir">Encadré orange.</Callout>
      <Stat value="+23 %" label="Légende de la statistique." />
      <Quote cite="Source">Citation mise en avant.</Quote>
    </>
  );
}
```

**Primitives disponibles** (`components/Prose.tsx`) — ne pas styler à la main, réutiliser :
- `Lead` — chapô / intro
- `H2`, `H3` — titres de section
- `P` — paragraphe ; `Strong` — emphase
- `UL` + `LI` — liste à puces orange
- `Callout` (prop `title?`) — encadré orange
- `Stat` (props `value`, `label`) — gros chiffre sur fond navy
- `Quote` (prop `cite?`) — citation

### Étape B — Enregistrer l'article

Dans `src/app/logones/blog/lib/articles.ts` :

1. Importer le composant en haut :
   ```ts
   import { MonArticleBody } from "../content/<theme>/<slug>";
   ```
2. Ajouter un objet au tableau `ARTICLES` :
   ```ts
   {
     theme: "<theme>",
     themeLabel: THEME_LABELS["<theme>"],
     slug: "<slug>",
     title: "…",
     excerpt: "…",
     category: "…",            // badge uppercase (souvent = libellé du thème)
     readTime: "7 min",
     publishedAt: "2026-06-15T09:00:00+02:00", // ISO ; futur = programmé
     dateLabel: "15 juin 2026",
     // draft: true,            // décommenter pour un brouillon (jamais visible)
     cover: "/images/<fichier>.png", // ou null
     author: "L'équipe Logones",
     Content: MonArticleBody,
   }
   ```

C'est tout pour que l'article **existe** : la route `/logones/blog/<theme>/<slug>`,
le SEO (metadata + JSON-LD), le fil d'ariane, « à lire aussi » et la page thème
se génèrent automatiquement.

### Étape C — Câblage sur la page blog (à faire selon le besoin)

L'état actuel du câblage de la page index (`blog/page.tsx` et ses sections) :

- **Catégories** (`BlogCategories.tsx`) → **automatique** : une catégorie devient
  cliquable dès qu'un article **publié** existe dans son thème.
- **Article à la une** (`BlogFeatured.tsx`) → **codé en dur** sur l'article
  « coût caché logiciel ». Si l'utilisateur veut mettre le nouvel article à la une,
  modifier le titre, l'extrait, la stat, l'image et le lien dans `BlogFeatured.tsx`.
- **« Nos derniers articles »** (`BlogLatest.tsx`) → **statique** (5 cartes
  placeholder, liens `#`). ⚠️ N'affiche PAS automatiquement les nouveaux articles.
  Si on veut que ce soit dynamique, le réécrire pour mapper `getPublishedArticles()`
  (proposer à l'utilisateur).

### Étape D — Vérifier

```bash
npx tsc --noEmit
# (optionnel mais recommandé) build complet pour valider le SSG/ISR :
npx next build
```

---

## 4. Programmation des dates (rappel)

- `publishedAt` **dans le futur** → article masqué partout + URL en **404** jusqu'à la date.
- **ISR** activé (`revalidate = 600` sur `blog/page.tsx`, `blog/[theme]/page.tsx`,
  `blog/[theme]/[slug]/page.tsx`) → sur Vercel/Node, l'article apparaît **tout seul**
  dans les ~10 min suivant l'heure programmée. Aucun rebuild nécessaire.
- `draft: true` → jamais visible, quelle que soit la date.
- Pour une heure quasi exacte, on peut baisser `revalidate` (ex. 60).

---

## 5. Images de couverture existantes (`/public/images`)

Réutilisables si l'utilisateur ne fournit pas d'image :
- `Gemini_Generated_Image_3pri453pri453pri (1).png` — restaurateur stressé devant Excel (coûts/gestion)
- `Gemini_Generated_Image_rpasizrpasizrpas (1).png` — bar / restaurant en service
- `Gemini_Generated_Image_v1tagev1tagev1ta.png` — restaurateur + tablette + POS
- `Gemini_Generated_Image_g70c5ag70c5ag70c.png` — manager + tablette plan de salle
- `Gemini_Generated_Image_28fx4j28fx4j28fx.png` — bouchon lyonnais

Si l'utilisateur fournit une nouvelle image, la déposer dans `/public/images` et
référencer son chemin dans `cover`.

---

## 6. Charte (rappel)

- **Police : Poppins partout**, titres en `fontWeight: 850` (pas de serif, pas d'italique simulant un serif).
- Couleurs : navy `#07111F`/`#0B1626`, crème `#F7F3EC`, orange `#FF6A1A`. **Pas de violet.**
- Palette centralisée : `blog/palette.ts`.
