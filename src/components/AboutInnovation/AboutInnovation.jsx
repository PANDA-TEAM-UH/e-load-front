import { Flex, Container, Heading, Stack, Text, Image, Box } from '@chakra-ui/react';


const AboutInnovation = () => {

    const icons = [
        {
          src: 'https://us.123rf.com/450wm/texelart/texelart1202/texelart120200018/12501517-3d-hombre-con-una-marca-enorme-y-el-pulgar-para-arriba-dictada-en-alta-resoluci%C3%B3n-en-un-fondo.jpg',
          alt: 'Icono 1',
          text: 'Simple',
          textDescription: 'Fácil de acceder, comprender y controlar.'
        },
        {
          src: 'https://img.freepik.com/vector-premium/bombilla-encendida-iluminar-habitacion-doodle-coloracion-dibujos-animados-lineales_253359-2800.jpg?w=2000',
          alt: 'Icono 2',
          text: 'Inteligente',
          textDescription: 'Siempre conectado, contigo y con tu vida'
        },
        {
          src: 'https://png.pngtree.com/png-vector/20191219/ourlarge/pngtree-happy-panda-illustration-vector-on-white-background-png-image_2081980.jpg',
          alt: 'Icono 3',
          text: 'Centrado en el usuario',
          textDescription: 'Diseñado para la gente real, intuitivo y con una estetica muy cuidada.'
        }
            ];
    

      return (
        <Flex justifyContent="center" marginLeft={10}>
          <Stack textAlign={'center'} spacing={{ base: 8, md: 10 }} py={{ base: 20, md: 28 }}>

            <Heading fontWeight={620} fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }} lineHeight={'140%'} mb={20} color="blackColor">
              Nuestros principios de innovación
              
            </Heading>

            <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'center', md: 'stretch' }} justify={'center'}>
              {icons.map((icon) => (

                <Box display="flex" alignItems="center" mb={{ base: 8, md: 0 }} mr={{ base: 0, md: 8 }} key={icon.alt}>
                  <Image src={icon.src} alt={icon.alt} boxSize={20} marginLeft={5} />
                  <Text color="defaultColor" maxW={'4xl'} fontWeight="bold" fontSize={25}>
                    {icon.text}
                  </Text>
                  <Text color="defaultColor" fontSize={17}>
                    {icon.textDescription}
                  </Text>
                </Box>
                
              ))}
            </Flex>
          </Stack>
        </Flex>
      );
    }
    
    export default AboutInnovation;