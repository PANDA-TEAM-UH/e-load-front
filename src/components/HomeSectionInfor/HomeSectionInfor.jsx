import { Box, chakra, Flex, Text, Button } from "@chakra-ui/react";


const HomeSectionInfor = () => {
  return (
    <Box
      maxW="100%"
      h="50vh"
      bgImage="url(https://res.cloudinary.com/dgkm71mjf/image/upload/v1686474622/e-load/e-load-section-04_bu0qnh.jpg)"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      paddingY={20}
      bgAttachment="fixed"
      gap={6}
    >
      <Flex display = "flex" justifyContent="center" alignItems="center" gap={6}>
        <Text
          color="whiteColor"
          maxW="4xl"
          borderRadius="full"
          border="2px solid"
          borderColor="secondaryColor"
          px={4}
          py={2}
          fontWeight="bold"
          fontSize="2xl"
         textAlign="center"
        >
          150.000 <br/>
          Puntos de carga registrados
        </Text>
        <Text
          color="whiteColor"
          maxW="4xl"
          borderRadius="full"
          border="2px solid"
          borderColor="secondaryColor"
          px={4}
          py={2}
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
        >
          250.000 <br />
          Miembros registrados
        </Text>
      </Flex>
      <chakra.h3
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        color="white"
      >
        ¿Quieres formar parte de nuestra red?
      </chakra.h3>
      <Button
        type="submit"
        bg="defaultColor"
        color="whiteColor"
        _hover={{ bg: "secondaryColor", color: "defaultColor" }}
        size="lg"
        borderRadius="full"
        py={3}
        px={6}
      >
        ENTRAR
      </Button>
    </Box>
  );
};

export default HomeSectionInfor;
