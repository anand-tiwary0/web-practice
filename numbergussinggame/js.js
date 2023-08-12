var secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);
var attempts = 0;

//now we have to check the value of input field when button is clicked

//selecting button
var checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", checkGuess);

var para = document.getElementById("result");

function checkGuess() {
  var userGuess = parseInt(document.getElementById("userguess").value);

  if (userGuess === secretNumber) {
    document.getElementById("result").textContent =
      "Congrats you gussed it in " + attempts + "  attempts";
    //now remove the event listener to stop furhtur attempts
    checkButton.removeEventListener("click", checkGuess);
  } else if (userGuess < secretNumber) {
    attempts++;
    para.textContent = "Try Higher!";
  } else {
    attempts++;
    para.textContent = "Try Lower!";
  }
}
