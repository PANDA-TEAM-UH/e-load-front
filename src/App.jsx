import './App.css'
// import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Routing from './components/Routing/Routing'

function App() {

  return (
    <>
      <Header/>
      <Routing/>
      {/* <About/>  ESTO NO DEBE IR AQUÍ (KIKO)     */}
      <Footer/>
    </>
  )
}

export default App
