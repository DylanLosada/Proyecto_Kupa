"use strict";

window.addEventListener("load", function () {
  // Traigo a los corazones del boton de productos
  var heart = document.querySelector(".heart");
  var like = document.querySelector(".like");
  heart.addEventListener("click", function () {
    heart.classList.remove("visible");
    heart.classList.add("invisible");
    like.classList.remove("invisible");
    like.classList.add("visible");
  });
  like.addEventListener("click", function () {
    like.classList.remove("visible");
    like.classList.add("invisible");
    heart.classList.remove("invisible");
    heart.classList.add("visible");
  });
});