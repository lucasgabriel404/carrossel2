const images = [
  'images/carrossel-001.jpg',
  'images/carrossel-002.jpg',  
  'images/carrossel-003.jpg',
  'images/carrossel-004.jpg',
  
];

const track = document.getElementById('track');
let currentIndex = 0;

// cria as imagens dinamicamente
images.forEach(src => {
  const slide = document.createElement('div');
  slide.classList.add('slide');

  const img = document.createElement("img");
  img.src = src;

  slide.appendChild(img);
  track.appendChild(slide);
});

// atualiza posição do carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 800}px)`;

  Array.from(track.children).forEach(slide => {
    const img = slide.querySelector('img');
    img.onmousemove = null;
    img.onmouseleave = null;
  });

  const activeSlide = track.children[currentIndex].querySelector('img');

  activeSlide.addEventListener('mousemove', (e) => {
    const px = (e.offsetX / activeSlide.clientWidth) * 100;
    const py = (e.offsetY / activeSlide.clientHeight) * 100;

    activeSlide.style.transform = 'scale(2)';
    activeSlide.style.transformOrigin = `${px}% ${py}%`;
  });

  activeSlide.addEventListener('mouseleave', () => {
    activeSlide.style.transform = 'scale(1)';
  });  
}

// botão próximo
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// botão anterior
document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

updateCarousel();

