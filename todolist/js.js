//selection of elements

var inputfield = document.getElementById("userinput");
var buttoninput = document.getElementById("addevent");

var taskliste = document.getElementById("tasklist");

buttoninput.addEventListener("click", () => {
  var usertext = inputfield.value.trim();
  console.log(usertext);
  if (usertext !== "") {
    var newlistitem = document.createElement("li");
    newlistitem.textContent = usertext;
    console.log(newlistitem.textContent);
    taskliste.appendChild(newlistitem);
    inputfield.value = "";
  }
});
