import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <section className="landing">
      <h1>Welcome to My Digital Ecosystem!</h1>
      <p>This is where the magic happens — or at least, where I’m trying to grow my skills, projects, and ideas without overwatering them...</p>
      <div className="character-placeholder">
        {/* Character image will go here */}
        <img src="/path-to-character-placeholder.png" alt="Main character" />
      </div>
    </section>
  );
}

export default Landing;
