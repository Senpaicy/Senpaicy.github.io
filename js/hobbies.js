const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.slider-btn.next');
const prevBtn = document.querySelector('.slider-btn.prev');

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 250, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -250, behavior: 'smooth' });
});
