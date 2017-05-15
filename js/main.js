function agregaPosteo() {
	// creacion variables rescatar contenedores
var containerPosteos = document.getElementById("contenedor-posteos");
var nombreFF = document.getElementById("nombre").value;
var contenidoFF = document.getElementById("cajaposteos").value

//nodo elemento donde ira nuestro post
var nuevoPost = document.createElement("div");

//crear elementos donde guardaremos los valores 
var  contenedorNombre = document.createElement("strong");
var contenedorPost = document.createElement("p");
var separacion = document.createElement("hr");

//crear elemento para corazon like

var parrafCorazon = document.createElement('p');
var i = document.createElement(i);

// Asignamos padre a icono de corazon

parrafCorazon.appendChild(i);

// dar atributos a corazon 

parrafCorazon.setAttribute("class", "corazon");
i.setAttribute("class", "fa fa-heart");
i.setAttribute("arial-hidden", "true");

//tranformamos el nombre nodo texto 

var nodoNombre = document.createTextNode(nombreFF + "escribio:");
var nodoPosteo = document.createTextNode(contenidoFF);

//asignaremos padres a nodos creados

contenedorNombre.appendChild(nodoNombre);
contenedorPost.appendChild(nodoPosteo);

// asignamos padres a nombre y contenido
nuevoPost.appendChild(contenedorNombre);
nuevoPost.appendChild(contenedorPost);
nuevoPost.appendChild(parrafCorazon);
nuevoPost.appendChild(separacion);

//crear funcion click para el corazon y le asignamos la clase de css
i.addEventListener("click", function(){
	i.classList.toggle('rojo');
});

//le damos atrinutos a nuestro post y lo agregamos a nuestro contenedor-posteos
nuevoPost.setAttribute("class", "posteo");

containerPosteos.appendChild(nuevoPost);
// resetear los campos y dejarlos nuevamente en blanco

document.getElementById("nombre").value = "";
document.getElementById("cajaposteos").value="";
}







