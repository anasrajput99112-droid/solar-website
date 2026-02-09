const menubar = document.getElementById("menu");
const navlink = document.getElementById("nav-menu-link");

menubar.addEventListener("click", () => {
  navlink.classList.toggle("nav-active");
});

   var swiper = new Swiper(".mySwiper", {});