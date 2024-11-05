let celdaSeleccionada;

function abrirModal(id) {
    celdaSeleccionada = document.getElementById(id);
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function guardarNota() {
    const nota = parseFloat(document.getElementById("notaInput").value);
    if (nota >= 1 && nota <= 10) {
        celdaSeleccionada.innerText = nota;
        cerrarModal();
    } else {
        alert('Por favor, ingresa una nota valida.');
    }
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        cerrarModal();
    }
}
