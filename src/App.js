import { ToastContainer } from 'react-custom-alert'
import 'react-custom-alert/dist/index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <div className='App'>
      <ToastContainer floatingTime={500} />
      <Router>
        <RouteHandler />
      </Router>
    </div>
  )
}

export default App
