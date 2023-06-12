import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Image, Text } from '@chakra-ui/react';
import PropTypes from "prop-types";
import { Bolt, ElectricalServices, Euro } from '@mui/icons-material';
import AdminSpotUpdate from './AdminSpotCardUpdate';
import { useState } from 'react';

const AdminSpotCard = ({ spot }) => {
  const [showInfo, setShowInfo] = useState(true);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleInfoClick = () => {
    setShowUpdate(false);
    setShowInfo(true);
  }
  const handleUpdateClick = () => {
    setShowInfo(false);
    setShowUpdate(true);
  }

  const getBadgeColor = (spotState) => {
    switch(spotState) {
      case "Libre":
        return "secondaryColor";
      case "Ocupado":
        return "redColor";
      case "Fuera de Servicio":
        return "orangeColor";
      default:
        return "secondaryColor";
    }
  }
  const badgeColor = getBadgeColor(spot.state);

  let imgSrc;
  switch (spot.type) {
    case "Schuko":
      imgSrc =
        "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-schuko_vov9iu.png";
      break;
    case "Type2":
      imgSrc =
        "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png";
      break;
    case "CCS2":
      imgSrc =
        "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-ccs2_ziy7mo.png";
      break;
    case "CHAdeMO":
      imgSrc =
        "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-chademo_amtfq9.png";
      break;
    default:
      imgSrc =
        "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png";
      break;
  }
  return (
    <>
    <GridItem key={spot._id} w="100%" h="auto">
      <Card minH={"350px"} border='1px solid' borderColor='grayColor'>
        <CardHeader
          margin={0}
          py={1}
          display="flex"
          justifyContent="center"
        >
          <Image boxSize="100px" objectFit="contain" mt={3} src={imgSrc} />
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          bg='grayColor'
        >
          <Flex direction={"column"}>
            <Flex>
              <Bolt />
              <Text>Potencia: {spot.power}</Text>
            </Flex>
            <Flex>
              <ElectricalServices />
              <Text>Tipo: {spot.type}</Text>
            </Flex>
            <Flex>
              <Euro />
              <Text>Tarifa: {spot.rate} kW/h</Text>
            </Flex>
          </Flex>
          <Flex alignItems='center' justifyContent='center'>
            <Text color={badgeColor} textTransform="uppercase" fontWeight={600}>{spot.state}</Text>
          </Flex>
        </CardBody>
        <CardFooter>
          <ButtonGroup>
            <Button
              bg={"lightColor"}
                color={"defaultColor"}
                _hover={{ bg: "secondaryColor", color: "defaultColor" }}
            >
              EDITAR      
            </Button>
            <Button
              variant="ghost"
              color={"redColor"}
              _hover={{ bg: "redColor", color: "whiteColor" }}
            >
              BORRAR
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
    </>
  );
};
AdminSpotCard.propTypes = {
    spot: PropTypes.object,
}

export default AdminSpotCard




// import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Flex, GridItem, Image, Text } from '@chakra-ui/react';
// import PropTypes from "prop-types";
// import { Bolt, ElectricalServices, Euro } from '@mui/icons-material';
// import AdminSpotUpdate from './AdminSpotUpdate';

// const AdminSpotCard = ({ spot }) => {
//   const getBadgeColor = (spotState) => {
//     switch(spotState) {
//       case "Libre":
//         return "secondaryColor";
//       case "Ocupado":
//         return "redColor";
//       case "Fuera de Servicio":
//         return "orangeColor";
//       default:
//         return "secondaryColor";
//     }
//   }
//   const badgeColor = getBadgeColor(spot.state);

//   let imgSrc;
//   switch (spot.type) {
//     case "Schuko":
//       imgSrc =
//         "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-schuko_vov9iu.png";
//       break;
//     case "Type2":
//       imgSrc =
//         "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png";
//       break;
//     case "CCS2":
//       imgSrc =
//         "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-ccs2_ziy7mo.png";
//       break;
//     case "CHAdeMO":
//       imgSrc =
//         "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-chademo_amtfq9.png";
//       break;
//     default:
//       imgSrc =
//         "https://res.cloudinary.com/dgkm71mjf/image/upload/v1686421429/e-load/conector-type2_o9hlej.png";
//       break;
//   }
//   return (
//     <>
//     <GridItem key={spot._id} w="100%" h="auto">
//       <Card minH={"350px"} border='1px solid' borderColor='grayColor'>
//         <CardHeader
//           margin={0}
//           py={1}
//           display="flex"
//           justifyContent="center"
//         >
//           <Image boxSize="100px" objectFit="contain" mt={3} src={imgSrc} />
//         </CardHeader>
//         <CardBody
//           display={"flex"}
//           flexDirection={"column"}
//           justifyContent={"space-between"}
//           bg='grayColor'
//         >
//           <Flex direction={"column"}>
//             <Flex>
//               <Bolt />
//               <Text>Potencia: {spot.power}</Text>
//             </Flex>
//             <Flex>
//               <ElectricalServices />
//               <Text>Tipo: {spot.type}</Text>
//             </Flex>
//             <Flex>
//               <Euro />
//               <Text>Tarifa: {spot.rate} kW/h</Text>
//             </Flex>
//           </Flex>
//           <Flex alignItems='center' justifyContent='center'>
//             <Text color={badgeColor} textTransform="uppercase" fontWeight={600}>{spot.state}</Text>
//           </Flex>
//         </CardBody>
//         <CardFooter>
//           <ButtonGroup>
//             <Button
//               bg={"lightColor"}
//                 color={"defaultColor"}
//                 _hover={{ bg: "secondaryColor", color: "defaultColor" }}
//             >
//               EDITAR      
//             </Button>
//             <Button
//               variant="ghost"
//               color={"redColor"}
//               _hover={{ bg: "redColor", color: "whiteColor" }}
//             >
//               BORRAR
//             </Button>
//           </ButtonGroup>
//         </CardFooter>
//       </Card>
//     </GridItem>
//     </>
//   );
// };
// AdminSpotCard.propTypes = {
//     spot: PropTypes.object,
// }

// export default AdminSpotCard