import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.nombre}</h3>
          <p>Precio por unidad: $ {prod.precio}</p>
          <p>{prod.descripcion}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio total: $ {prod.precio * prod.cantidad}</p>
        </div>
      ))}

      {carrito.length > 0 ? (
        <div>
          <h2>Precio total: $ {precioTotal()}</h2>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      ) : (
        <h3>El carrito está vacío</h3>
      )}
      <Link to="/checkout"> Finalizar compra</Link>
    </div>
  );
};

export default Carrito;
