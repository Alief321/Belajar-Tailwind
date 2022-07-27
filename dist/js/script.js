// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');
const totop = document.querySelector('#totop');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// navbarfix
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fix');
    totop.classList.remove('hidden');
    totop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fix');
    totop.classList.add('hidden');
    totop.classList.remove('flex');
  }
};

// click luar
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// darkmode toggle
const darkToggle = document.querySelector('#darkmode');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// pindah toglle mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}
