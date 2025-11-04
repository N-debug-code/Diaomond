import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const images = [
    "/images/Wedding Real Diamond Ring.jpeg",
    //"/images/engaed.jpeg",
    //"/images/nice(1).jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container">
      {/* Hero Section with Image Slider */}
      <section className="hero-section">
        <div className="hero-slider">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Ring ${index}`}
              className={`hero-image ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
        <div className="hero-overlay">
          <h1>Timeless Rings for Every Moment</h1>
          <p>
            Discover luxury, craftsmanship, and elegance in every detail. Handcrafted rings designed to last forever.
          </p>
          <button onClick={() => navigate('/collections')}>Shop Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <h3>Luxury Craftsmanship</h3>
          <p>Every ring is hand-polished with precision and care.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Lifetime Warranty</h3>
          <p>We guarantee quality and durability for life.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Free Worldwide Shipping</h3>
          <p>Delivered securely to your doorstep — wherever you are.</p>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section className="highlight-section">
        <img
          src="/images/marry.jpeg"
          alt="Luxury Ring"
        />
        <div className="highlight-text">
          <h2>The Signature Collection</h2>
          <p>
            A fusion of beauty and innovation. Our Signature Collection rings
            embody timeless design, unmatched clarity, and refined elegance for
            modern sophistication.
          </p>
          <button onClick={() => navigate('/collections')}>Explore Collection</button>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
