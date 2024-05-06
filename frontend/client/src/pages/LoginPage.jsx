import React, { useState, useEffect } from 'react';
import '../styles/LoginPage.css'; // Verifica que la ruta sea la correcta

function LoginPage({ onLogin }) {
  // Estados para nombre, apellido, nombre de usuario y para el mensaje
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 7000); // El mensaje se ocultará después de 7 segundos
    } else {
      onLogin();
    }
  };

  // Función para comprobar si todos los campos están llenos
  const isFormComplete = () => {
    return nombre && apellido && username && password;
  };

  return (
    <div className="register-container">
      <div className="logo">Logo</div> {/* Reemplaza esto por tu logo */}
      <h1>Ingresa tus datos</h1>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      {showMessage && <p style={{ color: 'red' }}>Por favor, llene todos los campos antes de registrar.</p>}
    </div>
  );
}

export default LoginPage;
