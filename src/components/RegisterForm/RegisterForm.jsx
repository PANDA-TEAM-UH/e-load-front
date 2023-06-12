import { createUser } from '../../redux/users/users.actions'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Box, Center, FormLabel, Input, Button, Stack, Text, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import UploadFile from "../../components/UploadFile/UploadFile";
import { useState } from 'react';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const { error } = useSelector((state) => state.users);
    const [image, setImage] = useState();
    const navigate = useNavigate();

    return (
        <Stack pt={4} pb={10}>
            <form onSubmit={handleSubmit((dataRegister) => createUser(dataRegister, navigate))}>
                <Center>
                    <Box width="300px">
                        <FormLabel htmlFor="username" fontWeight={600} pt={2} pb={1}>Usuario</FormLabel>
                        <Input {...register("username")} placeholder="Usuario" />
                        <FormLabel htmlFor="email" fontWeight={600} pt={2} pb={1}>Email</FormLabel>
                        <Input {...register("email")} placeholder="Correo electrónico" type="email" />
                        <FormLabel htmlFor="name" fontWeight={600} pt={2} pb={1}>Nombre</FormLabel>
                        <Input {...register("name")} placeholder="Nombre" />
                        <FormLabel htmlFor="surnames" fontWeight={600} pt={2} pb={1}>Apellidos</FormLabel>
                        <Input {...register("surnames")} placeholder="Apellidos" />
                        <FormLabel htmlFor="password" fontWeight={600} pt={2} pb={1}>Contraseña</FormLabel>
                        <Input {...register("password")} placeholder="Contraseña" type="password" />
                        <UploadFile
                            isRegister={true}
                            register={register}
                            funcion={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                        />
                        <Flex alignItems="center" justifyContent="center" textAlign="center" fontWeight={600} p={6}>
                            <Text color="redColor">{error}</Text>
                        </Flex>
                        <Button type="submit" bg={'defaultColor'} color={'whiteColor'} _hover={{ bg: "secondaryColor", color: "defaultColor" }}>
                            Registrarse
                        </Button>
                    </Box>
                </Center>
            </form>
        </Stack>
    );
};


export default RegisterForm
