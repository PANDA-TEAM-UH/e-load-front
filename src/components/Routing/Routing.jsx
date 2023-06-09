import { Route, Routes } from 'react-router-dom'
import User from '../../pages/User/User'
import Map from '../../pages/Map/Map'
import PaymentContainer from '../PaymentContainer/PaymentContainer'
import Register from '../Register/Register'
import ErrorReport from '../ErrorReport/ErrorReport'
import LoyaltyPoints from '../LoyaltyPoints/LoyaltyPoints'
import MyRecharges from '../MyRecharges/MyRecharges'
import ContactForm from '../ContactForm/ContactForm'


const Routing = () => {
	return (
		<Routes>
			{/* ROUTING MAIN */}
			<Route path="/" element={<Map />}></Route>
			<Route path="/registro" element={<Register />} />
			<Route path="/contacto" element={<ContactForm />} />
      
			{/* ROUTING USERS SIDEBAR*/}
			<Route path="/usuario" element={<User />} />
			<Route path="/usuario/metodos-de-pago" element={<PaymentContainer />} />
			<Route path="/usuario/mis-recargas" element={<MyRecharges />} />
			<Route path="/usuario/mis-puntos" element={<LoyaltyPoints />} />
			<Route path="/usuario/reportar-error" element={<ErrorReport />} />
		</Routes>
	)
  
}

export default Routing