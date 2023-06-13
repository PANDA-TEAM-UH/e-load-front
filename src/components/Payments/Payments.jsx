import { Divider, Flex, Heading } from "@chakra-ui/react";
import CreatePayment from "./CreatePayment";
import PaymentMethods from "./PaymentMethods";

const Payments = () => {
  return (
    <Flex display='column'>
      <Heading size='lg'>Métodos de Pago</Heading>
      <Divider my={5} />
      <Flex gap={6} display={{md: 'flex'}} alignItems={"flex-start"}>
        <CreatePayment/>
        <PaymentMethods/>
      </Flex>
    </Flex>
  )
}

export default Payments