const tourSteps = [
  {
    kicker: 'Navigation générale',
    title: 'Gardez les fonctions principales à portée de main.',
    copy: "La barre latérale organise tout le parcours de GeoSiteKit sans fermer l'application ni perdre la parcelle en cours.",
    view: 'home',
    details: [
      ['Accueil', "Revient à l'écran principal pour préparer la parcelle, le rayon et les données."],
      ['Paramètres', "Ouvre les réglages communs, les connexions serveur et les styles AutoCAD."],
      ['Automatisation', "Donne accès aux outils d'altitude, de profil et d'analyse solaire."],
      ['Licence', "Affiche l'autorisation du poste et la disponibilité de la validation locale."],
      ['À propos', "Présente GeoSiteKit, sa version et l'adresse de contact."],
      ['Bouton maison', "Ramène à l'accueil depuis une page interne sans fermer l'application."]
    ]
  },
  {
    kicker: 'Étape 1 · Localisation',
    title: 'Commencez par la commune et la parcelle.',
    copy: "La parcelle sert de référence géographique pour trouver le centre de l'étude et déterminer les données disponibles.",
    view: 'home',
    details: [
      ['Commune', "Définit le territoire dans lequel rechercher la parcelle et les géoservices."],
      ['N° Parcelle', "Identifie la parcelle de départ sans limiter l'import à son contour."],
      ['Modifier', "Relance la recherche et actualise les données disponibles pour la nouvelle localisation."],
      ['Message de localisation', "Confirme la parcelle trouvée et l'activation des modules compatibles."]
    ]
  },
  {
    kicker: 'Étape 2 · Emprise',
    title: "Réglez exactement la zone à importer.",
    copy: "Le rayon définit la demi-largeur de la BBOX carrée utilisée par tous les services géographiques.",
    view: 'home',
    details: [
      ["Rayon d'import", "Dimensionne la zone carrée autour du centre de la parcelle."],
      ['Valeur du rayon', "Affiche la distance en mètres et reste synchronisée avec l'aperçu."],
      ["Centre de l'import", "Indique les coordonnées LV95 utilisées comme centre exact de la BBOX."]
    ]
  },
  {
    kicker: 'Étape 3 · Modules',
    title: 'Activez uniquement les données utiles au projet.',
    copy: "Chaque ligne représente une donnée indépendante avec sa disponibilité, sa source et ses réglages AutoCAD.",
    view: 'home',
    details: [
      ['Case à cocher', "Ajoute ou retire le module de la préparation. Une ligne grisée indique une donnée indisponible."],
      ['Plan cadastral image', "Prépare une image cadastrale géoréférencée comme fond de lecture."],
      ['Vecteurs cadastraux DXF', "Importe parcelles, bâtiments et autres géométries dans des calques AutoCAD."],
      ['Arbres 2D', "Place la végétation disponible sous forme de blocs ou de géométries 2D."],
      ['Orthophoto', "Prépare l'image aérienne correspondant exactement à la BBOX."],
      ['Courbes de niveaux', "Produit les courbes du terrain selon l'équidistance choisie."],
      ['Jeux de données 3D', "Prépare le terrain, les bâtiments ou les autres jeux tridimensionnels disponibles."],
      ['Liste des serveurs', "Choisit entre le service officiel, une source cantonale, un cache ou une source optimisée."],
      ['Bouton engrenage', "Ouvre la géométrie, la précision, les transformations et les styles du module."]
    ]
  },
  {
    kicker: 'Contrôle visuel',
    title: "Vérifiez l'emprise avant l'importation.",
    copy: "L'aperçu montre la parcelle, le point central et le rectangle réellement demandé aux serveurs.",
    view: 'home',
    details: [
      ['Aperçu de la zone', "Ouvre une carte légère destinée uniquement au contrôle du cadrage."],
      ["Curseur de l'aperçu", "Permet d'essayer visuellement un autre rayon synchronisé avec l'accueil."],
      ['Appliquer', "Valide le rayon affiché et revient à l'écran principal."],
      ["Fermer", "Ferme l'aperçu sans lancer de téléchargement."]
    ]
  },
  {
    kicker: 'Paramètres globaux',
    title: "Définissez les règles communes à l'ensemble du dessin.",
    copy: "Ces réglages s'appliquent à tous les modules et assurent une organisation AutoCAD cohérente.",
    view: 'settings',
    settingsTab: 'general',
    details: [
      ['Onglet Général', "Regroupe les conventions communes à tous les imports."],
      ['Préfixe des calques', "Ajoute un préfixe commun aux calques créés par GeoSiteKit."],
      ['Langue cadastrale', "Détermine la langue des catégories et calques lorsque la source le permet."],
      ['Dossier Attachments', "Définit l'emplacement des images et fichiers externes liés au DWG."],
      ['Connexions serveur', "Présente l'état des géoservices et du cache GeoSiteKit."],
      ['Calques généraux', "Centralise les styles communs de l'emprise, du bâti et du relief."],
      ['Pastille de couleur', "Montre la couleur AutoCAD attribuée à une catégorie."],
      ['Nom de calque', "Indique où les objets correspondants seront créés dans le dessin."]
    ]
  },
  {
    kicker: 'Paramètres du module',
    title: 'Adaptez chaque donnée sans modifier les autres.',
    copy: "Le contenu varie selon le module : seuls les réglages réellement applicables à la donnée sélectionnée sont proposés.",
    view: 'settings',
    settingsTab: 'module',
    details: [
      ['Module sélectionné', "Affiche les réglages du module ouvert avec son engrenage."],
      ['Géométrie', "Choisit la forme produite dans AutoCAD, notamment le mode 2D à Z=0."],
      ['Équidistance', "Définit la différence d'altitude entre deux courbes successives."],
      ['Transformation', "Détermine le type d'objet AutoCAD final, par exemple une polyligne."],
      ['Simplification', "Réduit les sommets si nécessaire ; à 0 %, aucune simplification volontaire n'est appliquée."],
      ['Courbes principales', "Définit le calque et le style des lignes de relief."],
      ["Textes d'altitude", "Définit le calque des valeurs altimétriques associées."],
      ['Réglages variables', "Le panneau s'adapte automatiquement aux possibilités du module."]
    ]
  },
  {
    kicker: 'Automatisations',
    title: 'Prolongez la lecture du terrain.',
    copy: "Les automatisations transforment les géodonnées du site en éléments directement exploitables dans le projet.",
    view: 'automation',
    details: [
      ["Points d'altitude MNT", "Lit l'altitude aux positions choisies et renseigne les blocs altimétriques AutoCAD."],
      ['Profils de terrain', "Crée un profil sans exagération verticale depuis un tracé ou une polyligne."],
      ['Analyse solaire', "Calcule l'ensoleillement en tenant compte du terrain, du bâti et de la végétation disponible."],
      ["État", "Indique si l'automatisation dispose des données nécessaires pour être utilisée."]
    ]
  },
  {
    kicker: 'Transfert vers AutoCAD',
    title: 'Préparez les données avant leur insertion dans le dessin.',
    copy: "GeoSiteKit télécharge uniquement les modules cochés, suit leur préparation puis transmet le résultat au dessin courant.",
    view: 'home',
    details: [
      ['Lancer le téléchargement', "Démarre les modules cochés pour la BBOX et les sources affichées."],
      ['Barre de progression', "Montre l'avancement global de la préparation des fichiers."],
      ["Message d'état", "Signale si les données sont prêtes, indisponibles ou nécessitent une action."],
      ['Retour dans AutoCAD', "Le script GeoSiteKit crée ou attache ensuite les objets dans le DWG courant."]
    ]
  },
  {
    kicker: 'Licence et assistance',
    title: "Contrôlez l'autorisation du poste.",
    copy: "La page Licence résume le droit d'utilisation et les informations nécessaires pour comprendre l'état du poste.",
    view: 'license',
    details: [
      ['Licence valide', "Confirme que ce poste est autorisé à utiliser GeoSiteKit."],
      ['Validation locale', "Maintient temporairement la reconnaissance de la licence hors connexion."],
      ['Utilisateur', "Identifie le poste ou le titulaire associé à la licence."],
      ['Version', "Indique le canal installé, par exemple la version stable."],
      ['État', "Résume le statut actuel : active, expirée, révoquée ou en attente."],
      ['Assistance', "La page À propos donne accès à contact@geositekit.ch."]
    ]
  }
];

