import { Route, Routes } from 'react-router-dom'
import PaymentContainer from '../PaymentContainer/PaymentContainer'
import ErrorReport from '../ErrorReport/ErrorReport'
import LoyaltyPoints from '../LoyaltyPoints/LoyaltyPoints'
import MyRecharges from '../MyRecharges/MyRecharges'
import PersonalInformation from '../PersonalInformation/PersonalInformation'

const RoutingUser = () => {
    return (
        <Routes>
            <Route path="/usuario/informacion-personal" element={<PersonalInformation />} />
            <Route path="/usuario/metodos-de-pago" element={<PaymentContainer />} />
            <Route path="/usuario/mis-recargas" element={<MyRecharges />} />
            <Route path="/usuario/mis-puntos" element={<LoyaltyPoints />} />
            <Route path="/usuario/reportar-error" element={<ErrorReport />} />
        </Routes>
    )
}

export default RoutingUser
