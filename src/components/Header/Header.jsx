import NavBar from '../NavBar/NavBar';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box, Flex, Stack, Image, useColorModeValue } from '@chakra-ui/react';
import LoginForm from '../LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import { logout } from '../../redux/users/users.actions';
import { useState } from 'react';

const Header = () => {
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
		<Box width='100%' color={useColorModeValue('whiteColor')} bg={'defaultColor'} minH={'80px'} py={{ base: 2 }}
			px={{ base: 4 }} borderBottom={1} borderStyle={'solid'} borderColor={useColorModeValue('defaultColor')} align={'center'}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
				<Image src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686469078/e-load/e-load-logo_m7r1jg.png" alt="Logo de la empresa" height={7} pl={20} />
				<NavBar />
				{user ? (
					<ProfileMenu onClose={onClose} logout={handleLogout} />
				) : (
					<>
						<Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={4}>
							<Button
								onClick={onOpen}
								bg={'whiteColor'}
								color={'defaultColor'}
								fontSize={'sm'}
								fontWeight={600}
								_hover={{ bg: 'secondaryColor', color: 'defaultColor' }}
							>
								Login
							</Button>
							<Button
								display={{ base: 'none', md: 'inline-flex' }}
								p={2}
								bg={'whiteColor'}
								color={'defaultColor'}
								fontSize={'sm'}
								fontWeight={600}
								_hover={{ bg: 'secondaryColor', color: 'defaultColor' }}
								as={'a'}
								variant={'link'}
								href={'/registro'}
							>
								Registrarse
							</Button>
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
						</Stack>
					</>
				)}
			</Flex>
		</Box>
	);
};

export default Header;
