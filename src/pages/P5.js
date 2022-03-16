import { prueba1 } from "./P2";
import imagen1 from "../fotos/acechar.jpg"
export const prueba4 = () =>{
    document.body.innerHTML = "";
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>... Es todoo ...</h2>
            <p class="text-white">
            Esto es lo que haré de ahora en adelante en una noche cualquiera, desplegaré mis alas, volaré entre la niebla, acecharé desde
            los árboles, buscando a aquel que pueda saciar mi hambre, hundiré con gusto mis colmillos en su cuello, para que su tibia
            sangre caliente mi gélido cuerpo y la palidez de mi rostro se borre por un momento con ese líquido escarlata que chorrea desde
            mi boca.
            </p>
        </article>
     
</div>
`
document.body.appendChild(story);
document.body.appendChild(story);
let im = document.createElement("img");
im.src= imagen1
document.body.appendChild(im);
document.body.appendChild(story);
}