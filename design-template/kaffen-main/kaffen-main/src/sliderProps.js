import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
} from "swiper";

SwiperCore.use([
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
]);
export const sliderProps = {
  mainSliderSelector: {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    parallax: true,
    autoplay: {
      delay: 9000,
    },
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      progress: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress,
            innerOffset = swiper.width * interleaveOffset,
            innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector(".slide").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      },
      touchStart: function () {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = "";
        }
      },
      setTransition: function (swiper, speed) {
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".slide").style.transition =
            speed + "ms";
        }
      },
    },
  },
  kfGridCarousel: {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  kfTestimonialsCarousel: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: false,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  },
  kfInstaCarousel: {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    watchSlidesProgress: true,
    pagination: false,
    navigation: false,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  },
  kfHistory: {
    slidesPerView: 1,
    spaceBetween: 70,
    loop: false,
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "true",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
};
