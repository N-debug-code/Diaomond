import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Pages.css';

const Shop = () => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});
  
  const allProducts = [
    { 
      id: 'shop-1', 
      name: 'Classic Solitaire', 
      price: 1200, 
      img: '/images/Wedding Real Diamond Ring.jpeg',
      description: 'Elegant solitaire diamond ring in 18k white gold',
      category: 'Engagement',
      style: 'Classic',
      inStock: true
    },
    { 
      id: 'shop-2', 
      name: 'Eternity Band', 
      price: 950, 
      img: '/images/marry.jpeg',
      description: 'Diamond eternity band with channel setting',
      category: 'Wedding',
      style: 'Modern',
      inStock: true
    },
    { 
      id: 'shop-3', 
      name: 'Vintage Halo', 
      price: 1650, 
      img: '/images/nice (1).jpeg',
      description: 'Vintage-inspired halo diamond ring',
      category: 'Engagement',
      style: 'Vintage',
      inStock: true
    },
    { 
      id: 'shop-4', 
      name: 'Art Deco Band', 
      price: 890, 
      img: '/images/nice (2).jpeg',
      description: 'Art deco inspired wedding band with milgrain details',
      category: 'Wedding',
      style: 'Vintage',
      inStock: true
    },
    { 
      id: 'shop-5', 
      name: 'Modern Cluster Ring', 
      price: 2200, 
      img: '/images/Wedding Real Diamond Ring.jpeg',
      description: 'Contemporary cluster design with brilliant cut diamonds',
      category: 'Fashion',
      style: 'Modern',
      inStock: true
    },
    { 
      id: 'shop-6', 
      name: 'Princess Cut Solitaire', 
      price: 1800, 
      img: '/images/engaed.jpeg',
      description: 'Princess cut diamond in a contemporary setting',
      category: 'Engagement',
      style: 'Modern',
      inStock: false
    },
    { 
      id: 'shop-7', 
      name: 'Sapphire Accent Band', 
      price: 1100, 
      img: '/images/nice (1).jpeg',
      description: 'Diamond band with sapphire accents',
      category: 'Fashion',
      style: 'Classic',
      inStock: true
    },
    { 
      id: 'shop-8', 
      name: 'Vintage Rose Gold', 
      price: 1450, 
      img: '/images/marry.jpeg',
      description: 'Rose gold ring with vintage-inspired details',
      category: 'Fashion',
      style: 'Vintage',
      inStock: true
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [priceRange, setPriceRange] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Engagement', 'Wedding', 'Fashion'];
  const styles = ['All', 'Classic', 'Modern', 'Vintage'];
  const priceRanges = [
    { label: 'All', value: 'All' },
    { label: 'Under $1000', value: '0-1000' },
    { label: '$1000 - $1500', value: '1000-1500' },
    { label: '$1500+', value: '1500+' }
  ];

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      image: product.img // Normalize image property for cart
    });
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

  // Filter and sort products
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesStyle = selectedStyle === 'All' || product.style === selectedStyle;
    
    let matchesPrice = true;
    if (priceRange !== 'All') {
      const [min, max] = priceRange.split('-').map(Number);
      if (max) {
        matchesPrice = product.price >= min && product.price < max;
      } else {
        matchesPrice = product.price >= min;
      }
    }

    return matchesCategory && matchesStyle && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="page-container shop-page">
      <div className="page-hero">
        <h1>Shop</h1>
        <p>Discover our curated collection of fine jewelry.</p>
      </div>

      <div className="shop-layout">
        <aside className="shop-filters">
          <div className="filter-group">
            <h3>Categories</h3>
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h3>Style</h3>
            {styles.map(style => (
              <button
                key={style}
                className={`filter-btn ${selectedStyle === style ? 'active' : ''}`}
                onClick={() => setSelectedStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            {priceRanges.map(range => (
              <button
                key={range.value}
                className={`filter-btn ${priceRange === range.value ? 'active' : ''}`}
                onClick={() => setPriceRange(range.value)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </aside>

        <div className="shop-main">
          <div className="shop-header">
            <p>{filteredProducts.length} products found</p>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          <div className="cards-grid">
            {filteredProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image">
                  <img src={p.img} alt={p.name} />
                  {!p.inStock && <span className="out-of-stock">Out of Stock</span>}
                </div>
                <div className="product-info">
                  <div className="product-category">{p.category}</div>
                  <h3>{p.name}</h3>
                  <p className="product-description">{p.description}</p>
                  <div className="product-price">${p.price.toLocaleString()}</div>
                  <button 
                    className={`add-to-cart-btn ${addedToCart[p.id] ? 'added' : ''} ${!p.inStock ? 'disabled' : ''}`}
                    onClick={() => p.inStock && handleAddToCart(p)}
                    disabled={!p.inStock}
                  >
                    {addedToCart[p.id] 
                      ? '✓ Added to Cart' 
                      : p.inStock 
                        ? 'Add to Cart' 
                        : 'Out of Stock'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
