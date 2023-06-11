//import React from 'react'
import {  Card, CardBody,CardHeader,Divider, Flex, Grid, GridItem, Heading, Image,Stack, Text } from '@chakra-ui/react'
import './MyRecharges.scss'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSpotsByUser } from '../../redux/spots/spots.actions'
// import { stationsReducer } from '../../redux/stations/stations.reducer'

const MyRecharges = () => {

// const {stations} = useSelector((state)=> state.stations) 
 const {user} = useSelector((state)=> state.users)
 const {spotsByUser} = useSelector((state)=> state.spots) 

useEffect( () => {

getSpotsByUser(user._id)
  
},[user._id])

return (
  <div>
    <h2>MIS RECARGAS</h2>
    <Grid templateColumns="repeat(4, 1fr)" gap={6} >
   
      {spotsByUser.map((spot) => {
        return (
          <GridItem key={spot._id} w="100%" h="auto" >
            <Card borderTopRadius={10}>
              <CardHeader margin={0} padding={0}>
                <Image
                  src='https://res.cloudinary.com/dgkm71mjf/image/upload/v1686396260/e-load/e-load-recargas_ylr88f.jpg'
                  alt='station'
                  borderTopRadius={10}
                  maxW='300px'
                />
              </CardHeader>                
              <Stack mt='6' spacing='4'>
                <Heading size='S'>DIRECCION ESTACION</Heading>
                <Divider/>
                <Text color='blue.600' fontSize='L'>{spot.power}</Text>
                <Text color='black.300' fontSize='xs'>{spot.updatedAt}</Text>
              </Stack>            
            </Card>
          </GridItem>
        );
      })}
    </Grid>
    
  </div>
   ) }

export default MyRecharges
