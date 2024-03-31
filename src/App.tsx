import { Provider } from 'react-redux'
import './App.css'
import { Navbar } from './components'

import store from './redux/store'
import { LayoutContainer } from './styled-components'
import Home from './pages/Home/Home'


function App() {
  return (
    <Provider store={store}>
     <Navbar/>
     <LayoutContainer>
         <Home />
     </LayoutContainer>
    </Provider>
  )
}

export default App
