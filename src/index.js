import { navbarContainer } from "./script/header";
import { body } from "./script/body";
import { footer } from "./script/footer";
import { about } from "./script/about";
import { mainContainer } from "./script/menu";
import "./styles/normalize.css";
import "./styles/headerr.css";
// Import our custom CSS
import "./scss/styles.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";


var theBody = body;
const content = document.getElementById("content");
content.appendChild(navbarContainer);
const navLinks = document.querySelectorAll(".nav-link");
const mains = document.querySelectorAll(".main");
const aboutButton = document.querySelector(".about");
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector('.btn-close');

function deActivate() {
  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    closeBtn.click();
  });
}
const appendContent = (theBody,footer)=>{
    content.appendChild(theBody);
    content.appendChild(footer);
}

mains.forEach((main) => {
  main.addEventListener("click", (e) => {
    content.removeChild(theBody);
    deActivate();
    document.querySelector(".nav-link.main").classList.add("active");
    theBody = body;
    appendContent(theBody,footer);
  });
});
aboutButton.addEventListener("click", (e) => {
  content.removeChild(theBody);
  deActivate();
  e.target.classList.add("active");
  theBody = about;
  appendContent(theBody,footer);
});
menu.addEventListener("click", (e) => {
  content.removeChild(theBody);
  deActivate();
  e.target.classList.add("active");
  theBody = mainContainer;
  appendContent(theBody,footer);
});
appendContent(theBody,footer);

