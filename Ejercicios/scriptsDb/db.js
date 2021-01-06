// import {eventUl, buttonCarrito, aButtonProducts} from '../modules';

let arrayTazas = [];
let arrayTazones = [];
let arrayTermos = [];
let newArrayForPages = [];
let html;

async function fetchInfo () {
    return await fetch('../db/dbProductos.json');
}

window.addEventListener('hashchange',function () {
    eventUl(buttonCarrito, aButtonProducts);
    router;
});

const splitDataDb = (array, key) => {
    let arrayType = [];

    array.forEach( element => {

        if(!arrayType.includes(element[key])){
            arrayType.push(element[key]);
        }
    });

    arrayTazones = [...array.filter( type => type.tipo === arrayType[0])];
    arrayTazas = [...array.filter( type => type.tipo === arrayType[1])];
    arrayTermos = [...array.filter( type => type.tipo === arrayType[2])];

    console.log(arrayTazas)
    // console.log(arrayTazones)
    // console.log(arrayTermos)
}

function createArticle (array, index) {

    const container = document.querySelector('#productsContainer');
    const section = document.createElement('section');
    const div = document.createElement('div');


    section.className = 'product__section-productos order-0';
    div.className = 'row w-100 ml-0 mr-0 product__section-productos-responsive';

    array[index].forEach( taza => {
        let article = document.createElement('article');

        article.className = 'flip-card col-lg-3 col-md-4';
        article.innerHTML = 
            `
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src="${taza.imagen}" alt="Producto">
                </div>
                <div class="flip-card-back">
                    <div
                        class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                        <button type="button" class="mr-0 ml-3">
                            <i class="fas fa-share-alt"></i>
                        </button>

                        <button type="button">
                            <i class="far fa-heart visible heart_1"></i>
                            <i class="fas fa-heart invisible like_1"></i>
                        </button>
                    </div>
                    <h3>${taza.nombre}</h3>
                    <p>${taza.precio}</p>
                    <a class="btn btn-outline-danger addToCart" type="button">CONSULTÁ</a>
                </div>
            </div>
        `
        div.appendChild(article);
    })

    section.appendChild(div);
    container.appendChild(section);
}


function pathFuncion() {
    let path;
    if(location.hash.includes('/')){
        path = location.hash.split('#');
    }
    return path;
}

function componentFinder (path) {
    return routes.find( route => route.path == `${path}` ) || '';
}

function createView(array){
    const ul = document.querySelector('#ulPages');
    let arrayId = [];

    let pages = Math.round(array.length / 60);
    console.log(pages)

    for(let i = 0; i <= pages; i++){
        newArrayForPages.push(array.splice(0, 60));
    }

    createArticle(newArrayForPages, 0);


    for(let j = 1; j <= pages; j++){
        let li = document.createElement('li');
        let a = document.createElement('a');

        li.setAttribute('aria-current', 'page');
        li.className = 'page-item';

        if (j === 1) {li.classList.add('active')}

        a.classList.add('page-link');
        a.textContent = j;
        a.setAttribute('id', `productsPage-${j}`);
        a.setAttribute('href', `#tazas`);

        arrayId.push(`productsPage-${j}`);

        li.appendChild(a);
        ul.appendChild(li);
    }

    ul.addEventListener('click', (e) => {

        for(let i = 0; i < ul.children.length; i++){
            let classList = ul.children.item(i).classList;
            if(classList.contains('active')){
                ul.children.item(i).classList.remove('active')
            }
        }

        if(arrayId.find( id => id === e.target.id)){
            const container = document.querySelector('#productsContainer');
            const linkPage = document.querySelector(`#${e.target.id}`);
            linkPage.parentElement.classList.add('active')
            container.removeChild(container.children[3]);
            createArticle(newArrayForPages, Number(linkPage.textContent));
        }
    })
}

