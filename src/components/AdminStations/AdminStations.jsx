import { useEffect } from "react";
import { getAllStationsAdmin } from "../../redux/stations/stations.actions";
import { useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

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
            <GridItem key={station._id} w="100%" h="auto">
              <Card borderTopRadius={10}>
                <CardHeader margin={0} padding={0}>
                  <Image
                    src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686470412/e-load/e-load-station-02_xqi2zr.png"
                  />
                  <Divider/>
                </CardHeader>
                <CardBody>
                  <h3>{station.address}</h3>
                </CardBody>
                <CardFooter>
                  <ButtonGroup>
                    <Button>
                      <Link
                        as={NavLink}
                        to={`/usuario/estaciones-detalle/${station._id}`}
                      >
                        VER
                      </Link>
                    </Button>
                    <Button variant="ghost" colorScheme="red">
                      BORRAR
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default AdminStations;
