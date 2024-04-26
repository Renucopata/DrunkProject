import React from 'react';
import Navbar from '../components/Navbar/Navbar'; // Asume que tienes un archivo Navbar.jsx
import Sidebar from '../components/Sidebar/Sidebar'; // Asume que tienes un archivo Sidebar.jsx
import ProductGrid from '../components/ProductGrid/ProductGrid'; // Asume que tienes un archivo ProductGrid.jsx
import '../styles/DashboardPage.css'; // El CSS para DashboardPage

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar />
        <ProductGrid />
      </div>
    </div>
  );
};

export default DashboardPage;
