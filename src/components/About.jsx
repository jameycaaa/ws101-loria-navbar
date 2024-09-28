// src/components/About.js
import React from 'react';
import myImage from '../my-image.png'; // Adjust the path based on where your image is located

const About = () => {
  return (
    <div className="about-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5em', color: '#5e4b8c' }}>About Us</h2>
      <p style={{ fontSize: '1.2em', color: '#333' }}>
        I am dedicated to providing the best experiences for our users.
      </p>
      <p style={{ fontSize: '1.2em', color: '#333' }}>
        My mission is to connect people through engaging content and meaningful interactions.
      </p>

      <h3 style={{ fontSize: '2em', color: '#4a3a6a', marginTop: '30px' }}>My Story</h3>
      <p style={{ fontSize: '1.1em', color: '#555' }}>
        Starting in 2022, I have been on a journey to create a platform that brings people together and encourages collaboration and creativity.
      </p>

      <h3 style={{ fontSize: '2em', color: '#4a3a6a', marginTop: '30px' }}>Get to Know Me</h3>
      <div className="team" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div className="team-member" style={{
          background: '#f4f4f4',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          margin: '0 15px'
        }}>
          <img
            src={myImage}
            alt="Jamaica M. Loria"
            style={{ width: '200px', height: '200px', borderRadius: '50%', marginBottom: '10px' }}
          />
          <h4 style={{ fontSize: '1.8em', color: '#5e4b8c' }}>Jamaica M. Loria</h4>
          <p style={{ fontSize: '1.1em', color: '#333' }}>Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export default About;
