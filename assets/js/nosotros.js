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
  
  