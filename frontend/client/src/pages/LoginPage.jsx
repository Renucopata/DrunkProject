import React, { useState } from 'react';
import axios from 'axios';
import '../styles/LoginPage.css'; // Verifica que la ruta sea la correcta

function LoginPage({ onLogin }) {
  // Estados para nombre, apellido, nombre de usuario y para el mensaje
  const [first_name, setNombre] = useState('');
  const [last_name, setApellido] = useState('');
  const [username, setUsername] = useState('');
  const [password_hash, setPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 7000); // El mensaje se ocultará después de 7 segundos
    } else {
      try {
        const response = await axios.post('http://localhost:3001/api/jwtAuth/register', {
          first_name,
          last_name,
          username,
          password_hash
        });
        // Assuming the API returns some data
        console.log(response.data); // You can handle the response data here
        onLogin(); // Assuming this function logs the user in
      } catch (error) {
        console.error('Error occurred:', error);
        // Handle error, maybe show a message to the user
      }
    }
  };

  // Función para comprobar si todos los campos están llenos
  const isFormComplete = () => {
    return first_name && last_name && username && password_hash;
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
            value={first_name}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="Apellido"
            value={last_name}
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
          value={password_hash}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {showMessage && <p style={{ color: 'red' }}>Por favor, llene todos los campos antes de registrar.</p>}
    </div>
  );
}

export default LoginPage;