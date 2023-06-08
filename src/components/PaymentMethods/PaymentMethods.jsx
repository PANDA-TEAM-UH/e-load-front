// import { useEffect } from "react";
// import { deletePayment, getAllPaymentsByUser } from "../../redux/payments/payments.actions";
import { useSelector } from "react-redux";

const PaymentMethods = () => {
  // const { payments } = useSelector((state) => state.payments);
  const { user } = useSelector((state) => state.users);
  // useEffect(() => {
  //   getAllPaymentsByUser(user._id);
  // }, [user._id]);

 

  console.log(user);

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
