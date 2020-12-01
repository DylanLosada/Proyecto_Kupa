$(document).ready(function () {
    let boton = $('.logResponsive950__button');
    let cerrar = $('.logResponsive950-buscador__buscador-close');
    let buscador = $('.logResponsive950-buscador');

    let contador = 0;

    function contador_pulsacion() {
        contador += 1
    }

    setInterval(function () {
        if ($(window).scrollTop() > 0) {
            contador_pulsacion()
        }
    }, 0.1);

    boton.click(function () {
        if ($(window).scrollTop() == 0) {
            if (contador >= 1) {
                buscador.animate({
                    top: '0rem',
                    height: '100%'
                }, 'slow');
            } else {
                buscador.animate({
                    top: '0rem',
                    height: '10%'
                }, 'slow');
            }
        }
        else {
            buscador.animate({
                top: '0rem',
                height: '100%'
            }, 'slow');
        }


        buscador.removeClass("d-none");
        buscador.addClass("d-flex");
    })

    cerrar.click(function () {

        buscador.animate({
            height: '-90vh',
            top: '-13rem'
        }, 'slow');

        setTimeout(function () {
            buscador.removeClass("d-flex");
            buscador.addClass("d-none");
        }, 300);

    })

})