const nav_header = document.querySelector(".header-nav");
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const navLink = document.querySelectorAll(".nav-link");
const ul = document.querySelector(".nav-list");
mobile_nav.addEventListener("click", () => {
  nav_header.classList.toggle("active");
});
//-------------------------STICKY NAVIGATION----------------------------
const header = document.querySelector(".header");
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    ent.isIntersecting === false
      ? nav_header.classList.add("sticky")
      : nav_header.classList.remove("sticky");
  },
  {
    root: null,
    rootMargin: "-150px",
    threshold: "",
  }
);
observer.observe(header);
ul.addEventListener("click", function (e) {
  const click = e.target.closest(".nav-link");
  navLink.forEach((element) => element.classList.remove("nav-active"));
  if (!click) return;
  click.classList.add("nav-active");
});
