//add on click event on button to start countdown timer

var button = document.getElementById("timerstart");
var total = document.getElementById("total");
var totaltime = parseInt(total.value);

button.addEventListener("click");

//time formatting done;
function printtime(totaltime) {
  var remtime = totaltime;
  if (totaltime >= 3600) {
    var hr = (tremtime / 3600) | 0;
    remtime = remtime - hr * 3600;
  }
  if (totaltime >= 60) {
    var min = (remtime / 60) | 0;
    remtime = remtime - min * 60;
  }

  var sec = remtime;
  console.log(hr + " HH " + min + " MM " + sec + " SS ");

  return hr + " HH " + min + " MM " + sec + " SS ";
}
