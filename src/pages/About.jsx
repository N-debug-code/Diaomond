import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <section className="page-container">
      <div className="page-hero">
        <h1>About Us</h1>
        <p>We are a family-run atelier dedicated to crafting memorable rings for life's milestones.</p>
      </div>

      <div className="content-block">
        <h2>Our Story</h2>
        <p>
          Founded with a passion for design and a dedication to craftsmanship, Ringora brings together
          artisans and modern techniques to create beautiful, enduring rings.
        </p>

        <h2>Our Promise</h2>
        <p>
          We source responsibly, use high-quality materials, and stand behind every piece with
          exceptional service and a lifetime warranty.
        </p>
      </div>
    </section>
  );
};

export default About;
