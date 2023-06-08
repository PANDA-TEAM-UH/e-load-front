import { Badge, Button, Card, CardFooter, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateSpotState } from "../../redux/spots/spots.actions";
import { HighlightOff } from "@mui/icons-material";

const StationSpots = () => {
  const { spotsByStation } = useSelector((state) => state.spots);
  const [chargeMode, setChargeMode] = useState({});
  const [activeSpot, setActiveSpot] = useState(null);
  const [isChargeComplete, setIsChargeComplete] = useState(false);
  const [pausedSpot, setPausedSpot] = useState(null);
  const getBadgeColor = (stateSpot) => {
    switch (stateSpot) {
      case "Libre":
        return "green";
      case "Ocupado":
        return "red";
      case "Fuera de Servicio":
        return "orange";
      default:
        return "green";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setChargeMode((prevChargeMode) => {
        const updatedChargeMode = {...prevChargeMode};
        let isProgressUpdated = false;
        Object.keys(updatedChargeMode).forEach((spotId) => {
          const newProgress = updatedChargeMode[spotId] + 5;
          if(newProgress > 100) {
            delete updatedChargeMode[spotId];
            setIsChargeComplete((prevChargeComplete) => ({
              ...prevChargeComplete,
              [spotId]: true
            }));
          } else {
            updatedChargeMode[spotId] = newProgress;
            isProgressUpdated = true;
          }
        });
        return isProgressUpdated ? updatedChargeMode : prevChargeMode;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [chargeMode]);

  const handleChargeMode = async (spotId) => {
    if(chargeMode[spotId] === undefined && activeSpot === null) {
      setActiveSpot(spotId);
      setChargeMode((prevChargeMode) => ({
        ...prevChargeMode,
        [spotId]: 0
      }));
      setIsChargeComplete((prevChargeComplete) => ({
        ...prevChargeComplete,
        [spotId]: false
      }));
      await updateSpotState(spotId, "Ocupado");
    }
    setPausedSpot(null);  
  };
  const stopChargeMode = async (spotId) => {
    setPausedSpot(spotId);
    setIsChargeComplete((prevChargeComplete) => ({
      ...prevChargeComplete,
      [spotId]: true
    }));
  };

  return spotsByStation.map((spot) => {
    const chargingProgress = chargeMode[spot._id] || 0;
    const isCharging = chargingProgress > 0 && chargingProgress <= 100;
    const isDisabled = activeSpot !== null && activeSpot !== spot._id;
    const spotState = isCharging ? "Ocupado" : spot.state;
    const badgeColor = getBadgeColor(spotState);

    return (
      <Card key={spot._id}>
        <p>Potencia {spot.power}</p>
        <p>Tipo {spot.type}</p>
        <p>Tarifa {spot.rate}</p>
        <CardFooter>
          <Button
            variant="ghost"
            colorScheme="green"
            onClick={ () => handleChargeMode(spot._id) }
            disabled={isCharging || isDisabled}
          >
          {isChargeComplete[spot._id] ? "CARGA COMPLETA" : (isCharging ? "CARGANDO" : "CARGAR")}
          </Button>
          {isCharging && (
            <div>
            <CircularProgress value={chargingProgress} color="green" isPaused={pausedSpot === spot._id}>
              <CircularProgressLabel>{chargingProgress}%</CircularProgressLabel>
            </CircularProgress>
            <HighlightOff onClick={ () => stopChargeMode(spot._id) }/>
            </div>
          )}          
        </CardFooter>
        <Badge colorScheme={badgeColor}>{spotState}</Badge>
      </Card>
    );
  });
};

export default StationSpots;
