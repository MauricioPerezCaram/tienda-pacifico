import { useState } from "react";

const ItemCount = ({ cantidad, sumar, restar, agregar }) => {
  return (
    <div>
      <div className="item-count">
        <h1>{cantidad}</h1>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </div>
      <button className="agregar-al-carrito" onClick={agregar}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
