import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../pages/Pages.css';
import './Collections.css';

const Collections = () => {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      name: "Vintage Solitaire Diamond Ring",
      price: 2499.99,
      image: "/images/engaed.jpeg",
      description: "1.5 carat vintage-style engagement ring with side stones",
      category: "Engagement",
      inStock: true
    },
    {
      id: 2,
      name: "Classic Wedding Band",
      price: 999.99,
      image: "/images/nice (1).jpeg",
      description: "14k white gold comfort-fit wedding band",
      category: "Wedding",
      inStock: true
    },
    {
      id: 3,
      name: "Art Deco Diamond Ring",
      price: 1899.99,
      image: "/images/nice (2).jpeg",
      description: "Vintage-inspired art deco ring with milgrain details",
      category: "Vintage",
      inStock: false
    },
    {
      id: 4,
      name: "Modern Diamond Cluster",
      price: 3299.99,
      image: "/images/Wedding Real Diamond Ring.jpeg",
      description: "Contemporary cluster design with brilliant cut diamonds",
      category: "Modern",
      inStock: true
    }
  ];

  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(prev => ({
      ...prev,
      [product.id]: true
    }));
    setTimeout(() => {
      setAddedToCart(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 2000);
  };

  return (
    <section className="page-container">
      <div className="page-hero">
        <h1>Collections</h1>
        <p>Discover our handcrafted diamond rings — where timeless elegance meets modern sophistication.</p>
      </div>

      <div className="cards-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-category">{product.category}</div>
              <div className="product-price">${product.price.toLocaleString()}</div>
              <button 
                className={`add-to-cart-btn ${addedToCart[product.id] ? 'added' : ''} ${!product.inStock ? 'disabled' : ''}`}
                onClick={() => product.inStock && handleAddToCart(product)}
                disabled={!product.inStock}
              >
                {addedToCart[product.id] 
                  ? '✓ Added to Cart' 
                  : product.inStock 
                    ? 'Add to Cart' 
                    : 'Out of Stock'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
