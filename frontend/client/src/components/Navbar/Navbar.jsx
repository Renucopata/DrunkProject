import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);  // Llama a la función onSearch con el término actual
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.clear();
    // Redirect to login page
    window.location.replace("/login");
    window.location.reload();
    
  };
  const handleRegister = () => {
    // Redirect to login page
    navigate("/registro");
    
    
  };
  console.log(localStorage.getItem("usertype"));
  return (
    <nav className="navbar">
      <div className="logo">LP Acquisitions</div>
      <div className="search-bar">
      <button onClick={handleLogout}>Logout</button>
      { localStorage.getItem("usertype") === "admin" ?(
        <>
        <button onClick={handleRegister}>Crear usuario</button>
        </>
      ):(<>
      </>)

      }
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
