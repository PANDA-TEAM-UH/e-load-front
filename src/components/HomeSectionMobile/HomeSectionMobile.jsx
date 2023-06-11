import {
 
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';



const HomeSectionMobile = () => {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '10%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
             FIND
            </Text>
            <br />{' '}
                     </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Encuentra los puntos de recarga que mejor se adapten a tus
             necesidades allá donde vayas. Busca entre más de x puntos de carga.
          </Text>

          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '10%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
             CHARGE
            </Text>
            <br />{' '}
                     </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Activa tu cargador desde nuestra APP.
          </Text>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '10%', md: '20%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}>
             GO
            </Text>
            <br />{' '}
         </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Creamos una experiencia mas fluida y dinámica para que no tengas de
             que preocuparte.
          </Text>
               </Stack>
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        <Box position="relative" w="100%" h="100%">
          <Image
            alt={'foto-movil'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={1}
          />
          <Image
            alt={'map-phone'}
            objectFit={'cover'}
            src={'PONER IMAGEN CON MAPA'}
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex={2}
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default HomeSectionMobile









//
//   return (
//     <section className="home__container-mobile">
//       <div className="home__description">
//         <div className="home__description-section">
//           <h2>Find/</h2>
//           <p>
//             Encuentra los puntos de recarga que mejor se adapten a tus
//             necesidades allá donde vayas. Busca entre más de x puntos de carga.
//           </p>
//         </div>

//         <div className="home__description-section">
//           <h2>Charge/</h2>
//           <p>Activa tu cargador desde nuestra APP.</p>
//         </div>

//         <div className="home__description-section">
//           <h2>Go/</h2>
//           <p>
//             Creamos una experiencia mas fluida y dinámica para que no tengas de
//             que preocuparte.
//           </p>
//         </div>
//       </div>

//       <div className="home__section-mobile">
//         <img src="PONER IMAGEN DEL MOVIL" alt="front-phone" />
//         <img src="PONER IMAGEN CON MAPA" alt="map-phone" />
//       </div>
//     </section>
//   );
// }

// export default HomeSectionMobile