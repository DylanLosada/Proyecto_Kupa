"use strict";

$(document).ready(function () {
  // Lógica para saber en que parte del menú estas
  var ventana = $(".log__carrito-ventana");
  var boton = $(".log__carrito-button"); // alert("todo liso");

  boton.click(function () {
    console.log(ventana.hasClass("invisible"));

    if (ventana.hasClass("invisible")) {
      ventana.removeClass("invisible");
      ventana.addClass("visible");
    } else if (ventana.hasClass("visible")) {
      ventana.removeClass("visible");
      ventana.addClass("invisible");
    }
  });
});