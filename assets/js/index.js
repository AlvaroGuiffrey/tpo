import { Experiencia } from "./models/Experiencia.js";
import experiancias from "../../db/experiencias.json" assert { type: "json" };
import { idValueInput, parent } from "./config/config.js";

const printDatos = (datos, parent) => {
    datos.forEach((expe) => expe.getDivCardExperiencia(parent));
};

const cargarDatos = () => {
    let datosObjeto = experiancias.map(
        (expe) => new Experiencia(expe.nombre, expe.puntaje, expe.comentario),
    );
    console.log(datosObjeto);
    return datosObjeto;
}

let datos = cargarDatos();

printDatos(datos, parent);





