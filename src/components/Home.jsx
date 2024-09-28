// src/components/Home.js
import React from 'react';
import missionImage from '../mission-image.png'; // Adjust the path based on where your image is located

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to my Website!</h1>
        <p>Explore a world of information and connect with me through engaging content.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
      <div className="intro-section">
        <h2>What I Do</h2>
        <p>I provide a platform that connects people, fosters creativity, and encourages collaboration. Our mission is to bring communities together through meaningful interactions and innovative content.</p>
        <img src={missionImage} alt="Our Mission" className="intro-image" /> {/* Use the imported image here */}
      </div>
    </div>
  );
};

export default Home;
