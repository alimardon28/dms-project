let lest = document.querySelector(".header__navbar-list");
let hamburger = document.querySelector(".header__hamburger");

hamburger.addEventListener("click", () => {
  console.log("bosildi");

  lest.classList.toggle("active");
});
