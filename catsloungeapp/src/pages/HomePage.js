import React from 'react';
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to The Cats Lounge</h1>
        <p>Discover fun facts about cats and enjoy adorable cat images!</p>
      </header>

      <section className="about-cats">
        <h2>About Cats</h2>
        <p>
          Cats are one of the most popular pets worldwide. Known for their playful and independent nature,
          they have been companions to humans for thousands of years. Whether you're a lifelong cat lover
          or new to the feline world, there's always something fascinating to learn about these incredible creatures.
        </p>
      </section>


      <section className="explore-features">
      <h2>Explore The Cats Lounge</h2>
        <ul>
          <li>🧠 Learn interesting and fun facts about cats.</li>
          <li>📸 Browse through a gallery of cute and funny cat images.</li>
          <li>💖 Save your favorite facts and images to your profile.</li>
        </ul>
      </section>

      <footer>
        <p>© 2024 The Cats Lounge. All rights reserved.</p>
        <p>
          Created with love by cat enthusiasts for cat enthusiasts. Follow us on social media:
          <a href="https://twitter.com/CatsLounge" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://instagram.com/CatsLounge" target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;