import "../styles/cardText.css"
const cardText = document.createElement("div");
cardText.classList.add("about-section");
const aboutHeader = document.createElement("h2");
aboutHeader.textContent = "About Ginger Restaurant";
const p1 = document.createElement("p");
p1.textContent = "Ginger Restaurant is a modern fusion restaurant located in the heart of the city. Our mission is to provide our guests with a unique and unforgettable dining experience.";
const p2 = document.createElement("p");
p2.textContent = "Our menu is a fusion of international flavors, featuring dishes inspired by the cuisines of Asia, Europe, and South America. We use only the freshest, locally sourced ingredients to create our dishes, and our chefs are dedicated to crafting each plate to perfection.";
const p3 = document.createElement("p");
p3.textContent = "At Ginger Restaurant, we pride ourselves on providing exceptional service in a warm and inviting atmosphere. Whether you're joining us for a romantic dinner for two or a lively night out with friends, we look forward to welcoming you to our restaurant.";

cardText.appendChild(aboutHeader);
cardText.appendChild(p1);
cardText.appendChild(p2);
cardText.appendChild(p3);

export { cardText }
