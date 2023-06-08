// import { useEffect } from "react";
// import { deletePayment, getAllPaymentsByUser } from "../../redux/payments/payments.actions";

const PaymentMethods = () => {
  // const { payments } = useSelector((state) => state.payments);
  // useEffect(() => {
  //   getAllPaymentsByUser(user._id);
  // }, [user._id]);

  // return (
    // <div className="payments">
    //   {payments.map((payment) => (
    //     <div className="payment" key={payment._id}>
    //       <img
    //         className="basura"
    //         src="/assets/icons/papelera.png"
    //         onClick={() => deletePayment(payment)}
    //         alt="Eliminar"
    //       />

    //       <div className="card-details">
    //         <p className="card-number">NÚMERO DE TARJETA: {payment.number}</p>
    //         <p className="card-name"> NOMBRE Y APELLIDOS: {payment.cardHolderName}</p>
    //         <p className="card-validation">
    //           VÁLIDA HASTA: {payment.valMonth}/{payment.valYear}
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  // );
};

export default PaymentMethods;
