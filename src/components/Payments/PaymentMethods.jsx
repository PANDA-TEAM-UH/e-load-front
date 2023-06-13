import { useEffect } from "react";
import { getAllPaymentsByUser } from "../../redux/payments/payments.actions";
import { useSelector } from "react-redux";
import { Grid } from "@chakra-ui/react";
import PaymentMethodCard from "./PaymentMethodCard";

const PaymentMethods = () => {
  const { user } = useSelector((state) => state.users);
  const { payments } = useSelector((state) => state.payments);
 
  useEffect(() => {
    getAllPaymentsByUser(user._id);
  }, []);

  return (
    <Grid display={"flex"} gap={6} flexWrap={"wrap"}>
      {payments.map((payment) => {
        return <PaymentMethodCard payment={payment} key={payment._id}/>;
      })}
    </Grid>
  );
};

export default PaymentMethods;
