const tourSteps = [
  {
    screen: 'home',
    label: 'Accueil',
    kicker: 'Accueil',
    title: 'Préparez le dessin depuis un point central.',
    copy: "L'accueil rassemble la localisation, l'emprise, les six modules disponibles et le transfert vers AutoCAD.",
    details: [
      ['Commune et N° Parcelle', "L'exemple fictif utilise Genève, parcelle 4590, pour illustrer la recherche des géoservices compatibles."],
      ['Entrer', "Recherche la parcelle dans l'application réelle. La commande est désactivée dans ce guide."],
      ["Rayon d'import", "Définit la demi-largeur de la zone carrée demandée aux serveurs."],
      ['Aperçu de la zone', "Ouvre l'écran de contrôle de l'emprise ; il s'agit d'une navigation autorisée dans le guide."],
      ['Cases des modules', "Elles commencent toutes décochées, puis le guide active chaque module dans l'ordre en conservant les précédents."],
      ['Engrenages', "Chaque engrenage ouvre maintenant la fenêtre propre au module correspondant."],
      ['Lancer le téléchargement', "Prépare les modules cochés puis le script AutoCAD. Il reste inactif sur le site."]
    ]
  },
  {
    screen: 'zone-preview',
    label: "Aperçu de l'emprise",
    kicker: "Accueil · Aperçu",
    title: "Contrôlez l'emprise sans modifier le dessin.",
    copy: "La carte superpose le secteur demandé, la parcelle et le centre LV95 avant tout téléchargement.",
    details: [
      ['Rectangle', "Représente la BBOX carrée envoyée aux services géographiques."],
      ['Parcelle', "Le contour jaune du fond SITG sert d'illustration à l'exemple fictif Genève, parcelle 4590."],
      ['Rayon', "Redimensionne l'emprise dans l'application réelle ; le curseur du guide est désactivé."],
      ['Appliquer', "Valide le rayon réel. Le bouton présenté ici n'enregistre rien."],
      ['Bouton maison', "Revient à l'accueil de la maquette."]
    ]
  },
  {
    screen: 'settings-general',
    label: 'Paramètres · Général',
    kicker: 'Paramètres généraux · 1/3',
    title: "Définissez les conventions communes à tous les imports.",
    copy: "Cet onglet reprend le préfixe, la langue cadastrale, le dossier Attachments et les commandes d'assistance de l'application.",
    details: [
      ['Préfixe GSK_', "Le guide montre GSK_ comme préfixe configuré pour cet exemple ; il est ajouté aux noms de calques affichés."],
      ['Langue cadastrale', "Filtre les couches en français, allemand, italien ou dans toutes les langues lorsque la source le permet."],
      ['Dossier Attachments', "Choisit où conserver les images et fichiers externes liés au DWG."],
      ['Reporter un bug', "Prépare un rapport et un courriel dans l'application réelle ; aucune action n'est lancée ici."],
      ['Désinstaller', "Retire l'application et l'intégration AutoCAD tout en conservant les données utilisateur."],
      ['Onglets', "Général, Connexions serveur et Style de calque général ouvrent trois écrans distincts du guide."]
    ]
  },
  {
    screen: 'settings-connections',
    label: 'Paramètres · Connexions',
    kicker: 'Paramètres généraux · 2/3',
    title: 'Comprenez quelles sources alimentent chaque module.',
    copy: "Le tableau décrit les connexions, leurs rôles, leur protocole, leur territoire et leur dernier état connu.",
    details: [
      ['Activée', "Indique si la connexion peut être utilisée pour une recherche."],
      ['Rôles', "Associe une source au cadastre vectoriel, aux orthophotos ou aux arbres 2D."],
      ['Protocole', "Précise le mode de lecture : WFS, ArcGIS, STAC, WMS ou cache local."],
      ['Dernier test', "Résume le dernier contrôle sans garantir la disponibilité future du service."],
      ['Modifier', "Ouvre les URL, priorités, délais et territoires de la connexion dans l'application réelle."],
      ['Ajouter / Dupliquer / Restaurer', "Gèrent le catalogue de connexions. Ces actions restent désactivées sur le site."]
    ]
  },
  {
    screen: 'settings-layers',
    label: 'Paramètres · Calques généraux',
    kicker: 'Paramètres généraux · 3/3',
    title: 'Centralisez les styles communs du dessin.',
    copy: "Cette table applique les propriétés AutoCAD aux calques qui ne dépendent pas d'un module particulier.",
    details: [
      ['Calque AutoCAD', "Affiche le préfixe configuré et le suffixe du calque cible."],
      ['Geler / Verrouiller / Tracer', "Préparent les états du calque lors de sa création."],
      ['Couleur', "Utilise l'index de couleur AutoCAD."],
      ['Type et épaisseur', "Définissent le type de ligne et son épaisseur de tracé."],
      ['Cadre d’import', "Matérialise la zone demandée autour du centre du projet."],
      ['Rapport GeoSiteKit', "Regroupe les éléments de compte rendu produits par certains traitements."]
    ]
  },
  {
    screen: 'support',
    label: 'Support · Assistant',
    kicker: 'Support',
    title: 'Choisissez une aide locale, personnelle ou hors ligne.',
    copy: "L'aide documentaire locale ne nécessite ni clé ni réseau. Les fournisseurs API restent des clés personnelles et chaque action dans GeoSiteKit demande une confirmation.",
    details: [
      ['Aide locale', "Répond à partir de la documentation versionnée livrée avec l’application, sans envoi de question."],
      ['Mode utilisé maintenant', "Choisissez explicitement l’aide locale, l’IA externe avec votre clé personnelle, ou le modèle local hors ligne. Le bandeau vert indique ce qui répond réellement à cet instant."],
      ['Paramètres ⚙', "Permet d’ajouter, remplacer, tester ou supprimer une clé Gemini API, OpenAI API ou Anthropic API. La clé reste enregistrée lorsque vous changez de mode."],
      ['Modèle local', "Se télécharge seulement à la demande, est vérifié par empreinte et fonctionne ensuite sans clé ni réseau. Le téléchargement n’active pas ce mode automatiquement et sa suppression n’efface pas votre clé API."],
      ['Recherche Web Gemini', "Doit être activée explicitement. Ses sources sont visibles et elle ne déclenche jamais d’import, de réglage ni d’action automatique."],
      ['Reporter un bug', "Prépare un rapport depuis l’application ; l’envoi final et le consentement restent sous le contrôle de l’utilisateur."]
    ]
  },
  {
    screen: 'home-module-raster',
    label: 'Accueil · Plan cadastral image',
    kicker: 'Accueil · Module 1/6',
    title: "Repérez le plan cadastral image sur l'accueil.",
    copy: "Le guide revient à l'accueil et coche uniquement ce premier module avant d'ouvrir ses paramètres.",
    details: [
      ['Case du module', "Active le fond cadastral raster dans l'application réelle ; elle reste inerte dans le guide."],
      ['Source officielle', "Est déterminée automatiquement d'après la commune et l'emprise."],
      ['Plan cadastral image', "Attache une image cadastrale géoréférencée comme fond de lecture."],
      ['Engrenage', "Est le seul contrôle actif de la ligne et ouvre les paramètres propres au module."]
    ]
  },
  {
    screen: 'module-raster',
    label: 'Module · Plan cadastral image',
    kicker: 'Paramètres · Module 1/6',
    title: 'Réglez le fond cadastral raster.',
    copy: "Le plan cadastral image possède un réglage de calque dédié et s'attache comme image géoréférencée.",
    details: [
      ['GSK_IMAGE_CADASTRE', "Calque cible présenté avec le préfixe configuré pour cet exemple."],
      ['Geler / Verrouiller', "Définissent l'état initial du calque raster."],
      ['Tracer', "Détermine si le calque participe à l'impression."],
      ['Couleur / Type / Épaisseur', "Conservent les propriétés AutoCAD communes à tous les modules."],
      ['OK / Annuler', "Appliquent ou abandonnent les changements dans l'application réelle ; ils sont inactifs ici."]
    ]
  },
  {
    screen: 'home-module-vector',
    label: 'Accueil · Vecteurs cadastraux',
    kicker: 'Accueil · Module 2/6',
    title: "Repérez les vecteurs cadastraux sur l'accueil.",
    copy: "Le plan cadastral image reste coché et le guide ajoute les vecteurs cadastraux avant d'ouvrir leurs paramètres.",
    details: [
      ['Case du module', "Active les parcelles, bâtiments et autres objets vectoriels dans l'application réelle."],
      ['Serveur officiel', "Indique la connexion sélectionnée pour la commune et l'emprise courantes."],
      ['Vecteurs cadastraux (DXF)', "Préparent les géométries retenues dans des calques AutoCAD."],
      ['Engrenage', "Ouvre les deux écrans réellement documentés : Couches puis Styles des calques."]
    ]
  },
  {
    screen: 'module-vector-layers',
    label: 'Vecteurs · Couches',
    kicker: 'Paramètres · Module 2/6 · 1/2',
    title: 'Choisissez précisément les couches cadastrales.',
    copy: "Le catalogue dépend du serveur, du territoire et de l'emprise ; les lignes visibles sont des exemples documentaires.",
    details: [
      ['Rechercher', "Filtre un catalogue parfois volumineux sans changer la sélection."],
      ['Importer', "Active une couche source. Les coches du guide ne peuvent pas être modifiées."],
      ['Catégorie', "Rapproche la couche brute d'une catégorie AutoCAD lisible."],
      ['Objets / État', "Indiquent le résultat du contrôle effectué sur l'emprise."],
      ['Tout cocher / décocher', "Modifient la sélection réelle ; ils sont volontairement désactivés."],
      ['Ouvrir les connexions serveur', "Est le seul bouton actif du panneau car il ouvre un autre écran du guide."]
    ]
  },
  {
    screen: 'module-vector-styles',
    label: 'Vecteurs · Styles',
    kicker: 'Paramètres · Module 2/6 · 2/2',
    title: 'Transformez les couches source en calques AutoCAD cohérents.',
    copy: "Chaque couche sélectionnée reçoit un nom, une couleur et des propriétés de tracé distinctes.",
    details: [
      ['Couche source', "Conserve le libellé renvoyé par le géoservice."],
      ['Calque AutoCAD', "Montre la destination finale avec le préfixe GSK_ configuré dans l'exemple."],
      ['Geler / Tracer', "Préparent l'affichage et l'impression du calque."],
      ['Couleur', "Utilise l'index AutoCAD choisi pour la catégorie."],
      ['Type', "Sélectionne Continuous, Hidden, Dashed, Center ou Phantom."],
      ['Épaisseur', "Associe une épaisseur de ligne de 0.00 à 0.70 mm ou la valeur par défaut."]
    ]
  },
  {
    screen: 'home-module-trees',
    label: 'Accueil · Arbres 2D',
    kicker: 'Accueil · Module 3/6',
    title: "Repérez les arbres 2D sur l'accueil.",
    copy: "Les deux premiers modules restent cochés et le guide ajoute Arbres 2D avant ses paramètres.",
    details: [
      ['Case du module', "Active les arbres 2D dans l'application réelle ; elle reste inerte dans le guide."],
      ['Source disponible', "Peut désigner un serveur vectoriel ou la détection locale VHM/LiDAR."],
      ['Arbres 2D', "Produisent des blocs, contours, ombres et un tableau récapitulatif selon les réglages."],
      ['Engrenage', "Ouvre les paramètres de source, de détection et de calques propres aux arbres."]
    ]
  },
  {
    screen: 'module-trees',
    label: 'Module · Arbres 2D',
    kicker: 'Paramètres · Module 3/6',
    title: 'Choisissez entre source vectorielle et détection locale.',
    copy: "La fenêtre reprend le choix de source, les paramètres de détection VHM et les calques détaillés des arbres.",
    details: [
      ['Serveur vectoriel', "Utilise une source officielle ou cantonale compatible avec la localisation."],
      ['Algorithme', "Détecte les couronnes à partir du modèle de hauteur de végétation."],
      ['Hauteur et lissage', "Écartent les objets trop bas et stabilisent la surface analysée."],
      ['Distance entre cimes', "Évite de créer plusieurs arbres pour une même couronne."],
      ['Rayons', "Bornent les couronnes et définissent le tronc des blocs produits."],
      ['Tableau récapitulatif', "Ajoute une synthèse des arbres importés dans AutoCAD."],
      ['Calques', "Séparent bloc, contour, hachure, nom, numéro, ombre, tronc et tableau."]
    ]
  },
  {
    screen: 'home-module-orthophoto',
    label: 'Accueil · Orthophoto',
    kicker: 'Accueil · Module 4/6',
    title: "Repérez l'orthophoto sur l'accueil.",
    copy: "Les trois modules précédents restent cochés et le guide ajoute Orthophoto ; les modules suivants restent encore décochés.",
    details: [
      ['Case du module', "Active une ou plusieurs images aériennes dans l'application réelle."],
      ['swisstopo · 2025', "Résume la source et le millésime choisis pour cet exemple."],
      ['Orthophoto', "Prépare une image ajustée à l'emprise et son attachement géoréférencé."],
      ['Engrenage', "Ouvre d'abord la source et le millésime, puis les styles du module."]
    ]
  },
  {
    screen: 'module-orthophoto-source',
    label: 'Orthophoto · Source',
    kicker: 'Paramètres · Module 4/6 · 1/2',
    title: 'Sélectionnez une source et son millésime.',
    copy: "Une même emprise peut contenir plusieurs orthophotos téléchargées ainsi qu'une image locale déjà géoréférencée.",
    details: [
      ['Source', "Liste les services disponibles pour la localisation validée."],
      ['Millésime', "Choisit l'année et, lorsqu'elle est connue, la résolution de l'image."],
      ['Orthophoto existante', "Associe une image locale à son fichier compagnon de géoréférencement."],
      ['Choisir / Modifier / Effacer', "Gèrent les fichiers locaux dans l'application réelle ; ils sont désactivés ici."],
      ['Fenêtres liées', "Les deux boutons actifs passent de la source aux styles sans exécuter de téléchargement."]
    ]
  },
  {
    screen: 'module-orthophoto-styles',
    label: 'Orthophoto · Styles',
    kicker: 'Paramètres · Module 4/6 · 2/2',
    title: 'Identifiez chaque image par son millésime.',
    copy: "Le calque de l'orthophoto téléchargée peut recevoir automatiquement l'année de la source sélectionnée.",
    details: [
      ['Suffixe 2025', "Distingue cet exemple d'une seconde acquisition ou d'une orthophoto locale."],
      ['Geler / Verrouiller', "Préparent l'état d'affichage de l'image attachée."],
      ['Tracer', "Contrôle la participation du calque à l'impression."],
      ['Styles du module', "Centralisent couleur, type et épaisseur comme dans les autres modules."],
      ['Source et millésime', "Revient à la fenêtre liée pour choisir l'acquisition."]
    ]
  },
  {
    screen: 'home-module-contours',
    label: 'Accueil · Courbes de niveaux',
    kicker: 'Accueil · Module 5/6',
    title: "Repérez les courbes de niveaux sur l'accueil.",
    copy: "Les quatre modules précédents restent cochés et le guide ajoute Courbes de niveaux avant ses réglages.",
    details: [
      ['Case du module', "Active la génération des courbes à partir du MNT officiel."],
      ['Équidistance 1 m', "Résume l'intervalle vertical choisi dans cet exemple."],
      ['Courbes de niveaux', "Peuvent être produites en 2D ou en 3D avec leurs textes d'altitude."],
      ['Engrenage', "Ouvre les choix de géométrie, d'équidistance, de simplification et de calques."]
    ]
  },
  {
    screen: 'module-contours',
    label: 'Module · Courbes de niveaux',
    kicker: 'Paramètres · Module 5/6',
    title: "Adaptez le relief à l'usage du dessin.",
    copy: "La fenêtre combine les options propres au MNT avec les styles des courbes et de leurs textes.",
    details: [
      ['2D (Z=0)', "Crée des courbes planes pour une utilisation graphique."],
      ['3D (Z réel)', "Conserve l'altitude réelle dans la géométrie AutoCAD."],
      ['Équidistance', "Propose 0.5, 1.0, 2.0 ou 5.0 mètres entre deux courbes."],
      ['Transformer en splines', "Convertit les polylignes lorsque le rendu l'exige."],
      ['Simplification', "Réduit progressivement le nombre de sommets de 0 à 100 %."],
      ['Calques', "Sépare courbes 2D, courbes 3D et textes d'altitude."]
    ]
  },
  {
    screen: 'home-module-3d',
    label: 'Accueil · Jeux de données 3D',
    kicker: 'Accueil · Module 6/6',
    title: "Repérez les jeux de données 3D sur l'accueil.",
    copy: "Le guide coche enfin Jeux de données 3D : les six modules sont alors tous actifs avant le dernier paramétrage.",
    details: [
      ['Case du module', "Active les bâtiments tridimensionnels lorsque l'emprise est couverte."],
      ['swissBUILDINGS3D', "Indique la source proposée pour les géométries 3D de cet exemple."],
      ['Jeux de données 3D', "Préparent les bâtiments disponibles dans un calque distinct."],
      ['Engrenage', "Ouvre le paramétrage du calque et de ses propriétés AutoCAD."]
    ]
  },
  {
    screen: 'module-3d',
    label: 'Module · Données 3D',
    kicker: 'Paramètres · Module 6/6',
    title: 'Préparez les bâtiments tridimensionnels.',
    copy: "Le module Jeux de données 3D dispose d'un calque propre pour les bâtiments disponibles sur l'emprise.",
    details: [
      ['GSK_BATI_3D', "Reçoit les géométries de bâtiments 3D avec le préfixe de l'exemple."],
      ['Geler / Verrouiller', "Préparent la visibilité et la protection du calque."],
      ['Tracer', "Détermine si les objets seront imprimés."],
      ['Couleur / Type / Épaisseur', "Appliquent les conventions de dessin communes."],
      ['Disponibilité', "Dépend de la couverture réelle du jeu swissBUILDINGS3D ou de la source choisie."]
    ]
  },
  {
    screen: 'automation-catalog',
    label: 'Automatisations',
    kicker: 'Automatisations · Catalogue',
    title: 'Ouvrez les extensions fournies avec GeoSiteKit.',
    copy: "Le catalogue peut aussi accueillir des automatisations utilisateur ; le guide présente les quatre extensions livrées.",
    details: [
      ['Nom / Description', "Identifient l'extension et son résultat attendu."],
      ['Version / État', "Indiquent la version du manifeste et la capacité de lancement."],
      ['Renommer', "Modifie seulement le nom affiché dans l'application réelle ; le bouton est inactif ici."],
      ['Lancer', "Ouvre d'abord la présentation de l'automatisation choisie, puis sa fenêtre simulée, sans exécuter son code."],
      ['Actualiser', "Relit les automatisations installées sur le poste."],
      ['Importer', "Ajoute une archive ou un dossier de confiance ; cette action est désactivée dans le guide."],
      ['Dossier utilisateur', "Ouvre l'emplacement réservé aux automatisations personnalisées."]
    ]
  },
  {
    screen: 'automation-intro-altitude',
    label: "Hub · Points d'altitude",
    kicker: 'Automatisations 1/4 · Présentation',
    title: "Présentez Points d'altitude MNT avant sa fenêtre.",
    copy: "Le hub décrit le résultat attendu, la version et l'état de l'extension avant toute ouverture.",
    details: [
      ['Nom', "Identifie l'automatisation Points d'altitude MNT."],
      ['Description', "Annonce le placement des points, le calcul de leur altitude et la préparation des blocs AutoCAD."],
      ['Version / État', "Affichent le manifeste 1.0.0 et sa disponibilité dans cet exemple."],
      ['Renommer', "Reste inactif dans le guide comme toute commande métier."],
      ['Ouvrir la fenêtre', "Est le seul contrôle actif et conduit à la simulation détaillée."],
      ['Retour Catalogue', "Revient au hub complet des quatre automatisations."]
    ]
  },
  {
    screen: 'automation-altitude',
    label: "Automatisation · Points d'altitude",
    kicker: 'Automatisation 1/4 · Fenêtre',
    title: "Placez des points et calculez leur altitude.",
    copy: "La vraie fenêtre associe une carte orthophoto, un mode de calcul et une table de points prêts pour AutoCAD.",
    details: [
      ['Vue complète', "Recadre la carte sur l'emprise de travail."],
      ["Rafraîchir l'orthophoto", "Recharge l'image de fond si le service a changé."],
      ['Ajouter des points', "Active la saisie de positions sur la carte."],
      ['Calcul local', "Télécharge le MNT swissALTI3D au lieu d'interroger uniquement le service rapide."],
      ['Table des points', "Affiche coordonnées, altitude, source et statut de chaque point."],
      ['Annuler / Vider / Réessayer', "Corrigent la liste sans toucher au dessin tant que l'insertion n'est pas lancée."],
      ['Insérer dans AutoCAD', "Prépare les blocs altimétriques ; le bouton reste inactif sur le site."]
    ]
  },
  {
    screen: 'automation-intro-profiles',
    label: 'Hub · Profils de terrain',
    kicker: 'Automatisations 2/4 · Présentation',
    title: 'Présentez Profils de terrain avant sa fenêtre.',
    copy: "Le hub explique le passage d'un tracé ou d'une polyligne à un profil topographique avant d'afficher ses outils.",
    details: [
      ['Nom', "Identifie l'automatisation Profils de terrain."],
      ['Description', "Annonce la création de profils à partir des tracés et du MNT."],
      ['Version / État', "Affichent le manifeste 1.0.0 et sa disponibilité dans cet exemple."],
      ['Renommer', "Reste inactif dans le guide comme toute commande métier."],
      ['Ouvrir la fenêtre', "Est le seul contrôle actif et conduit à la simulation détaillée."],
      ['Retour Catalogue', "Revient au hub complet des quatre automatisations."]
    ]
  },
  {
    screen: 'automation-profiles',
    label: 'Automatisation · Profils',
    kicker: 'Automatisation 2/4 · Fenêtre',
    title: 'Dessinez ou sélectionnez les tracés à profiler.',
    copy: "La fenêtre combine contexte AutoCAD, orthophoto, calcul MNT et aperçu 1:1 du profil avant insertion.",
    details: [
      ['Vue emprise / contexte', "Passe du secteur d'analyse à l'étendue des objets AutoCAD transmis."],
      ['Opacités', "Ajustent séparément l'orthophoto et le contexte du dessin."],
      ['Dessiner / Choisir', "Crée un nouveau tracé ou sélectionne une polyligne existante."],
      ['Annuler / Recommencer / Inverser', "Corrigent la direction et les sommets du tracé."],
      ['Valider le tracé', "Ajoute le tracé à la liste des profils calculables."],
      ['Calculer', "Échantillonne le MNT puis construit l'aperçu topographique."],
      ['Aperçu 1:1', "Utilise la même échelle horizontalement et verticalement : le relief réel de cet exemple urbain reste volontairement peu amplifié."],
      ['Insérer les profils', "Produit les objets AutoCAD ; cette commande est désactivée dans le guide."]
    ]
  },
  {
    screen: 'automation-intro-solar',
    label: 'Hub · Analyse solaire',
    kicker: 'Automatisations 3/4 · Présentation',
    title: 'Présentez Analyse solaire du site avant sa fenêtre.',
    copy: "Le hub résume la heatmap et la prise en compte des obstacles avant d'afficher les paramètres scientifiques.",
    details: [
      ['Nom', "Identifie l'automatisation Analyse solaire du site."],
      ['Description', "Annonce la durée potentielle d'ensoleillement et la production d'une heatmap."],
      ['Version / État', "Affichent le manifeste 1.0.0 et sa disponibilité dans cet exemple."],
      ['Renommer', "Reste inactif dans le guide comme toute commande métier."],
      ['Ouvrir la fenêtre', "Est le seul contrôle actif et conduit à la simulation détaillée."],
      ['Retour Catalogue', "Revient au hub complet des quatre automatisations."]
    ]
  },
  {
    screen: 'automation-solar',
    label: 'Automatisation · Solaire',
    kicker: 'Automatisation 3/4 · Fenêtre',
    title: "Lisez la heatmap solaire et ses ombres.",
    copy: "L'exemple montre l'état obtenu après calcul : un raster discret à six classes, superposé à l'orthophoto dans l'emprise analysée.",
    details: [
      ["Rayon d'analyse", "Délimite la surface calculée entre 5 et 300 mètres."],
      ['Date complète', "Détermine la course du soleil pour le jour étudié."],
      ['Précision', "Arbitre entre Rapidité, Standard et Fine."],
      ['Bâtiments / végétation', "Ajoutent les obstacles 3D disponibles au calcul."],
      ['Calculer / Annuler', "Lance ou interrompt le moteur scientifique dans l'application réelle."],
      ['Six classes', "Ombre, Très faible, Faible, Moyenne, Forte et Très forte reprennent exactement la palette de l'application."],
      ['Ombres instantanées', "Compare la heatmap journalière à des horaires précis sélectionnés."],
      ['Insérer dans AutoCAD', "Transmet heatmap, légende et ombres choisies ; le guide ne l'exécute pas."]
    ]
  },
  {
    screen: 'automation-intro-viageo',
    label: 'Hub · Styles cadastre VIAGEO',
    kicker: 'Automatisations 4/4 · Présentation',
    title: 'Présentez Styles cadastre VIAGEO avant ses fenêtres.',
    copy: "Le hub explique la reconnaissance et le renommage des codes GEOBAT/VIAGEO avant les onglets Couches et Styles.",
    details: [
      ['Nom', "Identifie l'automatisation Styles cadastre VIAGEO."],
      ['Description', "Annonce le renommage et la stylisation selon la norme 1006bis."],
      ['Version / État', "Affichent le manifeste 1.0.0 et sa disponibilité dans cet exemple."],
      ['Renommer', "Reste inactif dans le guide comme toute commande métier."],
      ['Ouvrir la fenêtre', "Est le seul contrôle actif et conduit à l'onglet Couches."],
      ['Retour Catalogue', "Revient au hub complet des quatre automatisations."]
    ]
  },
  {
    screen: 'automation-viageo-layers',
    label: 'VIAGEO · Couches',
    kicker: 'Automatisation 4/4 · Fenêtre 1/2',
    title: 'Sélectionnez les calques VIAGEO à traiter.',
    copy: "L'automatisation reconnaît les codes présents dans AutoCAD et prépare leur correspondance avec la norme 1006bis.",
    details: [
      ['Tout cocher', "Active ou désactive toutes les correspondances détectées."],
      ['Couche brute', "Affiche le code VIAGEO ou GEOBAT transmis par AutoCAD."],
      ['Observation / Type', "Décrit le contenu et la géométrie attendue."],
      ['Couleur PDF', "Rappelle la couleur de référence associée à la norme."],
      ['Présente AutoCAD', "Indique si le calque existe dans le dessin courant."],
      ['Styles des calques', "Ouvre le second onglet du guide sans appliquer de transformation."]
    ]
  },
  {
    screen: 'automation-viageo-styles',
    label: 'VIAGEO · Styles',
    kicker: 'Automatisation 4/4 · Fenêtre 2/2',
    title: 'Vérifiez les calques cibles avant application.',
    copy: "Les lignes sélectionnées reçoivent un nom et les propriétés AutoCAD configurées dans ce second onglet.",
    details: [
      ['Couche source', "Conserve le code brut détecté dans le dessin."],
      ['Calque AutoCAD', "Montre le nom cible avec le préfixe GSK_ de cet exemple."],
      ['Propriétés', "Définissent gel, tracé, couleur, type et épaisseur."],
      ['Appliquer', "Renomme ou fusionne les calques dans AutoCAD ; la commande est inerte ici."],
      ['Sauvegarder / Charger', "Conservent ou restaurent les choix de l'utilisateur."],
      ['Réinitialiser', "Revient à la correspondance fournie par GeoSiteKit."],
      ['Couches', "Retourne au premier onglet de sélection."]
    ]
  },
  {
    screen: 'license',
    label: 'Licence',
    kicker: 'Informations du poste',
    title: "Lisez l'état d'autorisation du poste.",
    copy: "La page Licence résume la validation locale et le canal installé sans exposer de donnée réelle dans ce guide.",
    details: [
      ['Licence valide', "Confirme que le poste est autorisé à utiliser l'application."],
      ['Validation locale', "Permet temporairement le démarrage hors connexion selon le contrat de licence."],
      ['Utilisateur', "Identifie le titulaire ou le poste associé."],
      ['Version', "Affiche le canal installé, par exemple Stable."],
      ['État', "Signale une licence active, expirée, révoquée ou en attente."],
      ['Données de démonstration', "Les valeurs visibles sur cette page sont fictives."]
    ]
  },
  {
    screen: 'about',
    label: 'À propos',
    kicker: 'Informations GeoSiteKit',
    title: "Retrouvez l'adresse de contact de GeoSiteKit.",
    copy: "Le dernier écran indique simplement comment contacter l'équipe, sans quitter la démonstration.",
    details: [
      ['Contact', "Indique l'adresse d'assistance sans ouvrir automatiquement un courriel."],
      ['Bouton maison', "Ramène à l'accueil et permet de recommencer le parcours."]
    ]
  }
];

