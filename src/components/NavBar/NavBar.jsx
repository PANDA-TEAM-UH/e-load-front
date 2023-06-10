import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import LoginForm from '../LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { logout } from '../../redux/users/users.actions';
import './NavBar.scss';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const onOpen = () => {
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	const handleLogout = () => {
		logout();
		onClose(); 
	};

	const { user } = useSelector((state) => state.users);

	return (
		<div className="navbar" style={{ display: 'flex', justifyContent: 'center' }}>
			<nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
				<Link to="/">Inicio</Link>
				<Link to="/mapa">Mapa</Link>
				<Link to="/sobre-nosotros">Sobre Nosotros</Link>
				<Link to="/contacto">Contacto</Link>
				<div style={{ marginLeft: 'auto' }}>
					{user ? (
						<ProfileMenu onClose={onClose} logout={handleLogout}/>
					) : (
						<>
							<Link to="/registro">Registrarse</Link>
							<Button onClick={onOpen}>Login</Button>
							<Modal isOpen={isOpen} onClose={onClose}>
								<ModalOverlay />
								<ModalContent>
									<ModalHeader>Login</ModalHeader>
									<ModalCloseButton onClick={onClose} />
									<ModalBody>
										<LoginForm onClose={onClose} />
									</ModalBody>
								</ModalContent>
							</Modal>
						</>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
