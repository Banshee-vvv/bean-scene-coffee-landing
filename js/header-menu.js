const headerMenu = document.querySelector('.header-menu');
const backdrop = document.querySelector('.backdrop');
const menuBtnOpen = document.querySelector('.header__burger');
const menuBtnClose = document.querySelector('.header-menu__close-button');

const toggleMenu = () => {
  headerMenu.classList.toggle('is-open');
  backdrop.classList.toggle('is-open');
};

// Відкриття меню
menuBtnOpen.addEventListener('click', toggleMenu);

// Закриття меню
menuBtnClose.addEventListener('click', toggleMenu);

// Закриття при кліку на backdrop
backdrop.addEventListener('click', (event) => {
  if (event.target === backdrop) {
    toggleMenu();
  }
});


