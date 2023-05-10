export class Experiencia {
    constructor(nombre, puntaje, comentario) {
        (this.nombre = nombre), 
        (this.puntaje = puntaje), 
        (this.comentario = comentario);
    }

    /* METODOS */
    getDivCardExperiencia(idToInsert) {
        /*selecciona el elementro padre*/
        let parent = document.getElementById(idToInsert);
        /*crea un elemento a indexar o inyectar*/
        let div = document.createElement("div");
        div.classList.add('cardExpe');
        
        /*le agreo lo que inyecto*/
        div.innerHTML = `
        <h6>${this.nombre}</h6>
        <div class="comentario">
            <p> ${this.comentario} </p>
            
        </div>
        <div id="puntaje">
            <center>
                <i class="fas fa-star fa-sm" style="color: #e4d507;"></i>
                <i class="fas fa-star fa-sm" style="color: #e4d507;"></i>
                <i class="fas fa-star fa-sm" style="color: #e4d507;"></i>
                <i class="fas fa-star fa-sm" style="color: #e4d507;"></i>
                <i class="fas fa-star fa-sm" style="color: #e4d507;"></i>
                <p> Puntaje: ${this.puntaje} </p>
            </center>
        </div>
        `;
        /* agrego elemento hijo al padre*/
        parent.appendChild(div);
    }
}
