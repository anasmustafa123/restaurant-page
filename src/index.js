import { navbarContainer } from "./script/header";
import { body } from "./script/body";
import { footer } from "./script/footer";
import { about } from "./script/about";
import { mainContainer } from "./script/menu"

var theBody  = body;
const content = document.getElementById("content");
content.appendChild(navbarContainer);
const navLinks = document.querySelectorAll(".nav-link");
const mains = document.querySelectorAll(".main");
const aboutButton = document.querySelector(".about");
const menu = document.querySelector(".menu");
console.log(navLinks);  
function deActivate(){
    navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
    })
}

mains.forEach(main=>{
    main.addEventListener("click", (e) =>{
    content.removeChild(theBody)
    deActivate();
    main.classList.add("active");
    theBody = body
    content.appendChild(theBody);
    content.appendChild(footer)
})
}); 
aboutButton.addEventListener("click", (e) =>{
    content.removeChild(theBody)
    deActivate();
    e.target.classList.add("active");
    theBody = about
    content.appendChild(theBody);
    content.appendChild(footer)
});
    menu.addEventListener("click", (e) =>{
        content.removeChild(theBody)
        deActivate();
        e.target.classList.add("active");
        theBody = mainContainer
        content.appendChild(theBody);
        content.appendChild(footer)
    });
content.appendChild(theBody);
content.appendChild(footer)