const screens = [...document.querySelectorAll('[data-guide-screen]')];
const screenButtons = [...document.querySelectorAll('.app-frame button[data-screen]')];
const appNavButtons = [...document.querySelectorAll('.app-nav-button')];
const tourPrevious = document.querySelector('#tour-previous');
const tourNext = document.querySelector('#tour-next');
const tourCount = document.querySelector('#tour-count');
const tourProgress = document.querySelector('#tour-progress');
const tourKicker = document.querySelector('#tour-kicker');
const tourTitle = document.querySelector('#tour-title');
const tourCopy = document.querySelector('#tour-copy');
const tourDetails = document.querySelector('#tour-details');
const tourJump = document.querySelector('#tour-jump');
const appFrame = document.querySelector('#app-frame');
const guideNavToggle = document.querySelector('.guide-nav-toggle');
const guideNavigation = document.querySelector('#guide-site-nav');
const screenIndexes = new Map(tourSteps.map((step, index) => [step.screen, index]));
let activeTour = 0;

const closeGuideNavigation = () => {
  guideNavToggle?.setAttribute('aria-expanded', 'false');
  guideNavToggle?.setAttribute('aria-label', 'Ouvrir le menu');
  guideNavigation?.classList.remove('is-open');
};

guideNavToggle?.addEventListener('click', () => {
  const isOpen = guideNavToggle.getAttribute('aria-expanded') === 'true';
  guideNavToggle.setAttribute('aria-expanded', String(!isOpen));
  guideNavToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  guideNavigation?.classList.toggle('is-open', !isOpen);
});