const appViews = [...document.querySelectorAll('[data-app-view]')];
const appNavButtons = [...document.querySelectorAll('.app-nav-button')];
const viewButtons = [...document.querySelectorAll('[data-view]')];
const tourTargets = [...document.querySelectorAll('[data-tour-target]')];
const hotspots = [...document.querySelectorAll('[data-tour]')];
const tourPrevious = document.querySelector('#tour-previous');
const tourNext = document.querySelector('#tour-next');
const tourCount = document.querySelector('#tour-count');
const tourProgress = document.querySelector('#tour-progress');
const tourKicker = document.querySelector('#tour-kicker');
const tourTitle = document.querySelector('#tour-title');
const tourCopy = document.querySelector('#tour-copy');
const tourDetails = document.querySelector('#tour-details');
const appFrame = document.querySelector('#app-frame');
const guideNavToggle = document.querySelector('.guide-nav-toggle');
const guideNavigation = document.querySelector('#guide-site-nav');
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
  if (event.target instanceof HTMLAnchorElement) {
    closeGuideNavigation();
  }
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Node) || !guideNavigation || !guideNavToggle) return;
  if (!guideNavigation.contains(event.target) && !guideNavToggle.contains(event.target)) closeGuideNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeGuideNavigation();
});

const centerActiveTargetOnMobile = (index) => {
  if (!appFrame || !window.matchMedia('(max-width: 860px)').matches) return;
  const target = tourTargets.find((item) => Number(item.dataset.tourTarget) === index);
  if (!target) return;

  window.requestAnimationFrame(() => {
    const frameRect = appFrame.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const targetCenter = targetRect.top - frameRect.top + appFrame.scrollTop + (targetRect.height / 2);
    const top = Math.max(0, targetCenter - (appFrame.clientHeight / 2));
    appFrame.scrollTo({ top, behavior: 'smooth' });
  });
};

