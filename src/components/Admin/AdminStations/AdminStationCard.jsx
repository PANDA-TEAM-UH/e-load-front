import PropTypes from "prop-types";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";

const AdminStationCard = ({ station }) => {
  return (
    <GridItem key={station._id} w="100%">
      <Card minH={'350px'}>
        <CardHeader margin={0} padding={0}>
          <Image src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686470412/e-load/e-load-station-02_xqi2zr.png" />
          <Divider />
        </CardHeader>
        <CardBody>
          <h3>{station.address}</h3>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Link
              as={NavLink}
              to={`/usuario/estaciones-detalle/${station._id}`}
            >
              <Button
                bg={'lightColor'} color={'defaultColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}}
              >VER</Button>
            </Link>
            <Button
              variant="ghost"
              color={'redColor'} _hover={{bg: "redColor", color:"whiteColor"}}
            >
              BORRAR
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
AdminStationCard.propTypes = {
  station: PropTypes.object,
};
export default AdminStationCard;
