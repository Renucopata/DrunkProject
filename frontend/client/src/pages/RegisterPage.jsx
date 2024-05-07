import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';
import '../styles/LoginPage.css';

function RegisterPage({ onRegistration }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [passwordHash, setPasswordHash] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 7000);
    } else {
      try {
        const response = await axios.post('http://localhost:3001/api/jwtAuth/register', {
          first_name: firstName,
          last_name: lastName,
          username,
          password_hash: passwordHash,
        });
        console.log(response.data);
        setSuccessMessage('Registro exitoso. Serás redirigido al inicio de sesión.');
        setTimeout(() => {
          setSuccessMessage('');
          navigate('/login'); // Use navigate instead of history.push
        }, 3000);
      } catch (error) {
        console.error('Error occurred:', error);
      }
    }
  };

  const isFormComplete = () => {
    return firstName && lastName && username && passwordHash;
  };

  return (
    <div className="register-container">
      <div className="logo">LP Acquisitions</div>
      <h1>Ingresa los datos</h1>
      <form onSubmit={handleRegistration}>
        <div>
          <input type="text" placeholder="Nombre" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Apellido" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} />
        <button type="submit">Registrar usuario</button>
      </form>
      {showMessage && <p style={{ color: 'red' }}>Por favor, llene todos los campos antes de registrar.</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <p>
        <Link to="/">Volver</Link>
      </p>
    </div>
  );
}

export default RegisterPage;