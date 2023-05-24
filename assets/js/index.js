import { Experiencia } from "./models/Experiencia.js";
import experiancias from "../../db/experiencias.json" assert { type: "json" };
import { idValueInput, parent } from "./config/config.js";

/* EXPERIENCIAS */
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

/* CARRUSEL */
let slideIndex = 0;
    showSlides();
    let x = 1;
    console.log(x);
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
     
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1};    
      
      slides[slideIndex-1].style.display = "block";  
      
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }



