import React from 'react';
import { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

function Carrito() {
  const [carrito, setCarrito] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

 
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  
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
    <div className="container-fluid p-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded shadow p-4 mb-4">
              <h2 className="mb-4 text-center" style={{ color: '#A67B5B' }}>Tu Carrito de Compras</h2>
              
              {showAlert && (
                  <Alert className="mb-4 alert-cafe">
                    <Alert.Heading>¡Pedido Confirmado!</Alert.Heading>
                    <p>
                      Tu pedido ha sido confirmado exitosamente. 
                      Total: <strong>${calcularTotal()}</strong>
                    </p>
                    <p className="mb-0">
                      Gracias por tu compra en Luna & Granos Café.
                    </p>
                  </Alert>)}
              {carrito.length === 0 ? (
                <div className="text-center py-5">
                  <p className="fs-5 text-muted">Tu carrito está vacío</p>
                  <p>¡Visita nuestra carta para agregar productos!</p>
                </div>) : 
                (<>
                  {carrito.map(item => (
                    <div key={item.id} className="card mb-3 shadow-sm">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-md-2">
                            <img 
                              src={item.imagen} 
                              alt={item.nombre}
                              className="img-fluid rounded"
                              style={{width: '80px', height: '80px', objectFit: 'cover'}}/>
                          </div>
                          <div className="col-md-4">
                            <h5 className="card-title mb-1">{item.nombre}</h5>
                            <p className="card-text text-muted mb-0">Precio unitario: ${item.precio}</p>
                          </div>
                          <div className="col-md-3">
                            <div className="d-flex align-items-center">
                              <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}> -
                              </button>
                              <span className="mx-3 fs-5">{item.cantidad}</span>
                              <button 
                                className="btn btn-outline-secondary btn-sm"
                                onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}> +
                              </button>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <p className="card-text fw-bold">Total: ${item.precio * item.cantidad}</p>
                          </div>
                          <div className="col-md-1">
                            <button 
                              className="btn btn-sm btn-eliminar-producto"
                              onClick={() => eliminarDelCarrito(item.id)}
                              title="Eliminar producto">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="row mt-4">
                  <div className="col-md-8">
                    <button 
                      className="btn btn-vaciar-carrito"
                      onClick={vaciarCarrito}>
                      <i className="bi bi-cart-x me-2"></i>Vaciar Carrito
                    </button>
                  </div>
                    <div className="col-md-4">
                      <div className="bg-white rounded shadow p-4">
                        <h4 style={{ color: '#A67B5B' }}>Resumen del Pedido</h4>
                        <p>Cantidad de productos: {calcularTotalItems()}</p>
                        <h5 style={{ color: '#A67B5B' }}>Total: ${calcularTotal()}</h5>
                        <button 
                          className="btn w-100 mt-3 btn-confirmar-pedido"
                          onClick={confirmarPedido}>
                          <i className="bi bi-check-circle me-2"></i>Confirmar Pedido
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;