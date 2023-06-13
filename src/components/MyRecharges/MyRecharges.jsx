//import React from 'react'
import {  Card, CardHeader,Divider, Flex, Grid, GridItem, Heading, Image,Stack, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSpotsByUser } from '../../redux/spots/spots.actions'
// import { stationsReducer } from '../../redux/stations/stations.reducer'

const MyRecharges = () => {
  // const {stations} = useSelector((state)=> state.stations)
  const { user } = useSelector((state) => state.users);
  const { spotsByUser } = useSelector((state) => state.spots);

  useEffect(() => {
    getSpotsByUser(user._id);
  }, [user._id]);

  return (
    <Flex display="column">
      <Heading size="lg">Mis Recargas</Heading>
      <Divider my={5} />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {spotsByUser.map((spot) => {
          return (
            <GridItem key={spot.updatedAt} w="100%" h="auto">
              <Card borderTopRadius={10}>
                <CardHeader margin={0} padding={0}>
                  <Image
                    src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686470412/e-load/e-load-station-01_j4ecdf.png"
                    alt="station"
                    borderTopRadius={10}
                    maxW="300px"
                  />
                </CardHeader>
                <Stack mt="6" spacing="4">
                  <Heading size="S">DIRECCION ESTACION</Heading>
                  <Divider />
                  <Text color="blue.600" fontSize="L">
                    {spot.power}
                  </Text>
                  <Text color="black.300" fontSize="xs">
                    {spot.updatedAt}
                  </Text>
                </Stack>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
}

export default MyRecharges
