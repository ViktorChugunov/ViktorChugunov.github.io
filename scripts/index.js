$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	loop: true,
    center: true,
    items: 4,
    mergeFit: true,
    nav: true,
    dots : true,
    mouseDrag: false,
	lazyLoad: true,
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 5000, //Время смены слайда
    mergeFit:false
});
});