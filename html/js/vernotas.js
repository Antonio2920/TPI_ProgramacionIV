// Asegúrate de que el usuario haya iniciado sesión y guardar su idusuario
const idusuario = localStorage.getItem('idusuario');  // Asumimos que el idusuario está guardado en el localStorage después de un login exitoso

// Verifica si el usuario está logueado
if (!idusuario) {
    window.location.href = '/login.html';  // Redirige a la página de login si no está logueado
} else {
    // Mostrar las notas cuando el usuario esté logueado
    document.getElementById('tablaNotasContainer').style.display = 'block';

    // Llamada a la API para obtener las notas del usuario
    fetch(`/api/notas/${idusuario}`)
        .then(response => response.json())
        .then(data => {
            const notasBody = document.getElementById('notasBody');
            notasBody.innerHTML = ''; // Limpia la tabla

            // Recorrer las materias y sus notas
            data.materias.forEach(materia => {
                const row = document.createElement('tr');

                const cellMateria = document.createElement('td');
                cellMateria.textContent = materia.NombreMateria;
                row.appendChild(cellMateria);

                // Crea las celdas de notas (solo visualización)
                const fieldNames = ["Informe1", "Informe2", "Nota1", "Informe3", "Informe4", "Nota2", "NotaAnual", "NotaAcreditacion", "NotaRecuperatorio", "NotaDefinitiva"];
                fieldNames.forEach(fieldName => {
                    const cellNota = document.createElement('td');
                    cellNota.textContent = materia[fieldName] || '-'; // Muestra la nota o un guion si no hay nota
                    row.appendChild(cellNota);
                });

                notasBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error al cargar las notas:', error);
        });
}
