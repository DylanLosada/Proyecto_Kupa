'use strict'

$(document).ready(function () {

    var check = $("#acceder").hasClass('visible');

    var aAcceder = $('.log__signIn');
    var aRegistrarse = $('.log__signUp');

    if (check) {
        aAcceder.css("color", "rgb(255, 136, 0)");
    }

    aAcceder.click(function () {
        aRegistrarse.css("color", "rgb(255, 255, 255)")
        $(this).css("color", "rgb(255, 136, 0)");
    });

    aRegistrarse.click(function () {
        aAcceder.css("color", "rgb(255, 255, 255)");
        $(this).css("color", "rgb(255, 136, 0)");
    });

});