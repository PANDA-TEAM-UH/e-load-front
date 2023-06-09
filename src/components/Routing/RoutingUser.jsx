import { Route, Routes } from 'react-router-dom';
import PaymentContainer from '../PaymentContainer/PaymentContainer';
import ErrorReport from '../ErrorReport/ErrorReport';
import LoyaltyPoints from '../LoyaltyPoints/LoyaltyPoints';
import MyRecharges from '../MyRecharges/MyRecharges';
import PersonalInformation from '../PersonalInformation/PersonalInformation';

const RoutingUser = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInformation />} />
      <Route path="/metodos-de-pago" element={<PaymentContainer />} />
      <Route path="/mis-recargas" element={<MyRecharges />} />
      <Route path="/mis-puntos" element={<LoyaltyPoints />} />
      <Route path="/reportar-error" element={<ErrorReport />} />
    </Routes>
  );
}

export default RoutingUser;