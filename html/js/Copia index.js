document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Lista de usuarios permitidos
    const users = {
        usuario: '123a',  // Contraseña del usuario "usuario"
        admin: '123a'     // Contraseña del usuario "admin"
    };

    // Verificación de usuario y contraseña
    if (users[username] && users[username] === password) {
        if (username === 'usuario') {
            window.location.href = 'usuario.html'; // Redirigir a la página del usuario
        } else if (username === 'admin') {
            window.location.href = 'admin.html'; // Redirigir a la página del admin
        }
    } else {
        if (!users[username]) {
            alert('El usuario no existe.');
        } else {
            alert('Contraseña incorrecta.');
        }
    }
});
