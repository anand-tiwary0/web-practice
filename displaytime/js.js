var displayarea = document.getElementById("displaytime");

//GETTING CURRENT TIME FUNCTION
function currenttime() {
  var now = new Date();
  var dateTimeString = "current date and time : " + now.toLocaleString();
  displayarea.textContent = dateTimeString;
}
currenttime(); //calling function immediately
//UPDATING TIME STRING EVERY SECOND
setInterval(currenttime, 1000);
