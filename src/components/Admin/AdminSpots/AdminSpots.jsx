import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllSpots } from "../../../redux/spots/spots.actions";
import { Button, Divider, Flex, Grid, Heading, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import AdminSpotsCard from "./AdminSpotsCard";

const AdminSpots = () => {
  const { spots } = useSelector((state) => state.spots);
  useEffect(() => {
    getAllSpots();
  }, []);
  return (
    <Flex display='column'>
      <Flex>
        <Heading size="lg">Puntos de Carga</Heading>
        <Spacer />

        <Link as={NavLink} to={"/usuario/crear-estacion"}>
          <Button
            bg={"defaultColor"}
            color={"whiteColor"}
            _hover={{ bg: "secondaryColor", color: "defaultColor" }}
          >
            CREAR NUEVO PUNTO
          </Button>
        </Link>
      </Flex>
      <Divider my={5} />
      <Grid templateColumns="repeat(6, 1fr)" gap={6} gridAutoFlow="row dense">
        {spots.map((spot) => {
          return <AdminSpotsCard spot={spot} key={spot._id}/>;
        })}
      </Grid>
    </Flex>
  );
};

export default AdminSpots;
