import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active fw-bold' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#A67B5B' }}>
      <div className="container-fluid">
        <Link className="navbar-brand text-white fw-bold" to="/">
          <i className="bi bi-cup-hot me-2"></i>
          Luna & Granos Café
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav me-auto">
            <Link className={`nav-link text-white ${isActive('/')}`} to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link className={`nav-link text-white ${isActive('/carta')}`} to="/carta" onClick={() => setIsMenuOpen(false)}>Carta</Link>
            <Link className={`nav-link text-white ${isActive('/carrito')}`} to="/carrito" onClick={() => setIsMenuOpen(false)}>
              <i className="bi bi-cart3 me-1"></i>
              Carrito 
            </Link>
            <Link className={`nav-link text-white ${isActive('/reserva')}`}  to="/reserva" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;