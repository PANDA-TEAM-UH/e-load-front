import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
  Image,
  Heading,
} from '@chakra-ui/react';

// import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

// const ListHeader = ({ children }: { children: ReactNode }) => {
//   return (
//     <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//       {children}
//     </Text>
//   );
// };

// const SocialButton = ({
//   children,
//   label,
//   href,
// }: {
//   children: ReactNode;
//   label: string;
//   href: string;
// }) => {
//   return (
//     <chakra.button
//       bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
//       rounded={'full'}
//       w={8}
//       h={8}
//       cursor={'pointer'}
//       as={'a'}
//       href={href}
//       display={'inline-flex'}
//       alignItems={'center'}
//       justifyContent={'center'}
//       transition={'background 0.3s ease'}
//       _hover={{
//         bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
//       }}>
//       <VisuallyHidden>{label}</VisuallyHidden>
//       {children}
//     </chakra.button>
//   );
// };

const Footer = () => {

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>

        <Stack align="flex-start">
  <Heading>Asistencia</Heading>
  <Text>
    Lunes a jueves: 9:00 - 18:30
    Viernes: 9:00 - 15:00
    Fines de semana y festivos: Sin atención al cliente
    Llamar: 91 078 07 11
    Correo electrónico: contacto@e-load.es
  </Text>
</Stack>


          <Stack align={'flex-start'}>            
          <Heading>Compañia</Heading>
            <Link href={'#'}>Sobre Nosotros</Link>
            <Link href={'#'}>Contacto</Link>
            <Link href={'#'}>Puntos de carga</Link>
            
          </Stack>

        
            <Stack align={'flex-start'}>
            <Heading>Legal</Heading>
            <Link href={'#'}>Cookies</Link>
            <Link href={'#'}>Politica de privacidad</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
          </Stack>

          <Stack align="flex-start">
  <Heading>Instala nuestra App</Heading>
  <Image
    alt="foto-movil"
    src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/app-store_zfrjug.png"
    position="relative" 
    maxWidth="50%" 
  />
  <Image
    alt="foto-movil"
    src="https://res.cloudinary.com/dgkm71mjf/image/upload/v1686482925/e-load/play-store_wwa4f0.png"
    position="relative" 
    maxWidth="50%" 
  />
</Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 E - LOAD.  ALL RIGHTS RESERVED</Text>
          <Stack direction={'row'} spacing={6}>
            <Button  href={'#'}>
             
            </Button>
            <Button   href={'#'}>
              
            </Button>
            <Button   href={'#'}>
              
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer