import Div100vh from 'react-div-100vh'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'

function App() {
  return (
    <Div100vh className='App'>
      <Router>
        <RouteHandler />
      </Router>
    </Div100vh>
  )
}

export default App
