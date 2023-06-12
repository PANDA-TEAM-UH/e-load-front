import { Box, Heading, Image,  Text, Grid, Container } from "@chakra-ui/react";

const AboutHistory = () => {
  return (
    <Container>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
        <Box>
          <Heading>Nuestra misión</Heading>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
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
          <Heading>Nacimiento de E - LOAD</Heading>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
          <Text>
            Losadnnasdjaspdkjaspdapoksdopaskd
          </Text>
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutHistory;
