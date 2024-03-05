import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const CheckOut = () => {
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
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="user_name" />
      <label>Correo electrónico</label>
      <input type="email" name="user_email" />
      <label>Teléfono</label>
      <input type="number" name="user_number" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default CheckOut;
