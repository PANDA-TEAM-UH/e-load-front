import { Route, Routes } from 'react-router-dom'
import Map from '../../pages/Map/Map'
import Register from '../Register/Register'
import ContactForm from '../ContactForm/ContactForm'
import User from '../../pages/User/User'

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Map />}></Route>
			<Route path="/registro" element={<Register />} />
			<Route path="/contacto" element={<ContactForm />} />
			<Route path="/usuario/*" element={<User />} />
		</Routes>
	)
}

export default Routing