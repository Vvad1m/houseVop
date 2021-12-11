$(function(){
    $('.apartments__slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<button type="button" class="slick-btn slick-prev"> <img src="images/left.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="./images/right.svg" alt=""></button>',
      });
      $('.popup__link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });
});