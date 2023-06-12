import { Heading, Image,  Text, Flex } from "@chakra-ui/react";

const AboutHistory = () => {
  return (
 

    <Flex justifyContent="center"marginTop={10} alignItems="center">
      <Flex gap={10}>
        <Flex width="650px" direction="column" marginTop={10}>
        <Image
            src="https://www.autopista.es/uploads/s1/55/35/11/6/5e5cdc3c0ee6948a1834961b-la-estacion-de-carga-para-electricos-mas-rapida-del-mundo-5-minutos-para-recorrer-100-km.jpeg"
            mt={4}
            objectFit="cover"
            w="70%"
            h="auto"
            alt="Estaciones de carga portátiles"
            marginBottom={8}
          />
          {/* <video
        autoPlay
        loop
        muted
        style={{
          width: '80%',
          height: '60%',
          objectFit: 'cover',
        }}
      >
        <source
          src="https://res.cloudinary.com/dgkm71mjf/video/upload/v1686474818/e-load/e-load-section-01_hq4smf.mp4"
          type="video/mp4"
        />
      </video> */}
          <Heading fontSize={30} marginBottom={10}>Nacimiento de E - LOAD</Heading>
          
          <Text >
          Surgió de la necesidad de abordar los desafíos ambientales 
          </Text>
          <Text>
          y energéticos que enfrentamos. Inspirados por la creciente 
          </Text>
          <Text>
          demanda de vehículos eléctricos, creamos una  solución 
          </Text>
          <Text>
          integral de estaciones de carga en toda España. Nuestro  
          </Text>
          <Text>
          objetivo es impulsar la adopción masiva de la movilidad 
          </Text>
          <Text>
          sostenible y contribuir al cuidado del planeta.
          </Text>
          
        </Flex>

        <Flex width="650px" direction={"column"} marginTop={10}>
          
          <Heading fontSize={30} marginBottom={10}>Nuestra misión</Heading>
          
          <Text >
          En E-LOAD, nuestro principal objetivo es impulsar la 
          </Text>
          <Text>
          movilidad eléctrica en España. Con nuestra red de 
          </Text>
          <Text>
          estaciones de carga estratégicas, ofrecemos a los 
          </Text>
          <Text>
          conductores la libertad de recorrer el país sin 
          </Text>
          <Text>
          preocupaciones de autonomía. Un futuro sostenible 
          </Text>
          <Text>
          está en nuestras manos.
          </Text>
        
          <video
        autoPlay
        loop
        muted
        style={{
          width: '70%',
          height: '60%',
          objectFit: 'cover',
          marginTop: '10%'
        }}
      >
        <source
          src="https://res.cloudinary.com/dgkm71mjf/video/upload/v1686474818/e-load/e-load-section-01_hq4smf.mp4"
          type="video/mp4"
        />
      </video>

          {/* <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6u-oWz2fzwQGSfTbytADmhVwGbqtqYvfsOg&usqp=CAU"
            objectFit="cover"
            w="60%"
            h="auto"
            alt="Nacimiento de E - LOAD"
            marginTop={8}
            
          /> */}

        </Flex>
        
      </Flex>
      
    </Flex>
   
  );
};

export default AboutHistory;
