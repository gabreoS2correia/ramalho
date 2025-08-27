//CARROSSEL HOMEPAGE
let currentIndex = 0;

function moveSlide(step) {
  const viewport = document.querySelector('#seccarrossel');
  const track    = document.querySelector('#secroladora');
  const slides   = document.querySelectorAll('.divatv');
  if (!viewport || !track || slides.length === 0) return;

  const cardWidth   = slides[0].offsetWidth;
  const gap         = parseInt(getComputedStyle(track).gap) || 0;
  const unit        = cardWidth + gap;
  const visible     = Math.max(1, Math.floor(viewport.offsetWidth / unit));
  const maxIndex    = slides.length - visible;

  currentIndex = Math.min(Math.max(0, currentIndex + step), maxIndex);
  track.style.transform = `translateX(-${currentIndex * unit}px)`;
}
