"use strich";
console.log('CARGANDO CONFIGURACION DE VERIFICACIÓN CAPTCHA -----');

let codigo = document.getElementById('codigo');
const ingreso = document.getElementById('ingresoCodigo');
const verificar = document.getElementById('verificar');
const mensaje = document.getElementById('mensaje');
const aprobado = document.getElementById('iconoAprobado');
const desaprobado = document.getElementById('iconoDesaprobado');
let valor = Math.floor(Math.random()*6);

// ARMO UNA LISTA CON LOS 6 LINK DE LOS CÓDIGOS
codigoSelecionado = [
    "../img/captcha/codigo1.png",
    "../img/captcha/codigo2.png",
    "../img/captcha/codigo3.png",
    "../img/captcha/codigo4.png",
    "../img/captcha/codigo5.png",
    "../img/captcha/codigo6.png",
];

// VOY A IR ALTERANTO LA PROPIEDAD "SRC" DEL HTML A MEDIDA QUE VAYA CAMBIANDO LA VARIABLE VALOR
codigo = document.getElementById('codigo').src=codigoSelecionado[valor];


function proceso() {

    // ARMO UNA LISTA DE VERIFICACION RESPETANDO EL ORDEN DE LAS IMAGENES
    tablaVerificacion = [
        "6ne3",
        "4D7YS",
        "XDHYN",
        "28ivw",
        "FH2DE",
        "q98p",
    ];

    // OBTENDO LO INGRESADO POR EL USUARIO
    let codigoIngresado = ingreso.value;

    // VOY A ARMAR UNA COMPROBACION EN CONSOLA
    console.log("Imagen Nro: "+codigoSelecionado[valor]);
    console.log("Codificacion: "+tablaVerificacion[valor]);
    console.log("Codigo ingresado por el usuario: "+codigoIngresado); // PARA VERIFICAR POR CONSOLA 

    // REALIZO UNA COMPARACION ENTRE EL VALOR DE LA IMAGEN EN PATALLA Y EL INGRESO POR TECLADO DEL USUARIO

    if (codigoIngresado == tablaVerificacion[valor]) {
        desaprobado.classList.remove('visible'); // PARA QUE DESAPAREZCA EN EL 2DO INTENTO
        desaprobado.classList.add('oculto'); // PARA QUE DESAPAREZCA EN EL 2DO INTENTO
        verificar.classList.add('oculto');
        aprobado.classList.remove('oculto');
        aprobado.classList.add('visible');
        mensaje.innerHTML = "¡Código correcto!";
        console.log("VERIFICACION CORRECTA");
    } else {
        aprobado.classList.remove('visible'); // PARA QUE DESAPAREZCA EN EL 2DO INTENTO
        aprobado.classList.add('oculto'); // PARA QUE DESAPAREZCA EN EL 2DO INTENTO
        verificar.classList.add('oculto');
        desaprobado.classList.remove('oculto');
        desaprobado.classList.add('visible');
        mensaje.innerHTML = "¡Código incorrecto!";
        console.log("VERIFICACION INCORRECTA");
    }
        
}

console.log('CONFIGURACION CORRECTA DE VERIFICACIÓN CAPTCHA -----');

let verificacion = verificar.addEventListener('click', proceso);

