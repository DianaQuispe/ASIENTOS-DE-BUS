///////////////////
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
function redirect(event){
    var asiento=(event.target.textContent);
    var div=document.getElementById("div");
    div.innerHTML=asiento;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
//////////////////////////
/*
var persona = 
var nombre = undefined;
var apellido = undefined;
var dni = undefined;
*/
var todos = [];


function Persona(nombre,apellido, dni) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
}
var persona = new Persona(nombre,apellido, dni);
todos.push(persona);
 

function reservar(nombre,apellido, dni) {
	 var div=document.getElementById("div");

	for (var i = 0; i < todos.length; i++) {

	if(div.innerHTML == i) {
		if(true){
		 todos[i].nombre == nombre.value;

		 div+="sadasd";

		}
		}
		}
	}
	




