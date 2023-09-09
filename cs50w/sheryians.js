//sync - ek ke baad dusra hoga dusra tab tak nahi hoga jab tak pahla complete nahi hua
//async - saare kam ek saath suru kar do jiska answer pahle aa jaye uska jawab de dena no order
//kaise pata chalega ki hum sync code likh rahen hain ya async code likh rahen hain
// setInterval
// setTimeout
// Promises
// fetch
// axios
// XMLHttpRequest
//kai baar hamara final code depended hota hai kisi aur ke server pe, is case mein hum sync code nahi likh sakete kyunki hume pata nahi hota hai ki kab hamare requeest ka reponse laut kar aayega that's why we write async code takki blocking na ho and jab bhi answer aaye humara answer ke respect me chalne waala code chal jaaye

//callback function aysnc code me answer aane pe chalta hai
document.addEventListener("DOMContentLoaded", main);
function main() {
  console.log("hay1");
  setTimeout(function () {
    console.log("hay2");
  }, 0);
  console.log("hay3");
}

//js is not asynchronous
//async kabhi do kam ek saath nahi karti - single threaded lang

//single threading multithreading

//callback functions which run when aysnc code completes
// fetch
// axios for api calles
// promises
// setTimeout
// etc these are async code  when they complete their task we can use there answer in then fetch aysnc await

// fetch(`https://www.facebook.com`)
// .then

//here answer can be in resolve state pending state reject state
// var ans = new Promise((res,rej)=>{
//   if(true){
//     return res();
//   }
//   else{
//     return rej();
//   }
// })

// ans
// .then(//it will run when ans is in resolved state
// function(){
//   console.log("resoloved");
// })
// .catch(function(){
//   console.log("rejected");
// })

//user will ask for number between 0 to 9 if the number is below 5 resolve otherwise reject

var ans = new Promise((resolve, reject));