const ProductoComponent = {
    render: () => {
        return `

        <div class="products__title product__title-flex">
            <h2 class="product__title-h2--form">NUESTROS PRODUCTOS</h2>

            <div class="product__title-div">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <!-- Se activan con el boton "BUSCAR" -->
            <div class="product__title-divResponsive invisible">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <div class="product__title-button">
                <button type="button" class="btn btn-danger mt-0 product__title-button-buscar">BUSCADOR</button>
            </div>

            <div class="product__title-menu">
                <ul class="product__title-menu-ul">
                    <li><a href="#tazas">TAZAS</a></li>
                    <li><a href="#tazones">TAZONES</a></li>
                    <li><a href="./productos2.html#termos">TERMOS</a></li>
                    <li class="li-outmargin"><a href="./productos2.html#cafes" class="a-outmargin" href="">CAFÉ</a>
                    </li>
                </ul>
            </div>

        </div>

        <!-- Título y seccion para tazas -->
        <div class="products__div">
            <h3 id="tazas">TAZAS</h3>
        </div>

        <section class="product__section-productos">

            <div class="row w-100 ml-0 mr-0 product__section-productos-responsive">
                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaPuntos.jpg" alt="Producto">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>

                                <button type="button">
                                    <i class="far fa-heart visible heart_1"></i>
                                    <i class="fas fa-heart invisible like_1"></i>
                                </button>
                            </div>
                            <h3>Taza a Lunares</h3>
                            <p>$ 400.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>




                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaARayas.jpg" alt="Taza con Rayas">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_2"></i>
                                    <i class="fas fa-heart invisible like_2"></i>
                                </button>
                            </div>
                            <h3>Taza con Rayas</h3>
                            <p>$ 400.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>


                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaRoja.jpg" alt="Taza con Leyenda">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_3"></i>
                                    <i class="fas fa-heart invisible like_3"></i>
                                </button>
                            </div>
                            <h3>Taza con Leyenda</h3>
                            <p>$ 400.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>



                <article class="flip-card col-lg-3 flip-card--none">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaMarron.jpg" alt="Taza Love x Life">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_4"></i>
                                    <i class="fas fa-heart invisible like_4"></i>
                                </button>
                            </div>
                            <h3>Taza Love x Life</h3>
                            <p>$ 400.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>
            </div>


            <div class="row w-100 ml-0 mr-0 product__section-productos-responsive">
                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaDesgastada.jpg" alt="Taza Gastada">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_5"></i>
                                    <i class="fas fa-heart invisible like_5"></i>
                                </button>
                            </div>
                            <h3>Taza Gastada</h3>
                            <p>$ 400.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>


                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazasNaranjas.jpg" alt="Tazas Naranjas">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_6"></i>
                                    <i class="fas fa-heart invisible like_6"></i>
                                </button>
                            </div>
                            <h3>Tazas Naranjas</h3>
                            <p>$ 600.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>


                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaNavidad.jpg" alt="Taza Abrigo">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_7"></i>
                                    <i class="fas fa-heart invisible like_7"></i>
                                </button>
                            </div>
                            <h3>Taza Abrigo</h3>
                            <p>$ 450.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>

                <article class="flip-card col-lg-3 flip-card--none">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazaCorazon.jpg" alt="Taza Corazón">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_8"></i>
                                    <i class="fas fa-heart invisible like_8"></i>
                                </button>
                            </div>
                            <h3>Taza Corazón</h3>
                            <p>$ 423.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>
            </div>

            <div class="container-fluid carouselProductos p-0">
                <div id="carouselProductos-productosTazas" class="carousel slide d-flex justify-content-center"
                    data-ride="carousel">
                    <div
                        class="carousel-inner w-100 d-flex flex-row justify-content-center carouselProductos__container">
                        <div class="carousel-item  active carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaPuntos.jpg" alt="Taza a Lunares">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>

                                            <button type="button">
                                                <i class="far fa-heart visible heart_1"></i>
                                                <i class="fas fa-heart invisible like_1"></i>
                                            </button>
                                        </div>
                                        <h3>Taza a Lunares</h3>
                                        <p>$ 400.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>




                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaARayas.jpg" alt="Taza con Rayas">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_2"></i>
                                                <i class="fas fa-heart invisible like_2"></i>
                                            </button>
                                        </div>
                                        <h3>Taza con Rayas</h3>
                                        <p>$ 400.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="carousel-item carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaRoja.jpg" alt="Taza con Leyenda">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_3"></i>
                                                <i class="fas fa-heart invisible like_3"></i>
                                            </button>
                                        </div>
                                        <h3>Taza con Leyenda</h3>
                                        <p>$ 400.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaMarron.jpg" alt="Taza Love x Life">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_4"></i>
                                                <i class="fas fa-heart invisible like_4"></i>
                                            </button>
                                        </div>
                                        <h3>Taza Love x Life</h3>
                                        <p>$ 400.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="carousel-item carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaDesgastada.jpg" alt="Taza Gastada">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_5"></i>
                                                <i class="fas fa-heart invisible like_5"></i>
                                            </button>
                                        </div>
                                        <h3>Taza Gastada</h3>
                                        <p>$ 400.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>


                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazasNaranjas.jpg" alt="Tazas Naranjas">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_6"></i>
                                                <i class="fas fa-heart invisible like_6"></i>
                                            </button>
                                        </div>
                                        <h3>Tazas Naranjas</h3>
                                        <p>$ 600.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                        </div>
                        <div class="carousel-item carouselProductos__container-slider">

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaNavidad.jpg" alt="Taza Abrigo">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_7"></i>
                                                <i class="fas fa-heart invisible like_7"></i>
                                            </button>
                                        </div>
                                        <h3>Taza Abrigo</h3>
                                        <p>$ 450.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazaCorazon.jpg" alt="Taza Corazón">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_8"></i>
                                                <i class="fas fa-heart invisible like_8"></i>
                                            </button>
                                        </div>
                                        <h3>Taza Corazón</h3>
                                        <p>$ 423.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <a class="carousel-control-prev carouselProductos__controlls carouselProductos__controlls--prev"
                        href="#carouselProductos-productosTazas" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next carouselProductos__controlls carouselProductos__controlls--next"
                        href="#carouselProductos-productosTazas" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div class="row w-100">
                <div class="product__section-productos-div">
                    <div>
                        <a class="product__section-productos-div-a" href="#/masTazas">MÁS PRODUCTOS</a>
                    </div>
                </div>
            </div>



        </section>

        <!-- Título y seccion para tazones -->
        <div class="products__div products__div--margin">
            <h3 id="tazones">TAZONES</h3>
        </div>

        <section class="product__section-productos">
            <div class="row w-100 ml-0 mr-0  product__section-productos-responsive">
                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonCereza.jpg" alt="Tazón Ovalado Blanco">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_9"></i>
                                    <i class="fas fa-heart invisible like_9"></i>
                                </button>
                            </div>
                            <h3>Tazón Ovalado Blanco</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>




                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonesColores.jpg" alt="Tazónes Color Celeste">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_10"></i>
                                    <i class="fas fa-heart invisible like_10"></i>
                                </button>
                            </div>
                            <h3>Tazónes Color Celeste</h3>
                            <p>$ 1200.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>

                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonAzul.jpg" alt="Tazón Ovalado Azul">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_11"></i>
                                    <i class="fas fa-heart invisible like_11"></i>
                                </button>
                            </div>
                            <h3>Tazón Ovalado Azul</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>



                <article class="flip-card col-lg-3 flip-card--none">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonCuchara.jpg" alt="Tazón Estilo Madera">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_12"></i>
                                    <i class="fas fa-heart invisible like_12"></i>
                                </button>
                            </div>
                            <h3>Tazón Estilo Madera</h3>
                            <p>$ 600.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>
            </div>


            <div class="row w-100 ml-0 mr-0 product__section-productos-responsive">
                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonArcoiris.jpg" alt="Tazón Arcoiris">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_13"></i>
                                    <i class="fas fa-heart invisible like_13"></i>
                                </button>
                            </div>
                            <h3>Tazón Arcoiris</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>

                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonCorazon.jpg" alt="Tazón Corazón">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_14"></i>
                                    <i class="fas fa-heart invisible like_14"></i>
                                </button>
                            </div>
                            <h3>Tazón Corazón</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>


                <article class="flip-card col-lg-3 col-md-4">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonBlanco.jpg" alt="Tazón Blanco">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_15"></i>
                                    <i class="fas fa-heart invisible like_15"></i>
                                </button>
                            </div>
                            <h3>Tazón Blanco</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>

                <article class="flip-card col-lg-3 flip-card--none">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="../assets/imgs/tazonCerezas.jpg" alt="Tazón Estilo Canasta">
                        </div>
                        <div class="flip-card-back">
                            <div
                                class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                <button type="button" class="mr-0 ml-3">
                                    <i class="fas fa-share-alt"></i>
                                </button>
                                <button type="button">
                                    <i class="far fa-heart visible heart_16"></i>
                                    <i class="fas fa-heart invisible like_16"></i>
                                </button>
                            </div>
                            <h3>Tazón Estilo Canasta</h3>
                            <p>$ 500.00</p>
                            <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                        </div>
                    </div>
                </article>
            </div>

            <div class="container-fluid carouselProductos p-0">
                <div id="carouselProductos-productosTazones" class="carousel slide d-flex justify-content-center"
                    data-ride="carousel">
                    <div
                        class="carousel-inner w-100 d-flex flex-row justify-content-center carouselProductos__container">
                        <div class="carousel-item  active carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonCuchara.jpg" alt="Tazón Estilo Madera">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>

                                            <button type="button">
                                                <i class="far fa-heart visible heart_1"></i>
                                                <i class="fas fa-heart invisible like_1"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Estilo Madera</h3>
                                        <p>$ 600.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>




                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonCerezas.jpg" alt="Tazón Estilo Canasta">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_2"></i>
                                                <i class="fas fa-heart invisible like_2"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Estilo Canasta</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="carousel-item carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonBlanco.jpg" alt="Tazón Blanco">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_3"></i>
                                                <i class="fas fa-heart invisible like_3"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Blanco</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonCorazon.jpg" alt="Tazón Corazón">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_4"></i>
                                                <i class="fas fa-heart invisible like_4"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Corazón</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div class="carousel-item carouselProductos__container-slider">
                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonArcoiris.jpg" alt="Tazón Arcoiris">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_5"></i>
                                                <i class="fas fa-heart invisible like_5"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Arcoiris</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>


                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonAzul.jpg" alt="Tazón Ovalado Azul">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_6"></i>
                                                <i class="fas fa-heart invisible like_6"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Ovalado Azul</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                        </div>
                        <div class="carousel-item carouselProductos__container-slider">

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonesColores.jpg" alt="Tazónes Color Celeste">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_7"></i>
                                                <i class="fas fa-heart invisible like_7"></i>
                                            </button>
                                        </div>
                                        <h3>Tazónes Color Celeste</h3>
                                        <p>$ 1200.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>

                            <article class="flip-card col-lg-3 col-md-6">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="../assets/imgs/tazonCereza.jpg" alt="Tazón Ovalado Blanco">
                                    </div>
                                    <div class="flip-card-back">
                                        <div
                                            class="row w-100 d-flex flex-row justify-content-between position-relative product__section-productos-like">
                                            <button type="button" class="mr-0 ml-3">
                                                <i class="fas fa-share-alt"></i>
                                            </button>
                                            <button type="button">
                                                <i class="far fa-heart visible heart_8"></i>
                                                <i class="fas fa-heart invisible like_8"></i>
                                            </button>
                                        </div>
                                        <h3>Tazón Ovalado Blanco</h3>
                                        <p>$ 500.00</p>
                                        <a class="btn btn-outline-danger" href="./contacto.html">CONSULTÁ</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <a class="carousel-control-prev carouselProductos__controlls carouselProductos__controlls--prev"
                        href="#carouselProductos-productosTazones" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next carouselProductos__controlls carouselProductos__controlls--next"
                        href="#carouselProductos-productosTazones" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div class="row w-100">
                <div class="product__section-productos-div">
                    <div>
                        <a class="product__section-productos-div-a" href="../index.html">MÁS
                            PRODUCTOS</a>
                    </div>
                </div>
            </div>

        </section>

        <!-- Botonera para cambiar página -->
        <nav class="products__navbar" aria-label="...">
            <ul class="pagination pagination-lg">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">
                        1
                        <span class="sr-only">(current)</span>
                    </span>
                </li>
                <li class="page-item"><a class="page-link" href="./productos2.html">2</a></li>
            </ul>
        </nav>
    </div>
        `
    }
}

