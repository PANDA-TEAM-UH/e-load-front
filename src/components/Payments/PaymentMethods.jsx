import { useEffect } from "react";
import { deletePayment, getAllPaymentsByUser } from "../../redux/payments/payments.actions";
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader, GridItem, Heading, Text } from "@chakra-ui/react";

const PaymentMethods = () => {
  const { user } = useSelector((state) => state.users);
  const { payments } = useSelector((state) => state.payments);
  useEffect(() => {
    getAllPaymentsByUser(user._id);
  }, [user._id]);

  const hideCardNumber = (cardNumber) => {
    const hiddenNumber = "•".repeat(cardNumber.length - 4);
    const displayedNumber = hiddenNumber + cardNumber.slice(-4);
    return displayedNumber;
  }

  return (
    <GridItem display={"flex"} gap={5}>
      {payments.map((payment) => (
        <Card key={payment._id} width={"350px"} border='1px solid' borderColor='grayColor'>
          <CardHeader>
            <Heading size='lg'>{hideCardNumber(payment.number)}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{payment.cardHolderName}</Text>
            <Text>Válida hasta: {payment.valMonth}/{payment.valYear}</Text>
          </CardBody>
          {/* <img
            className="basura"
            src="/assets/icons/papelera.png"
            onClick={() => deletePayment(payment)}
            alt="Eliminar"
          /> */}
        </Card>
      ))}
      </GridItem>
  );
};

export default PaymentMethods;
