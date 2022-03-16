import { prueba1 } from "./P2";
import imagen1 from "../fotos/noche.jpg"

export const prueba = () =>{
    document.body.innerHTML = "";
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>Principio...</h2>
            <p class="text-white">
            Era una noche como cualquier otra, había dejado de llover por unos minutos y aproveché para salir a correr, me gusta mucho
            mojar los zapatos deportivos para que mis pies se vuelvan más pesados, y que poco a poco mis extremidades se vayan
            congelando, así tengo que moverme cada vez más fuerte y más rápido para evitar la hipotermia. También aprecio mucho ese
            viento tan frio que parece traer consigo cristales de hielo los cuales desgarran mis fosas nasales y mi garganta, haciendo peso
            en mis pulmones cada vez que respiro, siento que mi pecho explota y me falta el aire. Así cada gota de sudor significa mayor
            esfuerzo.
            </p>
        </article>

</div>

`

document.body.appendChild(story);
let im = document.createElement("img");
im.src= imagen1
document.body.appendChild(im);
let ruta = document.createElement('button');
ruta.innerHTML = "Continuar historia";
ruta.onmousedown =function(){prueba1 ()}
document.body.appendChild(ruta);
}