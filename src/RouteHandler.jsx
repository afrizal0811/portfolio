import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './header/Header'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Header />}
      />
    </Routes>
  )
}

export default RouteHandler
