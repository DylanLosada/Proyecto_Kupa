'use strict'

$(document).ready(function () {
    var menu = $('.nav__div-desplegable');
    var lista = $('.nav__ul');

    menu.click(function () {

        if (lista.hasClass('invisible')) {
            lista.removeClass('invisible');
            lista.addClass('visible-flex');
            menu.css('margin-left', '1rem');
            // alert(lista.hasClass('visible-flex'))
        } else if (lista.hasClass('visible-flex')) {
            lista.removeClass('visible-flex');
            lista.addClass('invisible');
            menu.css('margin-left', '3rem');
        }
    });
})