guideNavigation?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) closeGuideNavigation();
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Node) || !guideNavigation || !guideNavToggle) return;
  if (!guideNavigation.contains(event.target) && !guideNavToggle.contains(event.target)) closeGuideNavigation();
});

const primarySection = (screen) => {
  if (screen === 'home' || screen === 'zone-preview' || screen.startsWith('home-module-')) return 'home';
  if (screen.startsWith('settings-') || screen.startsWith('module-')) return 'settings-general';
  if (screen.startsWith('automation-')) return 'automation-catalog';
  return screen;
};

const showScreen = (name) => {
  screens.forEach((screen) => {
    const active = screen.dataset.guideScreen === name;
    screen.hidden = !active;
    screen.classList.toggle('is-active', active);
  });

  const primary = primarySection(name);
  appNavButtons.forEach((button) => {
    const active = button.dataset.screen === primary;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });

  document.querySelectorAll('[role="tab"][data-screen]').forEach((tab) => {
    const active = tab.dataset.screen === name;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  document.querySelectorAll('.related-windows [data-screen]').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.screen === name);
  });
};

const renderTourDetails = (details = []) => {
  if (!tourDetails) return;
  const rows = details.map(([label, description]) => {
    const row = document.createElement('div');
    const title = document.createElement('strong');
    const copy = document.createElement('span');
    title.textContent = label;
    copy.textContent = description;
    row.append(title, copy);
    return row;
  });
  tourDetails.replaceChildren(...rows);
};

