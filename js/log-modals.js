"use strict";

window.addEventListener("load", function () {

  // Traigo a los enlaces del menú
  var acceder = document.querySelector(".log__signIn");
  var registrarse = document.querySelector(".log__signUp");

  // Traigo al formulario de cada enlace
  var formularioIn = document.querySelector("#acceder");
  var formularioUp = document.querySelector("#registrarse");

  // Traigo al boton de cada form
  var boton_ingresar = document.querySelector(".ingresar");
  var boton_registrarse = document.querySelector(".registrarse");

  registrarse.addEventListener("click", function () {
    boton_ingresar.classList.add("invisible");

    boton_registrarse.classList.remove("invisible");
    boton_registrarse.classList.add("visible");

    // Saco el form. de acceder
    formularioIn.classList.remove("visible");
    formularioIn.classList.add("invisible");

    // Hago visible al form de REGISTRARSE
    formularioUp.classList.remove("invisible");
    formularioUp.classList.add("visible");
  });

  acceder.addEventListener("click", function () {
    boton_ingresar.classList.remove("invisible");
    boton_ingresar.classList.add("visible");

    boton_registrarse.classList.remove("visible");
    boton_registrarse.classList.add("invisible");

    // Saco el form. de registrarse
    formularioUp.classList.remove("visible");
    formularioUp.classList.add("invisible");

    // Hago visible al form de ACCEDER
    formularioIn.classList.remove("invisible");
    formularioIn.classList.add("visible");
  });
});