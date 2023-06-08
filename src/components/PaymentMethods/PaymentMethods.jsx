import { useEffect } from "react";
import { getAllPayments, deletePayment } from "../../redux/payments/payments.actions";
import { useSelector } from "react-redux";

const PaymentMethods = () => {
  useEffect(() => {
    getAllPayments();
  }, []);

  const { payments } = useSelector((state) => state.payments);


  console.log(payments);

  return (
    <div className="payments">
      {payments.map((payment) => (
        <div className="payment" key={payment._id}>
          <img
            className="basura"
            src="/assets/icons/papelera.png"
            onClick={() => deletePayment(payment)}
            alt="Eliminar"
          />

          <div className="card-details">
            <p className="card-number">NÚMERO DE TARJETA: {payment.number}</p>
            <p className="card-name"> NOMBRE Y APELLIDOS: {payment.cardHolderName}</p>
            <p className="card-validation">
              VÁLIDA HASTA: {payment.valMonth}/{payment.valYear}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentMethods;
