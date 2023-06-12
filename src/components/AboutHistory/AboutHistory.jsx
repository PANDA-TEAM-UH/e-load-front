import { Box, Heading, Image,  Text, Grid, Container } from "@chakra-ui/react";

const AboutHistory = () => {
  return (
    <Container>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        <Box>
          <Heading>Nacimiento de E - LOAD</Heading>
          <Text>
          Surgió de la necesidad de abordar los desafíos ambientales y energéticos que
          </Text>
          <Text>
          enfrentamos. Inspirados por la creciente demanda de vehículos eléctricos, creamos una 
          </Text>
          <Text>
          solución integral de estaciones de carga en toda España. Nuestro objetivo es impulsar la
          </Text>
          <Text>
          adopción masiva de la movilidad sostenible y contribuir al cuidado del planeta.
          </Text>
          
                    <Image
            src="https://topesdegama.com/app/uploads-topesdegama.com/2022/09/Estaciones-de-carga-portatiles.jpg"
            mt={4}
            objectFit="cover"
            w="100%"
            h="auto"
            alt="Estaciones de carga portátiles"
          />
        </Box>

        <Box>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6u-oWz2fzwQGSfTbytADmhVwGbqtqYvfsOg&usqp=CAU"
            objectFit="cover"
            w="100%"
            h="auto"
            alt="Nacimiento de E - LOAD"
          />
          <Heading>Nuestra misión</Heading>
          
          <Text>
          En E-LOAD, nuestro principal objetivo es el de impulsar la movilidad eléctrica en España.
          </Text>
          <Text>
          Con nuestra red de estaciones de carga estratégicas, 
          </Text>
          <Text>
          ofrecemos a los conductores la libertad de recorrer el país sin preocupaciones de autonomía. 
          </Text>
          <Text>
          Un futuro sostenible está en nuestras manos.
          </Text>
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutHistory;
