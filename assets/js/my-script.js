$(document).ready(function(){

  let leftArrow = '<i class="fas fa-angle-left"></i>';
  let rightArrow = '<i class="fas fa-angle-right"></i>';

  $('.client-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    smartSpeed:1500,
    navText: [ leftArrow, rightArrow],
    responsive: {
      0: {
          items: 2
      },
      576: {
          items: 3
      },
      992: {
          items: 5
      },
    }
  });
});

$(window).on('scroll', function() {

    let mainNavbar = $('.navbar-area');

    if ($(window).scrollTop() >= 1) {
        mainNavbar.addClass('navbar-area-fixed');
    } else {
        mainNavbar.removeClass('navbar-area-fixed');
    }

    // let ScrollTop = $('.back-to-top');
    // if ($(window).scrollTop() > 1000) {
    //     ScrollTop.fadeIn(1000);
    // } else {
    //     ScrollTop.fadeOut(1000);
    // }
});

console.log('Hello World!');