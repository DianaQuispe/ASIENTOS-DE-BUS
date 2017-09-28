"use strict";
class Pasajero  {
	constructor(nombre, apellido,dni) { 
		this.nombre = nombre;
        this.apellido = apellido;
		this.dni = dni;
		this.asiento = asiento;
	}
}

class Reserva {
	constructor() {
		this.pasajeros = [
		{ 
			nombre: 'Diana',
			apellido: 'Quispe',
			dni: 72162206,
			asiento: 2,
		}
		]
		this.asientoSelecc = undefined;
		this.sera = undefined;
	}
	init() {
		$('#reservar').click(()=> this.reservar() )
	}
	asiento() {
		$('button').click((e) => {
			this.asientoSelecc = parseInt(e.target.textContent);
			(e.target).style.backgroundColor = ((e.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
			// $(e.target).parent()[0].attr('class') == 'myClass'
			// (e.target).style.className('myClass')
			// $('button').parentNode.css('background','yellow') 
			//  this.sera = e.target;
			//  console.log(this.sera);
			//  this. sera1 = $(e.target).parent()[0]
			//  console.log(this. sera1);
			 
			//  this.sera1.addClass('myclase');

			$('#asiento').val(this.asientoSelecc);
		} )
		
		
	}
	pintar() { 
		if( this.asientoSelecc == this.pasajeros.asiento)  {
			alert('f');

		}else{
			alert('es')
		}
	}
	reservar() { 		
			if($('#nombre').val()=="" || $('#apellido').val() ==""||$('#dni').val() =="") {
				alert('FALTAN DATOS');
			}else if( this.asientoSelecc == undefined) { 
				alert('SELECCIONE UN ASIENTO')
			 }else {  
				this.pasajeros.push({nombre: $('#nombre').val(),apellido:  $('#apellido').val(), dni :$('#dni').val(),asiento: this.asientoSelecc   })
				// this.sera.css('background','yellow') 
				console.log(this.pasajeros)
			}
			this.limpiar();
	}
	limpiar() {
		$('#nombre').val('')
		$('#apellido').val('') 
		$('#dni').val('')
		this.asientoSelecc == '';
	}
}
$(document).ready(function(){ 
	let reserva = new Reserva();
	// let pasajero = new Pasajero()
	reserva.init()
	reserva.asiento()
	reserva.pintar()
} ) 
// var reserva = new Reserva();
// reserva.reservar()
// var todos = [];
// var asiento;
// var asientoAct;

// //////  todos son click
// var celdas = document.getElementsByTagName('td');
// for (var i = 0; i < celdas.length; i++) {
//     celdas[i].addEventListener('click',redirect,false);
// }
// //asento de abajo
//  function redirect(event){
//     asiento=(event.target.textContent);
//    asientoAct=event.target;
//     var mostrar=document.getElementById("div");
//     mostrar.innerHTML=parseInt(asiento) ;
//    if((event.target).style.backgroundColor=='rgb(248, 237, 80)')//yellovv
//      {
//        (event.target).style.backgoundColor = 'transparent';
//      }else
//        {
//          (event.target).style.backgroundColor = 'rgb(248, 237, 80)';
//        }
     
// }





// //////  todos son click

// //////////



// /*
// function reservo(event) {
// 	var asiento=(event.target.textContent);
// 	alert("Número de Asiento: " +  asiento );
//   //  (event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';

// }//'transparent'
// */


// /*
//  var reserva=document.getElementById("reservar");
//  reserva.addEventListener("click", reservar);

// */

// function Persona(nombre, apellido, dni,asiento) {
// 	this.nombre = nombre; 
// 	this.apellido = apellido;
// 	this.dni = dni;
// 	this.asiento = asiento; 
// }

     
//  function reservar() {
// 	var nombre = document.getElementById('nombre').value;
// 	var apellido =  document.getElementById("apellido").value;
// 	var dni = document.getElementById("dni").value;
// 	var persona = new Persona(nombre, apellido, dni,asiento);
// 	todos.push (persona);
// 	alert( "Reservado con exito!" + "\n" + "Nombre: " + nombre + "\n" +  "Apellido: " + apellido + "\n"+ "DNI: " +  dni + "\n" +  "Número de Asiento: " +  asiento );

//     limpiar();  
//  }
   

// function listar() {
// 	var s = "";
// 	for(var i =0; i < todos.length; i++) {
// 		s+= "Nombre: " + todos[i].nombre+"<br>";
// 		s+= "Apellido: "+ todos[i].apellido+"<br>";
// 		s+="Dni: "+ todos[i].dni + "<br>";
// 		s+="Número de asiento: "+ todos[i].asiento+"<br>" +"<br>";
// 	}
// 	var div = document.getElementById("div");
// 	div.innerHTML= s;
// }

// function busqueda () {
// 	var bDni = document.getElementById("buscarDNI").value;
// 	var div = document.getElementById("div");
// 	for(var i =0; i<todos.length; i++){
// 		if( parseInt (bDni) == parseInt(todos[i].dni)){
// 				div2.innerHTML+= "<div>" + "Persona Buscada: " + "<br>" + "Nombre: " + todos[i].nombre + "<br>" + "Apellido: " + todos[i].apellido + "<br>" + "DNI: " + todos[i].dni + "<br>" + "<br>" + "</div>";
// 		}else
// 			 div2.innerHTML ="No se han encontrado datos similares";
		 
// 	}
// } 	


// function limpiar()  {
// 	document.getElementById('nombre').value = "";
// 	document.getElementById("apellido").value = "";
// 	document.getElementById("dni").value = "";
// }

// function editar()
// {
  
// }




// for (var i = 0; i < celdas.length; i++) {
//     celdas[i].addEventListener('click',canci,false);
// }

// function canci(event){
//   	alert("Número de Asiento: "  );


//     var asiento=(event.target.textContent);
// 	celdas[asiento].style.backgroundColor == "White";
// }


// var celdas = document.getElementsByTagName('td');
// for (var p = 0; p < celdas.length; p++) {
//    	celdas[p].addEventListener('click',reservo,false);
// }

// function cancelar() {
//  // asientoAct
//   //sweetAlert("hascga");
//   for (var i = 0; i < todos.length; i++) {
// 		if(asiento==todos[i].asiento)
//     {
//       todos.splice(i,1);
//     }
// }


// }


