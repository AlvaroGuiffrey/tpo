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