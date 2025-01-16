const img = document.querySelector("#i");
const button = document.querySelector("#t");


button.addEventListener("click", () => {
    img.src = "thatimage74.jpg";
});

let p = document.createElement("p"); 
p.textContent = "Hello World"; 
document.body.appendChild(p);

let h2 = document.createElement("h2");
h2.textContent="this will be before hello world";

document.body.insertBefore(h2, p);

//document.body.removeChild(h2); // removes the h2 tag

let tp = document.querySelector('p');

let parnet = tp.parentNode;

console.log(parnet); 

let newh2 = document.querySelector("h2");
let np = document.querySelector("p")

tp.parentNode.replaceChild(newh2, np);