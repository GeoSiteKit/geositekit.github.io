const header = document.querySelector('#site-header');
const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.primary-nav');
const hero = document.querySelector('.hero');
const layerLayout = document.querySelector('.layer-layout');
const layerStage = document.querySelector('#layer-stage');
const layerSteps = [...document.querySelectorAll('.layer-step')];
const layerLegendItems = [...document.querySelectorAll('[data-legend]')];
const parallaxLayers = [...document.querySelectorAll('.parallax-layer')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
      navigation.classList.remove('is-open');
    }
  });
}

const setActiveLayer = (index) => {
  if (!layerStage) return;

  layerStage.dataset.active = String(index);
  layerSteps.forEach((step) => {
    step.classList.toggle('is-active', Number(step.dataset.step) === index);
  });
  layerLegendItems.forEach((item) => {
    item.classList.toggle('is-active', Number(item.dataset.legend) === index);
  });
};

layerLegendItems.forEach((item) => {
  item.addEventListener('click', () => {
    const index = Number(item.dataset.legend);
    const target = layerSteps.find((step) => Number(step.dataset.step) === index);
    if (target) {
      target.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'start' });
      setActiveLayer(index);
    }
  });
});

const updateActiveLayerFromScroll = () => {
  if (!layerSteps.length || !layerStage) return;

  const stageBottom = layerStage.getBoundingClientRect().bottom;
  const readingLine = window.innerWidth <= 860
    ? Math.min(window.innerHeight - 80, stageBottom + window.innerHeight * 0.16)
    : window.innerHeight * 0.5;

  const closest = layerSteps
    .map((step) => {
      const marker = step.querySelector('.step-marker');
      const anchor = marker ? marker.getBoundingClientRect().top : step.getBoundingClientRect().top;
      return { step, distance: Math.abs(anchor - readingLine) };
    })
    .sort((a, b) => a.distance - b.distance)[0];

  if (closest) setActiveLayer(Number(closest.step.dataset.step));
};

const hashTarget = layerSteps.find((step) => `#${step.id}` === window.location.hash);
if (hashTarget) {
  const hashIndex = Number(hashTarget.dataset.step);
  setActiveLayer(hashIndex);
  window.setTimeout(() => {
    hashTarget.scrollIntoView({ behavior: 'auto', block: 'start' });
  }, 80);
}

const revealItems = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

let ticking = false;
const updateScrollEffects = () => {
  const scrollY = window.scrollY;
  header?.classList.toggle('is-scrolled', scrollY > 24);

  if (!reducedMotion.matches) {
    if (hero) {
      const heroShift = Math.min(scrollY * 0.1, 92);
      hero.style.setProperty('--hero-shift', `${heroShift}px`);
    }

    if (layerLayout) {
      const rect = layerLayout.getBoundingClientRect();
      const travel = rect.height + window.innerHeight;
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / travel));

      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        const offset = (progress - 0.5) * 38 * depth;
        layer.style.setProperty('--layer-offset', `${offset}px`);
      });
    }
  }

  updateActiveLayerFromScroll();

  ticking = false;
};

const requestScrollUpdate = () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollEffects);
    ticking = true;
  }
};

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
window.addEventListener('resize', requestScrollUpdate);
updateScrollEffects();

document.querySelectorAll('.brand-mark img, .footer-brand img').forEach((image) => {
  image.addEventListener('error', () => {
    image.hidden = true;
    image.parentElement?.classList.add('image-missing');
  });
});

const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}
