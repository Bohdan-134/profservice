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