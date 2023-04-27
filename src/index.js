import { headerContainer } from "./script/header";
import { body } from "./script/body"
import { footer } from "./script/footer"
const content = document.getElementById("content");
content.appendChild(headerContainer);
content.appendChild(body);
content.appendChild(footer)
