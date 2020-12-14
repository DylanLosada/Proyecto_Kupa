document.addEventListener('DOMContentLoaded', function () {

    // Función de busqueda del producto dentro del array.
    const checkProducts = function () {
       try{
        checkProductsArray = JSON.parse(localStorage.getItem('listaProductos'));
       }catch{
        checkProductsArray = false;
       }

       return [checkProductsArray];
    }

    const createLi = (ul, objeto) =>{
        let li = document.createElement('li').className = 'log__carrito-ventana-productos-li li-item6';
        li.innerHTML +=
        `<i id='${objeto.id}' class="fas fa-trash-alt item6"></i>
        <div class="log__carrito-ventana-productos-producto">
            <img src=${objeto.imagen} class="rounded-lg img-fluid">
            <p class = 'nameProduct'>${objeto.nombre}<span>$ ${objeto.precio}</span></p>
        </div>`
        ul.appendChild(li);
        return objeto.id;
    }

    function parseItemFromArr (arr) {
        let unitedValues = [];
        console.log('Esto es el objeto: ' + arr);
        arr.forEach(element => {
            arr[i].forEach(object => {
                let separtaeValues =  object.split(',');
                const Producto = {
                    'nombre': separtaeValues[0],
                    'precio': separtaeValues[1],
                    'imagen': separtaeValues[2],
                    'cantidad': separtaeValues[3],
                    'id': separtaeValues[4]
                }
                unitedValues.push(Producto);
             })
             console.log('El frankestein: ' + unitedValues);
             return unitedValues;
        })
    }
    

    function removeItemFromStorage ( storage, object ) {
        for(let i = 0; i < storage.length; i++){
            console.log('Esto es un array: ' + storage[i])
            storage.forEach(element => {
                if( element[i][4] === object ){
                    storage.splice(storage[i], 1);
                    console.log('Esto es el objeto: ' + storage)
                    return  storage;
                }
            }) 
        }
    }
    
    const buttonCarrito = document.querySelector('.log__carrito-button');
    let checkProductsArray;
    let counter = 0;
    let counterListedProducts = 0;

    buttonCarrito.addEventListener('click', () => {
        counter++;
        
        if(counter % 2 !== 0){
            const condition = checkProducts();
            // const storageListId = JSON.parse(localStorage.getItem('listaProductos'));
            let listOfProducts = [];
            const storage = JSON.parse(localStorage.getItem('productos'));
            const listCarrito = document.querySelector('.log__carrito-ventana-productos ul');
            
            if(condition){
                listOfProducts = [...condition];
            }

            storage.forEach(element => {
                let correctImagePath = element.imagen;
                element.imagen = correctImagePath.replace('(1)', 'MiniCarrito');
            })

            console.log(storage);

            if(storage){

                // Bucle para crear elementos dentro del carrito.

                console.log(condition);
                
                console.log('El almacenamiento: ' + storage);
                storage.forEach((element) => {

                    if(condition && condition.some(id => id === element.id) === true && counterListedProducts > 0){
                        return;
                    }
                    else{
                        let liCreated = createLi(listCarrito, element);
                        listOfProducts.push(liCreated);
                        counterListedProducts++;
                        localStorage.setItem('listaProductos', JSON.stringify(listOfProducts));
                    }
                })
            }

            // Vuelo a comprobar si se creó algún producto
            console.log(condition);
            (!condition) ? condition : false;
            console.log(condition);

            if(condition){
                let downloadProducts = JSON.parse(localStorage.getItem('productos'));
                condition.forEach( id => {
                    let buttonDeleteElement = document.querySelector(`#${id}`);
                    console.log(buttonDeleteElement);
                    return;
                    let listValouesProducts;

                    buttonDeleteElement.addEventListener('click', () => {
                        
                        downloadProducts.forEach( ProductId => {
                            let list = [];
                            for(let i = 0; i < downloadProducts.length; i++){
                                if(list.length > 0 && list.some(value => value.id === ProductId.id)){
                                    continue;
                                }
                                else{
                                    list.push([Object.values(ProductId)]);
                                }
                            }

                            if (ProductId.id === id){
                                let id = ProductId.id;
                                let cache = document.querySelector(`#${ProductId.id}`).classList.add('invisible');
                                console.log(cache);
                                return;
                                console.log(list);
                                listValouesProducts =Object.values(removeItemFromStorage(list, id));
                                console.log('El primero: ' + listValouesProducts);
                                return;
                            }
                        })

                        console.log('El segundo: ' + listValouesProducts);
                        return;
                        if(listValouesProducts){
                            console.log('hola')
                            localStorage.removeItem('productos');
                            localStorage.removeItem('listaLroductos');
                            localStorage.setItem('productos', JSON.stringify(parseItemFromArr(listValouesProducts)));
                            createLi(listCarrito, id);
                        }
                    })
                })
            }
        }
    })
})