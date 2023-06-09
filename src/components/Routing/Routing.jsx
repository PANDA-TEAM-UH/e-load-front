import { Route, Routes } from 'react-router-dom'
import Map from '../../pages/Map/Map'
import Register from '../../pages/Register/Register'
import ContactForm from '../ContactForm/ContactForm'
import User from '../../pages/User/User'
import Home from '../../pages/Home/Home'

const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mapa" element={<Map />} />
			<Route path="/registro" element={<Register />} />
			<Route path="/contacto" element={<ContactForm />} />
			<Route path="/usuario/*" element={<User />} />
		</Routes>
	)
}

export default Routing