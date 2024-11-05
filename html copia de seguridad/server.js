const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;

// Configura el servidor para leer JSON
app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde el directorio 'html'
app.use(express.static(path.join(__dirname)));

// Configura la conexión a la base de datos
const cone = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '338925antonio',
    database: 'mydb'
});

cone.connect((err) => {
    if (err) {
        console.error("Error al conectar:", err);
        return;
    }
    console.log("Conexión Exitosa");
});

// Ruta para agregar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
    const { curso, nombre, username, password } = req.body;
    const query = "INSERT INTO usuarios (id_Cursodivision, NombreyApellido, Usuarios, Contraseña, Admin) VALUES (?, ?, ?, ?, 0)";
    const values = [curso, nombre, username, password];

    cone.query(query, values, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Error al insertar usuario" });
        }
        res.json({ message: "Alumno ingresado correctamente" });
    });
});

// Ruta para autenticar un usuario
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Consulta para verificar las credenciales
    const query = "SELECT * FROM usuarios WHERE Usuarios = ? AND Contraseña = ?";
    cone.query(query, [username, password], (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Error al verificar las credenciales" });
        }

        // Si se encuentra un usuario con las credenciales proporcionadas
        if (results.length > 0) {
            res.json({ success: true, role: results[0].Admin ? 'admin' : 'usuario' });
        } else {
            res.status(401).json({ success: false, message: "Credenciales incorrectas" });
        }
    });
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${3000}`);
});
