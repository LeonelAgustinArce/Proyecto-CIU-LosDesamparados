import React from 'react';
import { useState } from "react";
import Americano from '../assets/cafe-01.webp';
import Latte from '../assets/cafe-02.webp';
import Cappuccino from '../assets/cafe-03.webp';
import Mocha from '../assets/cafe-04.webp';
import Espresso from '../assets/cafe-05.webp';
import Macchiato from '../assets/cafe-06.webp';
import IcedCoffe from '../assets/cafe-07.webp';
import LatteMacchiato from '../assets/cafe-latte-macchiato.webp';
import CaramelMacchiato from '../assets/cafe-caramel-macchiato.webp';


import Acom01 from '../assets/acom-01.webp';
import Acom02 from '../assets/acom-02.webp';
import Acom03 from '../assets/acom-03.webp';
import Acom04 from '../assets/acom-04.webp';
import Acom05 from '../assets/acom-05.webp';
import Acom06 from '../assets/acom-06.webp';
import Acom07 from '../assets/acom-07.webp';
import Acom08 from '../assets/acom-08.webp';
import Acom09 from '../assets/acom-09.webp';
import Acom10 from '../assets/acom-10.webp';


function Carta() {
  const [cantidades, setCantidades] = useState(0);

  const cafes = [
    { id: 1, nombre: 'Americano', imagen: Americano, precio: 6200 },
    { id: 2, nombre: 'Cappuccino', imagen: Cappuccino, precio: 7800 },
    { id: 3, nombre: 'Caramel Macchiato', imagen: CaramelMacchiato, precio: 10000 },
    { id: 4, nombre: 'Espresso', imagen: Espresso, precio: 8500 },
    { id: 5, nombre: 'Iced', imagen: IcedCoffe, precio: 9800 },
    { id: 6, nombre: 'Latte', imagen: Latte, precio: 7200 },
    { id: 7, nombre: 'Latte Macchiato', imagen: LatteMacchiato, precio: 9800 },
    { id: 8, nombre: 'Macchiato', imagen: Macchiato, precio: 7200 },
    { id: 9, nombre: 'Mocha', imagen: Mocha, precio: 7200 },
  ];

  const acompanantes = [
    { id: 10, nombre: 'Croissant', imagen: Acom01, precio: 2800 },
    { id: 11, nombre: 'Muffin', imagen: Acom02, precio: 3200 },
    { id: 12, nombre: 'Galletas de Mantequilla', imagen: Acom03, precio: 2500 },
    { id: 13, nombre: 'Brownie', imagen: Acom04, precio: 3800 },
    { id: 14, nombre: 'Dona Glaseada', imagen: Acom05, precio: 3000 },
    { id: 15, nombre: 'Scones', imagen: Acom06, precio: 3500 },
    { id: 16, nombre: 'Barra de Avena', imagen: Acom07, precio: 2900 },
    { id: 17, nombre: 'Mini Cheesecake', imagen: Acom08, precio: 4200 },
    { id: 18, nombre: 'Bizcocho', imagen: Acom09, precio: 3300 },
    { id: 19, nombre: 'Tostada de Aguacate', imagen: Acom10, precio: 4500 },
  ];
  const agregarAlCarrito = (id) => {
    setCantidades(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1  
    }));
  };

  return (
    <div className="container-fluid bg-light p-5">
      
      {/* Sección Cafés */}
      <div className="row">
        <div className="col-12">
          <h2  id="inicio-carta">Cafés </h2>
          <div>
            <p>Nuestra selección de 9 cafés exclusivos</p>
          </div>
        </div>
      </div>

      <div className="row">
        {cafes.map(producto => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <button className="btn-minimal" onClick={() => agregarAlCarrito(producto.id)}> Agregar al carrito</button>
                <p>Cantidad: {cantidades[producto.id] || 0}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sección Acompañantes */}
      <div className="row mt-5">
        <div className="col-12">
          <h2>Acompañantes</h2>
          <div>
            <p>Perfectos para complementar tu café</p>
          </div>
        </div>
      </div>

      <div className="row">
        {acompanantes.map(producto => (
          <div className="col-md-3 mb-4" key={producto.id}>
            <div className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <button className="btn-minimal" onClick={() => agregarAlCarrito(producto.id)}> Agregar al carrito</button>
                <p>Cantidad: {cantidades[producto.id] || 0}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carta;
