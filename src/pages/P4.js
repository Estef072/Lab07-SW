export const prueba3 = () =>{
    document.body.innerHTML = "";
const story = document.createElement('story');
story.innerHTML = `
<div class="container">
        <article>
            <h2>Es casi lo ultimo...</h2>
            <p class="text-white">

            Al despertar, me sentía mejor que nunca, grande, fuerte, ¡poderosa!, las sonrisas me salían desde dentro, una felicidad infinita
            me invadía, el dolor era ahora adrenalina... me invitaba a volar, a volar más rápido que el viento...me incorporé de un salto, corrí
            a través de la casa, atravesé la ventana... ¡nunca había sentido tal libertad!, pude ver la niebla partirse en dos, y volver a unirse
            detrás de mis alas... adoro que el viento frio haga escarcha en ellas, sus quemaduras me obligan a aletear más rápido,
            alcanzando tanta velocidad, que mis colmillos generan silbidos...
            </p>
        </article>
        <img src="../fotos/volar.jpg" alt="Parque" width="350" height="300">
        <ul>
            <li>
                <a href="parte4.html">Ya casi acaba</a>
            </li>
        </ul>
     
</div>
`
document.body.appendChild(story);
document.body.appendChild(story);
document.body.appendChild(story);
let ruta = document.createElement('button');
ruta.innerHTML = "Ya casi acaba...";
ruta.onmousedown =function(){prueba4()}
document.body.appendChild(ruta);

}