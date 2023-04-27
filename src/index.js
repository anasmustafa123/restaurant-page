import { headerContainer } from "./script/header";
import { body } from "./script/body";
import { footer } from "./script/footer";
import { about } from "./script/about";

const content = document.getElementById("content");


var theBody  = body;
content.appendChild(headerContainer);
const main = document.querySelector(".main");
const aboutButton = document.querySelector(".about");
const signUp = document.querySelector(".signUp");
main.addEventListener("click", () =>{
    content.removeChild(theBody)
    theBody = body
    content.appendChild(theBody);
    content.appendChild(footer)
});
aboutButton.addEventListener("click", () =>{
    content.removeChild(theBody)
    theBody = about
    content.appendChild(theBody);
    content.appendChild(footer)
});
content.appendChild(theBody);
content.appendChild(footer)
