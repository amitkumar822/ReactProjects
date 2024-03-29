const sliderWrapper = document.querySelector('.slider-wrapper');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slider-wrapper img');

let currentSlide = 0;
const slideWidth = slides[0].clientWidth;

// Move to next slide
nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

// Move to previous slide
prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  sliderWrapper.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});
