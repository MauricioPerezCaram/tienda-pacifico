import data from "../data/products.json";

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

export default pedirProductos;
