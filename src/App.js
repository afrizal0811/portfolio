import { BrowserRouter as Router } from 'react-router-dom'
import AnimatedHandler from './AnimatedHandler'
import './App.css'
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
