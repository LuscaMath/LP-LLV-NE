$(document).ready(function () {
  $('.slick-carousel').slick({
    centerMode: true,
    centerPadding: '60px', // Ajustado para evitar overflow
    slidesToShow: 3,
    arrows: true, // Habilitar botões de navegação
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
