function init(){
	var button = document.getElementById("boton");
	button.addEventListener("click", guardar);
	guardar();	
}

function guardar(){
	var clave = document.getElementById("clave").value;
	var valor = document.getElementById("valor").value;

	sessionStorage.setItem(clave, valor);

	var contenedor = document.getElementById("historial");
	contenedor.innerHTML = "";
	for(var i = 0; i < sessionStorage.length; i++){
		var kei = sessionStorage.key(i);
		var valuee = sessionStorage.getItem(kei);

		var elemento1 = document.createElement('h3');
		var elemento2 = document.createElement('p');
		var contenido1 = document.createTextNode(kei);
		var contenido2 = document.createTextNode(valuee);
		elemento1.appendChild(contenido1);
		elemento2.appendChild(contenido2);
		elemento1.setAttribute("class", "nombre");
		elemento2.setAttribute("class", "comentario");
		document.getElementById('historial').appendChild(elemento1);
		document.getElementById('historial').appendChild(elemento2);
	}
}

init();


function clean(){
	var botonLimpiador = document.getElementById("limpiar");
	botonLimpiador.addEventListener("click", limpiarTodo);
	limpiarTodo();	
}

function limpiarTodo() {
	var cajaComentarios = document.getElementById("historial");
	cajaComentarios.innerHTML = "";
}

function limpiarProfundo(){
	localStorage.clear();
	localStorage.clear();
	sessionStorage.removeItem(cajaComentarios);
}
clean();