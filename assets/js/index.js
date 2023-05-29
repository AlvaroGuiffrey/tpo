import { Experiencia } from "./models/Experiencia.js";
import experiancias from "../../db/experiencias.json" assert { type: "json" };
import { idValueInput, parent } from "./config/config.js";

/* PROMO */
const botonReg = document.querySelector("#bt-reg")
botonReg.addEventListener("click", function() {
  const formulario = document.querySelector("form");
  formulario.reset();
  document.getElementById('formReg').style.display='block';
});

const botonClose = document.querySelector("#bt-close")
botonClose.addEventListener("click", function() {
  document.getElementById('formReg').style.display='none';
});

/* REGISTRO PROMO EN SheetDB*/
/* La verificación de los datos se hace con JavaScript */
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  let valido = false;
  document.getElementById('mensError').style.display='none';
  
  let exp_nombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
  let exp_celular = /^[ 0-9_-]+$/;
  let exp_mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  
  let fnombre = document.getElementById("nombre");
  fnombre.setAttribute('style', 'border: 0');
  if (!exp_nombre.test(fnombre.value) || fnombre.length < 4){
    valido = false;
    fnombre.setAttribute('style', 'border: 2px solid red');
  } else {
    valido = true;
  }
  
  let fcelular = document.getElementById("celular");
  fcelular.setAttribute('style', 'border: 0');
  if (!exp_celular.test(fcelular.value) || fcelular.length < 10){
    valido = false;
    fcelular.setAttribute('style', 'border: 2px solid red');
  } else {
    valido = true;
  }

  let fmail = document.getElementById("mail");
  fmail.setAttribute('style', 'border: 0');
  if (!exp_mail.test(fmail.value) || fmail.length < 10){
    valido = false;
    fmail.setAttribute('style', 'border: 2px solid red');
  } else {
    valido = true;
  }

  let fmascota = document.getElementById("mascota");
  fmascota.setAttribute('style', 'border: 0');
  if (!exp_nombre.test(fmascota.value) || fmascota.length < 3){
    valido = false;
    fmascota.setAttribute('style', 'border: 2px solid red');
  } else {
    valido = true;
  }

  if (valido == true) {
    const form = document.querySelector("form");
  
    let dataForm = new FormData(form);

    dataForm.append("fecha", new Date().toString());
    dataForm.append("id", "INCREMENT");

    //console.log(dataForm);

    const URL = "https://sheetdb.io/api/v1/mnulmpy28bm64";

    await fetch(URL, {
        method: "POST",
        body: dataForm,
    });

    document.getElementById('formReg').style.display='none';
    document.getElementById('mensaje').style.display='flex';
  } else {
    document.getElementById('mensError').style.display='flex';
    document.getElementById('textoError').innerText = "Datos ingresados con error."
  }
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



