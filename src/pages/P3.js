import { prueba3 } from "./P4"; 
import imagen1 from "../fotos/pies.jpg"
export const prueba2 = () =>{
document.body.innerHTML = "";
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <p class="text-white">
            Al menos así pensaba yo, hasta que me di la vuelta y vi ese par de pies flotando a la altura de mis ojos...no tuve tiempo ni de
            alzar mi cabeza, pues una pequeña niña dueña de aquellos pies, se me enrolló en el cuello como una serpiente cualquiera y
            perdí la conciencia.
            Al volver en mí, regresé a casa pensando que esta vez me había excedido al forzar tanto a mi cuerpo, llegando hasta el punto de
            sufrir alucinaciones, pero el espejo me confirmó que aquello fue real, tenía marcas de presión en mi cuello, y dos pequeños
            agujeros que chorreaban sangre. Mi rostro estaba muy pálido, y una extraña sensación de ardor me corría por la venas, los
            latidos de mi corazón se fueron distanciando, hasta que de súbito se detuvo y caí al suelo. Un dolor intenso me carcomía desde
            dentro, y me obligaba a convulsionar de manera tan brusca que oía crujir todos los huesos de mi cuerpo. Fue así por un tiempo y
            luego perdí nuevamente la consciencia.
            </p>
        </article>
      
    

</div>
`

document.body.appendChild(story);
let im = document.createElement("img");
im.src= imagen1
document.body.appendChild(im);
document.body.appendChild(story);
let ruta = document.createElement('button');
ruta.innerHTML = "mas...";
ruta.onmousedown =function(){prueba3()}
document.body.appendChild(ruta);

}