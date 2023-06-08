import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './NavBar.scss';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<div className="navbar">
			<Link to="/">Inicio</Link>
			<Link to="/mapa">Mapa</Link>
			<Link to="/sobre-nosotros">Sobre Nosotros</Link>
			<Link to="/contacto">Contacto</Link>
			<Link to="/register">Registrarse</Link>
			<Button onClick={onOpen}>Login</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Login</ModalHeader>
					<ModalCloseButton onClick={onClose}/>
					<ModalBody>
						<LoginForm onClose={onClose}/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</div>
	);
};

export default Navbar;
