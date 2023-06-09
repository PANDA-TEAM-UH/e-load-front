import { createUser } from '../../redux/users/users.actions'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { FormLabel, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import UploadFile from "../../components/UploadFile/UploadFile";
import { useState } from 'react';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const { registerError } = useSelector((state) => state.users);
    const [image, setImage] = useState();
    const navigate = useNavigate();

    return (
        <form className="" onSubmit={handleSubmit((dataRegister) => createUser(dataRegister, navigate))}>
            <FormLabel htmlFor="username">Usuario</FormLabel>
            <Input
                className=""
                {...register("username")}
                placeholder="Usuario"
            />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
                className=""
                {...register("email")}
                placeholder="Correo electrónico"
                type="email"
            />
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
                className=""
                {...register("name")}
                placeholder="Nombre"
            />
            <FormLabel htmlFor="surnames">Apellidos</FormLabel>
            <Input
                className=""
                {...register("surnames")}
                placeholder="Apellidos"
            />
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
                className=""
                {...register("password")}
                placeholder="Contraseña"
                type="password"
            />
            <UploadFile
                isRegister={true}
                register={register}
                funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
            <p>{registerError}</p>
            <Button className="" type="submit">
                Registrarse
            </Button>
        </form>
    );
};


export default RegisterForm
