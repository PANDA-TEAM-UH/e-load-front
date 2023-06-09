import { Box, Button, Slide, useDisclosure } from "@chakra-ui/react"

const Cookies = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Button onClick={onToggle}>Cookies</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p='40px'
          color='white'
          mt='2'
          bg='teal.500'
          rounded='md'
          shadow='md'
          fontSize='xs'
        >
         <p>Nosotros y nuestros socios usamos cookies o tecnologías similares para garantizar el correcto funcionamiento del portal, recoger información sobre su uso, mejorar nuestros servicios y</p>
         <p> mostrarte publicidad personalizada basándonos en el análisis de tu navegación.</p>
         <p>Puedes configurar o rechazar en cualquier momento la utilización de cookies y también puedes retirar tu consentimiento u oponerte al tratamiento de tus datos que hacemos en base al interés</p>
         <p>legítimo. Para obtener información sobre cómo hacerlo pincha aquí o visita nuestra política de privacidad.Si quieres saber quiénes son nuestros socios accede aquí.</p> 

         <p>y nuestros socios hacemos el siguiente tratamiento de datos:</p>
         <p>Almacenar o acceder a información en un dispositivo, Anuncios y contenido personalizados, medición de anuncios y del contenido, información sobre el público y desarrollo de productos, Datos de</p>
         <p>localización geográfica precisa e identificación mediante las características de dispositivos</p>

         <Button>Aceptar</Button>
         <Button>Cerrar</Button>
         
        </Box>
      </Slide>
    </>
  )
}

export default Cookies;