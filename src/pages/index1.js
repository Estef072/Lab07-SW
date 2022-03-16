import {prueba} from "./P1";
export const inicio = () =>{
let contenedor = document.getElementById("boddy-pagina");


//crear imagen principal

let dato = document.createElement('ul');
let p1 = document.createElement('li');
let ruta = document.createElement('button');
ruta.innerHTML = "Empezar historia";
ruta.onmousedown =function(){prueba ()}
dato.appendChild(ruta);

dato.appendChild(p1);

contenedor.appendChild(dato);
}