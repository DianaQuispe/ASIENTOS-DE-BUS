/*
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
var asientos = document.getElementsByTagName('td');

for (var i = 0; i < asientos.length; i++) {

}

var persona = 
var nombre = undefined;
var apellido = undefined;
var dni = undefined;


var todos = new Array(32);

var users = [ 
	{
		nombre  : undefined,
		apellido : undefined,
		dni : undefined
	}
	]

function reservar() {
	var name = document.getElementById("nombre").value;
	var lastname = document.getElementById("apellido").value;
	var DNI = document.getElementById("dni").value;	
	var num =parseInt(div.innerHTML);	
	for (var i = 1; i <= todos.length-1; i++) {

		 if  ((num != undefined) || ( num = i) ) {
		 //	do {

		 //	} while ()
		 todos[i] = [
		users.nombre = name,
		users.apellido = lastname,
		users.dni = DNI,
		]
	
}


function reservar() {
	var name = document.getElementById("nombre").value;
	var lastname = document.getElementById("apellido").value;
	var DNI = document.getElementById("dni").value;	

	 var div=document.getElementById("div");

	for (var i = 1; i <= todos.length-1; i++) {

	if(div.innerHTML == i) {
		if(true){
			pesona = new Persona(name,lastname, DNI);
		//	break;
		}  
			todos.push(persona);

		}
		}
	}
	todos.push(persona);

function listar() {
	
	 }	
}	

 function sera(todos) {
var n  = 32;
for(var i =0; i <todos.length; i++) {
  console.log(i);
}
i++;	
}
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);

}

 function redirect(event){
    asiento=(event.target.textContent);
{ 
*/

var todos = [];
var asiento;
//////  todos son click
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);

}
 function redirect(event){
    asiento=(event.target.textContent);
    var mostrar=document.getElementById("div");
    mostrar.innerHTML=parseInt(asiento) ;
    (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}




var todos = [];
var asiento;

//////  todos son click

//////////

function Persona(nombre, apellido, dni) {
	this.nombre = nombre; 
	this.apellido = apellido;
	this.dni = dni;
	this.asiento = asiento; 
}

var celdas = document.getElementsByTagName('td');
for (var p = 0; p < celdas.length; p++) {
   	celdas[p].addEventListener('click',reservo,false);

}



function reservo(event) {
	var asiento=(event.target.textContent);
	alert("Número de Asiento: " +  asiento );
  //  (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';

}//'transparent'


 function reservar() {
	var nombre = document.getElementById('nombre').value;
	var apellido =  document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var persona = new Persona(nombre, apellido, dni);
	todos.push (persona);
	alert( "Reservado con exito!" + "\n" + "Nombre: " + nombre + "\n" +  "Apellido: " + apellido + "\n"+ "DNI: " +  dni + "\n" +  "Número de Asiento: " +  asiento );

    limpiar();  
 }

function listar() {
	var s = "";
	for(var i =0; i < todos.length; i++) {
		s+= "Nombre: " + todos[i].nombre+"<br>";
		s+= "Apellido: "+ todos[i].apellido+"<br>";
		s+="Dni: "+ todos[i].dni + "<br>";
		s+="Número de asiento: "+ todos[i].asiento+"<br>" +"<br>";
	}
	var div = document.getElementById("div");
	div.innerHTML= s;
}

function busqueda () {
	var bDni = document.getElementById("buscarDNI").value;
	var div = document.getElementById("div");
	for(var i =0; i<todos.length; i++){
		if( parseInt (bDni) == parseInt(todos[i].dni)){
			div2.innerHTML+= "<div>" + "Persona Buscada: " + "<br>" + "Nombre: " + todos[i].nombre + "<br>" + "Apellido: " + todos[i].apellido + "<br>" + "DNI: " + todos[i].dni + "<br>" + "<br>" + "</div>";
		}else if (true ) {
			 div2.innerHTML+="No se han encontrado datos similares";
		} 
	}
} 

function limpiar()  {
	document.getElementById('nombre').value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
}




for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',canci,false);
}
function canci(event){
    var asiento=(event.target.textContent);
	celdas[asiento].style.backgroundColor == "White";
}

function cancelar() {



}


