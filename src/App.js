import { ToastContainer } from 'react-custom-alert'
import 'react-custom-alert/dist/index.css'
import Div100vh from 'react-div-100vh'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <Div100vh className='App'>
      <ToastContainer floatingTime={1000} />
      <Router>
        <RouteHandler />
      </Router>
    </Div100vh>
  )
}

export default App
