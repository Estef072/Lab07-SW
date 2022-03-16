"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba1 = void 0;

var _P = require("./P3");

var prueba1 = function prueba1() {
  document.body.innerHTML = "";
  var story = document.createElement('story');
  story.innerHTML = "\n<div class=\"container\">\n        <article>\n            <p class=\"text-white\">\n            Amo correr en el parque, sobre todo en estas \xE9pocas, cuando la niebla no me permite ver lo que tengo enfrente, si hay\n            alguien m\xE1s ah\xED, ni siquiera lo noto; me encuentro sola, disfrutando del mundo, de mi vida... \xA1mi libertad!. Cada paso est\xE1 lleno\n            de un dolor f\xEDsico que disfruto, me motiva a ir m\xE1s all\xE1, a correr con m\xE1s fuerza.\n            Esa noche, tropec\xE9 con un bulto, muy blando y grande para ser una piedra, adem\xE1s no hab\xEDa raz\xF3n para estar en medio de la\n            pista, incluso escuche alg\xFAn tipo de quejido. Despu\xE9s de mis volteretas en el suelo a causa de tal impacto, regres\xE9 abri\xE9ndome\n            paso entre la niebla y con la mirada hacia abajo tratando de encontrar aquello que hab\xEDa volteado, pero no tuve suerte, di\n            demasiados pasos no pod\xEDa estar tan lejos. As\xED que me dispuse a seguir mi camino, despu\xE9s de todo era una noche cualquiera,\n            no ten\xEDa nada de particular.\n            </p>\n        </article>\n        <img src=\"../fotos/nieve.jpg\" alt=\"Parque\" width=\"350\" height=\"300\">\n        \n     \n</div>\n";
  document.body.appendChild(story);
  var ruta = document.createElement('button');
  ruta.innerHTML = "leer mas...";

  ruta.onmousedown = function () {
    (0, _P.prueba2)();
  };

  document.body.appendChild(ruta);
};

exports.prueba1 = prueba1;