const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let contador = 1;
slider.appendChild(slide[0]);

function avanzar() {
slider.appendChild(slide[contador]);
contador++;
if (contador === slide.length) {
contador = 0;
}
}

function retroceder() {
slider.prepend(slide[contador]);
contador--;
if (contador < 0) {
contador = slide.length - 1;
}
}

prevBtn.addEventListener('click', retroceder);
nextBtn.addEventListener('click', avanzar);