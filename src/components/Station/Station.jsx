import { useState } from "react";
import PropTypes from "prop-types";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { AccessTime, Chat, FavoriteBorder, Power } from "@mui/icons-material";
import { getCommentsByStation } from "../../redux/comments/comments.actions";
import StationSpots from "../StationSpots/StationSpots";
import StationComments from "../StationComments/StationComments";
const Station = ({ isOpen, onClose }) => {
    const { stationSelected } = useSelector((state) => state.stations);    
    const [showSpots, setShowSpots] = useState(true);
    const [showComments, setShowComments] = useState(false);

    const handleSpotsClick = async () => {
      setShowComments(false);
      setShowSpots(true);
    }
    const handleCommentsClick = async () => {
      await getCommentsByStation(stationSelected._id);
      setShowSpots(false);
      setShowComments(true);
    }
    const handleCloseDrawer = () => {
      onClose();
      handleSpotsClick();
    }
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={handleCloseDrawer}
      // finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{stationSelected.address}</DrawerHeader>
        <DrawerBody>
            <FavoriteBorder/>{stationSelected.likes}
            <AccessTime/>{stationSelected.schedule}
            <Power onClick={handleSpotsClick}/>            
            <Chat onClick={handleCommentsClick}/>
            {showSpots && <StationSpots/>}
            {showComments && <StationComments/>}
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
Station.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default Station;
