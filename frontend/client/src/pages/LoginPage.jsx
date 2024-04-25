import React, { useState } from 'react';
import '../styles/LoginPage.css'; // Verifica que la ruta sea la correcta

function LoginPage({ onLogin }) {
  // Estados para nombre, apellido y nombre de usuario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [username, setUsername] = useState(''); // Cambiado de email a username
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar la creación de un nuevo usuario
    onLogin();
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
          type="text" // Cambiado de type="email" a type="text"
          placeholder="Nombre de usuario" // Cambiado de "Email" a "Nombre de usuario"
          value={username} // Actualizado a username
          onChange={(e) => setUsername(e.target.value)} // Actualizado a setUsername
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default LoginPage;
