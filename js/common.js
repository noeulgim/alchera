window.onload = function(){
  var newsSwiper = new Swiper(".news_swiper", {
		slidesPerView: 4,
		spaceBetween: 40,
		observer: true,
		observeParents: true,
		noSwiping: true,
            roundLengths: true,
		navigation: {
			nextEl: '.news_swiper .swiper-next',
			prevEl: '.news_swiper .swiper-prev',
		},
		pagination: {
			el: '.swiper-pagination01',
			type: 'bullets',
			clickable: true,
		},
		autoHeight: false,
		breakpoints: {
			768: {
				slidesPerView: 1,
				spaceBetween: 30,
				noSwiping: false,
				followFinger: false
			},
			1440: {
				slidesPerView: 4,
				spaceBetween: 20,
				noSwiping: false,

			}
		}
	});

  var industriesTabSwiper = new Swiper(".con_industries_tab", {
        slidesPerView: 4,
        observer: true,
        observeParents: true,
        noSwiping: true,
        autoHeight: false,
        breakpoints: {
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                noSwiping: false
            }
        }

    });
    var industriesSwiper = new Swiper(".con_industries_swiper", {
        initialSlide: 0,
        slidesPerView: 1.9,
        centeredSlides: true,
        spaceBetween: 100,
        autoplay: { delay: 3000 },
        loop: true,
        loopAdditionalSlides: 2,
        noSwiping: false,
        disableOnInteraction: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoHeight: false
            },
            960: {
                spaceBetween: 30,
                slidesPerView: 1,

            },
            1440: {
                slidesPerView: 1.9,
                spaceBetween: 60,

            }
        }
    });
};
