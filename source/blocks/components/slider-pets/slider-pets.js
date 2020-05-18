$(document).ready(function () {
  var param = {
    direction: 'horizontal',
    cssMode: true,
    navigation: {
      nextEl: '.slider-pets__swiper-button-next',
      prevEl: '.slider-pets__swiper-button-prev',
    },
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 2,
        spaceBetween: 1,
      },

      1023: {
        slidesPerView: 3,
        spaceBetween: 10,
      },


    }


  }

  var swiper  = new Swiper('.slider-pets__tab1',param);
  var swiper2 = new Swiper('.slider-pets__tab2',param);
  var swiper3 = new Swiper('.slider-pets__tab3',param);
});
