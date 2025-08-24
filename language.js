// Check for saved language preference in localStorage
let isGreek = localStorage.getItem('language') === 'gr' || !localStorage.getItem('language');

// Set language on load
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage(isGreek ? 'gr' : 'en');

  // Attach toggle function to button
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      isGreek = !isGreek;
      const lang = isGreek ? 'gr' : 'en';
      localStorage.setItem('language', lang);
      updateLanguage(lang);
    });
  }
});

function updateLanguage(lang) {
  const isGR = lang === 'gr';

  // Change button text
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.textContent = isGR ? 'EN' : 'GR';
  }

  // Update text content for all translatable elements
  document.querySelectorAll('.lang').forEach(el => {
    const newContent = isGR ? el.getAttribute('data-gr') : el.getAttribute('data-en');
    if (newContent) el.innerHTML = newContent;
  });

  // Optional: update other specific fields
  const nameButton = document.getElementById('name-button');
  if (nameButton) {
    nameButton.textContent = isGR ? nameButton.getAttribute('data-gr') : nameButton.getAttribute('data-en');
  }

  const titleText = document.getElementById('title-text');
  if (titleText) {
    titleText.textContent = isGR ? titleText.getAttribute('data-gr') : titleText.getAttribute('data-en');
  }
}
