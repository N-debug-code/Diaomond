import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="site-footer">
			<div className="footer-inner">
				<div className="footer-brand">
					<h3>💎 Ringora</h3>
					<p>Timeless rings crafted with care and passion.</p>
				</div>

				<div className="footer-links">
					<div>
						<h4>Shop</h4>
						<ul>
							<li><Link to="/collections">Collections</Link></li>
							<li><Link to="/shop">Shop All</Link></li>
						</ul>
					</div>
					<div>
						<h4>Company</h4>
						<ul>
							<li><Link to="/about">About Us</Link></li>
							<li><Link to="/contact">Contact</Link></li>
						</ul>
					</div>
				</div>

				<div className="footer-contact">
					<h4>Contact</h4>
					<p>hello@ringora.com</p>
					<p>+234450000000</p>
				</div>
			</div>
			<div className="footer-bottom">© {new Date().getFullYear()} Ringora. All rights reserved.</div>
		</footer>
	);
};

export default Footer;
