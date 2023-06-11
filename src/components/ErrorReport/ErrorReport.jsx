import ContactForm from '../../components/ContactForm/ContactForm';
import { Heading, Image, Box, Text } from '@chakra-ui/react';
import './ErrorReport.scss'

const ErrorReport = () => {
    return (
        <div>
            <section className='b-contact-form'>
                <Box>
                    <Heading as="h2" size="xl" mb={4} display="flex" justifyContent="center" alignItems="center">
                        Reportar Error
                        </Heading>
                    <Heading as="h3" size="md" mb={4} display="flex" justifyContent="center" alignItems="center">
                        Si has tenido un problema, ponte en contacto con nosotros.
                    </Heading>
                    <Image src="https://cdn.pixabay.com/photo/2017/10/10/21/46/laptop-2838918_960_720.jpg"
                        alt="Report Error Banner"
                        w="100%"
                        h="300px"
                        objectFit="cover"
                    />
                    <ContactForm />
                </Box>
            </section>
        </div>
    )
}

export default ErrorReport
