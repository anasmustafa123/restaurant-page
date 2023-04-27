import { map } from "./map";
import { cardText } from "./cardText";

 
const about = document.createElement("div");
about.appendChild(cardText);
about.appendChild(map);

export { about }