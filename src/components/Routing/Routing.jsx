// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import User from '../../pages/User/User'


const Routing = () => {
  return (
    <Routes>
      <Route path="/user" element={<User/>}/>
        {/* <Route path="/" element={<Inicio/>}></Route>
        <Route path="/login" element={<Mapa/>}></Route>
        <Route path="/login" element={<SobreNosotros/>}></Route>
        <Route path="/login" element={<Contacto/>}></Route>

        <Route path="/login" element={<Registrarse/>}></Route>        
        <Route path="/login" element={<Login/>}></Route> */}
    </Routes>
  )
}

export default Routing