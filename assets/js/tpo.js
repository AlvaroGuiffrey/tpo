/* --- FUNCIONES DEL MENU --- */
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
}

/* --- FUNCIONES DE PAGINA NOSOTROS --- */
function verContactoNosotros(selector1, selector2, selector3) {
  let contacto = document.querySelector(selector3);
  contacto.hidden = contacto.hidden ? false : true;
  
  let b = document.querySelector(selector1);
  let i = document.querySelector(selector2);

  if (b.className === "contacto") {
    b.className += " act";
    b.setAttribute('title', 'Ocultar datos');
    i.className = "fa-regular fa-eye-slash";
    
  } else {
    b.className = "contacto";
    b.setAttribute('title', 'Mostrar datos');
    i.className = "fa-regular fa-eye";
  }
}
