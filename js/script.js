const slides = document.querySelectorAll('.slide');
const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

let slideAtual = 0;

function mostrarSlide(novoIndex) {
  slides[slideAtual].classList.remove('ativo');
  slideAtual = (novoIndex + slides.length) % slides.length;
  slides[slideAtual].classList.add('ativo');
}

btnProximo.addEventListener('click', () => {
  mostrarSlide(slideAtual + 1);
});

btnAnterior.addEventListener('click', () => {
  mostrarSlide(slideAtual - 1);
});