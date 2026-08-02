const tourSteps = [
  {
    kicker: 'Navigation',
    title: 'Gardez les fonctions principales à portée de main.',
    copy: "La barre latérale conserve l'accès à l'accueil, aux paramètres, aux automatisations et à la licence sans interrompre le travail en cours.",
    view: 'home'
  },
  {
    kicker: 'Étape 1 · Localisation',
    title: 'Commencez par la commune et la parcelle.',
    copy: "GeoSiteKit identifie la parcelle, récupère son point de référence et active les données disponibles sur ce territoire.",
    view: 'home'
  },
  {
    kicker: "Étape 2 · Emprise",
    title: "Réglez exactement la zone à importer.",
    copy: "Le rayon définit une BBOX carrée autour du centre d'import. Le curseur et la valeur numérique restent synchronisés.",
    view: 'home'
  },
  {
    kicker: 'Étape 3 · Données',
    title: 'Activez uniquement les couches utiles au projet.',
    copy: "Plan cadastral, DXF, arbres, orthophoto, courbes et données 3D restent indépendants. Les boutons de réglage ouvrent leurs styles de calques.",
    view: 'home'
  },
  {
    kicker: "Contrôle visuel",
    title: "Vérifiez l'emprise avant le téléchargement.",
    copy: "L'aperçu montre l'orthophoto, la parcelle de référence, le point central et le rectangle exact qui sera importé.",
    view: 'home'
  },
  {
    kicker: 'Import AutoCAD',
    title: 'Lancez la préparation depuis un seul bouton.',
    copy: "GeoSiteKit télécharge les sources choisies, prépare les fichiers et transmet à AutoCAD le script d'insertion structuré par calques.",
    view: 'home'
  },
  {
    kicker: 'Automatisations',
    title: 'Prolongez la lecture du terrain.',
    copy: "Les points d'altitude, profils de terrain et analyses solaires utilisent les mêmes données géographiques pour produire des éléments de projet.",
    view: 'automation'
  }
];

const appFrame = document.querySelector('#app-frame');
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
let activeTour = 0;
let activeView = 'home';

const setView = (name) => {
  activeView = name;
  appViews.forEach((view) => view.classList.toggle('is-active', view.dataset.appView === name));
  appNavButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.view === name));
};

viewButtons.forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view || 'home'));
});

const setTour = (index) => {
  const bounded = Math.max(0, Math.min(tourSteps.length - 1, index));
  const step = tourSteps[bounded];
  activeTour = bounded;
  setView(step.view);

  tourTargets.forEach((target) => {
    target.classList.toggle('is-tour-active', Number(target.dataset.tourTarget) === bounded);
  });

  if (tourCount) tourCount.textContent = `${bounded + 1} / ${tourSteps.length}`;
  if (tourProgress) tourProgress.style.width = `${((bounded + 1) / tourSteps.length) * 100}%`;
  if (tourKicker) tourKicker.textContent = step.kicker;
  if (tourTitle) tourTitle.textContent = step.title;
  if (tourCopy) tourCopy.textContent = step.copy;
  if (tourPrevious) tourPrevious.disabled = bounded === 0;
  if (tourNext) {
    tourNext.innerHTML = bounded === tourSteps.length - 1
      ? 'Recommencer <span>↺</span>'
      : 'Étape suivante <span>→</span>';
  }
};

tourPrevious?.addEventListener('click', () => setTour(activeTour - 1));
tourNext?.addEventListener('click', () => {
  setTour(activeTour === tourSteps.length - 1 ? 0 : activeTour + 1);
});
hotspots.forEach((hotspot) => hotspot.addEventListener('click', () => setTour(Number(hotspot.dataset.tour))));

const locationButton = document.querySelector('#validate-location');
const locationMessage = document.querySelector('#location-message');
const dataGroup = document.querySelector('#data-group');
const radius = document.querySelector('#mock-radius');
const radiusValue = document.querySelector('#mock-radius-value');
const previewButton = document.querySelector('#open-preview');
const runButton = document.querySelector('#mock-run');
const status = document.querySelector('#mock-status');
const moduleCheckboxes = [...document.querySelectorAll('.mock-modules input[type="checkbox"]')];
const moduleSelects = [...document.querySelectorAll('.mock-modules select')];
const moduleGears = [...document.querySelectorAll('.mock-modules .gear')];
let locationValidated = false;

const updateRunState = () => {
  const hasModule = moduleCheckboxes.some((checkbox) => checkbox.checked);
  if (runButton) runButton.disabled = !(locationValidated && hasModule);
  if (!locationValidated && status) status.textContent = "Validez d'abord la localisation.";
  else if (!hasModule && status) status.textContent = 'Sélectionnez au moins une donnée à importer.';
  else if (status) status.textContent = 'Prêt à préparer les données pour AutoCAD.';
};

locationButton?.addEventListener('click', () => {
  locationValidated = true;
  locationButton.textContent = 'Modifier';
  if (locationMessage) {
    locationMessage.textContent = 'Parcelle 1432 localisée à Genève. Les données disponibles sont activées.';
    locationMessage.style.color = '#617d2b';
    locationMessage.style.fontWeight = '700';
  }
  dataGroup?.classList.remove('is-locked');
  if (radius) radius.disabled = false;
  if (previewButton) previewButton.disabled = false;
  moduleCheckboxes.forEach((checkbox) => { checkbox.disabled = false; });
  moduleSelects.forEach((select) => { select.disabled = false; });
  updateRunState();
});

radius?.addEventListener('input', () => {
  if (radiusValue) radiusValue.textContent = `${radius.value} m`;
});
moduleCheckboxes.forEach((checkbox) => checkbox.addEventListener('change', updateRunState));
moduleGears.forEach((button) => button.addEventListener('click', () => {
  setView('settings');
  document.querySelector('[data-settings-tab="layers"]')?.click();
}));

runButton?.addEventListener('click', () => {
  const progress = document.querySelector('#mock-progress-bar');
  runButton.disabled = true;
  if (status) status.textContent = 'Préparation des données en cours…';
  if (progress) progress.style.width = '100%';
  window.setTimeout(() => {
    if (status) status.textContent = 'Données prêtes. Le script AutoCAD peut être exécuté.';
    runButton.disabled = false;
  }, 1300);
});

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

document.querySelectorAll('.automation-table button').forEach((button) => {
  button.addEventListener('click', () => {
    button.textContent = 'Ouverte';
    button.disabled = true;
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && previewModal && !previewModal.hidden) previewModal.hidden = true;
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
setTour(0);
updateRunState();
