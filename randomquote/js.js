var button = document.getElementById("newquote");
var quotearea = document.getElementById("goquote");

button.addEventListener("click", givequote);

function givequote() {
  var quotes = [
    "quote 1 - by steve",
    "quote2 by rendom 2",
    "quote 3 by random 3",
    "quote 3 by random 4",
    "lorem ipsumm quote 5",
    "random quote 6",
    "random quote 7",
  ];

  var quotechoose = quotes[Math.floor(Math.random() * 7)];
  quotearea.textContent = quotechoose;
}
