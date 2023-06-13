import {  useState } from 'react';
import { FormControl, FormLabel, Input, Button, Flex, useToast, Box } from '@chakra-ui/react';
import { createPayment } from '../../redux/payments/payments.actions';
import { useForm } from 'react-hook-form';
// import { useSelector } from 'react-redux';
import { Done } from '@mui/icons-material';

const CreatePayment = () => {
  // const { user } = useSelector((state) => state.users);
  const { register, handleSubmit, reset } = useForm();
  const [paymentCreated, setPaymentCreated] = useState(false);
  const toast = useToast();

  const onSubmit = (dataPayment) => {
    createPayment(dataPayment);
    setPaymentCreated(true);
    reset();
    toast({
      status: "success",
      duration: 3000,
      isClosable: true,
      render: () => (
        <Box
          bg="secondaryColor"
          color="defaultColor"
          p={3}
          borderRadius="md"
          alignItems='center'
          display='flex'
        >
          <Done/>
          Método de Pago: Datos registrados correctamente.
        </Box>
      )
    });
  };

  const handleCreatePaymentClick = () => {
    setPaymentCreated(true);
  };

  return (
    <div>
      <Button onClick={handleCreatePaymentClick}>Agregar método de pago</Button>
      {paymentCreated && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>NOMBRE Y APELLIDOS</FormLabel>
              <Input type="text" {...register("cardHolderName")} />
              <FormLabel>Nº TARJETA</FormLabel>
              <Input {...register("number")} minLength={16} maxlength={16} />

              <Flex justifyContent={'space-between'}>
                <Flex direction={"column"} width={20}>
                <FormLabel>MES</FormLabel>
              <Input {...register("valMonth")} minLength={2} maxLength={2} />
                </Flex>
                <Flex direction={"column"} width={20}>
                <FormLabel>AÑO</FormLabel>
              <Input {...register("valYear")} minLength={2} maxLength={2} />
                </Flex>
              </Flex>
              <Button mt={3} type="submit"
              bg={'defaultColor'} color={'whiteColor'} _hover={{bg: "secondaryColor", color:"defaultColor"}}
              >Guardar</Button>
            </FormControl>
          </form>
        </>
      )}
    </div>
  );
};

export default CreatePayment;