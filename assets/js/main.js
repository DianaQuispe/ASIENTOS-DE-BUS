"use strict";
class Pasajero {
    constructor(nombre, apellido, dni, asiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.asiento = asiento;
    }
}

class Reserva {
    constructor() {
        this.pasajero = new Pasajero();
        this.pasajero = {
            nombre: 'Diana',
            apellido: 'Quispe',
            dni: 777777,
            asiento: 2,
        }
        this.pasajeros = [this.pasajero];

    }
    init() {
        $('#reservar').click(() => this.reservar())
        $('#listar').click(() => this.listar())
        $('#buscarBtn').click(() => this.buscar())
    }
    buscar() {
        this.inputBuscar = parseInt($('#buscarInp').val());
        this.resultadoBus = this.pasajeros.filter((value) => {
            return (this.inputBuscar == parseInt(value.dni)) ? $('#nombre').val(value.nombre) && $('#apellido').val(value.apellido) && $('#dni').val(value.dni) && $('#asiento').val(value.asiento) : '';
        })
        console.log(this.inputBuscar)
    }
    listar() {
        this.resultado = this.pasajeros.map((value) => {
            return $('.tablaLi').append(`<tr>
            <td>${value.nombre} </td>\
            <td>${value.apellido}</td>\
            <td>${value.dni}</td>\
            <td>${value.asiento}</td>\
          </tr>\
          <tr>`);

            // this.asientoSelecc == value.asiento;
            // $('#listarDiv').append(`<div> ${this.asientoSelecc == value.asiento} </div>`) ;
        })
    }
    asiento() {
        $('button').click((e) => {
            this.asientoSelecc = parseInt(e.target.textContent);
            (e.target).style.backgroundColor = ((e.target).style.backgroundColor == 'rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';

            // $(e.target).parent()[0].attr('class') == 'myClass'
            // (e.target).style.className('myClass')
            // $('button').parentNode.css('background','yellow')
            //  this.sera = e.target;
            //  console.log(this.sera);
            //  this. sera1 = $(e.target).parent()[0]
            //  console.log(this. sera1);

            //  this.sera1.addClass('myclase');

            $('#asiento').val(this.asientoSelecc);
        })


    }
    pintar() {
        if (this.asientoSelecc == this.pasajeros.asiento) {
            // alert('f');

        } else {
            // alert('es')
        }
    }
    reservar() {
        if ($('#nombre').val() == "" || $('#apellido').val() == "" || $('#dni').val() == "") {
            alert('FALTAN DATOS');
        } else if (this.asientoSelecc == undefined) {
            alert('SELECCIONE UN ASIENTO')
        } else {
            this.pasajeros.push({
                nombre: $('#nombre').val(),
                apellido: $('#apellido').val(),
                dni: $('#dni').val(),
                asiento: this.asientoSelecc
            })
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
$(document).ready(function () {
    let reserva = new Reserva();
    let pasajero = new Pasajero()
    reserva.init()
    reserva.asiento()
    reserva.pintar()

})