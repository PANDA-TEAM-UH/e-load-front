import { Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const AdminStationForm = () => {
  return (
    <Flex direction='column' width='100%'>
        <h2>Crear Estación</h2>
        <Divider my={5}/>
        <Flex>
            <Flex w={800} minH={600} className="leaflet-container">
                <MapContainer center={{ lat: "40.30", lng: "-3.40" }} zoom={7} >
                <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
                </MapContainer>
            </Flex>
            <Flex>B</Flex>
        </Flex>
    </Flex>
  )
}

export default AdminStationForm