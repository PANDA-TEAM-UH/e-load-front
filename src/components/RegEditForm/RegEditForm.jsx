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

	const dispatch = useDispatch(); // Obtiene la función dispatch
	const userData = useSelector((state) => state.posts)

	useEffect(() => {
		// Si hay datos de usuario en Redux y estamos en modo edición, establece los valores iniciales del formulario
		if (userData && isEditing) {
			setNombre(userData.nombre);
			setApellidos(userData.apellidos);
			setEmail(userData.email);
		}
	}, [userData, isEditing]);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Crea un objeto con los datos del formulario
		const formData = {
			username: nombre,
			email: email,
			password: password,
			image: image
		};

		if (isEditing) {
			// Llama a la acción updateUser y pasa los datos del formulario y el ID del usuario
			dispatch(updateUser(userData.id, formData));
		} else {
			// Llama a la acción createUser y pasa los datos del formulario
			dispatch(createUser(formData));
		}

		// Reinicia los campos del formulario
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
