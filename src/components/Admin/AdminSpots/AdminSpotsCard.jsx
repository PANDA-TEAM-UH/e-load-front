import PropTypes from "prop-types";
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, GridItem, Image, Text, useDisclosure } from "@chakra-ui/react"
import { Link, NavLink } from "react-router-dom";
import { Bolt, ElectricalServices, Euro, Place } from "@mui/icons-material";
import { useEffect } from "react";
import { getStationById } from "../../../redux/stations/stations.actions";

const AdminSpotsCard = ({ spot }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    useEffect(() => {
        if(spot.station){
            getStationById(spot.station);
        }        
    }, [spot]);
    return (
    <>
        <GridItem key={spot._id} w='100%'>
        <Card minH={"350px"}>
          <CardHeader margin={0} padding={0}>
            <Image src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686470412/e-load/e-load-station-02_xqi2zr.png" />
            <Divider />
          </CardHeader>
          <CardBody display={"flex"} flexDirection={"column"} justifyContent={"space-between"}>
            <Flex direction={"column"} gap={2}>
                <Flex>
                    <Bolt/><Text fontSize='md'>Potencia: {spot.power}</Text> 
                </Flex>
                <Flex>
                    <ElectricalServices/><Text fontSize='md'>Tipo: {spot.power}</Text> 
                </Flex>
                <Flex>
                    <Euro/><Text fontSize='md'>Tarifa: {spot.rate}</Text> 
                </Flex>
                <Flex>
                    <Place/><Text fontSize='md'>Tarifa: {spot.rate}</Text> 
                </Flex>
            </Flex>

          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Link
                as={NavLink}
                // to={`/usuario/estaciones-detalle/${station._id}`}
              >
                <Button
                  bg={"lightColor"}
                  color={"defaultColor"}
                  _hover={{ bg: "secondaryColor", color: "defaultColor" }}
                >
                  VER
                </Button>
              </Link>
              <Button
                variant="ghost"
                color={"redColor"}
                _hover={{ bg: "redColor", color: "whiteColor" }}
                onClick={onOpen}
              >
                BORRAR
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
        </GridItem>
    </>
  )
}
AdminSpotsCard.propTypes = {
    spot: PropTypes.object
};

export default AdminSpotsCard



          {/* return (
            <div key={spot._id}>
              <p>{spot.power}</p>
              <p>{spot.type}</p>
              <p>{spot.rate}</p>
              <p>{spot.state}</p>
            </div>
          ); */}