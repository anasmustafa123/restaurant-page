import "../styles/menu.css";
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");
mainContainer.innerHTML = `
<div class="container-title large-header">Menu</div>
<div class="horizontal">
  <div class="order-type">
    <div class="order-name header">Main Course</div>
    <div class="title  light-header">delicious food name</div>
    <div class="order-container">
      <div class="order-ingredients">chicken + something + anotherThing</div>
      <div class="order-ingredients">chicken + something + anotherThing</div>
    </div>
  </div>
  <div class="order-type">
    <div class="order-name header">Main Course</div>
    <div class="title light-header">delicious food name</div>
    <div class="order-container">
      <div class="order-ingredients">chicken + something + anotherThing</div>
      <div class="order-ingredients">chicken + something + anotherThing</div>
    </div>
  </div>
</div>
<div class="horizontal">
  <div class="order-type">
    <div class="order-name header">Main Course</div>
    <div class="title light-header">delicious food name</div>
    <div class="order-container">
      <div class="order-ingredients">chicken + something + anotherThing</div>
      <div class="order-ingredients">chicken + something + anotherThing</div>
    </div>
  </div>
  <div class="order-type">
    <div class="order-name header">Main Course</div>
    <div class="title light-header">delicious food name</div>
    <div class="order-container">
      <div class="order-ingredients">chicken + something + anotherThing</div>
      <div class="order-ingredients">chicken + something + anotherThing</div>
    </div>
  </div>
</div>
`;

export { mainContainer };
