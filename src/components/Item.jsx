const Item = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.imagen} alt={product.nombre} />
        <h3>{product.nombre}</h3>
        <h4>Precio: $ {product.precio}</h4>
        <h5>Stock: {product.stock}</h5>
        <h6>Marca: {product.marca}</h6>
      </div>
    </div>
  );
};

export default Item;
