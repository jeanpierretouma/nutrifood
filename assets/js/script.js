// Toggle sticky nav and add additional top margin to hero section
window.addEventListener("scroll", function () {
  var navBar = document.querySelector(".nav-bar");
  const heroSection = document.querySelector(".hero-container");

  navBar.classList.toggle("sticky-nav-bar", this.window.scrollY > 0);
  
  if (navBar.classList.contains("sticky-nav-bar")) {
    heroSection.style.marginTop = "10.625rem";
  } else {
    heroSection.style.marginTop = "0rem";
  };
});