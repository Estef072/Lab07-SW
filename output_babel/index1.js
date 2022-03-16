"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inicio = void 0;

var _P = require("./P1");

var inicio = function inicio() {
  var contenedor = document.getElementById("boddy-pagina"); //crear imagen principal

  var dato = document.createElement('ul');
  var p1 = document.createElement('li');
  var ruta = document.createElement('button');
  ruta.innerHTML = "Empezar historia";

  ruta.onmousedown = function () {
    (0, _P.prueba)();
  };

  dato.appendChild(ruta);
  dato.appendChild(p1);
  contenedor.appendChild(dato);
};

exports.inicio = inicio;