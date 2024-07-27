document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("active");
  });
});

const swiper = new Swiper(".swiper", {
  loop: false,
  grabCursor: true,
  spaceBetween: 20,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    snapOnRelease: true,
    dragSize: 300,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
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
