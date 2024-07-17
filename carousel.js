$(document).ready(function () {
  $('.slick-carousel').slick({
    centerMode: true,
    centerPadding: '60px', // Ajustado para evitar overflow
    slidesToShow: 2,
    arrows: true, // Habilitar botões de navegação
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '1px',
          slidesToShow: 1
        }
      }
    ]
  });
});

let currentIndex = 0;

function showCard(index) {
  const carousel = document.querySelector('.carousel');
  const totalCards = document.querySelectorAll('.card').length;

  if (index >= totalCards) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalCards - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextCard() {
  showCard(currentIndex + 1);
}

function prevCard() {
  showCard(currentIndex - 1);
}

let sobreCurrentIndex = 0;

function sobreShowSlide(index) {
    const slides = document.querySelectorAll('.sobre-carousel-item');
    if (index >= slides.length) {
        sobreCurrentIndex = 0;
    } else if (index < 0) {
        sobreCurrentIndex = slides.length - 1;
    } else {
        sobreCurrentIndex = index;
    }
    const offset = -sobreCurrentIndex * 100;
    document.querySelector('.sobre-carousel-inner').style.transform = `translateX(${offset}%)`;
}

function sobreNextSlide() {
    sobreShowSlide(sobreCurrentIndex + 1);
}

function sobrePrevSlide() {
    sobreShowSlide(sobreCurrentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    sobreShowSlide(sobreCurrentIndex);
});

