import { Badge, Button, Card, CardFooter, Progress, ProgressLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { spotLoading, updateSpotState } from "../../redux/spots/spots.actions";

const StationSpots = () => {
  const { spotsByStation, spotToCharge } = useSelector((state) => state.spots);
  const { user } = useSelector((state) => state.users);
  const [chargeMode, setChargeMode] = useState({});
  const [isChargeComplete, setIsChargeComplete] = useState(false);

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
          uploadSpotLoadValue(spotId, newProgress);
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
  }, []);
  const uploadSpotLoadValue = async (spotId, loadValue) => {
    await spotLoading(spotId, loadValue);
  }

/*-----------*/



  /*--------------*/
  const handleChargeMode = async (spotId) => {
    if (chargeMode[spotId] === undefined && !spotToCharge) {
      setChargeMode((prevChargeMode) => ({
        ...prevChargeMode,
        [spotId]: 0,
      }));
      setIsChargeComplete((prevChargeComplete) => ({
        ...prevChargeComplete,
        [spotId]: false,
      }));
      await updateSpotState(spotId, "Ocupado");
    }
  };
  const disconnectSpot = async (spotId) => {
    await updateSpotState(spotId, "Libre");
    setChargeMode((prevChargeMode) => {
      const updatedChargeMode = { ...prevChargeMode };
      delete updatedChargeMode[spotId];
      return updatedChargeMode;
    });
    setIsChargeComplete(false);
  };

  return ( 
    <>
    {user === null && <p>Inicia sesión para usar los puntos de carga de esta estación</p>}
    
    {spotsByStation.map((spot) => {
    const chargingProgress = chargeMode[spot._id] || 0;
    const isCharging = chargingProgress > 0 && chargingProgress <= 100;
    const isDisabled = spotToCharge && spotToCharge._id !== spot._id;
    const spotState = isCharging ? "Ocupado" : "Libre";
    const badgeColor = getBadgeColor(spotState);
    return (
      <Card key={spot._id}>
        <p>Potencia {spot.power}</p>
        <p>Tipo {spot.type}</p>
        <p>Tarifa {spot.rate}</p>
        {isChargeComplete[spot._id] && (
          <Button
          colorScheme="green"
          onClick={ () => disconnectSpot(spot._id) }
          >
            DESCONECTAR
          </Button>
        )} 
        <CardFooter>
          {user && (
            <Button
            variant="ghost"
            colorScheme="green"
            onClick={ () => handleChargeMode(spot._id) }
            disabled={isCharging || isDisabled || spot.state === "Ocupado"}
          >
          {isChargeComplete[spot._id] ? "CARGA COMPLETA" : (isCharging ? "CARGANDO" : "CARGAR")}
          </Button> 
          )}                
        </CardFooter>
        {isChargeComplete[spot._id] ?
          <Progress value={chargingProgress} colorScheme="green" height='28px'>
            <ProgressLabel fontSize='xl'>{chargingProgress}%</ProgressLabel>
          </Progress>
        :
        isCharging && (
          <Progress isIndeterminate value={chargingProgress} colorScheme="green" height='28px'>
            <ProgressLabel color='black' fontSize='xl'>{chargingProgress}%</ProgressLabel>
          </Progress>
        )        
        }
        {spotToCharge && spotToCharge.state === 'Ocupado' && spotToCharge._id === spot._id ? (
          <Badge colorScheme={badgeColor}>
            {spotToCharge && spotToCharge._id === spot._id ? spotToCharge.state : "Ocupado"}   
          </Badge>
        ) :
        (<Badge colorScheme={badgeColor}>{spotState}</Badge>
        )}
        
        
        {/* <Badge colorScheme={badgeColor}>{spotState}</Badge>  */}

      </Card>
    );
  })}
  </>
  );
};

export default StationSpots;


// import { Badge, Button, Card, CardFooter, Progress, ProgressLabel } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { updateSpotState } from "../../redux/spots/spots.actions";

