import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ☕ Luna & Granos Café
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
            <Link className="nav-link" to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link className="nav-link" to="/carta" onClick={() => setIsMenuOpen(false)}>Carta</Link>
            <Link className="nav-link" to="/carrito" onClick={() => setIsMenuOpen(false)}>Carrito</Link>
            <Link className="nav-link" to="/reserva" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;