import React from 'react';
import '../../styles/ProductGrid.css';

const ProductGrid = ({ searchTerm }) => {
  const products = [
    { id: 1, name: 'Fábrica 1', price: '$160', sold: '360 items sold', rating: 4, isSale: true, discount: '30% OFF' },
    { id: 2, name: 'Fábrica 2', price: '$120', sold: '360 items sold', rating: 3, isSale: true, discount: '10% OFF' },
    { id: 3, name: 'Fábrica 3', price: '$140', sold: '360 items sold', rating: 5 },
    { id: 4, name: 'Fábrica 4', price: '$160', sold: '360 items sold', rating: 4 },
    { id: 5, name: 'Fábrica 5', price: '$100', sold: '360 items sold', rating: 5, isSale: true, discount: '10% OFF' },
    { id: 6, name: 'Fábrica 6', price: '$200', sold: '360 items sold', rating: 4 },
    { id: 7, name: 'Fábrica 7', price: '$150', sold: '350 items sold', rating: 3, isSale: true, discount: '20% OFF' },
    { id: 8, name: 'Fábrica 8', price: '$110', sold: '340 items sold', rating: 4 },
    { id: 9, name: 'Fábrica 9', price: '$130', sold: '330 items sold', rating: 5, isSale: true, discount: '15% OFF' },
    { id: 10, name: 'Fábrica 10', price: '$170', sold: '320 items sold', rating: 4 },
    { id: 11, name: 'Fábrica 11', price: '$180', sold: '310 items sold', rating: 5 },
    { id: 12, name: 'Fábrica 12', price: '$190', sold: '300 items sold', rating: 4 },
    { id: 13, name: 'Fábrica 13', price: '$210', sold: '290 items sold', rating: 3, isSale: true, discount: '5% OFF' },
    { id: 14, name: 'Fábrica 14', price: '$220', sold: '280 items sold', rating: 4, isSale: true, discount: '25% OFF' },
    { id: 15, name: 'Fábrica 15', price: '$230', sold: '270 items sold', rating: 5, isSale: true, discount: '35% OFF' },
    { id: 16, name: 'Fábrica 16', price: '$240', sold: '260 items sold', rating: 3 },
    { id: 17, name: 'Fábrica 17', price: '$250', sold: '250 items sold', rating: 4 },
    { id: 18, name: 'Fábrica 18', price: '$260', sold: '240 items sold', rating: 3, isSale: true, discount: '10% OFF' },
    { id: 19, name: 'Fábrica 19', price: '$270', sold: '230 items sold', rating: 5 },
    { id: 20, name: 'Fábrica 20', price: '$280', sold: '220 items sold', rating: 4, isSale: true, discount: '20% OFF' }
  ];

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
          <div className="product-image">
            {product.isSale && <span className="product-sale">{product.discount}</span>}
          </div>
          <div className="product-details">
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <p classám="product-sold">{product.sold}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
