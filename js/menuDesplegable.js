"use strict";
console.log('CARGANDO CONFIGURACION MENÚ DESPLEGABLE -----');
const menu = document.getElementById('iconoMenu');
const navegador = document.getElementById('menuDesplegable');

function mostrar() {
    navegador.classList.remove('menuOcultar');
    navegador.classList.add('menuMostrar');
}

function ocultar() {
    navegador.classList.remove('menuMostrar');
    navegador.classList.add('menuOcultar');
}
console.log('CONFIGURACION DE MENÚ DESPLEGABLE CORRECTA -----');

let aparecer = menu.addEventListener('mouseenter', mostrar);
let desaparecer = navegador.addEventListener('mouseleave', ocultar);



