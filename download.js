const RELEASE_MANIFEST_URL = 'https://raw.githubusercontent.com/SwissgeoApp/swissgeo-releases/main/latest.json';
const FALLBACK_RELEASE = {
  version: '1.6.22',
  size: 263630068,
  download_url: 'https://github.com/SwissgeoApp/swissgeo-releases/releases/download/v1.6.22/SwissGeo-v1.6.22-win64.zip'
};

const downloadLink = document.querySelector('#download-now');
const versionLabel = document.querySelector('#release-version');
const sizeLabel = document.querySelector('#release-size');
const statusLabel = document.querySelector('#download-status');

const formatSize = (bytes) => {
  const value = Number(bytes);
  if (!Number.isFinite(value) || value <= 0) return 'Archive Windows 64 bits';
  return `${Math.round(value / 1024 / 1024)} Mo · Windows 64 bits`;
};

const normalizeRelease = (manifest) => ({
  version: String(manifest?.version || FALLBACK_RELEASE.version),
  size: Number(manifest?.size_bytes || manifest?.size || FALLBACK_RELEASE.size),
  download_url: String(manifest?.download_url || FALLBACK_RELEASE.download_url)
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
  const frame = document.createElement('iframe');
  frame.hidden = true;
  frame.title = 'Téléchargement GeoSiteKit';
  frame.src = release.download_url;
  document.body.appendChild(frame);
  window.setTimeout(() => frame.remove(), 120000);
};

loadRelease().then((release) => {
  displayRelease(release);

  downloadLink?.addEventListener('click', (event) => {
    event.preventDefault();
    startDownload(release);
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
