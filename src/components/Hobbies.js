import React from 'react';
import './Hobbies.css';

function Hobbies() {
  return (
    <section className="hobbies">
      <h2>Hobbies</h2>
      
      <div className="hobby">
        <h3>Gardening</h3>
        <p>
          Although not always successful, gardening brings health, relaxation, and even a bit of wealth. It’s relaxing — just plant and watch things grow. 
        </p>
        <div className="mini-me">
          {/* Mini me character gardening */}
          <img src="/path-to-mini-me-gardening.png" alt="Mini me" />
        </div>
      </div>

      <div className="hobby">
        <h3>Gaming</h3>
        <p>
          From fast-paced PC titles to tabletop games, I love immersing myself in the gaming world. Overcooked, Mario Kart, and Stardew Valley are some of my favorites.
        </p>
        <div className="mini-me">
          {/* Mini me character playing games */}
          <img src="/path-to-mini-me-gaming.png" alt="Mini me" />
        </div>
      </div>

      <div className="hobby">
        <h3>Traveling</h3>
        <p>
          I love exploring new places, comparing architecture, and understanding the differences in transportation systems. Local discoveries are always rewarding too.
        </p>
        <div className="mini-me">
          {/* Mini me character traveling */}
          <img src="/path-to-mini-me-traveling.png" alt="Mini me" />
        </div>
      </div>

      <div className="hobby">
        <h3>Fishing</h3>
        <p>
          Fishing is a new hobby I’ve picked up, and it’s been a peaceful and relaxing experience. There’s something special about being on the water.
        </p>
        <div className="mini-me">
          {/* Mini me character fishing */}
          <img src="/path-to-mini-me-fishing.png" alt="Mini me" />
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
