const RELEASE_MANIFEST_URL = 'https://raw.githubusercontent.com/GeoSiteKit/geositekit-releases/main/latest.json';
const FALLBACK_RELEASE = {
  version: '1.7.1',
  size: 220217444,
  download_url: 'https://github.com/GeoSiteKit/geositekit-releases/releases/download/v1.7.1/GeoSiteKit-v1.7.1-win64.msi'
};

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
  if (!Number.isFinite(value) || value <= 0) return 'Installateur MSI · Windows 64 bits';
  return `${Math.round(value / 1024 / 1024)} Mo · Installateur MSI · Windows 64 bits`;
};

const normalizeRelease = (manifest) => ({
  version: String(manifest?.version || FALLBACK_RELEASE.version),
  size: Number(
    manifest?.installer_size_bytes
    || manifest?.size_bytes
    || manifest?.size
    || FALLBACK_RELEASE.size
  ),
  download_url: String(
    manifest?.installer_url
    || manifest?.migration_url
    || FALLBACK_RELEASE.download_url
  )
});

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
  if (versionLabel) versionLabel.textContent = `Version ${release.version}`;
  if (sizeLabel) sizeLabel.textContent = formatSize(release.size);
};

const startDownload = (release) => {
  if (statusLabel) statusLabel.textContent = `Téléchargement de la version ${release.version} lancé depuis GitHub.`;
  window.location.assign(release.download_url);
};

loadRelease().then((release) => {
  displayRelease(release);

  downloadLink?.addEventListener('click', () => {
    if (statusLabel) statusLabel.textContent = `Téléchargement de la version ${release.version} lancé depuis GitHub.`;
  });

  const params = new URLSearchParams(window.location.search);
  if (params.get('download') === '1') {
    window.setTimeout(() => startDownload(release), 450);
  } else if (statusLabel) {
    statusLabel.textContent = 'Le téléchargement démarre dès que vous cliquez sur le bouton.';
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
