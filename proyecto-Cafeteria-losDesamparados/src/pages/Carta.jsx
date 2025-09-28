import React from 'react';
import Americano from '../assets/cafe-01.png';
import Latte from '../assets/cafe-02.png';
import Cappuccino from '../assets/cafe-03.png';
import Mocha from '../assets/cafe-04.png';
import Espresso from '../assets/cafe-05.png';
import Macchiato from '../assets/cafe-06.png';
import IcedCoffe from '../assets/cafe-07.png';
import LatteMacchiato from '../assets/cafe-latte-macchiato.png';
import CaramelMacchiato from '../assets/cafe-caramel-macchiato.png'

function Carta() {
  const productos = [
    { id: 1, nombre: 'Americano'        , imagen: Americano, precio: 6200 },
    { id: 2, nombre: 'Café Mocha'       , imagen: Mocha, precio: 7200 },
    { id: 3, nombre: 'Cappuccino'       , imagen: Cappuccino, precio: 7800 },
    { id: 4, nombre: 'Caramel Macchiato', imagen: CaramelMacchiato, precio: 10000 },
    { id: 5, nombre: 'Espresso'         , imagen: Espresso, precio: 8500 },
    { id: 6, nombre: 'Iced Coffee'      , imagen: IcedCoffe, precio: 9800 },
    { id: 7, nombre: 'Latte Macchiato'  , imagen: LatteMacchiato, precio: 9800 },
    { id: 8, nombre: 'Latte'            , imagen: Latte, precio: 7200 },
    { id: 9, nombre: 'Macchiato'        , imagen: Macchiato, precio: 7200 },
   
    
  ];

  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        <div className="col-12">
          <h2>
            Carta de Café
          </h2>
          <div>
              <p>

              </p>
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
                <p className="card-text"  >Precio: ${producto.precio} 
                <button className="btn-minimal"> + </button> 
                </p>
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