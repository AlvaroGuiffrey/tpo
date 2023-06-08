import { Producto } from "./models/Producto.js";
import productos from "../../db/productos.json" assert { type: "json" };

import { parent } from "./config/configProd.js";

/* PRODUCTOS */
const printDatos = (datos, parent) => {
    datos.forEach((produ) => produ.getCardProducto(parent));
};

const cargarDatos = () => {
    let datosObjeto = productos.map(
        (produ) => new Producto(
            produ.nombre, 
            produ.marca, 
            produ.precio,
            produ.stock,
            produ.presentacion, 
            produ.comentario,
            produ.imagen,
            produ.linea
            ),
    );
    console.log(datosObjeto);
    return datosObjeto;
}

let datos = cargarDatos();

printDatos(datos, parent);