import React, { useState, useEffect } from 'react';
import fondo from '../assets/fondo-03.webp';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

import Americano from '../assets/cafe-01.webp';
import Latte from '../assets/cafe-02.webp';
import Cappuccino from '../assets/cafe-03.webp';
import Mocha from '../assets/cafe-04.webp';
import Espresso from '../assets/cafe-05.webp';
import Macchiato from '../assets/cafe-06.webp';
import IcedCoffe from '../assets/cafe-07.webp';
import LatteMacchiato from '../assets/cafe-latte-macchiato.webp';
import CaramelMacchiato from '../assets/cafe-caramel-macchiato.webp';

function Home() {
  const [productosDestacados, setProductosDestacados] = useState([]);

  
  const productosCarta = [
    { id: 1, nombre: 'Americano', imagen: Americano, precio: 6200, tipo: 'cafe' },
    { id: 2, nombre: 'Cappuccino', imagen: Cappuccino, precio: 7800, tipo: 'cafe' },
    { id: 3, nombre: 'Caramel Macchiato', imagen: CaramelMacchiato, precio: 10000, tipo: 'cafe' },
    { id: 4, nombre: 'Espresso', imagen: Espresso, precio: 8500, tipo: 'cafe' },
    { id: 5, nombre: 'Iced', imagen: IcedCoffe, precio: 9800, tipo: 'cafe' },
    { id: 6, nombre: 'Latte', imagen: Latte, precio: 7200, tipo: 'cafe' },
    { id: 7, nombre: 'Latte Macchiato', imagen: LatteMacchiato, precio: 9800, tipo: 'cafe' },
    { id: 8, nombre: 'Macchiato', imagen: Macchiato, precio: 7200, tipo: 'cafe' },
    { id: 9, nombre: 'Mocha', imagen: Mocha, precio: 7200, tipo: 'cafe' },
  ];

  
  useEffect(() => {
    const seleccionarProductosAleatorios = () => {
      const productosAleatorios = [...productosCarta]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setProductosDestacados(productosAleatorios);
    };

    seleccionarProductosAleatorios();
  }, []);

    const formatearPrecio = (precio) => {
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0
      }).format(precio);
    };

  return (
    <div className="home-container">
      {/* Sección Principal */}
      <section 
        className="seccionprincipal"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <div className="seccionprincipal-contenido">
          <div className="seccionprincipal-texto">
            <h1 className="seccionprincipal-titulo">Luna & Granos</h1>
            <p className="seccionprincipal-subtitulo">
              Un espacio para disfrutar de un café excepcional, 
              en un ambiente que inspira calma y deleite.
            </p>
            <div className="seccionprincipal-botones">
              <HashLink to="/carta#inicio-carta" className="btn-home-primary">
                Ver Carta
              </HashLink>
              <Link to="/reserva" className="btn-home-secondary">
                Reservar Mesa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Elegirnos */}
      <section className="seccion-elegirnos">
        <div className="container">
          <h2 className="section-title">¿Por qué elegirnos?</h2>
          <div className="seccion-elegirnos-grid">
            <div className="seccion-elegirnos-card">
              <div className="seccion-elegirnos-icono">☕</div>
              <h3>Café de Calidad</h3>
              <p>Granos seleccionados de las mejores regiones cafetaleras del mundo</p>
            </div>
            <div className="seccion-elegirnos-card">
              <div className="seccion-elegirnos-icono">🍰</div>
              <h3>Postres Caseros</h3>
              <p>Deliciosos pasteles y postres preparados diariamente con ingredientes frescos</p>
            </div>
            <div className="seccion-elegirnos-card">
              <div className="seccion-elegirnos-icono">🌱</div>
              <h3>Ambiente Natural</h3>
              <p>Un espacio acogedor con decoración natural, plantas y luz natural</p>
            </div>
            <div className="seccion-elegirnos-card">
              <div className="seccion-elegirnos-icono">📶</div>
              <h3>WiFi Gratis</h3>
              <p>Conéctate y trabaja mientras disfrutas de tu café favorito</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Favoritos */}
      <section className="seccion-favoritos">
        <div className="container">
          <h2 className="section-title">Nuestros Favoritos</h2>
          <div className="seccion-favoritos-grid">
            {productosDestacados.map((producto) => (
              <div key={producto.id} className="seccion-favoritos-item">
                <div className="seccion-favoritos-imagen">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                  />
                </div>
                <h3>{producto.nombre}</h3>
                <p>Una deliciosa opción de nuestra selección especial</p>
                <span className="price">{formatearPrecio(producto.precio)}</span>
              </div>
            ))}
          </div>
          <div className="seccion-favoritos-cta">
            <HashLink to="/carta#inicio-carta" className="btn-home-primary">
              Descubre los tuyos
            </HashLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;