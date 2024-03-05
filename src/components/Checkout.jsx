import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CartContext } from "../context/CartContext";

const CheckOut = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_e3tgm6q", "template_z5uii0l", form.current, {
        publicKey: "s66MoYglzRtHZbvAC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    const pedido = {
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Correo electrónico</label>
      <input type="email" name="user_email" />
      <label>Teléfono</label>
      <input type="number" name="user_number" />
      <label>Agrega un mensaje</label>
      <textarea name="message" />
      <input type="hidden" name="pedido" />
      <input type="submit" value="Hacer pedido" />
    </form>
  );
};

export default CheckOut;