const setView = (name) => {
  appViews.forEach((view) => view.classList.toggle('is-active', view.dataset.appView === name));
  appNavButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.view === name));
};

const activateSettingsTab = (name) => {
  document.querySelector(`[data-settings-tab="${name}"]`)?.click();
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

viewButtons.forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view || 'home'));
});

const setTour = (index) => {
  const bounded = Math.max(0, Math.min(tourSteps.length - 1, index));
  const step = tourSteps[bounded];
  activeTour = bounded;
  setView(step.view);
  if (step.settingsTab) activateSettingsTab(step.settingsTab);

  tourTargets.forEach((target) => {
    target.classList.toggle('is-tour-active', Number(target.dataset.tourTarget) === bounded);
  });

  if (tourCount) tourCount.textContent = `${bounded + 1} / ${tourSteps.length}`;
  if (tourProgress) tourProgress.style.width = `${((bounded + 1) / tourSteps.length) * 100}%`;
  if (tourKicker) tourKicker.textContent = step.kicker;
  if (tourTitle) tourTitle.textContent = step.title;
  if (tourCopy) tourCopy.textContent = step.copy;
  renderTourDetails(step.details);
  if (tourPrevious) tourPrevious.disabled = bounded === 0;
  if (tourNext) {
    tourNext.innerHTML = bounded === tourSteps.length - 1
      ? 'Recommencer <span>↺</span>'
      : 'Étape suivante <span>→</span>';
  }
  centerActiveTargetOnMobile(bounded);
};

tourPrevious?.addEventListener('click', () => setTour(activeTour - 1));
tourNext?.addEventListener('click', () => {
  setTour(activeTour === tourSteps.length - 1 ? 0 : activeTour + 1);
});
hotspots.forEach((hotspot) => hotspot.addEventListener('click', () => setTour(Number(hotspot.dataset.tour))));

const radius = document.querySelector('#mock-radius');
const radiusValue = document.querySelector('#mock-radius-value');
const previewButton = document.querySelector('#open-preview');
const moduleGears = [...document.querySelectorAll('.mock-modules .gear')];

radius?.addEventListener('input', () => {
  if (radiusValue) radiusValue.textContent = `${radius.value} m`;
});
moduleGears.forEach((button) => button.addEventListener('click', () => setTour(6)));

const previewModal = document.querySelector('#preview-modal');
const closePreview = document.querySelector('#close-preview');
const applyPreview = document.querySelector('#apply-preview');
const previewRadius = document.querySelector('#preview-radius');
const previewRadiusValue = document.querySelector('#preview-radius-value');

const syncPreviewRadius = (value) => {
  if (previewRadius) previewRadius.value = value;
  if (previewRadiusValue) previewRadiusValue.textContent = `${value} m`;
};

previewButton?.addEventListener('click', () => {
  syncPreviewRadius(radius?.value || '150');
  if (previewModal) previewModal.hidden = false;
});
closePreview?.addEventListener('click', () => { if (previewModal) previewModal.hidden = true; });
previewModal?.addEventListener('click', (event) => {
  if (event.target === previewModal) previewModal.hidden = true;
});
previewRadius?.addEventListener('input', () => syncPreviewRadius(previewRadius.value));
applyPreview?.addEventListener('click', () => {
  if (radius && previewRadius) radius.value = previewRadius.value;
  if (radiusValue && previewRadius) radiusValue.textContent = `${previewRadius.value} m`;
  if (previewModal) previewModal.hidden = true;
});

const settingsTabs = [...document.querySelectorAll('[data-settings-tab]')];
const settingsPanels = [...document.querySelectorAll('[data-settings-panel]')];
settingsTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    settingsTabs.forEach((item) => item.classList.toggle('is-active', item === tab));
    settingsPanels.forEach((panel) => panel.classList.toggle('is-active', panel.dataset.settingsPanel === tab.dataset.settingsTab));
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && previewModal && !previewModal.hidden) previewModal.hidden = true;
  if (event.key === 'Escape' && guideNavigation?.classList.contains('is-open')) {
    guideNavigation.classList.remove('is-open');
    guideNavToggle?.setAttribute('aria-expanded', 'false');
    guideNavToggle?.setAttribute('aria-label', 'Ouvrir le menu');
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
setTour(0);
