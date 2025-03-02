AOS.init();

const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    event.currentTarget.setAttribute('aria-expanded', 'true')

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function abrirEmail(email) {
    var mensagem = "Olá, vim do site MABELLO, estou precisando de um orçamento. Meu telefone é: ";
    var link = "mailto:" + email + "?subject=Orçamento&body=" + encodeURIComponent(mensagem);
    window.location.href = link;
  }


  const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor:true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      620: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
    
  });