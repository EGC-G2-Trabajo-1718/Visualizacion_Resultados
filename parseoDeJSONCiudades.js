"use strict";

var fs = require('fs');
var path = require('path');

//Función que parsea un UN JSON

var ciudades = ["Huelva", "Sevilla", "Cádiz", "Córdoba", "Jaén", "Almería", "Granada", "Málaga", "Vigo", "Orense", "La Coruña", "Pontevedra"];
var recuento = [];

var parseoDeFicheroYRecuento = function (nombreDeFichero) {

    var fichero = path.join("./ficheros", nombreDeFichero);

    var lectura = fs.readFileSync(fichero, 'utf-8');
    var parseoHecho = {};
    try {
        parseoHecho = JSON.parse(lectura);
    } catch (e) {
        console.log("No ha sido posible parsear el fichero proporcionado");
        console.log(e);
        return;
    }

    var array = parseoHecho.data;

    array.map(function(p){
        for (var item in p) {
            recuento.push(p[item]);
        }
    })


    return recuento;

}


var res = parseoDeFicheroYRecuento("generated3.json");
console.log(ciudades,res);



