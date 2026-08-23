# GeoSiteKit

Site officiel de GeoSiteKit : de la donnée au projet.

Le site est statique et publié par GitHub Pages depuis la racine de la branche
`main` du dépôt public `GeoSiteKit/geositekit.github.io`. Cette copie locale
n'est pas un clone Git : la publication doit synchroniser explicitement les
fichiers publics vers ce dépôt, puis vérifier `www.geositekit.ch`. Les dossiers
de génération `_build_ursy/` et `_tools/` restent exclus de la publication.

## Structure

- `index.html` : page d'accueil et présentation du produit.
- `mode-emploi.html` : guide interactif de 31 écrans couvrant l'accueil, les
  paramètres, les six modules et les quatre automatisations fournies.
  L'interface affiche volontairement l'exemple fictif `Genève · parcelle
  4590`. Le fond `assets/jonction-orthophoto.png` reste un export officiel SITG
  de La Jonction, obtenu avec le contour source `24:4151` filtré et surligné
  (`ortho`, zoom 4, 1600 × 1000 ; © SITG) ; ce numéro source n'est pas présenté
  comme la référence de l'exemple documentaire. Le fichier
  `assets/solar-heatmap-demo.png` est un exemple visuel
  reproductible à grille de 1 m : son générateur accumule 84 positions du
  soleil sur des masques alignés de bâtiments et de végétation, puis confie la
  classification et le rendu RGBA au moteur GeoSiteKit. Il reprend donc les
  six classes et leurs couleurs exactes, sans prétendre constituer un calcul
  scientifique exécuté sur le site.
- `guide.js` / `guide.css` : parcours entre les écrans simulés et présentation
  responsive du guide. Les commandes métier y sont inertes ; seuls les
  contrôles qui ouvrent un autre écran sont actifs.
- `telechargement.html` / `download.js` / `download.css` : téléchargement et
  instructions d'installation, dont le choix d'unité AutoCAD affiché avant le
  lancement lorsque le DWG n'est pas déclaré en mètres. Sans manifeste valide,
  le bouton ouvre la dernière publication GitHub au lieu de proposer une
  version dupliquée et potentiellement périmée.
- `contact.html` / `contact.js` / `contact.css` : formulaire de contact.
- `styles.css` / `script.js` : styles communs, accueil et navigation mobile.
- `assets/` : identité visuelle et scènes utilisées par le site.
