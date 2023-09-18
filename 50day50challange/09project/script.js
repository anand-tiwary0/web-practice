const btn = document.querySelector(".btn");

//we have to create button and append it to div
const array = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

array.forEach((sound) => {
  let bt = document.createElement("button");
  bt.innerText = sound;
  bt.classList.add("btn-music");
  console.log(bt.innerHTML);
  bt.addEventListener("click", () => {
    stopsong();

    document.getElementById(sound).play();
  });
  btn.appendChild(bt);
});

function stopsong() {
  array.forEach((element) => {
    const song = document.getElementById(element);
    song.pause();
    song.currentTime = 0;
  });
}
