import React, { useState } from 'react';

function Reserva() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [horaReserva, setHoraReserva] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario Enviado");
  };

  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        <div className="col-12">
          <h2>Contáctanos</h2>
          <p>¿Tienes alguna pregunta o comentario? ¡Nos encantaría saber de ti!</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="tu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
             <div className="mb-3">
              <label htmlFor="fechaReserva" className="form-label">Fecha de Reserva</label>
              <input type="date" className="form-control" id="fechaReserva" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="horaReserva" className="form-label">Hora de Reserva</label>
              <input type="time" className="form-control" id="horaReserva" value={horaReserva} onChange={(e) => setHoraReserva(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="mensaje" className="form-label">Mensaje</label>
              <textarea className="form-control" id="mensaje" rows="3" placeholder="Tu mensaje o detalles de la reserva" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reserva;