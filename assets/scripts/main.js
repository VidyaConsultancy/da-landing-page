function toggleMenu(event) {
  console.log(event);
  const str = prompt('hello')
  console.log(str, " from prompt")
//   const menu = document.getElementsByClassName("main-navbar");
//   menu[0].classList.toggle("open");
}

const btn = document.getElementById("menu-toggle");
btn.addEventListener("click", function (e) {
  const menu = document.getElementsByClassName("main-navbar");
  menu[0].classList.toggle("open");
});
