const insert = document.querySelector(".insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
        ${event.key === " " ? "Space" : event.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${event.code}
        <small>event.key</small>
      </div>
`;
});

window.addEventListener("click", (e) => {
  insert.innerHTML = ``;
  const container = document.createElement("div");
  container.innerText =
    "you clicked mouse so all thing are removed just start pressing keys";
  insert.appendChild(container);
});
