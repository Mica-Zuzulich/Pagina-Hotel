"use strict";
console.log('CARGANDO CONFIGURACION MODO OSCURO -----');
const boton = document.getElementById('interruptor');
const marco = document.getElementById('marcoInterruptor');
const main = document.querySelector('main');
const portaRetrato = document.getElementById('portaRetrato');
const tarjetaDeContacto = document.getElementById('tarjetaDeContacto');
const alumnos = document.getElementById('tarjetasAlumnos');


function cambiarModo() {

    if (boton.classList.contains('boton-ModoClaro')) {
        // CONFIGURACIONES PARA EL INTERRUPTOR
        boton.classList.remove('boton-ModoClaro');
        boton.classList.add('boton-ModoOscuro');
        marco.classList.add('marco-ModoOscuro'); 
        marco.classList.remove('marco-ModoClaro'); 
        // CONFIGURACIONES EN EL VIEWPORT
        main.classList.remove('main-ModoClaro');
        main.classList.add('main-ModoOscuro');
        portaRetrato.classList.add('contendedorImagenes-ModoOscuro'); // ESTE CONTENEDOR NO TIENE FORMATO CLARO
        tarjetaDeContacto.classList.remove('contacto-ModoClaro');
        tarjetaDeContacto.classList.add('contacto-ModoOscuro');
        alumnos.classList.remove('desarrolladores-ModoClaro'); 
        alumnos.classList.add('desarrolladores-ModoOscuro'); 
        // SALIDA POR CONSOLA
        console.log('cambié a Oscuro');
    }
    else {
        // CONFIGURACIONES PARA EL INTERRUPTOR
        boton.classList.add('boton-ModoClaro');
        boton.classList.remove('boton-ModoOscuro');
        marco.classList.add('marco-ModoClaro');
        marco.classList.remove('marco-ModoOscuro'); 
        // CONFIGURACIONES EN EL VIEWPORT
        main.classList.add('main-ModoClaro');
        main.classList.remove('main-ModoOscuro');
        portaRetrato.classList.remove('contendedorImagenes-ModoOscuro'); // ESTE CONTENEDOR NO TIENE FORMATO CLARO
        tarjetaDeContacto.classList.add('contacto-ModoClaro');
        tarjetaDeContacto.classList.remove('contacto-ModoOscuro');
        alumnos.classList.add('desarrolladores-ModoClaro'); 
        alumnos.classList.remove('desarrolladores-ModoOscuro');  
        // SALIDA POR CONSOLA  
        console.log('volví a Claro');
    }
}
console.log('MODO OSCURO CARGADO CORRECTAMENTE -----');

let modoOscuro = boton.addEventListener('click', cambiarModo);

