import { Divider, Flex, Heading } from "@chakra-ui/react";
import CreatePayment from "./CreatePayment";
import PaymentMethods from "./PaymentMethods";

const Payments = () => {
  return (
    <Flex display='column'>
      <Heading size='lg'>Métodos de Pago</Heading>
      <Divider my={5} />
      <Flex gap={6}>
        <CreatePayment/>
        <PaymentMethods/>
      </Flex>

      {/* <Grid templateColumns="repeat(6, 1fr)" gap={6} gridAutoFlow="row dense">
        {stationsAdmin.map((station) => {
          return <AdminStationCard station={station} key={station._id}/>;
        })}
      </Grid> */}
    </Flex>
  )
}

export default Payments