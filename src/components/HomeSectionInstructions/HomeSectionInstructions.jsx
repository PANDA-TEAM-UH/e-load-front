
import { Flex, Image, Text } from '@chakra-ui/react';

const HomeSectionInstructions = () => {
  const icons = [
    {
      src: 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686647787/e-load/e-load-mockup-01_s5xn8f.png',
      alt: 'mapa-responsive',
    },
    {
      src: 'https://res.cloudinary.com/dgkm71mjf/image/upload/v1686647784/e-load/e-load-mockup-02_ovlwem.png',
      alt: 'station-responsive',
    }
  ];

  return (
    <Flex width="100%">
    <Flex width="100%" justifyContent="center">
      <Text fontWeight={620} fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} lineHeight={'140%'} mb={20} color="blackColor">
        HAZTE DE E-LOAD<br />
        LA CIUDAD TE ESPERA
      </Text>
</Flex>
      <Flex width="100%" >
        {icons.map((icon) => (
          
            <Image src={icon.src} alt={icon.alt} boxSize={70} key={icon.alt} />
         
        ))}
      </Flex>
      </Flex>
  );
}

export default HomeSectionInstructions;
