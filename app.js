// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creando el array para almacenar los nombres.
let amigos = [];
let numeroDeAmigos = [];
let amigosMinimos = 2;
//Construcción de lista de amigos
function listaAmigos(elemento,lista){
    let elementoHTML = document.querySelector(elemento);
    // Lista de amigos
    let contenido = "<ul>";
    for (let i = 0; i < lista.length; i++) {
        contenido += "<li>" + lista[i] + "</li>";
    }
    contenido += "</ul>";
    elementoHTML.innerHTML = contenido;
}
//Actualizar lista de amigos
function mostrarAmigos(){
    listaAmigos("#listaAmigos",amigos);
}
// Ganador
function resultadoGanador(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//Limpiar caja
function limpiarCaja(){
    document.querySelector('#amigo').value ='';
}
//Interacción con añadir
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;

    if (amigoIngresado == ''){
        alert("Inserte un nombre.");
    }
    else{
    amigos.push(amigoIngresado);
    numeroDeAmigos.push(amigos.length);
    mostrarAmigos();
    limpiarCaja();
    }    
}

//Interacción con sortear 
function sortearAmigo(){
    let identificadorAmigo = Math.floor(Math.random()*numeroDeAmigos.length);
    if(numeroDeAmigos.length >= amigosMinimos){
        resultadoGanador("#resultado",`La persona ganadora es: ${amigos[identificadorAmigo]}!`);
    }
    else{
        alert("Ingresa al menos dos amigos.");
    }
}



