
addEventListener('load', function () {
    const dias = ['Lunes', 'Marter', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

    console.log('Los dias pares son:')
    for (let i = 1; i <= dias.length; i++) {
        if (i % 2 == 0) {
            console.log(`${dias[i - 1]}`)
        }
    }
})
