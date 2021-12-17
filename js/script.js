const page = document.querySelector('.wrapper');
const themeButton = document.querySelector('.theme-button');

if (localStorage.getItem('theme')) {
  page.classList.add('dark-theme');
  page.classList.remove('light-theme');
}

themeButton.addEventListener('click', () => {
  page.classList.toggle('dark-theme');
  page.classList.toggle('light-theme');

  if (localStorage.getItem('theme')) {
    localStorage.removeItem('theme');
  }

  else {
    localStorage.setItem('theme', true);
  }
});
