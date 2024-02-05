import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'
function App() {
  return (
    <div className='App'>
      <Router>
        <RouteHandler />
      </Router>
    </div>
  )
}

export default App
