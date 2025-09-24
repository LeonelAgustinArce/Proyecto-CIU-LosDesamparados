function Carrito() {
  return (
    <div className="container-fluid bg-light p-5">
      <div className="row">
        <div className="col-12">
          <h2>Tu Carrito de Compras</h2>
          <p>Aquí están los productos que has añadido a tu carrito:</p>
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cafe 1
              <span className="badge bg-primary rounded-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Cafe 2
              <span className="badge bg-primary rounded-pill">2</span>
            </li>
          </ul>
          <p>Total: $X.XX</p>
          <button className="btn btn-success">Realizar Pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Carrito;