$(document).ready(function () {
  var param = {
    direction: 'horizontal',
    cssMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView:1,
    loop: false,
  }

  var swiperTeam  = new Swiper('.slider-team',param);
});
