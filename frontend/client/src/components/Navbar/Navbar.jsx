import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../../styles/Navbar.css'; // Asegúrate de que la ruta refleja la ubicación real del archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div> {/* Reemplaza esto con tu componente de logo o imagen */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar productos, servicios..." />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
      <div className="navbar-links">
        {/* Agrega enlaces adicionales o componentes de perfil de usuario aquí si es necesario */}
        <a href="/profile">Perfil</a>
        <a href="/settings">Configuración</a>
      </div>
    </nav>
  );
};

export default Navbar;
