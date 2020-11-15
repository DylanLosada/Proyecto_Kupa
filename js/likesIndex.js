window.addEventListener("load", function () {

    // Traigo a los corazones del boton de productos
    var heart_1 = $(".heart_1");
    var heart_2 = $(".heart_2");
    var heart_3 = $(".heart_3");
    var heart_4 = $(".heart_4");
    var heart_5 = $(".heart_5");
    var heart_6 = $(".heart_6");

    var like_1 = $(".like_1");
    var like_2 = $(".like_2");
    var like_3 = $(".like_3");
    var like_4 = $(".like_4");
    var like_5 = $(".like_5");
    var like_6 = $(".like_6");

    heart_1.click(function () {
        heart_1.removeClass("visible");
        heart_1.addClass("invisible");

        like_1.removeClass("invisible");
        like_1.addClass("visible");
    });

    like_1.click(function () {
        like_1.removeClass("visible");
        like_1.addClass("invisible");

        heart_1.removeClass("invisible");
        heart_1.addClass("visible");
    });

    // Para el segundo producto
    heart_2.click(function () {
        heart_2.removeClass("visible");
        heart_2.addClass("invisible");

        like_2.removeClass("invisible");
        like_2.addClass("visible");
    });

    like_2.click(function () {
        like_2.removeClass("visible");
        like_2.addClass("invisible");

        heart_2.removeClass("invisible");
        heart_2.addClass("visible");
    });


    // Para el tercer producto
    heart_3.click(function () {
        heart_3.removeClass("visible");
        heart_3.addClass("invisible");

        like_3.removeClass("invisible");
        like_3.addClass("visible");
    });

    like_3.click(function () {
        like_3.removeClass("visible");
        like_3.addClass("invisible");

        heart_3.removeClass("invisible");
        heart_3.addClass("visible");
    });


    // Para el cuarto producto
    heart_4.click(function () {
        heart_4.removeClass("visible");
        heart_4.addClass("invisible");
        4
        like_4.removeClass("invisible");
        like_4.addClass("visible");
    });

    like_4.click(function () {
        like_4.removeClass("visible");
        like_4.addClass("invisible");

        heart_4.removeClass("invisible");
        heart_4.addClass("visible");
    });

    // Para el quinto producto
    heart_5.click(function () {
        heart_5.removeClass("visible");
        heart_5.addClass("invisible");

        like_5.removeClass("invisible");
        like_5.addClass("visible");
    });

    like_5.click(function () {
        like_5.removeClass("visible");
        like_5.addClass("invisible");

        heart_5.removeClass("invisible");
        heart_5.addClass("visible");
    });

    // Para el sexto producto
    heart_6.click(function () {
        heart_6.removeClass("visible");
        heart_6.addClass("invisible");

        like_6.removeClass("invisible");
        like_6.addClass("visible");
    });

    like_6.click(function () {
        like_6.removeClass("visible");
        like_6.addClass("invisible");

        heart_6.removeClass("invisible");
        heart_6.addClass("visible");
    });
})