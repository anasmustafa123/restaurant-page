import "../styles/footer.css"
import logo from "../assets/github.png" 

const footer = document.createElement("footer");


const p  = document.createElement("p");
p.classList.add("footer-text");


const githubLink = document.createElement("a");
githubLink.href = "https://github.com/anasmustafa123";


const githubImg =  document.createElement("img");
githubImg.src = logo;
githubImg.alt = "github account";


githubLink.appendChild(githubImg);
p.appendChild(githubLink);
p.append("  2023 Designed by Anas Mustafa");
footer.appendChild(p);

export {footer}