"use strict";
console.log('CARGANDO CONFIGURACION PARA FORMULARIO -----');
let form = document.getElementById('form');
let btnEnviar = document.getElementById('btn-enviar');
let verificacionCaptcha = document.getElementById('iconoAprobado');

function enviar(e) {

    console.log("----- INCIO DE FORMULARIO -----")

    if (verificacionCaptcha.classList.contains('visible')) {
        // OBTENGO EL FORMULARIO ANTES DE QUE SEA MANDANDO
        e.preventDefault();

        // ARMO UN "FORMDATA" PARA ALMACENAR LOS VALORES INGRESADOS POR EL USUARIO
        let formData = new FormData(form);

        // ASIGNO VARIABLES CON VALORES
        let email = formData.get('email');
        let telefono = formData.get('telefono');
        let nombre = formData.get('nombre');
        let consulta = formData.get('consulta');

        console.log('Mandé el formulario');
        console.log('La consulta ingresada fue por el usuario: '+nombre);
        console.log('La consulta formulada: '+consulta);
        console.log('Datos de contacto: '+email+" - "+telefono);

        // BORRO MENSAJES VISIBLES

        console.log("----- FIN DE FORMULARIO -----")
    }
    else {
        aprobado.classList.remove('visible');
        aprobado.classList.add('oculto');
        desaprobado.classList.remove('visible');
        desaprobado.classList.add('oculto');
        mensaje.innerHTML = " ";
        console.log("EL CAPTCHA ES INVÁLIDO");
    }
    // location.reload(); // PARA ACTUALIZAR LA PÁGINA
}
console.log('CONFIGURACION CORRECTA DE FORMULARIO -----');

form.addEventListener('submit', enviar);

