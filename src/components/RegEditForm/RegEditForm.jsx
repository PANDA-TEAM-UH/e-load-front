import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormControl,
	FormLabel,
	Input,
	Button,
	FormHelperText,
} from '@chakra-ui/react';
import './RegEditForm.scss';

import {
	createUser,
	updateUser,
} from '../../redux/users/users.actions';

const RegEditForm = ({ isEditing }) => {
	const [nombre, setNombre] = useState('');
	const [apellidos, setApellidos] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [image, setImage] = useState('');

	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.users)
	
	useEffect(() => {
		// Valores iniciales si el usuario existe
		if (user && isEditing) {
			setNombre(user.nombre);
			setApellidos(user.apellidos);
			setEmail(user.email);
		}
	}, [user, isEditing]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {
			username: nombre,
			email: email,
			password: password,
			image: image
		};

		if (isEditing) {
			dispatch(updateUser(user.id, formData));
		} else {
			dispatch(createUser(formData));
		}

		// Reset cuando hagamos submit
		setNombre('');
		setApellidos('');
		setEmail('');
		setPassword('');
		setImage('');
	};

	return (
		<div className="reg-edit-form">
			<form onSubmit={handleSubmit}>
				<FormControl>
					<FormLabel>Nombre</FormLabel>
					<Input
						type="text"
						value={nombre}
						onChange={(e) => setNombre(e.target.value)}
					/>

					<FormLabel>Apellidos</FormLabel>
					<Input
						type="text"
						value={apellidos}
						onChange={(e) => setApellidos(e.target.value)}
					/>

					<FormLabel>Email</FormLabel>
					<Input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					{!isEditing && (
						<>
							<FormLabel>Contraseña</FormLabel>
							<Input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</>
					)}

					<FormLabel>Imagen</FormLabel>
					<Input
						type="file"
						onChange={(e) => setImage(e.target.files[0])}
					/>

					<FormHelperText>
						La imagen debe ser en formato JPG, PNG o GIF.
					</FormHelperText>

					<Button type="submit" colorScheme="blue" mt={4}>
						{isEditing ? 'Guardar' : 'Registrarse'}
					</Button>
				</FormControl>
			</form>
		</div>
	);
};

export default RegEditForm;
