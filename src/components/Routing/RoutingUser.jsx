import { Route, Routes } from 'react-router-dom';
import PaymentContainer from '../PaymentContainer/PaymentContainer';
import ErrorReport from '../ErrorReport/ErrorReport';
import LoyaltyPoints from '../LoyaltyPoints/LoyaltyPoints';
import MyRecharges from '../MyRecharges/MyRecharges';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import AdminStations from '../AdminStations/AdminStations';
import RequireAuth from '../RequireAuth/RequireAuth';
import AdminSpots from '../AdminSpots/AdminSpots';
import AdminUsers from '../AdminUsers/AdminUsers';
import AdminComments from '../AdminComments/AdminComments';

const RoutingUser = () => {
  return (
    <Routes>
      <Route path="/" element={<PersonalInformation />} />
      <Route path="/metodos-de-pago" element={<PaymentContainer />} />
      <Route path="/mis-recargas" element={<MyRecharges />} />
      <Route path="/mis-puntos" element={<LoyaltyPoints />} />
      <Route path="/estaciones" element={
        <RequireAuth adminAccess>
          <AdminStations/>
        </RequireAuth>
      }
      />
      <Route path="/puntos-carga" element={
        <RequireAuth adminAccess>
          <AdminSpots/>
        </RequireAuth>
      }
      />
      <Route path="/usuarios" element={
        <RequireAuth adminAccess>
          <AdminUsers/>
        </RequireAuth>
      }
      />
      <Route path="/comentarios" element={
        <RequireAuth adminAccess>
          <AdminComments/>
        </RequireAuth>
      }
      />
      <Route path="/reportar-error" element={<ErrorReport />} />
    </Routes>
  );
}

export default RoutingUser;