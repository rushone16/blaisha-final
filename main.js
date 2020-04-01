/* https://www.w3schools.com/howto/howto_js_navbar_sticky.asp */
var navbar = document.getElementsByTagName("nav")[0];
var sticky = navbar.offsetTop;

$(window).scroll(function () {
  if(window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
});