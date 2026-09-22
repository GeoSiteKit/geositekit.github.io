# GeoSiteKit

Site statique public de GeoSiteKit, publié séparément par GitHub Pages depuis la
racine de `main` du dépôt `GeoSiteKit/geositekit.github.io`. Les dossiers de
génération `_build_ursy/` et `_tools/` ne font pas partie de la publication.

## Pages

- `index.html` : accueil et présentation des six modules géographiques.
- `approche.html` : origine et méthode de lecture de site.
- `automatisations.html` : catalogue des quatre automatisations livrées, sans téléchargement additionnel fictif.
- `mode-emploi.html` : guide interactif de l’application ; les commandes métier sont inertes.
- `telechargement.html` : futur parcours d’installation Setup. Le bouton ne s’active que si `latest-beta.json` fournit un `installer_url` officiel, un `installer_type` égal à `setup_exe` et une empreinte SHA-256 valide.
- `contact.html` : formulaire de contact.

## Vérification locale

```powershell
python _tools\validate_site.py
node --check script.js
node --check guide.js
node --check download.js
```

Le validateur vérifie les six pages, la navigation commune, les liens internes et les garde-fous de la page de téléchargement. Une publication GitHub Pages reste une opération distincte de toute modification locale.
