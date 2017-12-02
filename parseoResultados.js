"use strict";

var fs = require('fs');
var path = require('path');

//Función que parsea el JSON de las edades

var parseoResultados = function (nombreDeFichero) {

    //Path join genera la ruta del fichero, añadiendo o suprimiendo las / y espacios si son necesarios
    var fichero = path.join("./ficheros", nombreDeFichero);

    //Lectura sincrona del fichero
    var lectura = fs.readFileSync(fichero, 'utf-8');
    var parseoHecho = {};
    //es necesario hacer el parseo en un bloque try catch para no colgar la ejecución de la aplicación completa
    try {
        parseoHecho = JSON.parse(lectura);
    }catch (e) {
        console.log("No ha sido posible parsear el fichero proporcionado");
        console.log(e);
        return;
    }

    //se extraen los datos del array del json
    var array = parseoHecho.data;



    var res = new Array();

    //se recorre cada objeto, se extrae el valor de la clave edad y se clasifica en el array de recuento
    for(var i = 0;i<array.length; i++){

        var obj = new Object();

        obj.opcion = array[i].opcion;
        obj.numVotos = array[i].numVotos;
        obj.porcentaje = array[i].porcentaje;

        res.push(obj);

        }
        return res;
    }

var res1=  parseoResultados("jsonResultados.json");

console.log(res1);