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
  Image,
} from "@chakra-ui/react";

const AdminStations = () => {
  const { stations } = useSelector((state) => state.stations);
  useEffect(() => {
    getAllStationsAdmin();
  }, []);
  return (
    <div>
      <h2>Estaciones</h2>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} gridAutoFlow="row dense">
        {stations.map((station) => {
          return (
            <GridItem key={station._id} w="100%" h="40">
              <Card>
                <CardHeader margin={0} padding={0}>
					<Image
					src='https://res.cloudinary.com/dgkm71mjf/image/upload/v1686396260/e-load/e-load-stations_mkgtko.jpg'
					/>
                  
                </CardHeader>
                <CardBody><h3>{station.address}</h3></CardBody>
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
