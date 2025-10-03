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
    setMensajeExito('¡Gracias por tu reserva! Te confirmaremos pronto.');
    setTimeout(() => {
      setMensajeExito('');
    }, 5000);

    console.log("Formulario Enviado");
  };

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-6 mb-4">
            <div className="bg-white rounded shadow p-4 h-100">
              <h2 className="mb-4 text-center" style={{ color: '#A67B5B' }}>Haz tu reserva</h2>
              
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
                  <label htmlFor="mensaje" className="form-label">Mensaje (opcional)</label>
                  <textarea className="form-control" id="mensaje" rows="3" placeholder="Número de personas, ocasión especial, requerimientos especiales..." value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
                </div>
                <button 
                  type="submit" 
                  className="btn w-100" 
                  style={{
                    backgroundColor: '#A67B5B',
                    borderColor: '#A67B5B',
                    color: 'white',
                    padding: '10px 0',
                    fontSize: '1.1rem'
                  }}
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>
          </div>

          
          <div className="col-lg-6">
            
            <div className="bg-white rounded shadow p-4 mb-4">
              <h3 style={{ color: '#A67B5B' }}>📞 Información de Contacto</h3>
              <div className="mt-3">
                <p className="mb-2">
                  <strong>📍 Dirección:</strong><br />
                    Tte. Manuel Origone 151<br />
                    Villa Tesei, Hurlingham<br />
                    Provincia de Buenos Aires
                </p>
                <p className="mb-2">
                  <strong>📞 Teléfono:</strong> (011) 1234-5678
                </p>
                <p className="mb-2">
                  <strong>📧 Email:</strong> hola@lunaygranos.com
                </p>
                <p className="mb-0">
                  <strong>🕒 Horarios:</strong><br />
                  Lunes a Viernes: 7:00 - 21:00<br />
                  Sábados y Domingos: 8:00 - 20:00
                </p>
              </div>
            </div>

            
            <div className="bg-white rounded shadow p-4 mb-4">
              <h3 style={{ color: '#A67B5B' }}>🗺️ Encuéntranos</h3>
              <div className="mt-3">
                
                <div 
                  className="rounded overflow-hidden" 
                  style={{ 
                    height: '250px', 
                    width: '100%',
                    minHeight: '250px',
                    border: '2px solid #A67B5B'
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.515118434625!2d-58.6418529244671!3d-34.63680735948479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbf2d2b4b19c5%3A0xea8d2b3b4137f2c7!2sTte.%20Manuel%20Origone%20151%2C%20B1688%20Villa%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 0,
                      display: 'block'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <a 
                    href="https://maps.app.goo.gl/UDudxSZsCi3PUJJTA"
                    target="_blank"
                    className="btn btn-sm"
                    style={{
                      backgroundColor: '#A67B5B',
                      borderColor: '#A67B5B',
                      color: 'white'
                    }}
                  >
                    📍 Abrir en Google Maps
                  </a>
                </div>
              </div>
            </div>

            
            <div className="bg-white rounded shadow p-4">
              <h3 style={{ color: '#A67B5B' }}>Preguntas Frecuentes</h3>
              <div className="mt-3">
                <div className="mb-3">
                  <h6 className="fw-bold">¿Necesito reservar con anticipación?</h6>
                  <p className="small mb-0">Recomendamos reservar con 24h de anticipación para grupos mayores a 4 personas. Para mesas individuales, puedes venir directamente.</p>
                </div>
                <div className="mb-3">
                  <h6 className="fw-bold">¿Aceptan mascotas?</h6>
                  <p className="small mb-0">Sí, tenemos una encantadora terraza exterior pet-friendly donde tus compañeros peludos son bienvenidos.</p>
                </div>
                <div className="mb-0">
                  <h6 className="fw-bold">¿Tienen WiFi?</h6>
                  <p className="small mb-0">Por supuesto, WiFi gratuito para nuestros clientes. Perfecto para trabajar o estudiar mientras disfrutas de nuestro café.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reserva;