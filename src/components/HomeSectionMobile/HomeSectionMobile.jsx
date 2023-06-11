import {Box, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";

const HomeSectionMobile = () => {
  return (
    <Box
      bgImage="url(public/assets/images/FONDO-MOBILE2.jpg)"
      bgSize="cover"
      bgPosition="center"
      >

    <Stack minH={"65vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={1} flex={0.5} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>

          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color= "white"
            >
              FIND
            </Text>
            <br />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Encuentra los puntos de recarga que mejor se adapten a tus
            necesidades allá donde vayas. Busca entre más de x puntos de carga.
          </Text>


          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color= "white"              
            >
              CHARGE
            </Text>
            <br />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Activa tu cargador desde nuestra APP.
          </Text>


          <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              color= "white"
            >
              GO
            </Text>
            <br />
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
            Creamos una experiencia mas fluida y dinámica para que no tengas de
            que preocuparte.
          </Text>


        </Stack>
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        <Box position="relative" w="30%" h="100%">
          <Image
            alt={"foto-movil"}            
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            position="absolute"
            top="50%"
            left="30%"
            transform="translate(-50%, -50%)"
            
          />
        </Box>
      </Flex>
    </Stack>
    </Box>
  );
};

export default HomeSectionMobile;
