import { Route, Routes } from 'react-router-dom';
import PaymentContainer from '../PaymentContainer/PaymentContainer';
import ErrorReport from '../ErrorReport/ErrorReport';
import LoyaltyPoints from '../LoyaltyPoints/LoyaltyPoints';
import MyRecharges from '../MyRecharges/MyRecharges';
import PersonalInformation from '../PersonalInformation/PersonalInformation';
import RequireAuth from '../RequireAuth/RequireAuth';
import AdminStations from '../Admin/AdminStations/AdminStations';
import AdminSpots from '../Admin/AdminSpots/AdminSpots';
import AdminUsers from '../Admin/AdminUsers/AdminUsers';
import AdminComments from '../Admin/AdminComments/AdminComments';
import AdminStationDetail from '../Admin/AdminStationDetail/AdminStationDetail';

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
      }/>
      <Route path="/estaciones-detalle/:id" element={
        <RequireAuth adminAccess>
          <AdminStationDetail/>
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