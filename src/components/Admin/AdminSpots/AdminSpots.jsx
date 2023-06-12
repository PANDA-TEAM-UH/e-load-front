import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getAllSpots } from "../../../redux/spots/spots.actions";
import { Button, Divider, Flex, Grid, Spacer } from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const AdminSpots = () => {
    const { spots } = useSelector((state) => state.spots);
    useEffect(() => {
        getAllSpots();
    }, []);
    return (

<div>
      <Flex>
        <h2>Puntos de Carga</h2>
        <Spacer />

        <Link as={NavLink} to={"/usuario/crear-estacion"}>
          <Button
          bg={'defaultColor'} color={'whiteColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}}
          >CREAR NUEVO PUNTO</Button>
        </Link>
      </Flex>
      <Divider my={5} />
      <Grid templateColumns="repeat(6, 1fr)" gap={6} gridAutoFlow="row dense">
        {spots.map((spot) => {
          {/* return <AdminStationCard station={station} key={station._id}/>; */}
          return (
          <div key={spot._id}>
            <p>{spot.power}</p>
            <p>{spot.type}</p>
            <p>{spot.rate}</p>
            <p>{spot.state}</p>
          </div>
        )

        })}
      </Grid>
    </div>
      )
}

export default AdminSpots