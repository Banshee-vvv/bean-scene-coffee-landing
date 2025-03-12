// Відкриття & закриття хедер-меню:

const headerMenu = document.querySelector(".header-menu");
const backdrop = document.querySelector(".backdrop");
const menuBtnOpen = document.querySelector(".header__burger");
const menuBtnClose = document.querySelector(".header-menu__close-button");

const toggleMenu = () => {
  headerMenu.classList.toggle("is-open");
  backdrop.classList.toggle("is-open");
};

// Відкриття меню
menuBtnOpen.addEventListener("click", toggleMenu);

// Закриття меню
menuBtnClose.addEventListener("click", toggleMenu);

// Закриття при кліку на backdrop
backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    toggleMenu();
  }
});

//
//
// Тут для акордеонів у футері:

const toggleAccordion = (buttonClass, contentClass) => {
  const button = document.querySelector(buttonClass);
  const content = document.querySelector(contentClass);

  if (button && content) {
    button.addEventListener("click", () => {
      content.classList.toggle("is-open");
    });
  }
};

toggleAccordion(".footer__column-title.acc-1", ".footer__column-flexbox.acc-1");
toggleAccordion(".footer__column-title.acc-2", ".footer__column-flexbox.acc-2");
toggleAccordion(".footer__column-title.acc-3", ".footer__column-flexbox.acc-3");

const checkWindowSize = () => {
  if (window.innerWidth >= 769) {
    document.querySelectorAll(".footer__column-flexbox").forEach((el) => {
      el.classList.toggle("is-open");
    });
  } else {
    document.querySelectorAll(".footer__column-flexbox").forEach((el) => {
      el.classList.remove("is-open");
    });
  }
};

// Виклик функції при завантаженні сторінки
checkWindowSize();

// Додаємо слухача події на зміну розміру вікна
window.addEventListener("resize", checkWindowSize);

//
//
// Тут comment-slider:

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".comments__list");
  const prevBtn = document.querySelector(".comments__switch-button");
  const nextBtn = document.querySelector(".comments__switch-button_next");
  const items = document.querySelectorAll(".comments__list-item");

  let index = 0;
  const totalItems = items.length;

  function updateSlider() {
    const offset = index * 100;
    list.style.transform = `translateX(-${offset}%)`;
  }

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % totalItems;
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + totalItems) % totalItems;
    updateSlider();
  });
});
