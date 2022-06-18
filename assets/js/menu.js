$(document).ready(function() {
    "use strict";
    $('.menu > ul > li:has( > ul)').addClass('bx bx-chevron-down');
    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    $(".menu > ul").before("<a href=\"#\" class=\"bx bx-menu\"></a>");
    $(".menu > ul > li").hover(function(e) {
      if ($(window).width() > 943) {
        $(this).children("ul").stop(true, false).fadeToggle(150);
        e.preventDefault();
      }
    });
    $(".menu > ul > li").click(function() {
      if ($(window).width() <= 943) {
        $(this).children("ul").fadeToggle(150);
      }
    });
    $(".bx-menu").click(function(e) {
      $(".menu > ul").slideToggle(500);
      e.preventDefault();
    });
  });
  $(window).resize(function() {
    $(".menu > ul > li").children("ul").hide();
    $(".menu > ul").removeClass('show-on-mobile');
  });
