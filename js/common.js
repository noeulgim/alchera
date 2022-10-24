$(function(){

  $('#header-wrap').mouseenter(function(){
    $('#logo h1 img').attr('src','./img/alchera_logo.svg');
  }).mouseleave(function(){
    $('#logo h1 img').attr('src','./img/alchera_logo_w.svg');
  });


//-------------------------------- swiper ----------------------------------

  var swiperThird = new Swiper(".swiper-third", {
        spaceBetween: 100,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides : 1,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    var swiperFourth = new Swiper(".swiper-fourth", {
      slidesPerView: 4,
      // direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // slidesPerView: 4,
      // spaceBetween: 30,
      // pagination: {
      //   el: ".swiper-pagination",
      //   clickable: true,
      // },
    });

    var industriesSwiper = new Swiper(".swiper-fifth", {
        initialSlide: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        autoplay: { delay: 0 },
        speed: 5000,
        loop: true,
        loopAdditionalSlides: 1,
        noSwiping: false,
        disableOnInteraction: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
      });
});
