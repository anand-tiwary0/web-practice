//just add active class for the section in which button is clicked

const btns = document.querySelectorAll(".faq-toggle");
// btns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.parentNode.classList.toggle("active");
//   });
// });

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    utoggle();
    btn.parentNode.classList.toggle("active");
  });
});

function utoggle() {
  const faqs = document.querySelector(".active");
  faqs.classList.toggle("active");
}
