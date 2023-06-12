import {Box, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import React from "react";


const HomeSectionMobile = () => {

  const content = [
    {
      heading: "FIND",
      text: "Encuentra los puntos de recarga que mejor se adapten a tus necesidades allá donde vayas. Busca entre más de x puntos de carga.",
    },
    {
      heading: "CHARGE",
      text: "Activa tu cargador desde nuestra APP.",
    },
    {
      heading: "GO",
      text: "Creamos una experiencia más fluida y dinámica para que no tengas de qué preocuparte.",
    },
  ];
  

  return (
    <Box
      bgImage="url(public/assets/images/FONDO-MOBILE2.jpg)"
      bgSize="cover"
      bgPosition="center"
      
      >

<Stack minH={"65vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={1} flex={0.5} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
          {content.map((item) => (
              <React.Fragment key={item.heading} >
              <Box
            borderRadius="0%"
            border="1px solid"
            borderColor="grayColor"
                  px={22}
                  py={8}
                  display="inline-block">
                <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                  <Text as={"span"} position={"relative"} color="whiteColor" 
                  
                  >
                    {item.heading}<Text as="span" color = "secondaryColor">/</Text>
                  </Text>
                  <br />
                </Heading>
              


                <Text fontSize={{ base: "md", lg: "lg" }} color= "whiteColor">
                  {item.text}
                </Text>
                </Box>
              </React.Fragment>
            ))}
          </Stack>
      </Flex>
      <Flex flex={1} justifyContent="flex-end">
        <Box position="relative" w="30%" h="100%">
          <Image
            alt={"foto-movil"}            
            src={
              "https://uploads-ssl.webflow.com/6278f767c8039e09089ab08c/62ebe6dec60a5cb4e75f160b_Map_ES.png"
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
