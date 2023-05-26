/* --- EVENTOS Y FUNCIONES DEL HEADER --- */
window.addEventListener("load", function(event) {
  setInterval('cambioDomi()',3000);
});

function cambioDomi() {
  let domi = document.getElementById('domiHeader');
  if (domi.textContent == " Condarco & Juan G. Miller - Paraná") {
    domi.textContent = " General Alvarado 2447 Bis - Paraná";
  } else {
    domi.textContent = " Condarco & Juan G. Miller - Paraná";
  };
}

/* --- EVENTOS Y FUNCIONES DEL MENU --- */
let boton = document.getElementById('btMenu');
// Agregar un evento de clic al botón
boton.addEventListener('click', 
  function funcionMenu() {
    let x = document.getElementById("navegador");
    let i = document.getElementById("icon-menu");

    if (x.className === "nav") {
      x.className += " responsive";
      i.className = "fa-solid fa-xmark";
    } else {
      x.className = "nav";
      i.className = "fa-solid fa-bars";
    }
})

