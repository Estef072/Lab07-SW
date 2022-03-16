"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba = void 0;

var _P = require("./P2");

var prueba = function prueba() {
  document.body.innerHTML = "";
  var story = document.createElement('story');
  story.innerHTML = "\n<div class=\"container\">\n        <article>\n            <h2>Principio...</h2>\n            <p class=\"text-white\">\n            Era una noche como cualquier otra, hab\xEDa dejado de llover por unos minutos y aprovech\xE9 para salir a correr, me gusta mucho\n            mojar los zapatos deportivos para que mis pies se vuelvan m\xE1s pesados, y que poco a poco mis extremidades se vayan\n            congelando, as\xED tengo que moverme cada vez m\xE1s fuerte y m\xE1s r\xE1pido para evitar la hipotermia. Tambi\xE9n aprecio mucho ese\n            viento tan frio que parece traer consigo cristales de hielo los cuales desgarran mis fosas nasales y mi garganta, haciendo peso\n            en mis pulmones cada vez que respiro, siento que mi pecho explota y me falta el aire. As\xED cada gota de sudor significa mayor\n            esfuerzo.\n            </p>\n        </article>\n        <img src=\"../fotos/noche.jpg\" alt=\"Parque\" width=\"350\" height=\"300\">\n\n</div>\n";
  document.body.appendChild(story);
  var ruta = document.createElement('button');
  ruta.innerHTML = "Continuar historia";

  ruta.onmousedown = function () {
    (0, _P.prueba1)();
  };

  document.body.appendChild(ruta);
};

exports.prueba = prueba;