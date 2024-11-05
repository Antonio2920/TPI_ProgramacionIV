document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Envía los datos al servidor para la autenticación
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            if (data.role === 'admin') {
                window.location.href = 'html/sesion.html'; // Redirigir a la página del admin
            } else {
                window.location.href = 'html/sesionusuario.html'; // Redirigir a la página del usuario
            }
        }
    })
    .catch(error => {
        alert(error.message);
    });
});
