/*===========================================
|   |   |   Responsive Tabs  |   |   |   |   |
============================================*/
$(window).on('load', function () {
    $('#status').delay(800).fadeOut();
    $('#preloader').delay(1000).fadeOut();
});


/*===========================================
|   |   |   Responsive Tabs  |   |   |   |   |
============================================*/

$('.about-item').hover(
    function(){
        $('.about-item p').addClass("overflow-visible")
    }, function () {
        $('.about-item p').removeClass("overflow-visible")
    }
);

/*===========================================
|   |   |   Animation   |   |   |   |   |
============================================*/
//REVEAL ANIMATION ON SCROLL
$(function() {
    new WOW().init();
});

/*
$(window).on('load', function() {
    $('#born-title h1').addClass("animated zoomIn");
    $('#born-title hr').addClass("animated fadeInLeft");
    $('#born-title p').addClass("animated fadeInRight");
}); */