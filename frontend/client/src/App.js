import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ConvocatoriaPage from './pages/ConvocatoriaPage';
import HistorialPage from './pages/HistorialPage'; // Importa aquí tu HistorialPage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : <Navigate replace to="/" />} />
          <Route path="/historial" element={isLoggedIn ? <HistorialPage /> : <Navigate replace to="/login" />} /> {/* Ruta para HistorialPage con protección de autenticación */}
          <Route path="/convocatoria" element={isLoggedIn ? <ConvocatoriaPage /> : <Navigate replace to="/login" />} /> {/* Protección de autenticación también añadida aquí */}
          <Route path="/" element={isLoggedIn ? <DashboardPage /> : <Navigate replace to="/login" />} />
          <Route path="/registro" element={!isLoggedIn ? <RegisterPage /> : <Navigate replace to="/" />} />
          {/* Agrega aquí otras rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
