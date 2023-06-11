import { Link } from 'react-router-dom';
import { Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const ProfileMenu = ({onClose, logout}) => {
    const { user } = useSelector((state) => state.users);

    return (
        <Menu>
            <MenuButton as={Flex} align="center" cursor="pointer">
                <img
                    src={user.image}
                    alt={user.name}
                    style={{ marginLeft: '0.5rem', width: '45px', height: '40px', borderRadius: '50%' }}
                />
                <span>{user.name}</span>
            </MenuButton>
            <MenuList>
                <MenuItem as={Link} to="/usuario">Información Personal</MenuItem>
                <MenuItem as={Link} to="/usuario/metodos-de-pago">Métodos de Pago</MenuItem>
                <MenuItem as={Link} to="/usuario/mis-recargas">Mis Recargas</MenuItem>
                <MenuItem as={Link} to="/usuario/mis-puntos">Mis Puntos</MenuItem>
                {user && user.rol === "admin" && (
                    <>
                        {/* Modificar al dar estilos y añadirlo a .scss el div inferior a esta linea */}
			            <div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }} />
                        <MenuItem as={Link} to="/usuario/estaciones">Estaciones</MenuItem>
                        <MenuItem as={Link} to="/usuario/puntos-carga">Puntos de Carga</MenuItem>
                        <MenuItem as={Link} to="/usuario/usuarios">Usuarios</MenuItem>
                        <MenuItem as={Link} to="/usuario/comentarios">Comentarios</MenuItem>
                    </>
                )}
                {/* Modificar al dar estilos y añadirlo a .scss el div inferior a esta linea */}
			    <div style={{ borderBottom: '1px solid #ccc', margin: '8px 0' }} />
                <MenuItem onClick={logout} onClose={onClose}>Cerrar Sesión</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default ProfileMenu;
