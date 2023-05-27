export class Producto {
    constructor(nombre, marca, precio, presentacion, comentario, imagen) {
        (this.nombre = nombre), 
        (this.marca = marca), 
        (this.precio = precio), 
        (this.presentacion = presentacion), 
        (this.comentario = comentario),
        (this.imagen = imagen);
    }

    /* METODOS */
    getCardProducto(idToInsert) {
        
        /*selecciona el elementro padre*/
        let parent = document.getElementById(idToInsert);
        /*crea un elemento a indexar o inyectar*/
        let div = document.createElement("div");
        div.classList.add('cardProducto');
        
        /*le agreo lo que inyecto*/
        let codigo = `
        <center>
        <img class="foto" src="../media/imagenProductos/${this.imagen}" width="75" alt="${this.nombre}" />
        <h5>${this.nombre}</h5>
        <p class="marca">${this.marca}</p>
        <div class="precio"><span> ${this.precio} </span></div>
        <p class="presentacion">${this.presentacion}</p>
        <p class="comentario">${this.comentario} </p>
        </center>
        `;

        div.innerHTML = codigo;
        /* agrego elemento hijo al padre*/
        parent.appendChild(div);
    }
}
