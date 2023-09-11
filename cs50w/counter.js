if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", 0);
}
function count() {
  let counter = localStorage.getItem("counter");
  console.log(counter);
  counter = parseInt(counter) + 1;
  document.querySelector("#display").innerHTML = counter;
  // if(counter%10 ===0){
  //     alert(`counter is now ${counter}`)
  // }
  localStorage.setItem("counter", counter);
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("div").innerHTML = localStorage.getItem("counter");
  document.querySelector("button").addEventListener("click", count);

  // setInterval(count,1000);
});
// document.querySelector("button").onclick = count;
