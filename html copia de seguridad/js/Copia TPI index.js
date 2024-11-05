document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = data.redirectUrl;
        } else {
            if (data.error === 'no_user') {
                alert('El usuario no existe.');
            } else if (data.error === 'wrong_password') {
                alert('Contraseña incorrecta.');
            }
        }
    })
    .catch(error => {
        console.error('Error en el inicio de sesión:', error);
        alert('Ocurrió un error al intentar iniciar sesión.');
    });
});
