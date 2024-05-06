import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);  // Llama a la función onSearch con el término actual
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="search-bar">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar productos, servicios..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="navbar-links">
        <Link to="/historial">Historial</Link> {/* Cambiado para apuntar a la ruta de HistorialPage */}
        <Link to="/convocatoria">Convocatorias</Link>
      </div>
    </nav>
  );
};

export default Navbar;