// const StationSpots = () => {
//   const { spotsByStation, spotToCharge } = useSelector((state) => state.spots);
//   const [chargeMode, setChargeMode] = useState({});
//   const [activeSpot, setActiveSpot] = useState(null);
//   const [isChargeComplete, setIsChargeComplete] = useState(false);

//   const getBadgeColor = (stateSpot) => {
//     switch (stateSpot) {
//       case "Libre":
//         return "green";
//       case "Ocupado":
//         return "red";
//       case "Fuera de Servicio":
//         return "orange";
//       default:
//         return "green";
//     }
//   };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChargeMode((prevChargeMode) => {
//         const updatedChargeMode = {...prevChargeMode};
//         let isProgressUpdated = false;
//         Object.keys(updatedChargeMode).forEach((spotId) => {
//           const newProgress = updatedChargeMode[spotId] + 5;
//           if(newProgress > 100) {
//             delete updatedChargeMode[spotId];
//             setIsChargeComplete((prevChargeComplete) => ({
//               ...prevChargeComplete,
//               [spotId]: true
//             }));
//           } else {
//             updatedChargeMode[spotId] = newProgress;
//             isProgressUpdated = true;
//           }
//         });
//         return isProgressUpdated ? updatedChargeMode : prevChargeMode;
//       });
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, [chargeMode]);
//   const handleChargeMode = async (spotId) => {
//     if (chargeMode[spotId] === undefined && activeSpot === null) {
//       setActiveSpot(spotId);
//       setChargeMode((prevChargeMode) => ({
//         ...prevChargeMode,
//         [spotId]: 0,
//       }));
//       setIsChargeComplete((prevChargeComplete) => ({
//         ...prevChargeComplete,
//         [spotId]: false,
//       }));
//       await updateSpotState(spotId, "Ocupado");
//     }
//   };
//   const disconnectSpot = async (spotId) => {
//     await updateSpotState(spotId, "Libre");
//     setChargeMode({});
//     setActiveSpot(null);
//     setIsChargeComplete(false);
//   };

//   return spotsByStation.map((spot) => {
//     const chargingProgress = chargeMode[spot._id] || 0;
//     const isCharging = chargingProgress > 0 && chargingProgress <= 100;
//     const isDisabled = activeSpot !== null && activeSpot !== spot._id;
//     const spotState = isCharging ? "Ocupado" : "Libre";
//     const badgeColor = getBadgeColor(spotState);
//     return (
//       <Card key={spot._id}>
//         <p>Potencia {spot.power}</p>
//         <p>Tipo {spot.type}</p>
//         <p>Tarifa {spot.rate}</p>
//         {isChargeComplete[spot._id] && (
//           <Button
//           colorScheme="green"
//           onClick={ () => disconnectSpot(spot._id) }
//           >
//             DESCONECTAR
//           </Button>
//         )} 
//         <CardFooter>
//           <Button
//             variant="ghost"
//             colorScheme="green"
//             onClick={ () => handleChargeMode(spot._id) }
//             disabled={isCharging || isDisabled || spot.state === "Ocupado"}
//           >
//           {isChargeComplete[spot._id] ? "CARGA COMPLETA" : (isCharging ? "CARGANDO" : "CARGAR")}
//           </Button>       
//         </CardFooter>
//         {isChargeComplete[spot._id] ?
//           <Progress value={chargingProgress} colorScheme="green" height='28px'>
//             <ProgressLabel fontSize='xl'>{chargingProgress}%</ProgressLabel>
//           </Progress>
//         :
//         isCharging && (
//           <Progress isIndeterminate value={chargingProgress} colorScheme="green" height='28px'>
//             <ProgressLabel color='black' fontSize='xl'>{chargingProgress}%</ProgressLabel>
//           </Progress>
//         )        
//         }
//         <Badge colorScheme={badgeColor}>{spotState}</Badge>        
//       </Card>
//     );
//   });
// };

// export default StationSpots;