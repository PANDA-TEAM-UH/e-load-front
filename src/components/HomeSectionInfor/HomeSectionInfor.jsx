
// import {
//     Box,
//     chakra,
//     Flex,
//     SimpleGrid,
//     Stat,
//     StatLabel,
//     StatNumber,
//     useColorModeValue,
//   } from '@chakra-ui/react';
//   import { ReactNode } from 'react';
//   import { BsPerson } from 'react-icons/bs';
//   import { FiServer } from 'react-icons/fi';
//   import { GoLocation } from 'react-icons/go';
  
//   interface StatsCardProps {
//     title: string;
//     stat: string;
//     icon: ReactNode;
//   }
//   function StatsCard(props: StatsCardProps) {
//     const { title, stat, icon } = props;
//     return (
//       <Stat
//         px={{ base: 2, md: 4 }}
//         py={'5'}
//         shadow={'xl'}
//         border={'1px solid'}
//         borderColor={useColorModeValue('gray.800', 'gray.500')}
//         rounded={'lg'}>
//         <Flex justifyContent={'space-between'}>
//           <Box pl={{ base: 2, md: 4 }}>
//             <StatLabel fontWeight={'medium'} isTruncated>
//               {title}
//             </StatLabel>
//             <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
//               {stat}
//             </StatNumber>
//           </Box>
//           <Box
//             my={'auto'}
//             color={useColorModeValue('gray.800', 'gray.200')}
//             alignContent={'center'}>
//             {icon}
//           </Box>
//         </Flex>
//       </Stat>
//     );
//   }
  
//   export default function BasicStatistics() {
//     return (
//       <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
//         <chakra.h1
//           textAlign={'center'}
//           fontSize={'4xl'}
//           py={10}
//           fontWeight={'bold'}>
//           Our company is expanding, you could be too.
//         </chakra.h1>
//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
//           <StatsCard
//             title={'Users'}
//             stat={'5,000'}
//             icon={<BsPerson size={'3em'} />}
//           />
//           <StatsCard
//             title={'Servers'}
//             stat={'1,000'}
//             icon={<FiServer size={'3em'} />}
//           />
//           <StatsCard
//             title={'Datacenters'}
//             stat={'7'}
//             icon={<GoLocation size={'3em'} />}
//           />
//         </SimpleGrid>
//       </Box>
//     );
//   }








// import './HomeSectionInfor.scss'

// const HomeSectionInfor = () => {
//   return (
//     <section className="home__container-infor">
//       <div className="home__header-data">
//         <div className="home__header-data-numbers">
//           <p className="stations-register">150</p>
//           <p className="stations-text">Puntos de carga</p>
//         </div>

//         <div className="home__header-data-numbers">
//           <p className="members-register">10000</p>
//           <p className="members-text">Miembros registrados</p>
//         </div>

//       </div>

//       <div className="home__body-data">
//         <p className="">¿Quieres descubrir nuestros puntos de carga?</p>
//         {/* COMPONENTE BOTON QUE REDIRIJA AL MAPA */}
//       </div>
//     </section>
//   );
// }

// export default HomeSectionInfor