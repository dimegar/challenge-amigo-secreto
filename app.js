// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creando el array para almacenar los nombres.
let amigos = [];
let numeroDeAmigos = 0;
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
    mostrarAmigos();
    limpiarCaja();
    console.log(amigos);
    console.log(numeroDeAmigos);
    }    
}

//Interacción con sortear 
function sortearAmigo(){
    if (amigos == ''){
    alert("Ingrese al menos dos nombres para iniciar el sorteo.");
    }
    else if(amigos.length == 1){
        alert("Ingresa otro nombre para iniciar el sorte.");
    }
    else{
        
    }
}



