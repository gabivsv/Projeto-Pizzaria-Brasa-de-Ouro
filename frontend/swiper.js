var swiper = new Swiper(".swiper", {
  loop: true,
  grabCursor: true,
  speed: 800, 
    autoplay: {
        delay: 3000, // Tempo antes de mudar de slide
        disableOnInteraction: false,
    },
    effect: "slide", 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
   
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    
    1188: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
