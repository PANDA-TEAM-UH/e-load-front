import { Link } from 'react-router-dom';
import {
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { login } from '../../redux/users/users.actions';

const LoginForm = ({ onClose }) => {
    const { register, handleSubmit } = useForm();
    const { error, token } = useSelector((state) => state.users);
    
    async function dataLogin(values) {
        await login(values);
        if (token) {
            onClose();
    }

    return (
        <form
            className="b-login-form"
            onSubmit={handleSubmit(dataLogin)}
        >
            <FormLabel htmlFor="username">Usuario</FormLabel>
            <Input
                className="b-login-forminput"
                {...register("username")}
                placeholder="Usuario"
            />
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <Input
                className="b-login-forminput"
                {...register("password")}
                placeholder="Contraseña"
                type="password"
            />
            <p className="b-login-formerror">{error}</p>
            <Button className="b-login-formbtn" type="submit">
                Iniciar Sesión
            </Button>
            <Link to="/registro" onClick={onClose}>No tienes cuenta? Regístrate</Link>
        </form>
    );
};

export default LoginForm;
