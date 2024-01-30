import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './about/About'
import { StyledBackground } from './AnimatedHandler'
import Contact from './contact/Contact'
import Main from './main/Main'
import Projects from './projects/Projects'
const RouteHandler = () => {
  const location = useLocation()

  return (
    <Routes
      location={location}
      key={location.pathname}
    >
      <Route
        path='/'
        element={StyledBackground(<Main />)}
      />
      <Route
        path='/about'
        element={StyledBackground(<About />)}
      />
      <Route
        path='/projects'
        element={StyledBackground(<Projects />)}
      />
      <Route
        path='/contact'
        element={StyledBackground(<Contact />)}
      />
    </Routes>
  )
}

export default RouteHandler
