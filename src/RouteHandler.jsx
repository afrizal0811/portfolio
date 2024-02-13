import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import About from './about/About'
import { StyledMenu } from './AnimatedHandler'
import Contact from './contact/Contact'
import Main from './main/Main'
import Projects from './projects/Projects'
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
