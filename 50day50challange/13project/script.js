const tags = document.querySelector(".tags");

const textarea = document.querySelector("textarea");
textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(stringtext) {
  //now seperate the text on ,
  const tags = stringtext
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map();
  console.log(array);
}
