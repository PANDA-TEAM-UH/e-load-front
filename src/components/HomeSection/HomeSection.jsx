import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const HomeSection = () => {

  
  return (

    <Flex
    w={'full'}
    h={'100vh'}
    position={'relative'}
    overflow={'hidden'}
  >
    <Flex
      w={'full'}
      h={'full'}
      position={'absolute'}
      top={0}
      left={0}
      zIndex={-1}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source
          src="https://res.cloudinary.com/dgkm71mjf/video/upload/v1686474818/e-load/e-load-section-01_hq4smf.mp4"
          type="video/mp4"
        />
      </video>

      </Flex>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              FIND/
            </Text>
            
            <Text
              color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             CHARGE/
            </Text>

            <Text
              color={'white'}
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              GO/
            </Text>
            
            <Text
              color={'white'}
              fontWeight={100}
              lineHeight={1.5}
              fontSize={useBreakpointValue({ base: '6xl', md: '4xl' })}>
              Conduce hasta cualquier lugar.
            </Text>
            
          </Stack>
        </VStack>
      </Flex>
    );
  }
  export default HomeSection

