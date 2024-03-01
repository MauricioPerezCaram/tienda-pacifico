import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <h1>Tienda Pacífico</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link to="/" className="menu-link">
            Inicio
          </Link>
          <Link to="/productos" className="menu-link">
            Productos
          </Link>
          <Link to="/carrito" className="menu-link">
            Carrito
          </Link>
          <Link to="/contacto" className="menu-link">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
