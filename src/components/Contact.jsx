// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5em', color: '#5e4b8c' }}>Contact Me</h2>
      <p style={{ fontSize: '1.2em', color: '#333' }}>
        I'd like to hear from you! Please fill out the form below or reach out through our social media channels.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '1.1em', color: '#4a3a6a' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '1.1em', color: '#4a3a6a' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontSize: '1.1em', color: '#4a3a6a' }}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px', boxSizing: 'border-box' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            color: '#fff',
            backgroundColor: '#5e4b8c',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Send Message
        </button>
      </form>

      <div className="social-media" style={{ marginTop: '30px' }}>
        <h3 style={{ fontSize: '2em', color: '#4a3a6a' }}>Follow Me</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5e4b8c', textDecoration: 'none', fontSize: '1.1em' }}>Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5e4b8c', textDecoration: 'none', fontSize: '1.1em' }}>Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#5e4b8c', textDecoration: 'none', fontSize: '1.1em' }}>Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