const resetAppScrollOnSmallScreens = () => {
  if (!appFrame || !window.matchMedia('(max-width: 900px)').matches) return;
  window.requestAnimationFrame(() => appFrame.scrollTo({ top: 0, left: 0, behavior: 'smooth' }));
};

const setTour = (index, { focusScreen = false } = {}) => {
  const bounded = Math.max(0, Math.min(tourSteps.length - 1, index));
  const step = tourSteps[bounded];
  activeTour = bounded;
  showScreen(step.screen);

  if (tourCount) tourCount.textContent = `${bounded + 1} / ${tourSteps.length}`;
  if (tourProgress) tourProgress.style.width = `${((bounded + 1) / tourSteps.length) * 100}%`;
  if (tourKicker) tourKicker.textContent = step.kicker;
  if (tourTitle) tourTitle.textContent = step.title;
  if (tourCopy) tourCopy.textContent = step.copy;
  if (tourJump) tourJump.value = step.screen;
  renderTourDetails(step.details);
  if (tourPrevious) tourPrevious.disabled = bounded === 0;
  if (tourNext) {
    tourNext.innerHTML = bounded === tourSteps.length - 1
      ? 'Recommencer <span>↺</span>'
      : 'Écran suivant <span>→</span>';
  }
  resetAppScrollOnSmallScreens();

  if (focusScreen) {
    window.requestAnimationFrame(() => {
      document.querySelector(`[data-guide-screen="${step.screen}"] .screen-title`)?.focus();
    });
  }
};

