import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ☕ Café Eteria
        </Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Inicio</Link>
          <Link className="nav-link" to="/carta">Carta</Link>
          <Link className="nav-link" to="/carrito">Carrito</Link>
          <Link className="nav-link" to="/reserva">Reserva</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;