// function getValue() {
//   console.log(document.getElementById("prince-range").textContent);
// }

// function updateOutput(value) {
//   document.getElementById("priceoutput").textContent = value;
// }

// getValue();
// oninpu;

// const input = document.getElementById("prince-range");
// const output = document.getElementById("priceoutput");

// input.addEventListener("input",(input.textContent)=>{
//   output.textContent = input.textContent;
// })

var inputElement = document.getElementById("price-range");
var outputElement = document.getElementById("prince-output");
console.log(inputElement);
console.log(outputElement);

console.log(inputElement.name);

//add an event listner for the input event on the input element
inputElement.addEventListener("input", function () {
  updateOutput(Number(inputElement.value));
});

function updateOutput(value) {
  outputElement.textContent = value;
}
