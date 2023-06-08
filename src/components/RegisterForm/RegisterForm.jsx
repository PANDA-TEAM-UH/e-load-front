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
            <FormLabel htmlFor="password">Email</FormLabel>
            <Input
                className=""
                {...register("email")}
                placeholder="Correo electrónico"
                type="email"
            />
            <FormLabel htmlFor="email">Nombre</FormLabel>
            <Input
                className=""
                {...register("name")}
                placeholder="Nombre"
            />
            <FormLabel htmlFor="email">Apellidos</FormLabel>
            <Input
                className=""
                {...register("surnames")}
                placeholder="Apellidos"
            />
            <FormLabel htmlFor="email">Contraseña</FormLabel>
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
            <Button className="b-login-formbtn" type="submit">
                Registrarse
            </Button>
        </form>
    );
};


export default RegisterForm
