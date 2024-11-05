document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const curso = document.getElementById('curso').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Envía los datos al servidor
    fetch('http://localhost:3000/api/usuarios', {  // Cambiar esta URL si no es correcta
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, curso, username, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        alert(data.message);
         document.getElementById('nombre').value = '';
         document.getElementById('curso').value = '';
         document.getElementById('username').value = '';
         document.getElementById('password').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
