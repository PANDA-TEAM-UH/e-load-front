import { Link } from 'react-router-dom';
import { Flex, Stack } from '@chakra-ui/react';


const NavBar = () => {

	return (
		<Flex display={{ base: 'none', md: 'flex' }} ml={10} justify="center" alignItems="center" gap={4}>
			<Link to="/">Inicio</Link>
			<Link to="/mapa">Mapa</Link>
			<Link to="/sobre-nosotros">Sobre Nosotros</Link>
			<Link to="/contacto">Contacto</Link>
		</Flex>
	);
};

export default NavBar;
