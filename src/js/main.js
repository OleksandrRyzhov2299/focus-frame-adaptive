import '../styles/style.css';

const menuRefs = {
  menu: document.querySelector('.js-backdrop'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

function toggleMenu() {
  menuRefs.menu.classList.toggle('is-open');
}

menuRefs.openMenuBtn.addEventListener('click', toggleMenu);
menuRefs.closeMenuBtn.addEventListener('click', toggleMenu);
