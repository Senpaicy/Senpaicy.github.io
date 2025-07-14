import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>I'm a developer with a passion for learning, coding, and growing ideas...</p>
      <div className="about-character">
        {/* Mini me character placeholder */}
        <img src="/path-to-mini-me-image.png" alt="Mini me" />
      </div>
    </section>
  );
}

export default About;
