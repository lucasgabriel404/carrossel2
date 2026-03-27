const images = [
  "images/carrossel-001.jpg",
  "images/carrossel-002.jpg",  
  "images/carrossel-003.jpg",
  "images/carrossel-004.jpg",
  
];

const track = document.getElementById("track");
let currentIndex = 0;

// cria as imagens dinamicamente
images.forEach(src => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const img = document.createElement("img");
  img.src = src;

  slide.appendChild(img);   // img dentro da moldura
  track.appendChild(slide); // moldura dentro do track
});

// atualiza posição do carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 800}px)`;
}

// botão próximo
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

// botão anterior
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});