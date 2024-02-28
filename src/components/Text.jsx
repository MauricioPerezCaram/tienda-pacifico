import { useState } from "react";

const Text = () => {
  const [show, setShow] = useState(true);

  const mostrar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={mostrar}>
        {show === true ? "Ocultar msj" : "Mostrar msj"}
      </button>
      {show === true && <h2>Hola</h2>}
    </div>
  );
};

export default Text;
