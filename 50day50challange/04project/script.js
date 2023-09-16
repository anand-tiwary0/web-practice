const search = document.querySelector(".search");

const input = document.querySelector(".input");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  if (search.classList.contains("active")) {
    search.classList.remove("active");
    return;
  }
  search.classList.add("active");
  input.focus();
});
