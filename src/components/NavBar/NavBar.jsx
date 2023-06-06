import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useModal } from '../../customHooks/useModal';
import { Button } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './NavBar.scss';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <div className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/mapa">Mapa</Link>
      <Link to="/sobre-nosotros">Sobre Nosotros</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/registrarse">Registrarse</Link>
      <Button onClick={onOpen}>Login</Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Login Modal"
      >
        <h2>Login</h2>
        <LoginForm onClose={onClose} />
      </Modal>
    </div>
  );
};

export default Navbar;
