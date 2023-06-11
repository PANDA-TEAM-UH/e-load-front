import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { getAllStations, getStationById } from "../../redux/stations/stations.actions";
import Station from "../../components/Station/Station";
import { getSpotsByStation } from "../../redux/spots/spots.actions";

const Map = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, stations } = useSelector((state) => state.stations);
  const [selectedStation, setSelectedStation] = useState(null);

  const handleMarkerClick = async (station) => {
    await getSpotsByStation(station._id);
    await getStationById(station._id);
    setSelectedStation(station);
    onOpen();
  };

  useEffect(() => {
    getAllStations();
  }, []);
 
  return (
    <>
      <div className="leaflet-container">
        <MapContainer center={{ lat: "40.30", lng: "-3.40" }} zoom={7}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {stations.map((station) => {
            const position = [
              station.coordinates.north,
              station.coordinates.west,
            ];
            return (
              <div key={position}>
                <Marker
                  position={position}
                  eventHandlers={{ click: () => handleMarkerClick(station) }}
                />
              </div>
            );
          })}
        </MapContainer>
      </div>
      {selectedStation && <Station isOpen={isOpen} onClose={onClose}/>}
    </>
  );
};

export default Map;