const TazaComponent = {
    render: () => {
        return `

        <div class="products__title product__title-flex">
            <h2 class="product__title-h2--form">TAZAS</h2>

            <div class="product__title-div">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <!-- Se activan con el boton "BUSCAR" -->
            <div class="product__title-divResponsive invisible">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <div class="product__title-button">
                <button type="button" class="btn btn-danger mt-0 product__title-button-buscar">BUSCADOR</button>
            </div>

            <div class="product__title-menu">
                <ul class="product__title-menu-ul">
                    <li><a href="#/">VOLVER AL MENÚ</a></li>
                </ul>
            </div>

        </div>

        <!-- Título y seccion para tazas -->
        <div class="products__div">
            <h3 id="tazas">TAZAS</h3>
        </div>

        <!-- Botonera para cambiar página -->
        <nav class="products__navbar order-1" aria-label="...">
            <ul id='ulPages' class="pagination pagination-lg">

            </ul>
        </nav>
        `
    }
}

const TazonComponent = {
    render: (array) => {
        return `
        <div class="products-productos">

        <div class="products__title product__title-flex">
            <h2 class="product__title-h2--form">NUESTROS PRODUCTOS</h2>

            <div class="product__title-div">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <!-- Se activan con el boton "BUSCAR" -->
            <div class="product__title-divResponsive invisible">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <div class="product__title-button">
                <button type="button" class="btn btn-danger mt-0 product__title-button-buscar">BUSCADOR</button>
            </div>

            <div class="product__title-menu">
                <ul class="product__title-menu-ul">
                    <li><a href="#tazas">TAZAS</a></li>
                    <li><a href="#/">VOLVER AL MENÚ</a></li>
                </ul>
            </div>

        </div>

        <!-- Título y seccion para tazas -->
        <div class="products__div">
            <h3 id="tazas">TAZAS</h3>
        </div>

        <section class="product__section-productos">
            <div id='tazaContainer' class="row w-100 ml-0 mr-0 product__section-productos-responsive">
                ${createArticle(array)}
            </div>

        </section>

        <!-- Botonera para cambiar página -->
        <nav class="products__navbar" aria-label="...">
            <ul class="pagination pagination-lg">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">
                        1
                        <span class="sr-only">(current)</span>
                    </span>
                </li>
                <li class="page-item"><a class="page-link" href="./productos2.html">2</a></li>
            </ul>
        </nav>
    </div>
        `
    }
}

