const contactForm = document.querySelector('#contact-form');
const requestTypes = [...document.querySelectorAll('input[name="Type de demande"]')];
const bugAdvice = document.querySelector('#bug-advice');
const subjectInput = document.querySelector('#subject');
const mailSubject = document.querySelector('#mail-subject');
const categoryLabel = document.querySelector('#category-label');
const attachments = document.querySelector('#attachments');
const fileSummary = document.querySelector('#file-summary');
const formError = document.querySelector('#form-error');
const submitContact = document.querySelector('#submit-contact');
const formSuccess = document.querySelector('#form-success');

const categories = {
  contact: { label: 'Contact', mailSubject: 'Contact' },
  licence: { label: 'Accès licence', mailSubject: 'Accès licence' },
  bug: { label: "Signalement d'un bug", mailSubject: "Signalement d'un bug" }
};

const activeCategory = () => requestTypes.find((input) => input.checked)?.value || 'contact';

const updateCategory = () => {
  const value = activeCategory();
  const category = categories[value];
  bugAdvice.hidden = value !== 'bug';
  categoryLabel.value = category.label;
};

const updateMailSubject = () => {
  const category = categories[activeCategory()];
  const subject = subjectInput.value.trim().replace(/\s+/g, ' ').slice(0, 120) || 'Nouveau message';
  mailSubject.value = `[GeoSiteKit] ${category.mailSubject} - ${subject}`;
};

const selectCategoryFromUrl = () => {
  const value = new URLSearchParams(window.location.search).get('type');
  if (!categories[value]) return;
  const target = requestTypes.find((input) => input.value === value);
  if (target) target.checked = true;
};

const showDeliveryConfirmation = () => {
  const sent = new URLSearchParams(window.location.search).get('sent') === '1';
  formSuccess.hidden = !sent;
};

requestTypes.forEach((input) => {
  input.addEventListener('change', () => {
    updateCategory();
    updateMailSubject();
  });
});

subjectInput?.addEventListener('input', updateMailSubject);

attachments?.addEventListener('change', () => {
  const files = [...attachments.files];
  if (!files.length) {
    fileSummary.textContent = 'Captures, PDF, fichiers LOG, TXT ou ZIP.';
    return;
  }
  const total = files.reduce((sum, file) => sum + file.size, 0);
  const size = total / (1024 * 1024);
  fileSummary.textContent = `${files.length} fichier${files.length > 1 ? 's' : ''} sélectionné${files.length > 1 ? 's' : ''} · ${size.toFixed(1)} Mo`;
});

contactForm?.addEventListener('submit', (event) => {
  const files = attachments ? [...attachments.files] : [];
  const total = files.reduce((sum, file) => sum + file.size, 0);
  const maximum = 10 * 1024 * 1024;

  if (total > maximum) {
    event.preventDefault();
    formError.textContent = 'Les pièces jointes dépassent 10 Mo. Réduisez leur taille ou envoyez-les séparément.';
    formError.hidden = false;
    attachments?.focus();
    return;
  }

  formError.hidden = true;
  updateCategory();
  updateMailSubject();
  submitContact.disabled = true;
  submitContact.textContent = 'Envoi en cours…';
});

window.addEventListener('pageshow', () => {
  if (!submitContact) return;
  submitContact.disabled = false;
  submitContact.textContent = 'Envoyer le message';
});

selectCategoryFromUrl();
updateCategory();
updateMailSubject();
showDeliveryConfirmation();
