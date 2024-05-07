import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importar Link desde react-router-dom
import axios from 'axios';
import '../styles/LoginPage.css'; // Verifica que la ruta sea la correcta

function LoginPage({ onLogin }) {
    // Estados para nombre de usuario y contraseña
    const [username, setUsername] = useState('');
    const [password_hash, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!isFormComplete()) {
            setErrorMessage('Por favor, complete todos los campos antes de ingresar.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/jwtAuth/login', {
                username,
                password_hash
            });
            // Assuming the API returns some data
            const user = response.data.username;
            console.log(user); 
            localStorage.setItem("usertype",user)// You can handle the response data here
            onLogin(username); // Assuming this function logs the user in
        } catch (error) {
            console.error('Error occurred:', error);
            setErrorMessage('Error de autenticación. Por favor, verifica tus credenciales.');
        }
    };

    // Función para comprobar si todos los campos están llenos
    const isFormComplete = () => {
        return username.trim() !== '' && password_hash.trim() !== '';
    };

    return (
        <div className="register-container">
            <div className="logo">LP Acquisitions</div> {/* Reemplaza esto por tu logo */}
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
                    value={password_hash}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Ingresar</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            
        </div>
    );
}

export default LoginPage;
