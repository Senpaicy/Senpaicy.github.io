import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to email me at:</p>
      <a href="mailto:zhancin23@outlook.com">zhancin23@outlook.com</a>
      
      <div className="social-links">
        <a href="https://github.com/senpaicy" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/cindevs" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      <div className="mini-me">
        {/* Mini me waving or pointing */}
        <img src="/path-to-mini-me-contact.png" alt="Mini me" />
      </div>
    </section>
  );
}

export default Contact;
