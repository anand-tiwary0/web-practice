const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", callthis);
callthis();
function callthis() {
  const viewport = window.innerHeight;
  const triggerpoint = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxrect = box.getBoundingClientRect().top;
    if (boxrect < triggerpoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
