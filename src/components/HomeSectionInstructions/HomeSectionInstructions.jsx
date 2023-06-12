import { Flex, Container, Heading, Stack, Text, Image, Box } from '@chakra-ui/react';


const HomeSectionInstructions = () => {

    const icons = [
        {
          src: 'https://zity.eco/wp-content/uploads/2021/07/descargar-app.svg',
          alt: 'Icono 1',
          text: 'Descarga la App',
        },
        {
          src: 'https://zity.eco/wp-content/uploads/2021/07/registro.svg',
          alt: 'Icono 2',
          text: 'Registrate',
        },
        {
          src: 'https://zity.eco/wp-content/uploads/2021/07/mapa.svg',
          alt: 'Icono 3',
          text: 'Reserva tu estación',
        },
        {
          src: 'https://zity.eco/wp-content/uploads/2021/07/coche-electrico.svg',
          alt: 'Icono 4',
          text: 'Muevete con libertad',
        },
      ];
    

      return (
        <Container maxW={'4xl'}>
          <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>

            <Heading fontWeight={620} fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} lineHeight={'140%'} mb={20} color="blackColor">
              HAZTE DE E-LOAD<br />
              LA CIUDAD TE ESPERA
            </Heading>

            <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'stretch' }} justify={'center'}>
              {icons.map((icon) => (

                <Box display="flex" alignItems="center" mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }} key={icon.alt}>
                  <Image src={icon.src} alt={icon.alt} boxSize={20} />
                  <Text color="defaultColor" maxW={'3xl'}>
                    {icon.text}
                  </Text>
                </Box>
                
              ))}
            </Flex>
          </Stack>
        </Container>
      );
    }
    
    export default HomeSectionInstructions;