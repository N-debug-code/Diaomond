import React from 'react';
import './Pages.css';

const Contact = () => {
  return (
    <section className="page-container">
      <div className="page-hero">
        <h1>Contact</h1>
        <p>We're here to help — reach out with any questions.</p>
      </div>

      <div className="content-block contact-block">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea placeholder="Tell us about your request" rows={6}></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-details">
          <h3>Visit us</h3>
          <p>123 Jewelry Lane<br/>New York, NY 10001</p>
          <p>Email: hello@ringora.example</p>
          <p>Phone: +1 (555) 123-4567</p>
          
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7383124785365!2d-73.9922839!3d40.7424089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a55f3f7b21%3A0x7a3c772b7317f4f9!2sDiamond%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1699147632749!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
