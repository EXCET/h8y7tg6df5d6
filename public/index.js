// Sticky Navigation Bar
let navbar = document.querySelector(“nav”);

window.addEventListener(“scroll”, function() {
if (window.pageYOffset > 50) {
navbar.classList.add(“sticky”);
} else {
navbar.classList.remove(“sticky”);
}
});

  // get the play button element
