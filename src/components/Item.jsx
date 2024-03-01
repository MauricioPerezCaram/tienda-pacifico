import { useState } from "react";
import ItemCount from "./ItemCount";

const Item = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);

  const sumar = () => {
    cantidad < product.stock && setCantidad(cantidad + 1);
  };

  const restar = () => {
    if (cantidad > 0) setCantidad(cantidad - 1);
  };

  const agregar = () => {
    console.log({
      ...product,
      cantidad,
    });
  };

  return (
    <div>
      <div>
        <img src={product.imagen} alt={product.nombre} />
        <h2>{product.marca}</h2>
        <h3>{product.nombre}</h3>
        <h4>Precio: $ {product.precio}</h4>
        <h5>Disponible: {product.stock}</h5>
        <ItemCount
          cantidad={cantidad}
          sumar={sumar}
          restar={restar}
          agregar={agregar}
        />
      </div>
    </div>
  );
};

export default Item;
