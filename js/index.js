const hamburgerButton = document.querySelector(".hamburger");
const navElement = document.querySelector(".nav");

function openMobileNav() {
  hamburgerButton.classList.toggle("open");
  navElement.classList.toggle("nav--mobile");
}

hamburgerButton.addEventListener("click", openMobileNav);
