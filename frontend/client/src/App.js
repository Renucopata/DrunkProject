import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ConvocatoriaPage from './pages/ConvocatoriaPage'; // Importación del componente ConvocatoriaPage

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
          <Route path="/convocatoria" element={<ConvocatoriaPage />} /> {/* Asegúrate de que el path coincide con el nombre del archivo */}
          <Route path="/" element={isLoggedIn ? <DashboardPage /> : <Navigate replace to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
