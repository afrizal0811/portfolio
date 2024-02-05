import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './about/About'
import { StyledMenu } from './AnimatedHandler'
import Contact from './contact/Contact'
import Main from './main/Main'
import Projects from './projects/Projects'
const RouteHandler = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait' initial={false} >
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path='/'
          element={StyledMenu(<Main />)}
        />
        <Route
          path='/about'
          element={StyledMenu(<About />)}
        />
        <Route
          path='/projects'
          element={StyledMenu(<Projects />)}
        />
        <Route
          path='/contact'
          element={StyledMenu(<Contact />)}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default RouteHandler
