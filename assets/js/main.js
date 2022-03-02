"use strict";
// メニュー
$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(this).toggleClass('active');
    $(".global-nav").toggleClass('panel');
  });
  $('global-nav ul li a').click(function() {
    $(".menu-toggle").removeClass('active');
    $(".global-nav").removeClass('panel');
  });
});

// ニュースステッカー
let slider;
let sliderFlag = false;
let breakpoint = 768;

function sliderSet() {
  let windowWidth = window.innerWidth;
  if (windowWidth >= breakpoint && !sliderFlag) {
    slider = $('.slider').bxSlider({
      mode: 'vertical',
      controls: false,
      auto: 'true',
      pager: false,
    });
    sliderFlag = false;
  } else if (windowWidth < breakpoint && sliderFlag) {
    slider.destroySlider();
    sliderFlag = false;
  }
}
$(window).on('load resize', function() {
  sliderSet();
});
