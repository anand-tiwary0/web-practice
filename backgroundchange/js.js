//select elements

var button = document.getElementById("changecolor");
console.log(document.body);

button.addEventListener("click", () => {
  document.body.style.backgroundColor = generateRandom();
});

function generateRandom() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
