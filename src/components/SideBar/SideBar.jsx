import { Flex, Link, Text } from '@chakra-ui/react';
import { AccountCircle, CreditCard, LocationOn, CardGiftcard, Error, ExitToApp, EvStationOutlined, ElectricalServices, People, ForumOutlined } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const { user } = useSelector((state) => state.users);
  return (
    <Flex
      backgroundColor="gray.200"
      width="250px"
      height="100vh"
      padding="4"
      flexDirection="column"
    >
      <Link as={NavLink} to="/usuario/" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <AccountCircle fontSize="30px" mr={2} />
          <Text fontWeight="bold">Información Personal</Text>
        </Flex>
      </Link>
      <Link as={NavLink} to="/usuario/metodos-de-pago" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <CreditCard fontSize="30px" mr={2} />
          <Text fontWeight="bold">Métodos de Pago</Text>
        </Flex>
      </Link>
      <Link as={NavLink} to="/usuario/mis-recargas" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <LocationOn fontSize="30px" mr={2} />
          <Text fontWeight="bold">Mis Recargas</Text>
        </Flex>
      </Link>
      <Link as={NavLink} to="/usuario/mis-puntos" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <CardGiftcard fontSize="30px" mr={2} />
          <Text fontWeight="bold">Mis Puntos</Text>
        </Flex>
      </Link>
      {user && user.rol === "admin" && (
        <div>
          <Link as={NavLink} to="/usuario/estaciones" display="block" pb={4} pt={4}>
            <Flex alignItems="center">
              <EvStationOutlined fontSize="30px" mr={2} />
              <Text fontWeight="bold">Estaciones</Text>
            </Flex>
          </Link>
          <Link as={NavLink} to="/usuario/puntos-carga" display="block" pb={4} pt={4}>
            <Flex alignItems="center">
              <ElectricalServices fontSize="30px" mr={2} />
              <Text fontWeight="bold">Puntos de Carga</Text>
            </Flex>
          </Link>
          <Link as={NavLink} to="/usuario/usuarios" display="block" pb={4} pt={4}>
            <Flex alignItems="center">
              <People fontSize="30px" mr={2} />
              <Text fontWeight="bold">Usuarios</Text>
            </Flex>
          </Link>
          <Link as={NavLink} to="/usuario/comentarios" display="block" pb={4} pt={4}>
            <Flex alignItems="center">
              <ForumOutlined fontSize="30px" mr={2} />
              <Text fontWeight="bold">Comentarios</Text>
            </Flex>
          </Link>
        </div>
      )}
      <Link as={NavLink} to="/usuario/reportar-error" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <Error fontSize="30px" mr={2} />
          <Text fontWeight="bold">Reportar Error</Text>
        </Flex>
      </Link>
      <Link as={NavLink} to="/" display="block" pb={4} pt={4}>
        <Flex alignItems="center">
          <ExitToApp fontSize="30px" mr={2} />
          <Text fontWeight="bold">Cerrar Sesión</Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export default SideBar;