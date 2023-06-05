import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AccessTime, FavoriteBorder } from "@mui/icons-material";
const Station = ({ isOpen, onClose }) => {
    const { stationSelected } = useSelector((state) => state.stations);

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
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Station;
