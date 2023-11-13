document.addEventListener( 'DOMContentLoaded', function() {

  const swiper = new Swiper(".swiper-container", {
    mousewheel: {
      invert: false,
      interval: 400
    },
    navigation: {
      prevEl: ".swiper-plugin-navigation-prevEl",
      nextEl: ".swiper-plugin-navigation-nextEl"
    },
    pagination: {
      el: ".swiper-plugin-pagination",
      clickable: true,
      bulletClass: "swiper-plugin-pagination__item",
      bulletActiveClass: "is-active"
    },
    plugins: [SwiperPluginNavigation,SwiperPluginPagination]
  });

} );
