const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");
if (button && menu) {
  button.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
