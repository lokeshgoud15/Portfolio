const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const theme = document.getElementById("theme");
const theme2 = document.getElementById("theme2");
const name = document.getElementById("name");
const burger = document.querySelectorAll("burger");

hamburger.addEventListener("click", () => {

  
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
});
theme.addEventListener("click", () => {
  document.body.classList.toggle("bg-blue-100");
  document.body.classList.toggle("text-black");
  document.body.classList.toggle("bg-gray-800");
  document.body.classList.toggle("text-white");
});
theme2.addEventListener("click", () => {
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-black");
  document.body.classList.toggle("bg-gray-800");
  document.body.classList.toggle("text-white");
});
