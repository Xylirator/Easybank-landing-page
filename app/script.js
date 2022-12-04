const hamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fades = document.querySelectorAll(".has__fade")
const body = document.querySelector("body")

hamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    body.classList.remove('noscroll')
    header.classList.remove("open");
    fades.forEach(function(element){
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    })
  } 
  else {
    body.classList.add('noscroll')
    header.classList.add("open");
    fades.forEach(function(element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    })
  }
});
