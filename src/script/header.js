import '../styles/header.css'

const headerContainer = document.createElement("div");
const headerText = document.createElement("h1");
const headerOptions = document.createElement("div");
const menu = document.createElement("div");
const about = document.createElement("div");
const signUp = document.createElement("div");


headerContainer.classList.add("header-container");
headerText.classList.add("header-text");
headerOptions.classList.add("header-options");
menu.classList.add("menu");
about.classList.add("about");
signUp.classList.add("signup");


headerText.textContent = "Ginger";
menu.textContent = "menu";
about.textContent = "about";
signUp.textContent = "signup";

headerOptions.appendChild(menu);
headerOptions.appendChild(about);
headerOptions.appendChild(signUp);


headerContainer.appendChild(headerText);
headerContainer.appendChild(headerOptions);

export {headerContainer};