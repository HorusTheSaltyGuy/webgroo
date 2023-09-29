const btn = document.getElementById("menu-btn")
const menu = document.getElementById("menu")



btn.addEventListener("click", navToggle)


function navToggle() {
    btn.classList.toggle("open")
    menu.classList.toggle("flex")
    menu.classList.toggle("hidden")
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("debug");
}

const sticky = document.getElementById("navbar")
window.addEventListener("scroll", navSticky);


function navSticky() {
    const isScrolled = window.scrollY > 0

    if (isScrolled > 0) {
        navbar.classList.add('fixed');
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('transition-bg-opacity');
        navbar.classList.add('duration-500');
        navbar.classList.add('bg-opacity-40');

      } else {
        navbar.classList.add('bg-transparent');
      }

    // sticky.classList.toggle("sticky", isScrolled);
    // sticky.classList.toggle("bg-transparent", isScrolled);
    // navbar.classList.remove('bg-transparent');
    // sticky.classList.toggle("transition-opacity", isScrolled);
    // sticky.classList.toggle("duration-500", isScrolled);
}
