const text = document.querySelector(".text");
const bg = document.querySelector(".bg");

let int = setInterval(changes, 30);
var current = 0;
function changes() {
  current++;
  if (current > 99) {
    clearInterval(int);
  }
  console.log(current);
  text.innerHTML = `${current}%`;
  console.log(text);
  //as opacity ranges from 100 = 0 invisible and 0 = 1 means totally visible to 0 we have to map 100 to 0;
  text.style.opacity = scale(current, 1, 100, 0, 1);
  document.querySelector(".bg").style.filter = `blur(${scale(
    current,
    0,
    100,
    30,
    0
  )}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function incrementer() {
  //we have to move 0.1 in 30ms
  //so we can move form 0 to 1
}
