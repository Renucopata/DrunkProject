import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import '../styles/LoginPage.css'; // Verifica que la ruta sea la correcta

function LoginPage({ onLogin }) {
    // Estados para nombre de usuario y contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!isFormComplete()) {
            setErrorMessage('Por favor, complete todos los campos antes de ingresar.');
            return;
        }
        // Realizar la lógica de autenticación aquí
        // Puedes llamar a una función `login` que maneje la autenticación en otro archivo
        // Pasar el nombre de usuario y contraseña como parámetros
        onLogin(username, password);
    };

    // Función para comprobar si todos los campos están llenos
    const isFormComplete = () => {
        return username.trim() !== '' && password.trim() !== '';
    };

    return (
        <div className="register-container">
            <div className="logo">Logo</div> {/* Reemplaza esto por tu logo */}
            <h1>Ingresa tus datos</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Ingresar</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
        </div>
    );
}

export default LoginPage;