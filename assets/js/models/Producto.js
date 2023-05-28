export class Producto {
    constructor(nombre, marca, precio, stock, presentacion, comentario, imagen, linea) {
        (this.nombre = nombre), 
        (this.marca = marca), 
        (this.precio = precio), 
        (this.stock = stock),
        (this.presentacion = presentacion), 
        (this.comentario = comentario),
        (this.imagen = imagen),
        (this.linea = linea);
    }

    /* METODOS */
    getCardProducto(idToInsert) {
        
        /*selecciona el elementro padre*/
        let parent = document.getElementById(idToInsert);
        /*crea un elemento a indexar o inyectar*/
        let div = document.createElement("div");
        div.classList.add('cardProducto');
        
        /*le agreo lo que inyecto*/
        let codigo = ``;

        if (this.stock == 0) {
            codigo += `
            <span class="stock">SIN STOCK</span>
            `;
        }
        
        if (this.linea == "Premium") {
            codigo += `
            <span class="linea-pre">${this.linea}</span>
            `;    
        } else if (this.linea == "Económica") {
            codigo += `
            <span class="linea-eco">${this.linea}</span>
            `;
        }
        
        codigo += `
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
