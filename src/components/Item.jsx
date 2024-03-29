import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const Item = ({ product }) => {
  const { carrito, agregar } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const sumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  return (
    <div>
      <div>
        <img src={product.imagen} alt={product.nombre} />
        <h2>{product.marca}</h2>
        <h3>{product.nombre}</h3>
        <h4>Precio: $ {product.precio}</h4>
        <h5>Disponible: {product.stock}</h5>
        <h6>{product.descripcion}</h6>
        <ItemCount
          cantidad={cantidad}
          sumar={sumar}
          restar={restar}
          agregar={() => {
            agregar(product, cantidad);
          }}
        />
      </div>
    </div>
  );
};

export default Item;
