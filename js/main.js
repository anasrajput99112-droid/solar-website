const menubar = document.getElementById("menu");
const navlink = document.getElementById("nav-menu-link");

menubar.addEventListener("click", () => {
  navlink.classList.toggle("nav-active");
});



// swiper js 
var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1.1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
