import { useState, useEffect } from "react";
import pedirProductos from "./pedirProductos.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    pedirProductos().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
