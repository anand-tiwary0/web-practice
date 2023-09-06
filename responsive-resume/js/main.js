// show-menu

const { html2pdf } = require("./html2pdf.bundle.min");

const showMenu = (toogleId, navId) => {
  const toggle = document.getElementById(toogleId),
    nav = document.getElementById(navId);
  console.log(toggle);
  console.log(nav);

  //validate that vars exists
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      //we add teh show-menu class to the div tag with nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//remove menu mobile

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  //when we click on each nav__link , we remove the show-menu class
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

//scroll sections active link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  //determine current level of scroll in the page
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// // show scroll top
// function scrollTop() {
//   const scrollTop = document.getElementById("scroll-top");
//   console.log(scrollTop);
//   // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if (this.scrollY >= 560) {
//     scrollTop.classList.add("show-scroll");
//   } else {
//     scrollTop.classList.remove("show-scroll");
//   }
// }
// window.addEventListener("scroll", scrollTop);

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);

//dark and light theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getcurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getcurrentIcon());
});

/*reduce teh size and print on an a4 sheet */
function scaleCv() {
  document.body.classList.add("scale-cv");
}

// after download remove scale cv
function removeScale() {
  document.body.classList.remove("scale-cv");
}

/* ==================generate pdf ==============*/
//pdf generate area
let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

//html2pdf options
let opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
};

//function to call areaCv and Html2pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

//when button is clicked , it executes three functions
//add scale cv pdf generated scale-cv removed
resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();
  //remove scale cv after 5s to return to normal
  setTimeout(removeScale, 5000);
});
