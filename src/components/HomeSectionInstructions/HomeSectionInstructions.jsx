import { Flex, Container, Heading, Stack, Text, Image, Box } from '@chakra-ui/react';

const HomeSectionInstructions = () => {
  return (
    <Container maxW={'4xl'}>
      <Stack
        textAlign={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={620}
          fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
          lineHeight={'140%'}
          mb={20}
        >
          HAZTE DE E-LOAD<br />
          LA CIUDAD TE ESPERA
        </Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'stretch' }}
          justify={'center'}
        
        >
          <Box display="flex" alignItems="center" mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
            <Image src="https://zity.eco/wp-content/uploads/2021/07/descargar-app.svg" alt="Icono 1" boxSize={20} />
            <Text color={'gray.500'} maxW={'2xl'}>
              Descarga la App
            </Text>
          </Box>
          
          <Box display="flex" alignItems="center" mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
            <Image src="https://zity.eco/wp-content/uploads/2021/07/registro.svg" alt="Icono 2" boxSize={20} />
            <Text color={'gray.500'} maxW={'3xl'}>
              Registrate
            </Text>
          </Box>

          <Box display="flex" alignItems="center" mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }}>
            <Image src="https://zity.eco/wp-content/uploads/2021/07/mapa.svg" alt="Icono 3" boxSize={20} />
            <Text color={'gray.500'} maxW={'3xl'}>
              Reserva tu estación
            </Text>
          </Box>

          <Box display="flex" alignItems="center">
            <Image src="https://zity.eco/wp-content/uploads/2021/07/coche-electrico.svg" alt="Icono 4" boxSize={20} />
            <Text color={'gray.500'} maxW={'3xl'}>
              Muevete con libertad
            </Text>
          </Box>

        </Flex>
      </Stack>
    </Container>
  );
}

export default HomeSectionInstructions;
