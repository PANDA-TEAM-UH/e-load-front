import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Routing from './components/Routing/Routing'
import { checkSession } from './redux/users/users.actions'

function App() {
  useEffect(() => {
    checkSession();
  }, []);
  return (
    <>
      <Header/>
      <Routing/>
      <Footer/>
    </>
  )
}

export default App
