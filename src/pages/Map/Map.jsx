import React from 'react'
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.scss";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from '@chakra-ui/react'


const Map = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const positions = [[40.46106553722166, -3.6991570104577374],[40.415111, -3.694787]];

  const handleMarkerClick =  () => {
    onOpen();
  }
  return (
    <>
    <div className="leaflet-container">
      <MapContainer center={{ lat: "40.30", lng: "-3.40" }} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position) => {
          return (
            <div key={position}>
            <Marker position={position} eventHandlers={{ click: handleMarkerClick }} />
            </div>
          )
        })}
        
      </MapContainer>   
    </div>
      {/* <Button ref={btnRef} colorScheme='teal' onClick={handleMarkerClick}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Estación de carga</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Map