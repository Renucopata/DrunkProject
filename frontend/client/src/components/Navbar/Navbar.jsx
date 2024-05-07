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
  console.log(localStorage.getItem("usertype"));
  return (
    <nav className="navbar">
      <div className="logo">LP Acquisitions</div>
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
        {
          localStorage.getItem("usertype") === "admin" ? (
            <>
            <Link to="/historial">Historial</Link>
        <Link to="/convocatoria">Convocatorias</Link>
            </>
            
          ):(<>
          <Link to="/convocatoria">Convocatorias</Link>
          </>

          )


        }
        
      </div>
    </nav>
  );
};

export default Navbar;
