import { BrowserRouter as Router } from 'react-router-dom'
import { AnimatedPresence } from './AnimatedHandler'
import './App.css'
function App() {
  return (
    <div className='App'>
      <Router>
        <AnimatedPresence />
      </Router>
    </div>
  )
}

export default App
