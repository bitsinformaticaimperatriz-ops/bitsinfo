// Função para abrir o Lightbox
function openLightbox(src) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    
    // Define a imagem e o caption
    img.src = src;
    
    // Exibe o modal
    modal.style.display = "block";
}

// Função para fechar o Lightbox
function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    modal.style.display = "none";
}

// Event Listener: Adiciona o clique a todas as imagens da galeria
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.lightbox-trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de navegar para outra página
            
            // Pega o caminho da imagem do atributo 'data-src'
            const imgSrc = trigger.getAttribute('data-src');
            
            // Chama a função para abrir o lightbox
            openLightbox(imgSrc);
        });
    });
});
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