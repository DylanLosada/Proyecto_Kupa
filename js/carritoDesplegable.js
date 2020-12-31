$(function () {
    // Lógica para saber en que parte del menú estas
    var ventana = $(".log__carrito-ventana");
    var boton = $(".log__carrito-button");

    boton.click(function () {
        if (ventana.hasClass("visible-flex")) {
            ventana.animate({
                height: '-40rem'
            }, 'slow');

            setTimeout(function () {
                ventana.removeClass("visible-flex");
                ventana.addClass("invisible");
            }, 300);



        } else if (ventana.hasClass("invisible")) {
            ventana.removeClass("invisible");
            ventana.addClass("visible-flex");

            ventana.animate({
                height: '40rem'
            }, 'slow');
        }
    })
});