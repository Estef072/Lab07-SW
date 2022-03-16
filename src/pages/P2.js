import { prueba2 } from "./P3";

export const prueba1 = () =>{
document.body.innerHTML = "";
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <p class="text-white">
            Amo correr en el parque, sobre todo en estas épocas, cuando la niebla no me permite ver lo que tengo enfrente, si hay
            alguien más ahí, ni siquiera lo noto; me encuentro sola, disfrutando del mundo, de mi vida... ¡mi libertad!. Cada paso está lleno
            de un dolor físico que disfruto, me motiva a ir más allá, a correr con más fuerza.
            Esa noche, tropecé con un bulto, muy blando y grande para ser una piedra, además no había razón para estar en medio de la
            pista, incluso escuche algún tipo de quejido. Después de mis volteretas en el suelo a causa de tal impacto, regresé abriéndome
            paso entre la niebla y con la mirada hacia abajo tratando de encontrar aquello que había volteado, pero no tuve suerte, di
            demasiados pasos no podía estar tan lejos. Así que me dispuse a seguir mi camino, después de todo era una noche cualquiera,
            no tenía nada de particular.
            </p>
        </article>
        <img src="../fotos/nieve.jpg" alt="Parque" width="350" height="300">
        
     
</div>
`

document.body.appendChild(story);
let ruta = document.createElement('button');
ruta.innerHTML = "leer mas...";
ruta.onmousedown =function(){prueba2 ()}
document.body.appendChild(ruta);

}
