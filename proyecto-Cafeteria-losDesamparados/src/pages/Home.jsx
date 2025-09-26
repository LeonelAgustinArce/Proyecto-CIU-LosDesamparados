import React from 'react';
import fondo from '../assets/fondo.webp';
import cafe1 from '../assets/img1.jpg';
import cafe2 from '../assets/img2.jpg';
import cafe3 from '../assets/img3.jpg';

function Home() {
  return (
    <div
      className="container-fluid p-5"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="row justify-content-center" style={{ paddingTop: "100px" }}>
        <div className="col-md-8 text-center">
          <h1 style={{ color: "white" }}>Cafetería Eteria</h1>
          <p style={{ color: "white" }}>No es adicción, es devoción eterna</p>
        </div>

        /*ACA SE AGREGO EL CAROUSEL, PARA SACARLO BORRAR DE ACA PARA ABAJO*/
        /*SE AGREGO CUALQUIER IMAGEN PARA PROBAR*/ 
        <div className="d-flex justify-content-center mt-4">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ width: "25%" }}   
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={cafe3}
                  className="d-block w-100"
                  alt="Café 3"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cafe2}
                  className="d-block w-100"
                  alt="Café 2"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={cafe1}
                  className="d-block w-100"
                  alt="Café 1"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;