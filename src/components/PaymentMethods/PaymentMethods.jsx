import React, { useEffect } from 'react'
import { deletePayment, getAllPayments  } from '../../redux/payments/payments.actions'

const PaymentMethods = () => {

  useEffect(() => {
    getAllPayments();
  }, [])

  return (
    <div>PaymentMethods</div>
  )
}

export default PaymentMethods