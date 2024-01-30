import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './about/About'
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
        element={<Main />}
      />
      <Route
        path='/about'
        element={<About />}
      />
      <Route
        path='/projects'
        element={<Projects />}
      />
      <Route
        path='/contact'
        element={<Contact />}
      />
    </Routes>
  )
}

export default RouteHandler
