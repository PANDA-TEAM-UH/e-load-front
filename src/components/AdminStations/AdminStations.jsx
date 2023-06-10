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
  Grid,
  GridItem,
} from "@chakra-ui/react";

const AdminStations = () => {
  const { stations } = useSelector((state) => state.stations);
  useEffect(() => {
    getAllStationsAdmin();
  }, []);
  return (
    <div>
      <h2>Estaciones</h2>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {stations.map((station) => {
          return (
            <GridItem key={station._id} w="100%" h="40">
              <Card>
                <CardHeader>
                  <h3>{station.address}</h3>
                </CardHeader>
                <CardBody></CardBody>
                <CardFooter>
                  <ButtonGroup>
                    <Button>VER</Button>
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
