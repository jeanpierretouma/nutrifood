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


// Toggle mobile nav and menu button
const navMenu = document.querySelector("#nav");
const navList = document.querySelector(".main-nav-list");
const navBtn = document.querySelector(".btn-mobile-nav");
const menuBtn = document.querySelector(".menuBtn-open");
const closeBtn = document.querySelector(".closeBtn-close");

navBtn.addEventListener("click", function () {
  navMenu.classList.toggle("nav-open");
  navList.classList.toggle("main-nav-list-mobile");
  menuBtn.classList.toggle("menuBtn-close");
  closeBtn.classList.toggle("closeBtn-open");
});


// Add smooth scrolling to all links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});