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
    kicker: 'Étape 2 · Emprise',
    title: "Réglez exactement la zone à importer.",
    copy: "Le rayon définit une BBOX carrée autour du centre d'import. Le curseur et la valeur numérique restent synchronisés.",
    view: 'home'
  },
  {
    kicker: 'Étape 3 · Données',
    title: 'Activez uniquement les couches utiles au projet.',
    copy: "Plan cadastral, DXF, arbres, orthophoto, courbes et données 3D restent indépendants. Chaque module conserve sa source et ses réglages propres.",
    view: 'home'
  },
  {
    kicker: 'Contrôle visuel',
    title: "Vérifiez l'emprise avant l'importation.",
    copy: "L'aperçu montre l'orthophoto, la parcelle de référence, le point central et le rectangle exact qui sera importé.",
    view: 'home'
  },
  {
    kicker: 'Paramètres globaux',
    title: "Définissez les règles communes à l'ensemble du dessin.",
    copy: "Le préfixe AutoCAD, la langue cadastrale et le dossier Attachments s'appliquent à tous les modules et projets.",
    view: 'settings',
    settingsTab: 'general'
  },
  {
    kicker: 'Paramètres du module',
    title: 'Adaptez chaque donnée sans modifier les autres.',
    copy: "Le panneau du module sélectionné regroupe sa géométrie, sa précision, ses transformations et ses styles de calques AutoCAD.",
    view: 'settings',
    settingsTab: 'module'
  },
  {
    kicker: 'Automatisations',
    title: 'Prolongez la lecture du terrain.',
    copy: "Les points d'altitude, profils de terrain et analyses solaires utilisent les mêmes données géographiques pour produire des éléments de projet.",
    view: 'automation'
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
