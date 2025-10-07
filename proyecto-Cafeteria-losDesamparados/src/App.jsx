import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Carta from './pages/Carta';
import Carrito from './pages/Carrito';
import Reserva from './pages/Reserva';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </main>
      < Footer />
    </div>
  );
}

export default App;