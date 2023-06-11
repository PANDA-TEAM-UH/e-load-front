import { useState } from 'react';
import { Input, Button, Textarea, Select, Modal, ModalOverlay, 
  ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import './ContactForm.scss'

const ContactForm = () => {
  const { handleSubmit } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onSubmit = () => {
        setIsFormSubmitted(true);
    onOpen();
  };

  return (
    <>
      <div className='contact-title'>
        <h2>Contacta con nosotros</h2>
        <p>Para todo lo que necesites ponte en contacto con nosotros,</p>
        <p>estaremos encantados de atenderte.</p>
      </div>

      <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <Input
          className='contact-input'
          placeholder='Nombre'
          type='text'
          name='nombre'
        />
        <Input
          className='contact-input'
          placeholder='Email'
          type='email'
          name='email'
        />

        <Select className='contact-select' placeholder='Asunto' name='opcion'>
          <option>Reportar error</option>
          <option>Contacto</option>
          <option>Ayuda</option>
        </Select>

        <Textarea className='contact-textarea' placeholder='Mensaje' name='mensaje' />

        <Button type='submit'>Enviar mensaje</Button>
      </form>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Formulario enviado con éxito</ModalHeader>
          <ModalBody>
            <p>Tu mensaje ha sido enviado correctamente.</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;