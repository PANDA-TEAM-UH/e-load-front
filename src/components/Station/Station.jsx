import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Card
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AccessTime, FavoriteBorder } from "@mui/icons-material";
const Station = ({ isOpen, onClose }) => {
    const { stationSelected } = useSelector((state) => state.stations);
    const { spotsByStation } = useSelector((state) => state.spots);
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{stationSelected.address}</DrawerHeader>

        <DrawerBody>
            <FavoriteBorder/>{stationSelected.likes}
            <AccessTime/>{stationSelected.schedule}
            {spotsByStation.map((spot) => {
              return (
                <Card key={spot._id}>
                  <p>Potencia {spot.power}</p>
                  <p>Tipo {spot.type}</p>
                  <p>Tarifa {spot.rate}</p>
                  <p>Estado {spot.state}</p>
                </Card>
              )
            })}
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Station;
