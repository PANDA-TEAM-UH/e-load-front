// import { useNavigate } from 'react-router-dom';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import {
//     FormControl,
//     FormLabel,
//     Input,
//     Button,
//     FormErrorMessage,
// } from '@chakra-ui/react';
import './LoginForm.scss';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { login } from '../../redux/users/users.actions';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const { error } = useSelector((state) => state.users);
    return (
        <div className="b-login">
            <form
                className="b-login-form"
                onSubmit={handleSubmit((dataLogin) => login(dataLogin))}
            >
                <input
                    className="b-login-forminput"
                    {...register("username")}
                    placeholder="Usuario"
                />
                <input
                    className="b-login-forminput"
                    {...register("password")}
                    placeholder="Contraseña"
                    type="password"
                />
                <p className="b-login-formerror">{error}</p>
                <button className="b-login-formbtn">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
