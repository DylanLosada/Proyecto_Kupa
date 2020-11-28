document.addEventListener('DOMContentLoaded', function () {

    // Declaración del objeto Producto y de la función que lo crea.

    function Producto(nombre, precio, imagen){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }

    const registroProducto = (nombre = '', precio = 0, imagen = '') => {
        let producto_nuevo = new Producto(nombre, precio, imagen);

        return producto_nuevo;
    }

    // Menú para crear un nuevo producto.
    let listaProductos = [];
    while(true){
        let nombre = prompt('Para crear un nuevo producto: (Introducir "salir" para salir)\nIntroduzca el nombre del producto');

        if(nombre.toLowerCase() === 'salir'){
            break;
        }

        let precio = prompt('Introduzca el precio del producto');

        if(precio.toLowerCase() === 'salir'){
            break;
        }

        let imagen = prompt('Introduzca la ruta de la imágen');

        if(imagen.toLowerCase() === 'salir'){
            break;
        }

        //  JS no puede detectar otra operación con el prompt si el mismo aún no existe.
        if(nombre && precio && imagen){

            nombre.trim();
            Number(precio.trim());
            imagen.trim();

            if(!nombre.length > 0 || nombre === ' '){
                alert('El nombre que desea introducir no es valido.');
            }
            else if(!imagen.length > 0 || imagen === ' '){
                alert('La ruta de imágen que desea introducir no es valida.');
            }
            else if(!precio.length > 0 || precio === ' ' || precio === 0){
                alert('El precio que desea introducir no es valido.');
            }
            else{
                let productoCreado = registroProducto(nombre, precio, imagen);
                alert(`Se ah creado correctamente el producto: ${nombre.toUpperCase()}\nPuede observarlo abriendo la consola de desarrollador en su navegador`);
                listaProductos.push(productoCreado);
                console.log(listaProductos);
            }
        }
        else{
            alert('Los campos NO pueden ser vacios, por favor introduzca un valor');
        }
    }

})