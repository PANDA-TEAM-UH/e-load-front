import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getStationById } from "../../../redux/stations/stations.actions";
import { useSelector } from "react-redux";
import { Button, useDisclosure, Flex, Spacer, Divider, Grid, Spinner } from "@chakra-ui/react";
import AdminStationDetailSpot from "./AdminStationDetailSpot";
import { getSpotsByStation } from "../../../redux/spots/spots.actions";
import AdminStationDetailEdit from "./AdminStationDetailEdit";
import AdminStationDeleteAlert from "../AdminStations/AdminStationDeleteAlert";

const AdminStationDetail = () => {
  const { id } = useParams();
  const { loading, stationSelected } = useSelector((state) => state.stations);
  const { spotsByStation } = useSelector((state) => state.spots);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  useEffect(() => {
    getStationById(id);
    getSpotsByStation(id);
  }, [id]);
  if (loading || !stationSelected) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <>
      <Flex minWidth="100%" flexDir="column">
        <Flex alignItems="center">
          <h2>{stationSelected.address}</h2>
          <Spacer />
          <Flex alignItems="center" gap={3}>
            <AdminStationDetailEdit />
            <Button
              bg={"redColor"}
              color={"whiteColor"}
              _hover={{ bg: "redColor", color: "defaultColor" }}
              onClick={onOpen}
            >
              BORRAR
            </Button>
          </Flex>
        </Flex>
        <Divider my={5} />
        <Flex gap={6}>
          <Flex direction="column">
            <h3>Coordenadas:</h3>
            <p>Latitud: {stationSelected.coordinates.lat}</p>
            <p>Longitud: {stationSelected.coordinates.lng}</p>
            <Link
              to={`https://maps.google.com/?q=${stationSelected.coordinates.lat},${stationSelected.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </Link>
            <Divider my={6} />
            <p>Horario: {stationSelected.schedule}</p>
            <p>Puestos de Carga: {stationSelected.spots.length}</p>
            <Divider my={6} />
            <p>Me gusta: {stationSelected.likes}</p>
            <Button
              mt={3}
              bg={"lightColor"}
              color={"defaultColor"}
              _hover={{ bg: "secondaryColor", color: "defaultColor" }}
            >
              Comentarios
            </Button>
          </Flex>
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={6}
            gridAutoFlow="row dense"
          >
            {spotsByStation.map((spot) => {
              return <AdminStationDetailSpot spot={spot} key={spot._id} />;
            })}
          </Grid>
        </Flex>
      </Flex>
      {isOpen && <AdminStationDeleteAlert isOpen={isOpen} onClose={onClose} station={stationSelected} isAdminStationDetail/>}
    </>
  );
};

export default AdminStationDetail;
