'use strict';

$(document).ready(function () {
  var check = $("#acceder").hasClass('visible');
  var aAcceder = $('.log__signIn');
  var aRegistrarse = $('.log__signUp');

  if (check) {
    aAcceder.css("color", "rgb(255, 136, 0)");
  }

  aAcceder.click(function () {
    aRegistrarse.css("color", "rgb(255, 255, 255)");
    $(this).css("color", "rgb(255, 136, 0)");
  });
  aRegistrarse.click(function () {
    aAcceder.css("color", "rgb(255, 255, 255)");
    $(this).css("color", "rgb(255, 136, 0)");
  });
  var aProducto = $('.products__section-index-producto');
  var aFondo = $('.card-footer');
  var aNombre = $('.h3-producto-index');
  aProducto.mouseover(function () {
    aFondo.css("background-color", "black").css("transition", "all 300ms");
    aNombre.css("color", "rgb(255, 136, 0)").css("transition", "all 300ms");
  });
  aProducto.mouseout(function () {
    aFondo.css("background-color", "white").css("color", "rgb(255, 255, 255)").css("transition", "all 300ms");
    aNombre.css("color", "rgb(0, 0, 0)").css("transition", "all 300ms");
  });
});