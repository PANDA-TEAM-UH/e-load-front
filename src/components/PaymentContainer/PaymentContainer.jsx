// import React from 'react'
// import { useSelector } from 'react-redux';
import CreatePayment from '../CreatePayment/CreatePayment';
// import PaymentMethods from '../PaymentMethods/PaymentMethods';
//creado para subida a github
const PaymentContainer = () => {

  // const { payments } = useSelector((state) => state.payments);

    return (
        <>
        
        <CreatePayment/>
      
     {/* {payments && <PaymentMethods payments = {payments}/>}
         */}
      
        </>
      );
    };

export default PaymentContainer