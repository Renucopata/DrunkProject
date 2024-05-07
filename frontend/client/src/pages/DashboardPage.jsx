import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import '../styles/DashboardPage.css';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

 const handleSearch = (term) => {
    setSearchTerm(term);
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
//console.log(localStorage.getItem("username"));
  return (
    <div className="dashboard-page">
      <button onClick={handleLogout}>Logout</button>
      { localStorage.getItem("usertype") === "admin" ?(
        <>
        <button onClick={handleRegister}>Crear usuario</button>
        </>
      ):(<>
      </>)

      }
      <Navbar onSearch={handleSearch} />
      <div className="dashboard-main">
        <Sidebar />
        <ProductGrid searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default DashboardPage;
