import '../styles/header.css'

const headerContainer = document.createElement("div");
const headerText = document.createElement("h1");
const headerOptions = document.createElement("div");
const main = document.createElement("div");
const about = document.createElement("div"); 
const signUp = document.createElement("div");


headerContainer.classList.add("header-container");
headerText.classList.add("header-text");
headerOptions.classList.add("header-options");
main.classList.add("main");
about.classList.add("about");
signUp.classList.add("signup");


headerText.textContent = "Ginger";
main.textContent = "main";
about.textContent = "about";
signUp.textContent = "signup";

headerOptions.appendChild(main);
headerOptions.appendChild(about);
headerOptions.appendChild(signUp);


headerContainer.appendChild(headerText);
headerContainer.appendChild(headerOptions);

export {headerContainer};