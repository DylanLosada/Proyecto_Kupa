$(document).ready(function(){
    var boton = $('.product__title-button-buscar');

    var buscador = $('.product__title-divResponsive');

        boton.click(function(){
            if(buscador.hasClass('invisible')){
                buscador.removeClass('invisible');
                buscador.addClass('visible-flex');
            }
            else if(buscador.hasClass('visible-flex')){
                buscador.removeClass('visible-flex');
                buscador.addClass('invisible');
            }
        })
});