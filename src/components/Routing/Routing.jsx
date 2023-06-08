// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../../pages/User/User'
import Map from '../../pages/Map/Map'
import PaymentContainer from '../PaymentContainer/PaymentContainer'



const Routing = () => {
  return (
    <Routes>
      <Route path="/user" element={<User/>}/>
        {/* <Route path="/" element={<Inicio/>}></Route> */}
        <Route path="/" element={<Map/>}></Route>
        <Route path="/payment" element={<PaymentContainer />} />
        {/* <Route path="/login" element={<SobreNosotros/>}></Route>
        <Route path="/login" element={<Contacto/>}></Route>

        <Route path="/login" element={<Registrarse/>}></Route>        
        <Route path="/login" element={<Login/>}></Route> */}
    </Routes>
  )
}

export default Routing