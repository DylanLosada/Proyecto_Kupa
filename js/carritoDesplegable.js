$(document).ready(function () {
    // Lógica para saber en que parte del menú estas
    var ventana = $(".log__carrito-ventana");
    var boton = $(".log__carrito-button");

    var deleteItem1 = $(".item1");
    var deleteItem2 = $(".item2");
    var deleteItem3 = $(".item3");
    var deleteItem4 = $(".item4");
    var deleteItem5 = $(".item5");
    var deleteItem6 = $(".item6");

    var li_1 = $(".li-item1");
    var li_2 = $(".li-item2");
    var li_3 = $(".li-item3");
    var li_4 = $(".li-item4");
    var li_5 = $(".li-item5");
    var li_6 = $(".li-item6");
    // alert("todo liso");

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

    deleteItem1.click(function () {
        li_1.css('display', 'none');
    });

    deleteItem2.click(function () {
        li_2.css('display', 'none');
    });

    deleteItem3.click(function () {
        li_3.css('display', 'none');
    });

    deleteItem4.click(function () {
        li_4.css('display', 'none');
    });

    deleteItem5.click(function () {
        li_5.css('display', 'none');
    });

    deleteItem6.click(function () {
        li_6.css('display', 'none');
    });


});