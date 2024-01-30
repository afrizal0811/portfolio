import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import AnimatedHandler from './AnimatedHandler'
function App() {
  return (
    <div className='App'>
      <Router>
        <AnimatedHandler />
      </Router>
    </div>
  )
}

export default App
