import React from 'react';
import cafe01 from '../assets/cafe-01.png';
import cafe02 from '../assets/cafe-02.png';
import cafe03 from '../assets/cafe-03.png';
import cafe04 from '../assets/cafe-04.png';
import cafe05 from '../assets/cafe-05.png';
import cafe06 from '../assets/cafe-06.png';
import cafe07 from '../assets/cafe-07.png';
import cafe08 from '../assets/cafe-08.png';

function Carta() {
  const productos = [
    { id: 1, nombre: 'Café Americano', imagen: cafe01 },
    { id: 2, nombre: 'Café Latte', imagen: cafe02 },
    { id: 3, nombre: 'Cappuccino', imagen: cafe03 },
    { id: 4, nombre: 'Café Mocha', imagen: cafe04 },
    { id: 5, nombre: 'Espresso', imagen: cafe05 },
    { id: 6, nombre: 'Macchiato', imagen: cafe06 },
    { id: 7, nombre: 'Iced Coffee', imagen: cafe07 },
    { id: 8, nombre: 'Café con Leche', imagen: cafe08 },
  ];

  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        <div className="col-12">
          <h2>Carta
          </h2>
          <div>

          </div>
        </div>
      </div>

      <div className="row">
        {productos.map(producto => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <button className="btn-minimal">+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .btn-minimal {
          background: none;
          border: none;
          font-size: 1.5em; 
          color: #007bff;
          cursor: pointer;
        }

        .btn-minimal:hover {
          color: #0056b3;
        }
      `}</style>
    </div>
  );
}

export default Carta;