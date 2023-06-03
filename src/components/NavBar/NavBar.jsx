import { Link } from "react-router-dom";
import "./NavBar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/mapa">Mapa</Link>
      <Link to="/sobre-nosotros">Sobre Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/registrarse">Registrarse</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
