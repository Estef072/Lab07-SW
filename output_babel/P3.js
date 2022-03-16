"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prueba2 = void 0;

var prueba2 = function prueba2() {
  document.body.innerHTML = "";
  var story = document.createElement('story');
  story.innerHTML = "\n<div class=\"container\">\n        <article>\n            <p class=\"text-white\">\n            Al menos as\xED pensaba yo, hasta que me di la vuelta y vi ese par de pies flotando a la altura de mis ojos...no tuve tiempo ni de\n            alzar mi cabeza, pues una peque\xF1a ni\xF1a due\xF1a de aquellos pies, se me enroll\xF3 en el cuello como una serpiente cualquiera y\n            perd\xED la conciencia.\n            Al volver en m\xED, regres\xE9 a casa pensando que esta vez me hab\xEDa excedido al forzar tanto a mi cuerpo, llegando hasta el punto de\n            sufrir alucinaciones, pero el espejo me confirm\xF3 que aquello fue real, ten\xEDa marcas de presi\xF3n en mi cuello, y dos peque\xF1os\n            agujeros que chorreaban sangre. Mi rostro estaba muy p\xE1lido, y una extra\xF1a sensaci\xF3n de ardor me corr\xEDa por la venas, los\n            latidos de mi coraz\xF3n se fueron distanciando, hasta que de s\xFAbito se detuvo y ca\xED al suelo. Un dolor intenso me carcom\xEDa desde\n            dentro, y me obligaba a convulsionar de manera tan brusca que o\xEDa crujir todos los huesos de mi cuerpo. Fue as\xED por un tiempo y\n            luego perd\xED nuevamente la consciencia.\n            </p>\n        </article>\n        <img src=\"../fotos/pies.jpg\" alt=\"Pies flotando\" width=\"350\" height=\"300\">\n    \n\n</div>\n";
  document.body.appendChild(story);
  document.body.appendChild(story);
  var ruta = document.createElement('button');
  ruta.innerHTML = "mas...";

  ruta.onmousedown = function () {
    prueba3();
  };

  document.body.appendChild(ruta);
};

exports.prueba2 = prueba2;