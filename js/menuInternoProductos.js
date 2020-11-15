$(document).ready(function () {
    var menu = $('.nav-header__responsive-hidden-li-a-menuDrop');

    var boton = $('.nav-header__responsive-hidden-li-a--menuProductos');



    boton.click(function () {

        if (menu.hasClass('invisible')) {
            menu.removeClass("invisible");
            menu.addClass("visible");

            menu.animate({
                height: '26vh'
            }, 'slow');


        } else if (menu.hasClass('visible')) {
            menu.animate({
                height: '-25vh'
            }, 'slow');

            setTimeout(function () {
                menu.removeClass("visible");
                menu.addClass("invisible");
            }, 300);
        }
    })
})