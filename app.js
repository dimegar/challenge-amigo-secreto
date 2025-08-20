// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creando el array para almacenar los nombres.
let amigos = [];

//Interacción con añadir
function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    amigos.push(amigoIngresado);
    console.log(amigos);
    limpiarCaja();

}

//Limpiar caja
function limpiarCaja(){
    document.querySelector('#amigo').value ='';
}