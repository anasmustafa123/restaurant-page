import "../styles/body.css"
const  body = document.createElement("div");
body.classList.add("img-container");

for (let i = 1; i <= 6; i++){
   let className = `grid-img-${i}`
   let imgSrc = `./assets/${className}.jpg`
   console.log(className+"   "+imgSrc);
   const gridItem = document.createElement("div");
   gridItem.classList.add(className);

   body.appendChild(gridItem);
}

export { body };    