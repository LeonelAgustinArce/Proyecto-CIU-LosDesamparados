import React from 'react';
import fondo from '../assets/fondo.webp';
import Imagen01 from '../assets/imagen-01.webp';
import { Link } from 'react-router-dom';
import Carrusel from '../components/carrusel';

function Home() {
  return (
    <div
      className="container-fluid p-0" 
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 text-center">
            <h1 style={{ color: "white", textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
              Cafetería Eteria
            </h1>
            <p style={{ color: "white", textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
              No es adicción, es devoción eterna
            </p>
          </div>
        </div>
      </div>

      {/* Carrusel */}
      <div className="bg-white py-5">
        <div className="container">
          <Carrusel />
        </div>
      </div>

      
      <div className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Imagen */}
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <img 
                src={Imagen01}
                alt="Café de tueste ligero" 
                className="img-fluid rounded shadow"
                style={{ maxHeight: '400px', objectFit: 'contain', width: '100%', maxWidth: '500px' }}
              />
            </div>

            {/* Texto */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h2 
                className="display-4 fw-normal text-dark mb-3" 
                style={{fontFamily: 'Georgia, serif', letterSpacing: '1px'}}
              >
                Arte en cada taza
              </h2>
              <p 
                className="mb-4 text-dark fs-5" 
                style={{
                  fontFamily: 'Arial, sans-serif', 
                  fontWeight: '300', 
                  lineHeight: '1.6'
                }}
              >
                8 creaciones exclusivas para paladares exigentes
              </p>
              <Link 
                to="/carta" 
                className="btn btn-lg px-4 text-white" 
                style={{
                  backgroundColor: '#8B4513', 
                  borderColor: '#8B4513'
                }}
              >
                Consulta nuestra carta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;