import { useEffect } from "react";
import { getAllStationsAdmin } from "../../../redux/stations/stations.actions";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Spacer
} from "@chakra-ui/react";
import AdminStationCard from "./AdminStationCard";

const AdminStations = () => {
  const { stations } = useSelector((state) => state.stations);
  useEffect(() => {
    getAllStationsAdmin();
  }, []);
  return (
    <div>
      <Flex>
        <h2>Estaciones</h2>
        <Spacer />
        <Button>CREAR NUEVA ESTACIÓN</Button>
      </Flex>
      <Divider my={5} />
      <Grid templateColumns="repeat(4, 1fr)" gap={6} gridAutoFlow="row dense">
        {stations.map((station) => {
          return (
            <AdminStationCard station={station} key={station._id}/>
          );
        })}
      </Grid>
    </div>
  );
};
AdminStations.propTypes = {
  station: PropTypes.object
}

export default AdminStations;
