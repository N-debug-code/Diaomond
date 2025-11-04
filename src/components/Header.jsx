import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

const Header = () => {
  const { getCartCount } = useCart();
  // Always get live cart count from context
  const cartCount = getCartCount();

  return (
    <header className="header">
      <div className="logo">💎 Ringora</div>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/collections" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Collections
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <NavLink to="/login" className="auth-link">Login</NavLink>
        <NavLink to="/signup" className="auth-link signup">Sign Up</NavLink>
        <NavLink to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
