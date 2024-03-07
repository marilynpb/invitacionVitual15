function toggleMap() {
    var mapa = document.getElementById("mapa");
    var boton = document.getElementById("toggleMap");

    if (mapa.style.display === "none") {
        mapa.style.display = "block";
        boton.textContent = "Ocultar mapa";
    } else {
        mapa.style.display = "none";
        boton.textContent = "Ver mapa";
    }
}