if (tourJump) {
  const options = tourSteps.map((step, index) => {
    const option = document.createElement('option');
    option.value = step.screen;
    option.textContent = `${index + 1}. ${step.label}`;
    return option;
  });
  tourJump.replaceChildren(...options);
  tourJump.addEventListener('change', () => {
    const index = screenIndexes.get(tourJump.value);
    if (index !== undefined) setTour(index, { focusScreen: true });
  });
}

screenButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = screenIndexes.get(button.dataset.screen || '');
    if (index !== undefined) setTour(index, { focusScreen: true });
  });
});

tourPrevious?.addEventListener('click', () => setTour(activeTour - 1));
tourNext?.addEventListener('click', () => setTour(activeTour === tourSteps.length - 1 ? 0 : activeTour + 1));

document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
  tablist.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    const tabs = [...tablist.querySelectorAll('[role="tab"][data-screen]')];
    if (!tabs.length) return;
    const current = Math.max(0, tabs.findIndex((tab) => tab.getAttribute('aria-selected') === 'true'));
    let next = current;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    const destination = tabs[next].dataset.screen;
    const index = screenIndexes.get(destination || '');
    if (index === undefined) return;
    event.preventDefault();
    setTour(index);
    window.requestAnimationFrame(() => {
      document.querySelector(`[data-guide-screen="${destination}"] [role="tab"][data-screen="${destination}"]`)?.focus();
    });
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeGuideNavigation();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
setTour(0);
