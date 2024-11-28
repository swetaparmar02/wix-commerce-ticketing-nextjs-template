/* eslint-disable prettier/prettier */
import React from 'react';

// Mock data for related products
const relatedProduct = [
  {
    id: 1,
    name: 'Product 1',
    image: '../images/download.jpg', // Replace with the actual image URL
    price: '$20.00',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'path_to_image2.jpg', // Replace with the actual image URL
    price: '$25.00',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'path_to_image3.jpg', // Replace with the actual image URL
    price: '$30.00',
  },
  // Add more products as needed
];

// Component to display a single product
const ProductCard: React.FC<{ product: typeof relatedProduct[0] }> = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
      <span className="product-price">{product.price}</span>
    </div>
  </div>
);

// Main Component to display related products
const RelatedProducts: React.FC = () => (
  <div className="related-products">
    <h2>Related Products</h2>
    <div className="product-grid">
      {relatedProduct.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

// Styling (can be replaced with Tailwind classes)
const styles = {
  '.related-products': {
    marginTop: '30px',
  },
  '.product-grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Adjust number of columns as needed
    gap: '20px',
  },
  '.product-card': {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  '.product-image': {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  '.product-info': {
    marginTop: '10px',
  },
  '.product-name': {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  '.product-price': {
    color: '#333',
  },
};

export default RelatedProducts;


