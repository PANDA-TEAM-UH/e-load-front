import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	Flex,
	Box,
} from '@chakra-ui/react';
import { updateUser } from '../../redux/users/users.actions';

const RegEditForm = () => {
	const [selectedImage, setSelectedImage] = useState('');
	const inputFileRef = React.createRef();

	const { user } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			setSelectedImage(user.image || '');
		}
	}, [user]);

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
		<div className="reg-edit-form">
			<Flex>
				<Box w="200px" mr="4">
					{selectedImage && <img src={selectedImage} alt="User" />}
					<Button
						as="label"
						htmlFor="image-upload"
						variant="outline"
						colorScheme="blue"
						mt={2}
						cursor="pointer"
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
					<FormControl>
						<FormLabel>Nombre de usuario</FormLabel>
						<Input
							type="text"
							name="username"
							defaultValue={user?.username || ''}
						/>

						<FormLabel>Nombre</FormLabel>
						<Input
							type="text"
							name="name"
							defaultValue={user?.name || ''}
						/>

						<FormLabel>Apellidos</FormLabel>
						<Input
							type="text"
							name="surnames"
							defaultValue={user?.surnames || ''}
						/>

						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							name="email"
							defaultValue={user?.email || ''}
						/>

						<FormLabel>Contraseña</FormLabel>
						<Input
							type="password"
							name="password"
							defaultValue={user?.password || ''}
						/>
						<Button type="submit" colorScheme="blue" mt={4}>
							{user ? 'Guardar' : 'Registrarse'}
						</Button>
					</FormControl>
				</form>
			</Flex>
		</div>
	);
};

export default RegEditForm;
