import {  useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { createPayment } from '../../redux/payments/payments.actions';
import { useForm } from 'react-hook-form';

const CreatePayment = () => {

  const {register, handleSubmit} = useForm()
  
  const [paymentCreated, setPaymentCreated] = useState(false);

  const onSubmit = (dataPayment) => {
    createPayment(dataPayment);
    setPaymentCreated(true);
    
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
              <Input
                type="text"
                {...register("cardHolderName")}
                
              />
            </FormControl>
            <FormControl>
              <FormLabel>Nº TARJETA</FormLabel>
              <Input
                type="number"                
                {...register("number")}
                // maxlength={16}
                
              />
            </FormControl>

            <FormControl>
              <FormLabel>MES</FormLabel>
              <Input
                type="number"               
                {...register("valMonth")}
                // maxLength={2}
                
              />
            </FormControl>

            <FormControl>
              <FormLabel>AÑO</FormLabel>
              <Input
                type="number"                
                {...register("valYear")}
                // maxlength={2}
                
              />
            </FormControl>

            <Button type="submit">Guardar</Button>
          </form>
            
        </>
      )}
    </div>
  );
};

export default CreatePayment;