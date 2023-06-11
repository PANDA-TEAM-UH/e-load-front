import { useEffect } from "react";
import { getAllStationsAdmin } from "../../../redux/stations/stations.actions";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Button, Divider, Flex, Grid, Spacer } from "@chakra-ui/react";
import AdminStationCard from "./AdminStationCard";
import { Link, NavLink } from "react-router-dom";

const AdminStations = () => {
  const { stationsAdmin } = useSelector((state) => state.stations);
  useEffect(() => {
    getAllStationsAdmin();
  }, []);
  return (
    <div>
      <Flex>
        <h2>Estaciones</h2>
        <Spacer />

        <Link as={NavLink} to={"/usuario/crear-estacion"}>
          <Button
          bg={'defaultColor'} color={'whiteColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}}
          >CREAR NUEVA ESTACIÓN</Button>
        </Link>
      </Flex>
      <Divider my={5} />
      <Grid templateColumns="repeat(6, 1fr)" gap={6} gridAutoFlow="row dense">
        {stationsAdmin.map((station) => {
          return <AdminStationCard station={station} key={station._id} />;
        })}
      </Grid>
    </div>
  );
};
AdminStations.propTypes = {
  station: PropTypes.object,
};

export default AdminStations;
