import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { StyledMenu } from './AnimatedHandler'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Main from './pages/main/Main'
import Projects from './pages/projects/Projects'

const RouteHandler = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <AnimatePresence mode='wait'>
      <Routes
        location={location}
        key={pathname}
      >
        <Route
          path='/'
          element={StyledMenu(<Main pathname={pathname} />)}
        />
        <Route
          path='/about'
          element={StyledMenu(<About pathname={pathname} />)}
        />
        <Route
          path='/projects'
          element={StyledMenu(<Projects pathname={pathname} />)}
        />
        <Route
          path='/contact'
          element={StyledMenu(<Contact pathname={pathname} />)}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </AnimatePresence>
  )
}

export default RouteHandler
