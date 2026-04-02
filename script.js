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
  slide.style.backgroundImage = `url('${src}')`
  track.appendChild(slide); // moldura dentro do track
});

// atualiza posição do carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 800}px)`;

  Array.from(track.children).forEach(slide => {
    slide.style.backgroundSize = 'contain';
    slide.style.backgroundPosition = 'center';
    slide.onmousemove = null;
    slide.onmouseleave = null;
  });

  const activeSlide = track.children[currentIndex];

  activeSlide.addEventListener('mousemove', (e) => {

    const px = (e.offsetX / activeSlide.clientWidth) * 100;
    const py = (e.offsetY / activeSlide.clientHeight) * 100;

    activeSlide.style.backgroundSize = '120%'; // zoom
    activeSlide.style.backgroundPosition = `${px}% ${py}%`;
  });

  activeSlide.addEventListener('mouseleave', () => {
    activeSlide.style.backgroundSize = 'contain';
    activeSlide.style.backgroundPosition = 'center';
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

