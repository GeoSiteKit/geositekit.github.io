const toggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.primary-nav');

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

const year = document.querySelector('#year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}
