'use strict'

$(document).ready(function () {

    var botonMas = $('#masOpiniones');
    var botonMenos = $('#menosOpiniones');
    var opiniones = $('#opiniones');

    botonMas.click(function () {
        botonMas.addClass('invisible');

        botonMenos.removeClass('invisible');
        botonMenos.addClass('visible');

        opiniones.removeClass('invisible');
        opiniones.addClass('visible');
    });

    botonMenos.click(function () {
        botonMas.removeClass('invisible');

        botonMenos.removeClass('visible');
        botonMenos.addClass('invisible');

        opiniones.removeClass('visible');
        opiniones.addClass('invisible');
    });
})