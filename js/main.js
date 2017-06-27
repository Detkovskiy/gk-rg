/**
 * Created by Yura on 26.06.17.
 */

"use strict";

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});


$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: (top - 110)}, 900);
  });
});

var h_hght = 115; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна

if (document.documentElement.clientWidth > 375) {
  h_hght = 110;
}

$(function(){

  var elem = $('#sub-menu');
  var top = $(this).scrollTop();

  if(top > h_hght){
    elem.css('top', h_mrg);
  }

  $(window).scroll(function(){
    top = $(this).scrollTop();

    if (top+h_mrg < h_hght) {
      elem.css('top', (h_hght-top));
    } else {
      elem.css('top', h_mrg);
    }
  });

});

var h_nav = 0; // высота шапки
var h_mrgNav = 0;    // отступ когда шапка уже не видна
$(function(){

  var elem = $('#top_nav');
  var top = $(this).scrollTop();

  if(top > h_nav){
    elem.css('top', h_mrgNav);
  }

  $(window).scroll(function(){
    top = $(this).scrollTop();

    if (top+h_mrg < h_nav) {
      elem.css('top', (h_nav-top));
    } else {
      elem.css('top', h_mrgNav);
    }
  });

});



var topMenu = document.querySelector('#menu');
var toggleMenu = document.querySelector('.menu-toggle');
var mainMenu = document.querySelector('.main-menu');
/*
var modalCallback = document.querySelector('.modal-callback');
var toggleCallback = document.querySelector('.call-me__callback-toggle');
var toggleCallbackClose = modalCallback.querySelector('.modal-content-close');

var modalOrder = document.querySelector('.modal-order');
var toggleOrderClose = modalOrder.querySelector('.modal-order-close');

var modalServices = document.querySelector('.modal-services');
var toggleServicesClose = modalServices.querySelector('.modal-services-close');
*/

var sizeTopMenu = function (position) {
  var cordY = (position == 0) ? position + 80 : position - 30;
  return cordY;
};

var sizeCallBack = function (position) {
  var cordY = (position == 0) ? position + 200 : position + 124;
  return cordY;
};

var openMainMenu = (function () {
  toggleMenu.addEventListener('click', function () {
    if (mainMenu.classList.contains('hidden')) {
      mainMenu.classList.remove('hidden');
      mainMenu.setAttribute('style', 'top:' + sizeTopMenu($(window).scrollTop()) + 'px;');
      console.log($(window).scrollTop());
      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
          mainMenu.classList.add('hidden');
        }
      });
      if (window.innerWidth < 1000) {
        console.log(window.innerWidth);
        mainMenu.addEventListener('click', function () {
          mainMenu.classList.add('hidden');
        });
      }
    } else {
      mainMenu.classList.add('hidden');
    }
  });
})();
