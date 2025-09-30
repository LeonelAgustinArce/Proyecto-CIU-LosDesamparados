import React from 'react';
import fondo from '../assets/fondo.webp';
import Imagen01 from '../assets/imagen-01.webp';
import { Link } from 'react-router-dom';
import Carrusel from '../components/carrusel';

function Home() {
  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${fondo})` }}
    >
      <div className="home-content">
        <div className="row justify-content-center w-100">
          <div className="col-md-8 text-center">
            <h1 className="home-title">Luna & Granos Café</h1>
            <p className="home-subtitle">
              Un espacio para disfrutar de un café excepcional, 
              en un ambiente que inspira calma y deleite.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-5 home-carrusel-section">
        <div className="container">
          <h2>Recomendados de la semana</h2>
          <Carrusel />
        </div>
      </div>
      <div className="container-fluid py-5 bg-white home-info-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 text-center mb-4 mb-lg-0">
              <img
                src={Imagen01}
                alt="Café de tueste ligero"
                className="img-fluid"
              />
            </div>

            <div className="col-12 col-lg-6 text-center text-lg-start">
              <h2 className="display-4 fw-normal text-dark mb-3">
                ¿Listo para un respiro delicioso?
              </h2>
              <p className="mb-4 text-dark fs-5">
                En nuestra carta, te esperan cafés cuidadosamente seleccionados y preparados con cariño, junto con una variedad de acompañantes que harán tu momento aún más especial.
                Tómate un momento para explorar y descubrir tus combinaciones favoritas.
              </p>
              <Link to="/carta#inicio-carta" className="btn btn-lg px-4 btn-consulta">Consulta nuestra carta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;