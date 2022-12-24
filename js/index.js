// Navigation Active State on Scroll
$(document).ready(function() {
  $(window).scroll(function() {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $('.navigation a.active').removeClass('active');
        $('.navigation a').eq(i).addClass('active');
      }
    });
  }).scroll();
});

// TYPED JS for Hero Page
$(function(){
  $(".typed").typed({
    strings: ["Welcome to my website!", "I'm a software developer", "I love building things"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
  });
});

// OWL CAROUSEL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// SMOOTH SCROLL
$('.navigation a').smoothScroll({
  offset: 0,
  duration: 600
});

// Navigation using JQuery
$('.navigation .nav-link').click(function() {
  $('.navigation .nav-link').removeClass('active');
  $(this).addClass('active');
});

// Counter
$('.counter').counterUp({
  delay: 10,
  time: 2500
});

// Bootstrap 5 Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

// Bootstrap 5 ToolTip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
