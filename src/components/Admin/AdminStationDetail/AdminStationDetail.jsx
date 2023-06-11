import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getStationById } from "../../../redux/stations/stations.actions";
import { useSelector } from "react-redux";
import { Button, Divider, Flex, Grid, Spacer, Spinner } from "@chakra-ui/react";
import AdminStationDetailSpot from "./AdminStationDetailSpot";
import { getSpotsByStation } from "../../../redux/spots/spots.actions";

const AdminStationDetail = () => {
    const { id } = useParams();
    const { stationSelected } = useSelector((state) => state.stations);
    const { loading, spotsByStation } = useSelector((state) => state.spots);

    useEffect(() => {
        getStationById(id);
        getSpotsByStation(id);
    },[id]);
    if(loading || !stationSelected){
        return(
            <Flex justify="center" align="center" height="100vh">
            <Spinner size="xl" />
        </Flex>
        )
    }
  return (
    <Flex minWidth='100%' flexDir='column'>
      <Flex >
        <h2>{stationSelected.address}</h2>
        <Spacer />
        <Button>EDITAR</Button>
      </Flex>
      <Divider my={5} />
      <Flex gap={6}>
        <Flex direction="column">
            <h3>Coordenadas:</h3>
            <p>Latitud:  {stationSelected.coordinates.north}</p>
            <p>Longitud:  {stationSelected.coordinates.west}</p>
            <Link to={`https://maps.google.com/?q=${stationSelected.coordinates.north},${stationSelected.coordinates.west}`} target="_blank" rel="noopener noreferrer">Ver en Google Maps</Link>
            <Divider my={6}/>
            <p>Horario: {stationSelected.schedule}</p>
            <p>Puestos de Carga: {stationSelected.spots.length}</p>
            <Divider my={6}/>
            <p>Me gusta: {stationSelected.likes}</p>
            <Button mt={3}>Comentarios</Button>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} gridAutoFlow="row dense">
        {spotsByStation.map((spot) => {
            return (
                <AdminStationDetailSpot spot={spot} key={spot._id}/>
          );
        })}
      </Grid>
      </Flex>
      
    </Flex>
  )
}

export default AdminStationDetail

