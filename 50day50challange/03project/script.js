const container = document.querySelector(".container");
const open = document.getElementById("open");
const close = document.getElementById("close");

document.getElementById("open").addEventListener("click", () => {
  container.classList.add("show-nav");
});

document.getElementById("close").addEventListener("click", () => {
  container.classList.remove("show-nave");
});
