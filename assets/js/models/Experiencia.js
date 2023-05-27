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
        let codigo = `
        <h6>${this.nombre}</h6>
        <div class="comentario">
            <p> ${this.comentario} </p>
        </div>
        <div id="puntaje">
            <center>`;
        codigo += this.getEstrellas();   
        codigo += `
                <p> Puntaje: ${this.puntaje} </p>
            </center>
        </div>
        `;

        div.innerHTML = codigo;
        /* agrego elemento hijo al padre*/
        parent.appendChild(div);
    }

    getEstrellas() {
        let codigoEst = '';
        for (let index = 0; index < this.puntaje; index++) {
            codigoEst += '<i class="fas fa-star fa-sm" style="color: #e4d507;"></i>';
        }
        return codigoEst;
    }
}
