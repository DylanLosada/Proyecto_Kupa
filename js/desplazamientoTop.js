$(document).ready(function () {
    let boton = $('#row');

    boton.click(function (event) {
        $("html, body").animate({ scrollTop: '0rem' }, 300);
    });
})