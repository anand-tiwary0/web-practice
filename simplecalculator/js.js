//seletion of elemetns to change
var inputfield = document.getElementById("inputfield");
var button = document.getElementById("calculate");
var result = document.getElementById("result");
console.log(result);

button.addEventListener("click", () => {
  var input = inputfield.value;
  console.log(typeof input);
  console.log(result);
  try {
    var valuetoput = eval(input);
    result.textContent = "Result : " + valuetoput;
  } catch (error) {
    result.textContent = "Error: Invalid Expression";
  }
});
