import { Button, ButtonGroup, CardBody, CardFooter, Flex, Text } from "@chakra-ui/react"
import PropTypes from "prop-types";

const AdminSpotCardUpdate = ({ spot, setShowInfo, setShowUpdate }) => {
    const handleInfoClick = () => {
        setShowUpdate(false);
        setShowInfo(true);
      }
  return (
    <>
    <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          bg='grayColor'
        >
          <Flex direction={"column"}>
            <Flex>
              
              <Text>Potencia: {spot.power}</Text>
            </Flex>
            <Flex>
              
              <Text>Tipo: {spot.type}</Text>
            </Flex>
            <Flex>
              
              <Text>Tarifa: {spot.rate} kW/h</Text>
            </Flex>
          </Flex>
          <Flex alignItems='center' justifyContent='center'>
          </Flex>
        </CardBody>
        <CardFooter display='flex' alignItems='center' justifyContent='center' px={1}>
          <ButtonGroup>
            <Button
              bg={"lightColor"}
                color={"defaultColor"}
                _hover={{ bg: "secondaryColor", color: "defaultColor" }}
                onClick={handleInfoClick}
            >
              CANCELAR      
            </Button>
            <Button
              variant="ghost"
              color={"redColor"}
              _hover={{ bg: "redColor", color: "whiteColor" }}
            >
              GUARDAR
            </Button>
          </ButtonGroup>
        </CardFooter>

    </>
  )
}
AdminSpotCardUpdate.propTypes = {
    spot: PropTypes.object,
    setShowInfo: PropTypes.func,
    setShowUpdate: PropTypes.func
}

export default AdminSpotCardUpdate