function addBoxShadowOnScroll() {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 10) { // Altere esse valor para determinar quando o box-shadow deve ser aplicado
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", addBoxShadowOnScroll);
