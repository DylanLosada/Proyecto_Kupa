$(document).ready(function(){
    var boton_1 = $('.button-1');
    var boton_2 = $('.button-2');
    var boton_3 = $('.button-3');

    var mas_1 = $('.plus-1');
    var mas_2 = $('.plus-2');
    var mas_3 = $('.plus-3');

    var menos_1 = $('.less-1');
    var menos_2 = $('.less-2');
    var menos_3 = $('.less-3');

    boton_1.click(function(){
        if(menos_1.hasClass('invisible')){
            mas_1.removeClass('visible-flex');
            mas_1.addClass('invisible');

            menos_1.removeClass('invisible');
            menos_1.addClass('visible-flex');

            menos_1.css('color', 'oranged');
        }
        else if(menos_1.hasClass('visible-flex')){
            menos_1.removeClass('visible-flex');
            menos_1.addClass('invisible');

            mas_1.removeClass('invisible');
            mas_1.addClass('visible-flex');
        }
    })

    boton_2.click(function(){
        if(menos_2.hasClass('invisible')){
            mas_2.removeClass('visible-flex');
            mas_2.addClass('invisible');

            menos_2.removeClass('invisible');
            menos_2.addClass('visible-flex');

            menos_2.css('color', 'oranged');
        }
        else if(menos_2.hasClass('visible-flex')){
            menos_2.removeClass('visible-flex');
            menos_2.addClass('invisible');

            mas_2.removeClass('invisible');
            mas_2.addClass('visible-flex');
        }
    })

    boton_3.click(function(){
        if(menos_3.hasClass('invisible')){
            mas_3.removeClass('visible-flex');
            mas_3.addClass('invisible');

            menos_3.removeClass('invisible');
            menos_3.addClass('visible-flex');
        }
        else if(menos_3.hasClass('visible-flex')){
            menos_3.removeClass('visible-flex');
            menos_3.addClass('invisible');

            mas_3.removeClass('invisible');
            mas_3.addClass('visible-flex');
        }
    })
})