import React from 'react';
import cafe01 from '../assets/cafe-01.webp';
import cafe02 from '../assets/cafe-04.webp';
import cafe03 from '../assets/cafe-05.webp';

function Carrusel() {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide col-sm-10 col-md-8 col-lg-4"
        data-bs-ride="carousel"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={cafe03}
              className="d-block w-100"
              alt="Café 3"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={cafe02}
              className="d-block w-100"
              alt="Café 2"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={cafe01}
              className="d-block w-100"
              alt="Café 1"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Carrusel;