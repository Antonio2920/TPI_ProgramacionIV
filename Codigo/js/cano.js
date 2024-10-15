let celdaSeleccionada;

function abrirModal(id) {
    celdaSeleccionada = document.getElementById(id);
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function guardarNota() {
    const nota = document.getElementById("notaInput").value;
    celdaSeleccionada.innerText = nota;
    cerrarModal();
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
}
