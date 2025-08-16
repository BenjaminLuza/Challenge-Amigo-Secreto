// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSorteo=[];
let nombreAmigo=0;
//1- FUNCIÓN PARA AGREGAR AMIGOS
function agregarAmigo(){
nombreAmigo = document.getElementById("amigo").value;
    
if (nombreAmigo=="") {
    alert("Por favor, inserte un nombre");
} else {
    amigosSorteo.push(nombreAmigo);
    console.log(amigosSorteo);
    document.getElementById("amigo").value="";
    listarAmigos();
}

}
//FUNCIÓN PARA AGREGAR LISTA DE AMIGOS
function listarAmigos() {
  let lista=document.getElementById("listaAmigos");
  lista.innerHTML="";
for (let i = 0; i < amigosSorteo.length; i++) {
    let li = document.createElement("li");
    li.textContent=amigosSorteo[i];
    lista.appendChild(li);
    
}
    }
//PRUEBA DE DISTINTAS COSAS PARA LA FUNCIÓN DE SORTEO DE AMIGOS

function sortearAmigo() {
    let randomAmigos=Math.floor(Math.random());
console.log(randomAmigos);
console.log (amigosSorteo[randomAmigos]);
}

