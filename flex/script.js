var lbutton = document.getElementById("light");
var dbutton = document.getElementById("dark");

function changecolor(){
  document.getElementById("change").style.backgroundColor = "#565656";
}

changecolor();

dbutton.addEventListener("click",()=>{
  document.getElementById("back").style.backgroundColor = "black";
});

var objcontainingelementscssprop = window.getComputedStyle(document.getElementById("back"));

var indexingthosecssprop = objcontainingelementscssprop.backgroundColor;

//as object returned by getComputedStyle is read only
//we can't modify it's contains
// console.log(indexingthosecssprop);
// if(indexingthosecssprop === "white"){
//   console.log("true");
// }

var nowcolor = document.getElementById("back").style.background;
console.log(nowcolor);

lbutton.addEventListener("click",() => {
  var nowcolor = document.getElementById("back").style.background;
  
})

