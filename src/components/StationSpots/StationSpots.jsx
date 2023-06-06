import { Badge, Button, Card, CardFooter, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { useSelector } from "react-redux";

const StationSpots = () => {
  const { spotsByStation } = useSelector((state) => state.spots);
  const [chargeMode, setChargeMode] = useState({});
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
          const newProgress = updateChargeMode[spotId] + 0.5;
          updateChargeMode[spotId] = newProgress >= 100 ? 100 : newProgress;
        });
        return updateChargeMode;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleChargeMode = (spotId) => {
    setChargeMode((prevChargeMode) => ({
      ...prevChargeMode,
      [spotId]: 0
    }));
  };

  return spotsByStation.map((spot) => {
    const chargingProgress = chargeMode[spot._id] || 0;
    const isCharging = chargingProgress > 0 && chargingProgress < 100;
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
            disabled={isCharging}
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
