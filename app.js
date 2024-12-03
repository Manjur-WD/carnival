Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

const swiper = new Swiper(".avertising-carousel .swiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom-next-button", // Custom next button
    prevEl: ".custom-prev-button", // Custom prev button
  },

  // Autoplay settings
//   autoplay: {
//     delay: 3000, // Time between slide transitions in ms
//     disableOnInteraction: false, // Continue autoplay after interaction
//   },

  // Breakpoints for responsiveness
  breakpoints: {
    // When the screen width is less than or equal to 480px (small mobile devices)
    480: {
      slidesPerView: 3, // Show 1 slide per view on very small screens
      spaceBetween: 10, // Space between slides on very small screens
    },
  },
});

gsap.from(".heading-text",{
    scaleX: 0,
    delay: 1
})

gsap.from(".avertising-carousel",{
    y: 200,
    delay: 1,
    opacity: 0
})
