import React, { useState, useEffect } from 'react';
import '../styles/LoginPage.css';
import {Link} from "react-router-dom"; // Verifica que la ruta sea la correcta

function RegisterPage({ onRegistration }) {
    // Estados para nombre, apellido, nombre de usuario y para el mensaje
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!isFormComplete()) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 7000); // El mensaje se ocultará después de 7 segundos
        } else {
            onRegistration();
        }
    };

    // Función para comprobar si todos los campos están llenos
    const isFormComplete = () => {
        return nombre && apellido && username && password;
    };

    return (
        <div className="register-container">
            <div className="logo">Logo</div>
            {/* Reemplaza esto por tu logo */}
            <h1>Ingresa tus datos</h1>
            <form onSubmit={handleRegistration}>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Registrarse</button>
            </form>
            {showMessage && <p style={{color: 'red'}}>Por favor, llene todos los campos antes de registrar.</p>}
            <p>¿Ya tienes una cuenta? <Link to="/login">Entra aquí</Link></p>
        </div>
    );
}

export default RegisterPage;
