import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
   
    defaultColor: '#010f20',
    secondaryColor: '#4be62e',
    whiteColor: '  #ffffff',
    blackColor: '#000000',
    grayColor: '#383838',
    lightColor: '#D3D3D3',
  
}

const theme = extendTheme({colors})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </Router>
)
