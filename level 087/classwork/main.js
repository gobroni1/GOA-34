const slides = document.querySelector(".second-div");
const next = document.getElementById("click");

const allImages = document.querySelectorAll(".second-div img").length;
let curent = 0;

next.addEventListener('click', () => {

  curent = (curent + 1) % allImages;

  slides.style.transform = `translateX(-${curent * 300}px)`; 
});
