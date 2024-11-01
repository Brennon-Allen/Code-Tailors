
var stickyNav = document.querySelector('.main-nav-outer');


window.addEventListener("scroll", function () {
    var navbar = document.querySelector('.main-nav-outer');
    var navbarTop = navbar.getBoundingClientRect().top + window.scrollY;
  
  if (window.scrollY >= navbarTop) {
    stickyNav.style.top = "0"; // Back to transparent at top
    stickyNav.style.display = "flex"; // Back to transparent at top
    stickyNav.style.justifyContent = "center"; // Back to transparent at top

    stickyNav.style.zIndex = "10000";
    stickyNav.style.backgroundColor = "rgb(255, 255, 255, 1)"; // Change to white when scrolling
    stickyNav.style.transition = "500ms";
    stickyNav.style.padding = "5px";
    stickyNav.style.boxShadow = "0 0 5px 3px rgba(0, 0, 0, .6)";
    stickyNav.style.position = "sticky"; // Change to white when scrolling
  }
});