const TermoComponent = {
    render: (array) => {
        return `
        <div class="products-productos">

        <div class="products__title product__title-flex">
            <h2 class="product__title-h2--form">NUESTROS PRODUCTOS</h2>

            <div class="product__title-div">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <!-- Se activan con el boton "BUSCAR" -->
            <div class="product__title-divResponsive invisible">
                <input type="search">
                <button type="submit">L</button>
            </div>

            <div class="product__title-button">
                <button type="button" class="btn btn-danger mt-0 product__title-button-buscar">BUSCADOR</button>
            </div>

            <div class="product__title-menu">
                <ul class="product__title-menu-ul">
                    <li><a href="#tazas">TAZAS</a></li>
                    <li><a href="#/">VOLVER AL MENÚ</a></li>
                </ul>
            </div>

        </div>

        <!-- Título y seccion para tazas -->
        <div class="products__div">
            <h3 id="tazas">TAZAS</h3>
        </div>

        <section class="product__section-productos">
            <div id='tazaContainer' class="row w-100 ml-0 mr-0 product__section-productos-responsive">
                ${createArticle(array)}
            </div>

        </section>

        <!-- Botonera para cambiar página -->
        <nav class="products__navbar" aria-label="...">
            <ul class="pagination pagination-lg">
                <li class="page-item active" aria-current="page">
                    <span class="page-link">
                        1
                        <span class="sr-only">(current)</span>
                    </span>
                </li>
                <li class="page-item"><a class="page-link" href="./productos2.html">2</a></li>
            </ul>
        </nav>
        `
    }
}


const routes = [
    {path: '/', component: ProductoComponent},
    {path: '/masTazas', component: TazaComponent},
    // {path: '/tazones', component: TazonComponent},
    // {path: '/termos', component: TermoComponent}
]

function router (){
    const db = fetchInfo();
    db
    .then(data => data.json())
    .then(data => {

        splitDataDb(data, 'tipo');

        const path = pathFuncion();

        if (!path) {
            return;
        }
    
        let { component } = componentFinder(path[1]);

        document.querySelector('#productsContainer').innerHTML = component.render();
        

        if (component === TazaComponent){
            createView(arrayTazas)
        }
        else if (component === TazonComponent){
            createView(arrayTazones)
        }
        else if (component === TermoComponent){
            createView(arrayTermos)
        }
    })
    .catch(error => alert(error))
}
