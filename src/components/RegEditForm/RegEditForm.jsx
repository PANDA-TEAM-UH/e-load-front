import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormLabel, Input, Button, Box, Avatar, Flex } from '@chakra-ui/react';
import { updateUser } from '../../redux/users/users.actions';

const RegEditForm = () => {
	const [selectedImage, setSelectedImage] = useState('');
	const inputFileRef = React.createRef();

	const { user } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			if (selectedImage) {
				URL.revokeObjectURL(selectedImage);
			}
		};
	}, [selectedImage]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData(e.target);

		if (user) {
			dispatch(updateUser(user.id, formData));
		}
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		setSelectedImage(URL.createObjectURL(file));
	};

	return (
		<Box>
			<Flex as={Flex} flexWrap="wrap">	
				<Box w="200px" pr="4" style={{ margin: '0 auto' }} align="center">
					<Box mb={4}>
						{selectedImage ? (
							<Avatar size='xl' src={selectedImage} />
						) : (
							<Avatar size='xl' src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686469069/e-load/e-load-avatar_e0k9w4.png" alt="User" />
						)}
					</Box>
					<Button
						as="label"
						htmlFor="image-upload"
						variant="outline"
						colorScheme="defaultColor"
						mt={2}
						cursor="pointer"
						_hover={{bg: "defaultColor", color:"whiteColor"}}
						mb={5}
					>
						Editar imagen
					</Button>

					<Input
						id="image-upload"
						ref={inputFileRef}
						type="file"
						accept="image/*"
						style={{ display: 'none' }}
						onChange={handleImageChange}
					/>
				</Box>
				<form onSubmit={handleSubmit}>
					<FormLabel fontWeight={600}>Nombre de usuario</FormLabel>
					<Input
						type="text"
						name="username"
						defaultValue={user?.username || ''}
					/>

					<FormLabel fontWeight={600} pt={2}>Nombre</FormLabel>
					<Input
						type="text"
						name="name"
						defaultValue={user?.name || ''}
					/>

					<FormLabel fontWeight={600} pt={2}>Apellidos</FormLabel>
					<Input
						type="text"
						name="surnames"
						defaultValue={user?.surnames || ''}
					/>

					<FormLabel fontWeight={600} pt={2}>Email</FormLabel>
					<Input
						type="email"
						name="email"
						defaultValue={user?.email || ''}
					/>

					<FormLabel fontWeight={600} pt={2}>Contraseña</FormLabel>
					<Input
						type="password"
						name="password"
						defaultValue={user?.password || ''}
					/>
					<Button type="submit" bg={'defaultColor'} color={'whiteColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}} mt={4}>
						Guardar
					</Button>
				</form>
			</Flex>
		</Box>
	);
};

export default RegEditForm;
