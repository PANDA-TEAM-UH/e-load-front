//import React from 'react'
import React, { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
} from '@chakra-ui/react';

const LoginForm = ({ onSubmit, onClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //falta utilziar redux para enviar inform

        setUsername('');
        setPassword('');

        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />

                <FormLabel>Password</FormLabel>
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <Button type="submit" colorScheme="blue" mt={4}>Login</Button>
                <Button onClick={onClose} mt={4}>Cerrar</Button>
            </FormControl>
        </form>
    );
};

export default LoginForm;
