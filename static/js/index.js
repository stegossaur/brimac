document.addEventListener("DOMContentLoaded", () => {

    new Swiper(".meuCarrossel", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 1,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },

        breakpoints: {
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            }
        }
    });

});