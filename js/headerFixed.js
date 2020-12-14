
$(window).bind('scroll', function () {
    let ventana = $(window);
    let es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    let es_torch = navigator.userAgent.toLowerCase().indexOf('torch') > -1;
    let es_edge = navigator.userAgent.toLowerCase().indexOf('edge') > -1;

    if ($(window).scrollTop() >= 0) {
        $('#header').attr('id', 'header-fixed');

        if (ventana.width() >= 1200) {
            $('.index__img').css('display', 'none')
        }
        else if (ventana.width() < 1200 && ventana.width() >= 750) {
            $('.index__img-fixed1200').css('display', 'none')
        }
        else if (ventana.width() <= 750) {
            $('.index__img-fixed750').css('display', 'none')
        }

        $('.index__img-fixed').removeClass('invisible');
        $('.index__img-fixed').addClass('visible');

    } else {
        $('#header-fixed').attr('id', 'header');

        if (ventana.width() >= 1200) {
            $('.index__img').css('display', 'flex')
        }
        else if (ventana.width() < 1200 && ventana.width() >= 750) {
            $('.index__img-fixed1200').css('display', 'flex')
        }
        else if (ventana.width() <= 750) {
            $('.index__img-fixed750').css('display', 'flex')
        }

        $('.index__img-fixed').removeClass('visible');
        $('.index__img-fixed').addClass('invisible');
    }
});