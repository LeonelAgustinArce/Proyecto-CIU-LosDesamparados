import React, { useState } from 'react';

function Reserva() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [horaReserva, setHoraReserva] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [error, setError] = useState('');

  
  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!nombre || !email || !fechaReserva || !horaReserva) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (!validarEmail(email)) {
      setError('Por favor, introduce un email válido.');
      return;
    }

  
    setError('');
    setMensajeExito('Nos pondremos en contacto contigo pronto.');
    setTimeout(() => {
      setMensajeExito('');
    }, 3000);

    console.log("Formulario Enviado");
  
  };

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="bg-white rounded shadow p-4">
            <h2 className="mb-4 text-center">Haz tu reserva</h2>
            
            {error && <div className="alert alert-danger">{error}</div>}
            {mensajeExito && <div className="alert alert-success">{mensajeExito}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaReserva" className="form-label">Fecha de Reserva</label>
                <input type="date" className="form-control" id="fechaReserva" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="horaReserva" className="form-label">Hora de Reserva</label>
                <input type="time" className="form-control" id="horaReserva" value={horaReserva} onChange={(e) => setHoraReserva(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="3" placeholder="Detalles de la reserva" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserva;