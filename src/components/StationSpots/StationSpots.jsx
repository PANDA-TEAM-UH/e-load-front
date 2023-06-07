import { Badge, Button, Card, CardFooter, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateSpotState } from "../../redux/spots/spots.actions";

const StationSpots = () => {
  const { spotsByStation } = useSelector((state) => state.spots);
  const [chargeMode, setChargeMode] = useState({});
  const [activeSpot, setActiveSpot] = useState(null);

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
        const updateChargeMode = {...prevChargeMode};
        Object.keys(updateChargeMode).forEach((spotId) => {
          const newProgress = updateChargeMode[spotId] + 1;
          updateChargeMode[spotId] = newProgress >= 100 ? 100 : newProgress;
        });
        return updateChargeMode;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const switchCargeMode = (spotId) => {
    setChargeMode((prevChargeMode) => ({
      ...prevChargeMode,
      [spotId]: 0
    }));
  }

  const handleChargeMode = (spotId) => {
    if(chargeMode[spotId] === undefined && activeSpot === null) {
      setActiveSpot(spotId);
      switchCargeMode(spotId);
      const updateSpotStateAndReset = async () => {
        await updateSpotState(spotId, "Ocupado");
        switchCargeMode(spotId);
        setActiveSpot(null);
        await updateSpotState(spotId, "Libre");
      }
      updateSpotStateAndReset();
    }    
  };

  return spotsByStation.map((spot) => {
    const chargingProgress = chargeMode[spot._id] || 0;
    const isCharging = chargingProgress > 0 && chargingProgress < 100;
    const isDisabled = activeSpot !== null && activeSpot !== spot._id;
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
          {isCharging ? "CARGANDO" : "CARGAR"}
          </Button>
          {isCharging && (
            <CircularProgress value={chargingProgress} color="green">
              <CircularProgressLabel>{chargingProgress}%</CircularProgressLabel>
            </CircularProgress>
          )}          
        </CardFooter>
        <Badge colorScheme={getBadgeColor(spot.state)}>{spot.state}</Badge>
      </Card>
    );
  });
};

export default StationSpots;
