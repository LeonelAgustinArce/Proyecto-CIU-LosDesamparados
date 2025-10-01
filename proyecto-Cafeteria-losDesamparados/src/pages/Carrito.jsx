import React from 'react';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Función para actualizar cantidad
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      );
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prevCarrito => {
      const nuevoCarrito = prevCarrito.filter(item => item.id !== id);
      localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };


  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.setItem('carrito', JSON.stringify([]));
  };

  
  const confirmarPedido = () => {
    setShowAlert(true);
   
    setTimeout(() => {
      vaciarCarrito();
      setShowAlert(false);
    }, 5000);
  };


  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

 
  const calcularTotalItems = () => {
    return carrito.reduce((total, item) => total + item.cantidad, 0);
  };

  return (
    <div className="container-fluid bg-light p-5 min-vh-100">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-4">Tu Carrito de Compras</h2>
          
          {/* Alerta de confirmación */}
          {showAlert && (
            <Alert variant="success" className="mb-4">
              <Alert.Heading>¡Pedido Confirmado!</Alert.Heading>
              <p>
                Tu pedido ha sido confirmado exitosamente. 
                Total: <strong>${calcularTotal()}</strong>
              </p>
              <p className="mb-0">
                Gracias por tu compra en Luna & Granos Café.
              </p>
            </Alert>
          )}
          
          {carrito.length === 0 ? (
            <div className="text-center py-5">
              <p className="fs-5 text-muted">Tu carrito está vacío</p>
              <p>¡Visita nuestra carta para agregar productos!</p>
            </div>
          ) : (
            <>
              {/* Lista de productos en el carrito */}
              {carrito.map(item => (
                <div key={item.id} className="card mb-3 shadow-sm">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre}
                          className="img-fluid rounded"
                          style={{width: '80px', height: '80px', objectFit: 'cover'}}
                        />
                      </div>
                      <div className="col-md-4">
                        <h5 className="card-title mb-1">{item.nombre}</h5>
                        <p className="card-text text-muted mb-0">Precio unitario: ${item.precio}</p>
                      </div>
                      <div className="col-md-3">
                        <div className="d-flex align-items-center">
                          <button 
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          >
                            -
                          </button>
                          <span className="mx-3 fs-5">{item.cantidad}</span>
                          <button 
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <p className="card-text fw-bold">Total: ${item.precio * item.cantidad}</p>
                      </div>
                      <div className="col-md-1">
                        <button 
                          className="btn btn-danger btn-sm"
                          onClick={() => eliminarDelCarrito(item.id)}
                          title="Eliminar producto"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              
              <div className="row mt-4">
                <div className="col-md-8">
                  <button 
                    className="btn btn-outline-danger"
                    onClick={vaciarCarrito}
                  >
                    Vaciar Carrito
                  </button>
                </div>
                <div className="col-md-4 text-end">
                  <div className="border-top pt-3">
                    <h5>Resumen del Pedido</h5>
                    <p>Total de items: {calcularTotalItems()}</p>
                    <h4 className="text-primary">Total: ${calcularTotal()}</h4>
                    <button 
                      className="btn btn-success btn-lg mt-3 w-100"
                      onClick={confirmarPedido}
                    >
                      Confirmar Pedido
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Carrito;