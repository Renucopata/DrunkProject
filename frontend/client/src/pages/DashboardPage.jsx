import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductGrid from '../components/ProductGrid/ProductGrid';
import '../styles/DashboardPage.css';

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="dashboard-page">
      <Navbar onSearch={handleSearch} />
      <div className="dashboard-main">
        <Sidebar />
        <ProductGrid searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default DashboardPage;
