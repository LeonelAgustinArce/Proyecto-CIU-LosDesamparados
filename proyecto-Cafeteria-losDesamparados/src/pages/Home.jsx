import React from 'react';
import fondo from '../assets/fondo.webp';

function Home() {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="row justify-content-center" style={{ paddingTop: '100px' }}>
        <div className="col-md-8 text-center">
          <h1 style={{ color: 'white' }}>Cafetería Eteria</h1>
          <p style={{ color: 'white' }}>No es adicción, es devoción eterna</p>
        </div>
      </div>
    </div>
  );
}

export default Home;