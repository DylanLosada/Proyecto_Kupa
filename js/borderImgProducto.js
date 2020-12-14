$(document).ready(function(){
    var conteiner_1 = $('.compra__container-imagen-img-1');
    var conteiner_2 = $('.compra__container-imagen-img-2');
    var conteiner_3 = $('.compra__container-imagen-img-3');
    var conteiner_4 = $('.compra__container-imagen-img-4');

    var img_1 = $('.compra__container-imagen-imgSelect-1');
    var img_2 = $('.compra__container-imagen-imgSelect-2');
    var img_3 = $('.compra__container-imagen-imgSelect-3');
    var img_4 = $('.compra__container-imagen-imgSelect-4');

    img_1.click(function(){

        conteiner_1.removeClass('invisible')
        conteiner_1.addClass('visible')

        conteiner_2.removeClass('visible')
        conteiner_2.addClass('invisible')

        conteiner_3.removeClass('visible')
        conteiner_3.addClass('invisible')

        conteiner_4.removeClass('visible')
        conteiner_4.addClass('invisible')

        img_1.addClass('compra__container-imagen-imgSelect-1');

        img_2.removeClass('compra__container-imagen-imgSelect-1');
        img_3.removeClass('compra__container-imagen-imgSelect-1');
        img_4.removeClass('compra__container-imagen-imgSelect-1');

    })

    img_2.click(function(){
        
            conteiner_2.removeClass('invisible')
            conteiner_2.addClass('visible')

            conteiner_1.removeClass('visible')
            conteiner_1.addClass('invisible')

            conteiner_3.removeClass('visible')
            conteiner_3.addClass('invisible')

            conteiner_4.removeClass('visible')
            conteiner_4.addClass('invisible')

            img_2.addClass('compra__container-imagen-imgSelect-1');

            img_1.removeClass('compra__container-imagen-imgSelect-1');
            img_3.removeClass('compra__container-imagen-imgSelect-1');
            img_4.removeClass('compra__container-imagen-imgSelect-1');
    })

    img_3.click(function(){
        // if(conteiner_1.hasClass('visible')){
            conteiner_3.removeClass('invisible')
            conteiner_3.addClass('visible')

            conteiner_2.removeClass('visible')
            conteiner_2.addClass('invisible')

            conteiner_1.removeClass('visible')
            conteiner_1.addClass('invisible')

            conteiner_4.removeClass('visible')
            conteiner_4.addClass('invisible')

            img_3.addClass('compra__container-imagen-imgSelect-1');

            img_2.removeClass('compra__container-imagen-imgSelect-1');
            img_1.removeClass('compra__container-imagen-imgSelect-1');
            img_4.removeClass('compra__container-imagen-imgSelect-1');
    })

    img_4.click(function(){
        // if(conteiner_1.hasClass('visible')){
            conteiner_4.removeClass('invisible')
            conteiner_4.addClass('visible')

            conteiner_2.removeClass('visible')
            conteiner_2.addClass('invisible')

            conteiner_3.removeClass('visible')
            conteiner_3.addClass('invisible')

            conteiner_1.removeClass('visible')
            conteiner_1.addClass('invisible')

            img_4.addClass('compra__container-imagen-imgSelect-1');

            img_2.removeClass('compra__container-imagen-imgSelect-1');
            img_3.removeClass('compra__container-imagen-imgSelect-1');
            img_1.removeClass('compra__container-imagen-imgSelect-1');
    })
})
