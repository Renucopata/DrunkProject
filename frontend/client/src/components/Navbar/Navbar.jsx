import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
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
        {/* Utiliza el componente Link para la navegación */}
        <Link to="/profile">Perfil</Link>
        <Link to="/convocatoria">Convocatorias</Link> {/* Asegúrate de que la ruta coincida con la definida en tus Routes */}
      </div>
    </nav>
  );
};

export default Navbar;
