const RELEASE_MANIFEST_URL = 'https://raw.githubusercontent.com/GeoSiteKit/geositekit-releases/main/latest-beta.json';
const RELEASE_DOWNLOAD_PREFIX = 'https://github.com/GeoSiteKit/geositekit-releases/releases/download/';
const FALLBACK_RELEASE = Object.freeze({
  version: '',
  size: 0,
  download_url: 'https://github.com/GeoSiteKit/geositekit-releases/releases',
  directDownload: false
});

const downloadLink = document.querySelector('#download-now');
const versionLabel = document.querySelector('#release-version');
const sizeLabel = document.querySelector('#release-size');
const statusLabel = document.querySelector('#download-status');
const downloadNavToggle = document.querySelector('.download-nav-toggle');
const downloadNavigation = document.querySelector('#primary-nav');

const closeDownloadNavigation = () => {
  downloadNavToggle?.setAttribute('aria-expanded', 'false');
  downloadNavToggle?.setAttribute('aria-label', 'Ouvrir le menu');
  downloadNavigation?.classList.remove('is-open');
};

downloadNavToggle?.addEventListener('click', () => {
  const isOpen = downloadNavToggle.getAttribute('aria-expanded') === 'true';
  downloadNavToggle.setAttribute('aria-expanded', String(!isOpen));
  downloadNavToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
  downloadNavigation?.classList.toggle('is-open', !isOpen);
});

downloadNavigation?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;
  closeDownloadNavigation();
});

document.addEventListener('click', (event) => {
  if (!(event.target instanceof Node) || !downloadNavigation || !downloadNavToggle) return;
  if (!downloadNavigation.contains(event.target) && !downloadNavToggle.contains(event.target)) closeDownloadNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDownloadNavigation();
});

const formatSize = (bytes) => {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value <= 0) return 'Archive ZIP · Windows 64 bits';
  return `${Math.round(value / 1024 / 1024)} Mo · Archive ZIP · Windows 64 bits`;
};

const normalizeRelease = (manifest) => {
  const version = String(manifest?.version || '').trim();
  const downloadUrl = String(manifest?.download_url || '').trim();
  const isOfficialZip = downloadUrl.startsWith(RELEASE_DOWNLOAD_PREFIX) && downloadUrl.toLowerCase().endsWith('.zip');
  if (!version || !isOfficialZip) return FALLBACK_RELEASE;
  return {
    version,
    size: Number(manifest?.size_bytes || manifest?.size || 0),
    download_url: downloadUrl,
    directDownload: true
  };
};

const loadRelease = async () => {
  try {
    const response = await fetch(RELEASE_MANIFEST_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return normalizeRelease(await response.json());
  } catch (_error) {
    return FALLBACK_RELEASE;
  }
};

const displayRelease = (release) => {
  if (downloadLink) downloadLink.href = release.download_url;
  if (versionLabel) versionLabel.textContent = release.directDownload ? `Version ${release.version}` : 'Version bêta';
  if (sizeLabel) sizeLabel.textContent = release.directDownload ? formatSize(release.size) : 'Voir la publication GitHub';
};

const startDownload = (release) => {
  if (!release.directDownload) return;
  if (statusLabel) statusLabel.textContent = `Téléchargement de la version ${release.version} lancé depuis GitHub.`;
  window.location.assign(release.download_url);
};

loadRelease().then((release) => {
  displayRelease(release);

  downloadLink?.addEventListener('click', () => {
    if (release.directDownload) {
      if (statusLabel) statusLabel.textContent = `Téléchargement de la version ${release.version} lancé depuis GitHub.`;
    } else if (statusLabel) {
      statusLabel.textContent = 'Le manifeste est temporairement indisponible. La dernière publication GitHub va s\'ouvrir.';
    }
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('download') === '1' && release.directDownload) {
    window.setTimeout(() => startDownload(release), 450);
  } else if (params.get('download') === '1' && statusLabel) {
    statusLabel.textContent = 'Le manifeste est temporairement indisponible. Utilisez le bouton pour ouvrir la dernière publication GitHub.';
  } else if (statusLabel) {
    statusLabel.textContent = release.directDownload
      ? 'Le téléchargement démarre dès que vous cliquez sur le bouton.'
      : 'Le manifeste est temporairement indisponible. Le bouton ouvre la dernière publication GitHub.';
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
