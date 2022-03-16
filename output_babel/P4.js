"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba3 = void 0;

var prueba3 = function prueba3() {
  document.body.innerHTML = "";
  var story = document.createElement('story');
  story.innerHTML = "\n<div class=\"container\">\n        <article>\n            <h2>Es casi lo ultimo...</h2>\n            <p class=\"text-white\">\n\n            Al despertar, me sent\xEDa mejor que nunca, grande, fuerte, \xA1poderosa!, las sonrisas me sal\xEDan desde dentro, una felicidad infinita\n            me invad\xEDa, el dolor era ahora adrenalina... me invitaba a volar, a volar m\xE1s r\xE1pido que el viento...me incorpor\xE9 de un salto, corr\xED\n            a trav\xE9s de la casa, atraves\xE9 la ventana... \xA1nunca hab\xEDa sentido tal libertad!, pude ver la niebla partirse en dos, y volver a unirse\n            detr\xE1s de mis alas... adoro que el viento frio haga escarcha en ellas, sus quemaduras me obligan a aletear m\xE1s r\xE1pido,\n            alcanzando tanta velocidad, que mis colmillos generan silbidos...\n            </p>\n        </article>\n        <img src=\"../fotos/volar.jpg\" alt=\"Parque\" width=\"350\" height=\"300\">\n        <ul>\n            <li>\n                <a href=\"parte4.html\">Ya casi acaba</a>\n            </li>\n        </ul>\n     \n</div>\n";
  document.body.appendChild(story);
  document.body.appendChild(story);
  document.body.appendChild(story);
  var ruta = document.createElement('button');
  ruta.innerHTML = "Ya casi acaba...";

  ruta.onmousedown = function () {
    prueba4();
  };

  document.body.appendChild(ruta);
};

exports.prueba3 = prueba3;