document.addEventListener('DOMContentLoaded', function () {
    // Constantes
    const addCart = document.querySelector('.compra__container-imagen-button-selector');
    const nameProduct = document.querySelector('.reviews__h3').textContent;
    const imageProduct  = document.querySelector('.compra__container-imagen-img-1').getAttribute('src').trim();

    // Declaración del objeto Producto y de la función que lo crea.

    class Producto {
        constructor(nombre, precio, imagen, cantidad, id) {
            this.nombre = nombre;
            this.precio = precio;
            this.imagen = imagen;
            this.cantidad = cantidad;
            this.id = id;
        }
    }

    const createNewObject = (nombre = '', precio = 0, imagen = '', cantidad = 0, id = undefined) => new Producto(nombre, precio, imagen, cantidad, id);

    const addElement = function (nombreProdu, precioProdu, imgProdu, cantidadProdu, id) {
        if(nombreProdu && precioProdu && imgProdu && cantidadProdu){
            let finalPriceProduct = Number((Math.round((precioProdu * cantidadProdu) * 100) / 100).toFixed(2));

            // Chequeo que el producto no esté agregado al carrito.
            let test = carrito.findIndex( element => element.nombre === nameProduct);
            if(test > -1){
                (carrito[test]['cantidad']+= cantidadProdu > 12) ? carrito[test]['cantidad']= 12 : carrito[test]['cantidad']+= cantidadProdu;
                (carrito[test]['cantidad'] === 12) ? carrito[test]['precio'] = 4330.80 : carrito[test]['precio'] += finalPriceProduct;
            }else{
                let addProductToCart = createNewObject(nombreProdu, finalPriceProduct, imgProdu, cantidadProdu, id);
                carrito.push(addProductToCart);
            }
        }
        else{
            alert('No se ah podido agregar el producto');
        }
    }

    // Array para agregar productos al carrito.
    const storage = JSON.parse(localStorage.getItem('productos'));
    let carrito = [];

    if(storage){
        carrito = [...storage];
    }

    console.log(carrito);

    //  Evento de agregar el Objeto Producto al carrito.
    addCart.addEventListener('click', ()=> {
        let arrayPriceProduct = document.querySelector('.compra__container-producto-info-precio-off-with').textContent.trim().split('$');
        let priceProduct = Number(arrayPriceProduct[1].split(',').join('.'));
        let quantityProduct  = Number(document.querySelector('#cantidadProducto').value);
        const id = Math.random().toString(36).substr(2, 18);

        addElement(nameProduct, priceProduct, imageProduct, quantityProduct, id);

        // Guardo al objeto de manera local.
        localStorage.setItem('productos', JSON.stringify(carrito));
        console.log(carrito);
    })
})