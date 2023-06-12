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
    bg={useColorModeValue("defaultColor")}
    color={useColorModeValue("whiteColor")}
      >
      
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Heading fontSize="2xl">Asistencia</Heading>
            <Text>
              Lunes a jueves: 9:00 - 18:30
              </Text>
              <Text>
              Viernes: 9:00 - 15:00
              </Text>
              <Text>
              Fines de semana y festivos:
              </Text>
              <Text>
              Sin atención al cliente
              </Text>
              <Text>
               Llamar: 91 078 07 11
               </Text>
               <Text>
               Correo electrónico:
               </Text> 
               <Text>
               contacto@e-load.es
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading fontSize="2xl">Compañia</Heading>
            <Link href={"#"}>Sobre Nosotros</Link>
            <Link href={"#"}>Contacto</Link>
            <Link href={"#"}>Puntos de carga</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading fontSize="2xl">Legal</Heading>
            <Link href={"#"}>Cookies</Link>
            <Link href={"#"}>Politica de privacidad</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Law Enforcement</Link>
          </Stack>

          <Stack align="flex-start">
            <Heading fontSize="2xl">Instala nuestra App</Heading>
            <Image
              alt="foto-movil"
              src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/app-store_zfrjug.png"
              position="relative"
              maxWidth="45%"
            />
            <Image
              alt="foto-movil"
              src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/play-store_wwa4f0.png"
              position="relative"
              maxWidth="45%"
            />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
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