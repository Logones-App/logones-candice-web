# Signature email Logones

## Fichiers

| Fichier | Usage |
| --- | --- |
| `signature.html` | Signature complète (premier contact, prospection) |
| `signature-courte.html` | Version compacte (réponses, fils de discussion) |
| `logo-logones.png` | Logo 512×512, servi sur `https://logones.fr/email/logo-logones.png` |

## Avant la première utilisation

1. Remplacer dans les deux fichiers les champs entre crochets :
   - `[Prénom NOM]`, `[Fonction]`
   - `[06 00 00 00 00]` et `tel:+33[NUMERO SANS ESPACES]` (ex. `tel:+33612345678`)
   - `[URL LINKEDIN]`, `[URL INSTAGRAM]`
2. Déployer le site pour que `https://logones.fr/email/logo-logones.png` soit accessible
   publiquement — le logo ne s'affichera pas tant que l'URL renvoie un 404.

## Installation dans Gmail / Google Workspace

1. Ouvrir `signature.html` dans Chrome (double-clic sur le fichier).
2. `Ctrl+A` puis `Ctrl+C`.
3. Gmail → ⚙️ → *Voir tous les paramètres* → onglet *Général* → *Signature* → *Créer*.
4. Coller avec `Ctrl+V` (pas `Ctrl+Shift+V`, qui supprimerait la mise en forme).
5. Définir la signature par défaut pour les nouveaux messages **et** les réponses,
   puis *Enregistrer les modifications* en bas de page.

Astuce : créer deux signatures Gmail — « Logones » (complète) pour les nouveaux
messages, « Logones court » pour les réponses.

## Notes techniques

- 100 % tableaux + CSS inline : compatible Gmail, Outlook (bureau et web),
  Apple Mail, iOS, Thunderbird. Aucune balise `<style>`, aucun flexbox/grid
  (Outlook les ignore), largeurs en pixels.
- Le logo est référencé par URL absolue plutôt qu'en base64 : Gmail et Outlook
  bloquent ou cassent les images `data:` dans les signatures.
- Tous les liens portent des paramètres UTM
  (`utm_source=signature`) pour isoler le trafic issu des signatures dans
  les statistiques.
- La palette suit les tokens du site : `#0D1B2A` (fond logo), `#E26818` (accent),
  `#0D1B2A`/`#4A4A58`/`#6E6D7C` pour les textes.
