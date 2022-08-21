const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  this.classList.toggle("is-active");
});

$(document).ready(function () {
  $("#icon").click(function () {
    $("ul").toggleClass("show");
  });
});

wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated ", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

let scrollTop = document.querySelector(".scrollTop");
let headerControl = new Waypoint({
  element: document.getElementById("contact"),
  handler: function (direction) {
    if (direction === "down") {
      scrollTop.style.display = "block";
      scrollTop.classList.add("animate__slideInUp");
    } else {
      scrollTop.style.display = "none";
      scrollTop.classList.remove("animate__slideInUp");
    }
  },
  offset: "55%",
});

ScrollReveal({
  origin: "left",
  distance: "20px",
  duration: 1500,
  reset: true,
}).reveal(".reveal");

var typed = new Typed(".type", {
  strings: ["Lynn", "Web Developer","UI/UX Designer"],
  typeSpeed: 30,
  backSpeed: 60,
  loop: true
});
