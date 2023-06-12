import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,  
  useColorModeValue,  
  Image,
  Heading,
} from '@chakra-ui/react';


const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("whiteColor")}
      color={useColorModeValue("blackColor")}
      // py = {1}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Heading fontSize="2xl">Asistencia</Heading>
            <Text>
               Lunes a jueves: 9:00 - 18:30 <br/>
               Viernes: 9:00 - 15:00 <br/>
               Fines de semana y festivos: <br/> Sin atención al cliente<br/>
               Llamar: 91 078 07 11 <br/>
               Correo electrónico: <br/>
                contacto@e-load.es
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading fontSize="2xl">Compañia</Heading>
            <Link href={"/sobre-nosotros"}>Sobre Nosotros</Link>
            <Link href={"/contacto"}>Contacto</Link>
            <Link href={"/mapa"}>Puntos de carga</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading fontSize="2xl">Legal</Heading>
            <Link href={"#"}>Cookies</Link>
            <Link href={"#"}>Politica de privacidad</Link>
            <Link href={"#"}>Terminos de servicio</Link>
            
          </Stack>

          <Stack align="flex-start">
            <Heading fontSize="2xl">Instala nuestra App</Heading>
            <Image
              alt="foto-movil"
              src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/app-store_zfrjug.png"
              position="relative"
              maxWidth="43%"
            />
            <Image
              alt="foto-movil"
              src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/play-store_wwa4f0.png"
              position="relative"
              maxWidth="43%"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("whiteColor", "blackColor")}
        mb={6}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={2}
          direction={{ base: "column", md: "row" }}
          spacing={2}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Text fontWeight="bold">© 2023 E - LOAD. ALL RIGHTS RESERVED</Text>

          <Stack direction={"row"} spacing={8}>
            <Box>
            <Link href="https://www.linkedin.com" isExternal>
              <Image src="./assets/icons/linkedin-icono.png" boxSize={8}/>
              </Link>
            </Box>

            <Box>
            <Link href="https://www.instagram.com" isExternal>
              <Image src="./assets/icons/instagram-icono.png" boxSize={8}/>
              </Link>
            </Box>
            
            <Box>
            <Link href="https://www.twitter.com" isExternal>
              <Image src="./assets/icons/twitter-icono.png" boxSize={8}/>
              </Link>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer