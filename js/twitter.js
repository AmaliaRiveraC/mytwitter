var contadorCaracteres = 0;
var contadorClick = 0;

    

var seccion = document.createElement("section");
var comentario = document.createElement("textarea");
var de = document.createElement("span");
var entradaAutor = document.createElement("input");
var botonEnviar = document.createElement("button");
var areaPublicacion = document.createElement("section");

var id = "check" + contadorCaracteres;

comentario.style.width = "787px";
comentario.style.height = "150p";
comentario.placeholder = "Escribe aqui tu comentario";

var id = "check" + contadorCaracteres;

de.innerText = "De:";

entradaAutor.placeholder = "autor";
entradaAutor.type = "text";
entradaAutor.id = id;



botonEnviar.type = "button";
botonEnviar.innerText = "Enviar";

seccion.appendChild(comentario);
seccion.appendChild(de);
seccion.appendChild(entradaAutor);
seccion.appendChild(botonEnviar);

document.getElementById("areaPublicacion").appendChild(seccion);

comentario.addEventListener("keypress", contadorDeCaracteres);
autor.addEventListener("")
botonEnviar.addEventListener("click", publicar);

function publicar(){
    areaPublicacion.innerText = comentario.value + " " + autor.value; 
}

function contadorDeCaracteres() {
    
}