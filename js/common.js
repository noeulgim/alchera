window.onload = function(){
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
      slidesPerView: 3,
      direction: getDirection(),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        resize: function () {
          swiper.changeDirection(getDirection());
        },
      },
    });

    function getDirection() {
      var windowWidth = window.innerWidth;
      var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

      return direction;
    }

    // var swiperFifth = new Swiper("swiper-fifth", {
    //   slidesPerView: 3,
    //   grid: {
    //     rows: 2,
    //   },
    //   autoplay: {
    //     delay: 0,
    //     disableOnInteraction: false,
    //   },
    //   spaceBetween: 120,
    //   loop: true,
    //   loopAdditionalSlides : 1,
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });
};
