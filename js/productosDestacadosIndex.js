'use strict'

$(document).ready(function () {

    // Consigo todos los productos destacados
    var producto_1 = $('.producto-1');
    var producto_2 = $('.producto-2');
    var producto_3 = $('.producto-3');
    var producto_4 = $('.producto-4');
    var producto_5 = $('.producto-5');
    var producto_6 = $('.producto-6');

    // consigo el footer de cada producto destacado
    var fondo_1 = $('.fondo-1');
    var fondo_2 = $('.fondo-2');
    var fondo_3 = $('.fondo-3');
    var fondo_4 = $('.fondo-4');
    var fondo_5 = $('.fondo-5');
    var fondo_6 = $('.fondo-6');

    // Nombre de cada producto
    var nombre_1 = $('.nombre-1');
    var nombre_2 = $('.nombre-2');
    var nombre_3 = $('.nombre-3');
    var nombre_4 = $('.nombre-4');
    var nombre_5 = $('.nombre-5');
    var nombre_6 = $('.nombre-6');

    // Para producto 1

    producto_1.mouseover(function () {
        fondo_1.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_1.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_1.mouseout(function () {
        fondo_1.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_1.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


    // Para producto 2

    producto_2.mouseover(function () {
        fondo_2.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_2.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_2.mouseout(function () {
        fondo_2.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_2.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


    // Para producto 3

    producto_3.mouseover(function () {
        fondo_3.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_3.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_3.mouseout(function () {
        fondo_3.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_3.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


    // Para producto 4

    producto_4.mouseover(function () {
        fondo_4.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_4.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_4.mouseout(function () {
        fondo_4.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_4.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


    // Para producto 5

    producto_5.mouseover(function () {
        fondo_5.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_5.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_5.mouseout(function () {
        fondo_5.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_5.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


    // Para producto 6

    producto_6.mouseover(function () {
        fondo_6.css("background-color", "black")
            .css("transition", "all 300ms");

        nombre_6.css("color", "rgb(255, 136, 0)")
            .css("transition", "all 300ms");
    });

    producto_6.mouseout(function () {
        fondo_6.css("background-color", "white")
            .css("color", "rgb(255, 255, 255)")
            .css("transition", "all 300ms");

        nombre_6.css("color", "rgb(0, 0, 0)")
            .css("transition", "all 300ms");
    });


});