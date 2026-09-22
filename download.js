const RELEASE_MANIFEST_URL = 'https://raw.githubusercontent.com/GeoSiteKit/geositekit-releases/main/latest-beta.json';
const RELEASE_DOWNLOAD_PREFIX = 'https://github.com/GeoSiteKit/geositekit-releases/releases/download/';
const downloadButton = document.querySelector('#download-now');
const versionLabel = document.querySelector('#release-version');
const sizeLabel = document.querySelector('#release-size');
const statusLabel = document.querySelector('#download-status');
const navToggle = document.querySelector('.download-nav-toggle');
const navigation = document.querySelector('#primary-nav');

const closeNavigation = () => { navToggle?.setAttribute('aria-expanded', 'false'); navToggle?.setAttribute('aria-label', 'Ouvrir le menu'); navigation?.classList.remove('is-open'); };
navToggle?.addEventListener('click', () => { const open = navToggle.getAttribute('aria-expanded') === 'true'; navToggle.setAttribute('aria-expanded', String(!open)); navToggle.setAttribute('aria-label', open ? 'Ouvrir le menu' : 'Fermer le menu'); navigation?.classList.toggle('is-open', !open); });
navigation?.addEventListener('click', (event) => { if (event.target instanceof HTMLAnchorElement) closeNavigation(); });
document.addEventListener('click', (event) => { if (event.target instanceof Node && navigation && navToggle && !navigation.contains(event.target) && !navToggle.contains(event.target)) closeNavigation(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNavigation(); });

const setupRelease = (manifest) => {
  const version = String(manifest?.version || '').trim();
  const url = String(manifest?.installer_url || '').trim();
  const type = String(manifest?.installer_type || '').trim().toLowerCase();
  const digest = String(manifest?.installer_sha256 || '').trim().toLowerCase();
  const trustedUrl = url.startsWith(RELEASE_DOWNLOAD_PREFIX) && url.toLowerCase().endsWith('.exe');
  if (!version || type !== 'setup_exe' || !trustedUrl || !/^[a-f0-9]{64}$/.test(digest)) return null;
  return { version, url, size: Number(manifest?.installer_size_bytes || 0) };
};

const showReadySetup = (release) => {
  if (!downloadButton) return;
  downloadButton.disabled = false;
  downloadButton.textContent = 'Télécharger Setup pour Windows';
  versionLabel.textContent = `Version ${release.version}`;
  sizeLabel.textContent = release.size > 0 ? `${Math.round(release.size / 1024 / 1024)} Mo · Setup Windows` : 'Setup Windows signé';
  statusLabel.textContent = 'L’installateur signé est prêt au téléchargement.';
  downloadButton.addEventListener('click', () => { statusLabel.textContent = `Téléchargement de la version ${release.version} lancé depuis GitHub.`; window.location.assign(release.url); });
  if (new URLSearchParams(window.location.search).get('download') === '1') window.setTimeout(() => downloadButton.click(), 350);
};

fetch(RELEASE_MANIFEST_URL, { cache: 'no-store' })
  .then((response) => response.ok ? response.json() : Promise.reject(new Error(`HTTP ${response.status}`)))
  .then(setupRelease)
  .then((release) => { if (release) showReadySetup(release); })
  .catch(() => { /* The disabled HTML fallback remains the authoritative state. */ });

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
