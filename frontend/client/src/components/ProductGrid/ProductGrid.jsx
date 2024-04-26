import React from 'react';
import '../../styles/ProductGrid.css'; // Asegúrate de que la ruta refleja la ubicación real del archivo CSS

const ProductGrid = () => {
  // Esta es una lista de ejemplo con seis productos
  const products = [
    { id: 1, name: 'Fábrica 1', price: '$160', sold: '360 items sold', rating: 4, isSale: true, discount: '30% OFF' },
    { id: 2, name: 'Fábrica 2', price: '$120', sold: '360 items sold', rating: 3, isSale: true, discount: '10% OFF' },
    { id: 3, name: 'Fábrica 3', price: '$140', sold: '360 items sold', rating: 5 },
    { id: 4, name: 'Fábrica 4', price: '$160', sold: '360 items sold', rating: 4 },
    { id: 5, name: 'Fábrica 5', price: '$100', sold: '360 items sold', rating: 5, isSale: true, discount: '10% OFF' },
    { id: 6, name: 'Fábrica 6', price: '$200', sold: '360 items sold', rating: 4 }
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {/* Imagen del producto */}
            {product.isSale && <span className="product-sale">{product.discount}</span>}
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-sold">{product.sold}</p>
            {/* Aquí iría el componente para las estrellas de rating */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
