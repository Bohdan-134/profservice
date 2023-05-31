const swiper = new Swiper('.swiper', {
    // Настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,

    // Настройки пагинации
    pagination: false,

    // Настройки навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperReviews = new Swiper('.slider-reviews-list', {
     // Настройки слайдера
     slidesPerView: 3,
     spaceBetween: 25,
 
     // Настройки пагинации
     pagination: false,
 
     // Настройки навигации
     navigation: false
});