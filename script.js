let slideIndex = 1;
showSlides(slideIndex);

// Controles Próximo/Anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de Ponto
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slides[slideIndex-1]) { // Verifica se o slide existe antes de tentar acessar
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }
}

// Opcional: Auto-avanço dos slides
let autoSlideInterval = setInterval(() => {
    plusSlides(1);
}, 5000); // Muda de slide a cada 5 segundos (5000 milissegundos)

// Pausar o auto-avanço ao passar o mouse sobre o carrossel
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Retomar o auto-avanço ao tirar o mouse do carrossel
document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(() => {
        plusSlides(1);
    }, 5000);
});