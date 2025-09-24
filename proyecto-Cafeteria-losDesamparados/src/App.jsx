import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Carta from './pages/Carta';
import Carrito from './pages/Carrito';
import Reserva from './pages/Reserva';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;