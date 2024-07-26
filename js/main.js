document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", {
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  breakpoints: {
    0: {
      slidesPerView: 5,
    },
    600: {
      slidesPerView: 1.6,
    },
    930: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});
