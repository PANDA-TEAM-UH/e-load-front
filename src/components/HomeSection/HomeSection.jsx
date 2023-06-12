import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionText = motion(Text);

const HomeSection = () => {
  const texts = [
    { text: 'FIND/', duration: 4, delay: 2 },
    { text: 'CHARGE/', duration: 5, delay: 3 },
    { text: 'GO/', duration: 6, delay: 4 },
    { text: 'Conduce hasta cualquier lugar.', duration: 7, delay: 5 },
  ];

  return (
    <Flex w={'full'} h={'100vh'} position={'relative'} overflow={'hidden'}>
      <Flex w={'full'} h={'full'} position={'absolute'} top={0} left={0} zIndex={-1}>
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
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          {texts.map((item, index) => (
            <MotionText
              key={index}
              color="whiteColor"
              fontWeight={500}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: item.duration, delay: item.delay }}
            >
              {item.text}
            </MotionText>
          ))}
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HomeSection;
