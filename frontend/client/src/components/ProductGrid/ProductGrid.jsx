import React, { useState, useEffect } from 'react';
import '../../styles/ProductGrid.css';

const ProductGrid = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/dashApis/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const filteredProducts = products.filter(product =>
    normalizeString(product.name).includes(normalizeString(searchTerm))
  );

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-category">{product.category}</p>
            <p className="product-ret_whol">{product.ret_whol}</p>
            <p className="product-rating">{product.rating}</p>
            <p className="product-brand">{product.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;