import { Link } from 'react-router-dom';
import { Flex, Menu, MenuButton, MenuList, MenuItem, Text, Image, Divider } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProfileMenu = ({ onClose, logout }) => {
    const { user } = useSelector((state) => state.users);
    const userMenu = [
        {
            title: 'Información Personal',
            url: '/usuario'
        },
        {
            title: 'Métodos de Pago',
            url: '/usuario/metodos-de-pago'
        },
        {
            title: 'Mis Recargas',
            url: '/usuario/mis-recargas'
        },
        {
            title: 'Mis Puntos',
            url: '/usuario/mis-puntos'
        }];


    const adminMenu = [
        {
            title: 'Estaciones',
            url: '/usuario/estaciones'
        },
        {
            title: 'Puntos de Carga',
            url: '/usuario/puntos-carga'
        },
        {
            title: 'Usuarios',
            url: '/usuario/usuarios'
        },
        {
            title: 'Comentarios',
            url: '/usuario/comentarios'
        }];

    return (
        <Menu>
            <MenuButton as={Flex} align="center" cursor="pointer" wrap="nowrap" justifyContent="space-between" pr={10}>
                <Flex align="center" gap={2}>
                    {user.image ? (
                        <Image src={user.image} borderRadius="50%" boxSize="40px" />
                    ) : (
                        <Image src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686469069/e-load/e-load-avatar_e0k9w4.png" borderRadius="50%" boxSize="40px" />
                    )}
                    <Text ml="0.5rem">{user.name}</Text>
                </Flex>
            </MenuButton>

            <MenuList bg="grayColor" p={4}>
                {userMenu.map((menuOption) => (
                    <MenuItem as={Link} to={menuOption.url} bg="grayColor" color="defaultColor" fontWeight={600} _hover={{ bg: 'defaultColor', color: 'whiteColor'}} key={menuOption}>
                        {menuOption.title}
                    </MenuItem>
                ))}
                {user && user.rol === 'admin' && (
                    <>
                        <Divider my={2} borderColor="defaultColor" />
                        {adminMenu.map((menuOption) => (
                            <MenuItem as={Link} to={menuOption.url} bg="grayColor" color="defaultColor" fontWeight={600} _hover={{ bg: 'defaultColor', color: 'whiteColor'}} key={menuOption}>
                                {menuOption.title}
                            </MenuItem>
                        ))}
                    </>
                )}
                <Divider my={2} borderColor="defaultColor" />
                <MenuItem onClick={logout} onClose={onClose} bg="grayColor" color="defaultColor" fontWeight={600} _hover={{ bg: 'defaultColor', color: 'whiteColor' }}>
                    Cerrar Sesión
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default ProfileMenu;
