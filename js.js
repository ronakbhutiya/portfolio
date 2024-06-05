const nav_header = document.querySelector(".header-nav");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
mobile_nav.addEventListener("click", () => {
  nav_header.classList.toggle("active");
});
//-------------------------STICKY NAVIGATION----------------------------
