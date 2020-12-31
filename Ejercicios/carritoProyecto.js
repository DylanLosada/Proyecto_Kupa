document.addEventListener('DOMContentLoaded', function () {
    // Constantes
    const addCart = document.querySelector('.compra__container-imagen-button-selector');
    const nameProduct = document.querySelector('.reviews__h3').textContent;
    const imageProduct  = document.querySelector('.compra__container-imagen-img-1').getAttribute('src').trim();
    const buttonCarrito = document.querySelector('.log__carrito-button');
    const ulCarrito = document.querySelector('.log__carrito-ventana-productos ul');
    const ulDivCarrito = document.querySelector('.log__carrito-ventana-productos ul div');
    const totalPrice = document.querySelector('#totalPrice');
    // console.log(totalPrice)

    // Variables
    let counter = 0;
    let counterListedProducts = 0;
    let priceTotal = 0;

    // Array para agregar productos al carrito.
    let carrito = [];

    updateCarrito();

    
   
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
            console.log(finalPriceProduct)

            // Chequeo que el producto no esté agregado al carrito.
            let test = carrito.findIndex( element => element.nombre === nameProduct);
            if(test > -1){
                ((carrito[test]['cantidad'] + cantidadProdu) >= 12) ? carrito[test]['cantidad']= 12 : carrito[test]['cantidad']+= cantidadProdu;
                (carrito[test]['cantidad'] === 12) ? carrito[test]['precio'] = 4330.80 : carrito[test]['precio'] += finalPriceProduct;
            }else{
                let addProductToCart = createNewObject(nombreProdu, finalPriceProduct, imgProdu, cantidadProdu, id);
                carrito.push(addProductToCart);
                return addProductToCart;
            }
        }
        else{
            alert('No se ah podido agregar el producto');
        }
    }

    // Funcion para obterner un id para la cantidad
    function addClassName (name){
        let newName = '';
        let arrayName = name.trim().split(' ');
        arrayName.forEach(string => {
            newName += string;
        })
        
        return newName;
    }

    // Función de busqueda del producto dentro del array.
    const createLi = (ul, objeto, div = null) =>{
        ul.removeAttribute('class');
        div.setAttribute('class', 'invisible');

        let li = document.createElement('li');
        li.className = 'log__carrito-ventana-productos-li li-item6';
        li.setAttribute('id', `${objeto.id}`);
        li.innerHTML =
        `<i class="fas fa-trash-alt item6 log__carrito-button-trash"></i>
        <div class="log__carrito-ventana-productos-producto">
            <img src=${objeto.imagen} class="rounded-lg img-fluid">
            <p class = 'nameProduct'>${objeto.nombre}
                <span class = 'spanContainer'>
                    <span class ='${addClassName(objeto.nombre)}' >$ ${objeto.precio}</span>
                    <span class ='${addClassName(objeto.nombre)}' ><i class="fas fa-plus-circle plus"></i> ${objeto.cantidad} <i class="fas fa-minus-circle minus"></i></span>
                </span>
            </p>
        </div>`
        ul.appendChild(li);

        return objeto.id;
    }

    // Función de modificación del li.
    const ModifiquedLi = (objeto, li) =>{
        let NewLi = document.getElementById(`${li}`);
        NewLi.innerHTML =
        `<i class="fas fa-trash-alt item6 log__carrito-button-trash"></i>
        <div class="log__carrito-ventana-productos-producto">
            <img src=${objeto.imagen} class="rounded-lg img-fluid">
            <p class = 'nameProduct'>
                    ${objeto.nombre}
                    <span class = 'spanContainer'>
                        <span class ='${addClassName(objeto.nombre)}' >$ ${objeto.precio}</span>
                        <span class ='${addClassName(objeto.nombre)}' ><i  class="fas fa-plus-circle plus"></i> ${objeto.cantidad} <i  class="fas fa-minus-circle minus"></i></span>
                    </span></p>
        </div>`
    }

    // Función para comprobar el estado del storage
    function provedStorage (storage) {
        if(storage){

            storage.forEach(element => {
                let correctImagePath = element.imagen;
                element.imagen = correctImagePath.replace('(1)', 'MiniCarrito');
            })

            // Bucle para crear elementos dentro del carrito.

            storage.forEach((element) => {
                // console.log(document.getElementById( `#${element.id}`));
                if(storage.some(objectId => element.id === objectId.id) === true  && counterListedProducts > 0 && document.getElementById( `${element.id}` )){
                    ModifiquedLi(element, element.id);
                    // console.log('funca');
                    return;
                }
                else{
                    // console.log('no fue creado')
                    // console.log(element);
                    createLi(ulCarrito, element, ulDivCarrito);
                    counterListedProducts++;
                }
            })
        }
    }

    // Funcion que me actualiza el carrito
    function updateCarrito (){
        let storage = JSON.parse(localStorage.getItem('productos'));
        if(storage){
            carrito = storage;
        }
        // console.log(carrito)
    }

    function updatePriceVar (){
        let subPrice = 0;

        if(!priceTotal === 0){
            priceTotal = 0;
        }

        if(carrito){
            carrito.forEach( price => {
                subPrice += price.precio
            });
        }
        // console.log('Sub Precio: ' + subPrice)
        return subPrice;
    }

    // Actualizo el subTotal del carrito
    const updateTotalCarrito = (price) => {
        const totalPrice = document.querySelector('#totalPrice');

       let array =  totalPrice.textContent.split(' ');
       array[1] = price;
       totalPrice.innerHTML = `$ ${array[1]}`;
    }

    // Funcion para eliminar elementos del Carrito
    function removeItemFromArr ( arr, item ) {
        let index = arr.indexOf( item );
        arr.splice( index, 1 );
    }

    //  Evento de agregar el Objeto Producto al carrito.
    addCart.addEventListener('click', () => {
        
        let arrayPriceProduct = document.querySelector('.compra__container-producto-info-precio-off-with').textContent.trim().split('$');
        let priceProduct = Number(arrayPriceProduct[1].split(',').join('.'));
        let quantityProduct  = Number(document.querySelector('#cantidadProducto').value);
        const id = Math.random().toString(36).substr(2, 18);

       addElement(nameProduct, priceProduct, imageProduct, quantityProduct, id);

        // Actualizo el carrito
        provedStorage(carrito);

        priceTotal = updatePriceVar();
        updateTotalCarrito(priceTotal)

        // Guardo al objeto de manera local.
        localStorage.setItem('productos', JSON.stringify(carrito));
        // console.log(carrito);
    })

    // Evento del carrito
    buttonCarrito.addEventListener('click', () => {
        counter++;

        if(counter % 2 !== 0){
            // console.log(ulCarrito)
            updateCarrito();
            provedStorage(carrito);
            priceTotal = updatePriceVar();
            updateTotalCarrito(priceTotal)
            
            ulCarrito.addEventListener('click', (e) => {
                if( carrito.some(elementId => elementId.id === e.target.parentElement.id)){
                    // console.log(ulCarrito.removeChild(e.target.parentElement));
                    // return
                    ulCarrito.removeChild(e.target.parentElement);
                    let deleteProductFromStorage = carrito.find(elementId => elementId.id === e.target.parentElement.id);

                    // Elimino el item seleccionado del carrito
                    removeItemFromArr(carrito, deleteProductFromStorage)
        
                    if(carrito.length === 0){
                        localStorage.removeItem('productos');
                        ulCarrito.setAttribute('class', 'd-flex align-items-center justify-content-center h-100');
                        ulDivCarrito.setAttribute('class', 'log__carrito-ventana-productos-sadFace d-flex flex-column justify-content-center');
                        priceTotal = 0;
                        updateTotalCarrito(priceTotal);
                        counterListedProducts = 0;
                    }else{
                        localStorage.setItem('productos', JSON.stringify(carrito));
                        updateCarrito();
                        priceTotal = updatePriceVar();
                        updateTotalCarrito(priceTotal);
                    }
                }
                else{
                    carrito.forEach(li => {
                        if(li.id === e.target.parentElement.parentElement.parentElement.parentElement.parentElement.id){
                            let arrayClasses = e.target.classList;
                            arrayClasses.forEach(className => {

                                let precio = Number((li.precio / li.cantidad).toFixed(2));
                                console.log(precio)

                                if(className === 'plus'){
                                   if (li.cantidad === 12){

                                        li.cantidad = 12;

                                   }else{

                                        li.cantidad += 1;
                                        li.precio += precio;
                                   }
                                    provedStorage([li])
                                    priceTotal = updatePriceVar();
                                    updateTotalCarrito(priceTotal);
                                    // console.log(li.cantidad)
                                }
                                else if(className === 'minus'){
                                    if (li.cantidad >= 2){

                                        li.cantidad -= 1
                                        li.precio -= precio;

                                    }else{

                                        li.cantidad = 1;
                                    
                                    }
                                    provedStorage([li])
                                    priceTotal = updatePriceVar();
                                    updateTotalCarrito(priceTotal);
                                }

                                localStorage.setItem('productos', JSON.stringify(carrito));
                            })
                        } 
                    })
                }
            })
            
             
        }
    })
})