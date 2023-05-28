import { Experiencia } from "./models/Experiencia.js";
import experiancias from "../../db/experiencias.json" assert { type: "json" };
import { idValueInput, parent } from "./config/config.js";

/* PROMO */
const botonReg = document.querySelector("#bt-reg")
botonReg.addEventListener("click", function() {
  document.getElementById('formReg').style.display='block';
});

const botonClose = document.querySelector("#bt-close")
botonClose.addEventListener("click", function() {
  document.getElementById('formReg').style.display='none';
});

/* REGISTRO PROMO EN SheetDB*/
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  let dataForm = new FormData(form);

  dataForm.append("fecha", new Date().toString());
  dataForm.append("id", "INCREMENT");

  console.log(dataForm);

  const URL = "https://sheetdb.io/api/v1/mnulmpy28bm64";

  await fetch(URL, {
      method: "POST",
      body: dataForm,
  });

  alert("¡Gracias por inscribirte a la PROMO! 😎");
  document.getElementById('formReg').style.display='none';
 
});

/* EXPERIENCIAS */
const printDatos = (datos, parent) => {
    datos.forEach((expe) => expe.getDivCardExperiencia(parent));
};

const cargarDatos = () => {  
    let datosObjeto = experiancias.map(
        (expe) => new Experiencia(expe.nombre, expe.puntaje, expe.comentario),
    );
    return datosObjeto;
  }

let datos = cargarDatos();

printDatos(datos, parent);

/* CARRUSEL */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1};    

  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 3000); 
}



