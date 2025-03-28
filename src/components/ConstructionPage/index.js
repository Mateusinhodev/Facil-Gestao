// ConstructionPage.js
import React from 'react';

const ConstructionPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Módulo em Construção</h1>
        <p style={styles.text}>Estamos trabalhando nisso, volte mais tarde!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  content: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '10px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    color: '#666',
  },
  imageContainer: {
    marginTop: '20px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default ConstructionPage;