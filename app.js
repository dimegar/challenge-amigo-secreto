// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creando el array para almacenar los nombres.
let amigos = [];
//Mostrar lista de amigos
function listaAmigos(elemento,texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;
    return;
} 
//Interacción con añadir
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == ''){
        alert("Inserte un nombre.");
    }
    else{
    amigos.push(amigoIngresado);
    listaAmigos("#listaAmigos",amigoIngresado);
    console.log(amigos);
    limpiarCaja();
    }
}

//Limpiar caja
function limpiarCaja(){
    document.querySelector('#amigo').value ='';
}

