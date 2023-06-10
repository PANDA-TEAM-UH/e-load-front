import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, GridItem, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const AdminStationDetailSpot = ({spot}) => {
 
    let imgSrc;
            switch (spot.type) {
                case 'Schuko':
                    imgSrc = 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-schuko_vov9iu.png';
                    break;
                case 'Type2':
                    imgSrc = 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png';
                    break;
                case 'CCS2':
                    imgSrc = 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-ccs2_ziy7mo.png';
                    break;
                case 'CHAdeMO':
                    imgSrc = 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-chademo_amtfq9.png';
                    break;
                default:
                    imgSrc = 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png';
                    break;
            }
  return (
    <GridItem key={spot._id} w="100%" h="auto">
              <Card borderTopRadius={10}>
                <CardHeader margin={0} padding={0} display='flex' justifyContent='center'>
                  <Image
                    boxSize='100px'
                    objectFit='contain'
                    mt={3}
                    src={imgSrc}
                  />
                </CardHeader>
                <CardBody>
                  <h3>Potencia: {spot.power}</h3>
                  <h3>Tipo: {spot.type}</h3>
                  <h3>Tarifa: {spot.rate} kW/h</h3>
                  <h3>{spot.state}</h3>
                  <Divider mt={3} />
                </CardBody>
                <CardFooter>
                  <ButtonGroup>
                    <Button>
                      <Link
                        // as={NavLink}
                        // to={`/usuario/estaciones-detalle/${station._id}`}
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
  )
}
AdminStationDetailSpot.propTypes = {
    spot: PropTypes.object
}

export default AdminStationDetailSpot