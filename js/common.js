$(function(){

  $('#header-wrap').mouseenter(function(){
    $('#logo h1 img').attr('src','./img/alchera_logo.svg');
  }).mouseleave(function(){
    $('#logo h1 img').attr('src','./img/alchera_logo_w.svg');
  });

  //-------------------------------- counter ----------------------------------

  // const counter = ($counter, max) => {
  //   let now = max;
  //
  //   const handle = setInterval(() => {
  //     $counter.innerHTML = (max - now);
  //
  //     // 목표수치에 도달하면 정지
  //     if (now < 1) {
  //       clearInterval(handle);
  //     }
  //
  //     // 증가되는 값이 계속하여 작아짐
  //     const step = now / 10;
  //
  //     // 값을 적용시키면서 다음 차례에 영향을 끼침
  //     now -= step;
  //   }, 50);
  // }
  //
  // window.onload = () => {
  //   // 카운트를 적용시킬 요소
  //   const $counter = document.querySelector(".count-num1");
  //
  //   // 목표 수치
  //   const max = 3.12;
  //
  //   setTimeout(() => counter($counter, max), 2000);
  // }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  $({ val : 0 }).animate({ val : 3.12 }, {
  duration: 2000,
  step: function() {
    var num1 = numberWithCommas(this.val.toFixed(2));
    $(".count-num1").text(num1);
  },
  complete: function() {
    var num1 = numberWithCommas(this.val.toFixed(2));
    $(".count-num1").text(num1);
  }
});

$({ val : 0 }).animate({ val : 99.9 }, {
  duration: 2000,
  step: function() {
    var num2 = numberWithCommas(this.val.toFixed(1));
    $(".count-num2").text(num2);
  },
  complete: function() {
    var num2 = numberWithCommas(this.val.toFixed(1));
    $(".count-num2").text(num2);
  }
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
